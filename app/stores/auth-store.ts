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

  // Awaits a fresh session check instead of reading the reactive `session` ref directly.
  // Needed in middleware: on a hard refresh the store is newly created, and `session`'s
  // background fetch hasn't resolved yet, so `isAuthenticated` would still read stale/initial data.
  async function fetchIsAuthenticated(): Promise<boolean> {
    const { data } = await authClient.getSession();
    return (data?.user ?? null) !== null;
  }

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

  async function loginGithub() {
    loading.value = true;

    // Causes a redirrect to the GitHub OAuth flow, which will redirect back to the callback URL on success or error callback URL on failure.
    // We don't need any return data or neverthrow handling here, as the user will be redirected away from the page no matter what happens.
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/auth/error",
    });

    // which means technically this is unreachable but still seems like good form
    loading.value = false;
  }

  return {
    loading,
    authError,
    isAuthenticated,
    user,
    fetchIsAuthenticated,
    loginAnon,
    loginGithub,
  };
});
