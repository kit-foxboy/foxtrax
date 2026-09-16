// Better-auth action handles never throw — failures land in `error.value` and would
// otherwise only ever be visible in devtools. Redirect to the shared error page instead.
// My assumption that failures can only happen during oauth was very unfounded
export function useAuthErrorRedirect(error: Ref<{ message: string } | null | undefined>, redirect = "/auth/login") {
  watch(error, (value) => {
    if (!value)
      return;
    navigateTo({ path: "/auth/error", query: { error: value.message, redirect } });
  });
}
