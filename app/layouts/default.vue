<script setup lang="ts">
import { useRouter } from "vue-router";

function navigateHome() {
  const router = useRouter();

  if (router.currentRoute.value.path !== "/") {
    router.push("/");
  }
}
</script>

<template>
  <div class="min-h-dvh sm:grid sm:grid-rows-[auto_minmax(20rem,1fr)_auto]">
    <div class="navbar gap-2 bg-neutral px-2 text-neutral-content sm:px-4">
      <div class="navbar-start min-w-0">
        <button class="btn btn-sm btn-neutral gap-1 text-lg sm:btn-md sm:gap-2 sm:text-xl" @click="navigateHome">
          <Icon name="streamline-plump:pet-paw" class="" size="24" />
          Foxtrax
          <span class="hidden sm:inline-flex">
            <Icon name="streamline-plump:pet-paw-solid" class="mt-2" size="24" />
          </span>
        </button>
      </div>
      <div class="navbar-end min-w-0 gap-2">
        <label class="flex cursor-pointer items-center gap-2 sm:mx-3">
          <span class="hidden sm:inline-flex">
            <Icon name="streamline-plump:sun-remix" size="20" />
          </span>
          <input type="checkbox" value="garden" class="theme-controller toggle toggle-sm sm:toggle-md">
          <span class="hidden sm:inline-flex">
            <Icon name="streamline-plump:moon-stars-remix" size="20" />
          </span>
        </label>
        <button class="btn btn-square btn-sm btn-primary disabled:opacity-50 sm:btn-md sm:w-auto sm:px-4" disabled aria-label="Login coming soon" title="Login coming soon">
          <span class="hidden sm:inline">Login</span>
          <Icon name="streamline-plump:login-1" size="18" />
        </button>
      </div>
    </div>
    <main class="sm:min-h-0">
      <slot />
    </main>
    <!-- TODO: Implement the footer as a seperate layout component if needed elsewhere -->
    <footer
      class="footer max-sm:footer-center gap-8 bg-base-200 p-6 text-base-content sm:footer-horizontal sm:gap-6 sm:px-8 sm:py-5"
    >
      <aside class="sm:self-center">
        <NuxtLink to="/" class="btn flex items-center gap-2 btn-ghost text-4xl">
          <Icon name="streamline-plump:pet-paw" class="-mt-2" size="48" />
          <p class="text-xl font-bold">
            Foxtrax
          </p>
          <Icon name="streamline-plump:pet-paw-solid" class="mt-2" size="48" />
        </NuxtLink>
        &copy; 2026 Vulpine Interactive. All rights reserved.
      </aside>
      <nav>
        <h6 class="footer-title">
          Services
        </h6>
        <a class="link link-hover">Full-Stack</a>
        <a class="link link-hover">Databases</a>
        <a class="link link-hover">Front-End Frameworks</a>
        <a class="link link-hover">APIs</a>
      </nav>
      <nav>
        <h6 class="footer-title">
          About
        </h6>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <!-- TODO: Add social media links with icons (Bluesky, Ko-fi, Fuck Twitter, Who even still uses facebook?, FurAffinity if I'm feeling bold enough to advertise being furry trash) -->
      </nav>
      <nav>
        <h6 class="footer-title">
          Legal
        </h6>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  </div>
</template>
