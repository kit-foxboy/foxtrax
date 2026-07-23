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
  <div class="min-h-dvh overflow-y-auto sm:grid sm:h-dvh sm:grid-rows-[auto_minmax(0,1fr)_auto] sm:overflow-hidden">
    <div class="navbar bg-neutral text-neutral-content">
      <div class="navbar-start">
        <button class="btn btn-neutral text-xl" @click="navigateHome">
          <Icon name="streamline-plump:pet-paw" class="-mt-2" size="24" />
          Foxtrax
          <Icon name="streamline-plump:pet-paw-solid" class="mt-2" size="24" />
        </button>
      </div>
      <div class="navbar-end">
        <label class="flex cursor-pointer gap-2 mx-5">
          <Icon name="streamline-plump:sun-remix" size="20" />
          <input type="checkbox" value="garden" class="theme-controller toggle">
          <Icon name="streamline-plump:moon-stars-remix" size="20" />
        </label>
        <button class="btn btn-primary">
          Login
          <Icon name="streamline-plump:login-1" size="18" />
        </button>
      </div>
    </div>
    <main class="sm:min-h-0 sm:overflow-hidden">
      <slot />
    </main>
    <!-- TODO: Implement the footer as a seperate layout component if needed elsewhere -->
    <footer
      class="footer flex flex-col-reverse items-center gap-8 bg-base-200 p-6 text-center text-base-content *:place-items-center sm:flex-row sm:items-start sm:justify-between sm:p-10 sm:text-left sm:*:place-items-start"
    >
      <aside>
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
          Services (I don't work yet)
        </h6>
        <a class="link link-hover">Full-Stack Development</a>
        <a class="link link-hover">Database Design</a>
        <a class="link link-hover">Front-End Frameworks</a>
        <a class="link link-hover">API Integration</a>
      </nav>
      <nav>
        <h6 class="footer-title">
          About Vulpine Interactive (Me neither)
        </h6>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <!-- TODO: Add social media links with icons (Bluesky, Ko-fi, Fuck Twitter, Who even still uses facebook?, FurAffinity if I'm feeling bold enough to advertise being furry trash) -->
      </nav>
      <nav>
        <h6 class="footer-title">
          Legal (Also don't work yet)
        </h6>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  </div>
</template>
