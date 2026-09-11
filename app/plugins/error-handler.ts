// plugin for handling Vue errors in Nuxt
// This plugin hooks into Vue's error handling within a Nuxt application.
// Doesn't do much yet other than log the errors to the console, but can be used for formatting or an error reporting system.
// Explicit redirects are unnecessary, since Nuxt will automatically handle routing to the error page if it's fatal.
// ...at least I think so. Still new to Nuxt lol
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("vue:error", (err) => {
    console.error("Vue error captured:", err);
  });
});
