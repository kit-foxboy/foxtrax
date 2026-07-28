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
      <AppThemeToggle />
      <button class="btn btn-square btn-sm btn-primary sm:btn-md sm:w-auto sm:px-4" aria-label="Login coming soon" title="Login coming soon">
        <span class="hidden sm:inline">Login</span>
        <Icon name="streamline-plump:login-1" size="18" />
      </button>
    </div>
  </div>
</template>
