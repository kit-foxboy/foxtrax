import type { Result } from "neverthrow";

import { anonymousClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/vue";
import { errAsync, okAsync, ResultAsync } from "neverthrow";

const authClient = createAuthClient({
  plugins: [
    anonymousClient(),
  ],
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

  // Reactive better-auth session; kept internal because it holds non-serializable fns (refetch) that break SSR payload devalue. Expose only derived, serializable state.
  const session = authClient.useSession();
  const isAuthenticated = computed(() => (session.value.data?.user ?? null) !== null);
  const user = computed(() => session.value.data?.user ?? null);

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
    isAuthenticated,
    user,
    loginAnon,
  };
});
