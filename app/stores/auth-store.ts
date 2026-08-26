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

  // Note: Don't expose the raw session object as a ref or computed property directly, there's some wacky serialization issues with SSR payloads
  const session = authClient.useSession();
  const isAuthenticated = computed(() => (session.value.data?.user ?? null) !== null);
  const user = computed(() => session.value.data?.user ?? null);

  const { goToDashboard } = useNavigation();

  async function loginAnon(): Promise<Result<void, AuthError>> {
    loading.value = true;

    // Attempt anonymous login and navigation, cast all errors as values and success as okAsync(undefined).
    // The store handles sessions, so no return data is needed.
    const result = await ResultAsync.fromPromise(
      authClient.signIn.anonymous(),
      e => new AuthError((e as Error).message, "anonymous"),
    )
      .andThen(({ error }) =>
        error
          ? errAsync(new AuthError(error.message ?? "Sign-in failed", "anonymous"))
          : okAsync(undefined),
      )
      .andThen(() =>
        ResultAsync.fromPromise(
          Promise.resolve(goToDashboard()),
          e => new AuthError((e as Error).message, "anonymous"),
        ),
      )
      .map(() => undefined);

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
