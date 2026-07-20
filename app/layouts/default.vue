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
  <div class="flex min-h-screen flex-col">
    <div class="navbar bg-neutral text-neutral-content">
      <div class="navbar-start">
        <button class="btn btn-ghost text-xl" @click="navigateHome">
          <Icon name="streamline-plump:pet-paw" class="-mt-2" size="24" />
          Foxtrax
          <Icon name="streamline-plump:pet-paw-solid" class="mt-2" size="24" />
        </button>
      </div>
      <div class="navbar-end">
        <button class="btn btn-primary">
          Login <Icon name="streamline-plump:login-1" size="18" />
        </button>
      </div>
    </div>
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
