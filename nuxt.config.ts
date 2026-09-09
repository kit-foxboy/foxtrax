import tailwindcss from "@tailwindcss/vite";

import "./app/utils/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/better-auth",
  ],
  css: ["~/assets/css/main.css"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    dataValue: "theme",
  },
  auth: {
    redirects: {
      login: "/auth/login",
      guest: "/dashboard",
      authenticated: "/dashboard",
    },
  },
  routeRules: {
    "/dashboard/**": { auth: { only: "user", redirectTo: "/auth/login" } },
    "/auth/login": { auth: { only: "guest", redirectTo: "/dashboard" } },
  },
});
