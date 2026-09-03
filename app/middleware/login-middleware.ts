export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const authStore = useAuthStore();

  // Await required as session store is created async on every refresh, so syncronous reads of `authStore.isAuthenticated` are stale and will always be false on a hard refresh.
  // I love Nuxt but this SSR and CSR mismatch issue is a pain in my fluffy ass.
  if (await authStore.fetchIsAuthenticated()) {
    return navigateTo("/dashboard");
  }
});
