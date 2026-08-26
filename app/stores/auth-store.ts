import type { Result } from "neverthrow";

import { createAuthClient } from "better-auth/client";
import { anonymousClient } from "better-auth/client/plugins";
import { errAsync, okAsync, ResultAsync } from "neverthrow";

const authClient = createAuthClient({
  plugins: [
    anonymousClient(),
  ],
  callbackURL: "/dashboard", // TODO: make this more dynamic if needed
});

class AuthError extends Error {
  authMethod: string;
  constructor(message: string, method: string) {
    super(message);
    this.name = "AuthError";
    this.authMethod = method;
  }
}

export const useAuthStore = defineStore("useAuthStore", () => {
  const loading = ref(false);
  const authError: Ref<AuthError | null> = ref(null);

  async function loginAnon(): Promise<Result<void, AuthError>> {
    loading.value = true;

    // Attempt anonymous login, handling both promise rejection and error as value response from better auth the same way
    const result = await ResultAsync.fromPromise(
      authClient.signIn.anonymous(),
      e => new AuthError((e as Error).message, "anonymous"),
    ).andThen(({ error }) =>
      error
        ? errAsync(new AuthError(error.message ?? "Sign-in failed", "anonymous"))
        : okAsync(undefined),
    );

    authError.value = result.isErr() ? result.error : null;

    loading.value = false;

    return result;
  }
  return {
    loading,
    authError,
    loginAnon,
  };
});
