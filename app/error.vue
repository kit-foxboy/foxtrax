<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const errorStatus = props.error?.status || "Unknown";
const errorMessage = props.error?.message || "An unexpected error occurred and been logged";

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-4">
    <div role="alert" class="alert alert-error min-w-50 text-center">
      <span class="font-bold">Error {{ errorStatus }}: {{ errorMessage }}</span>
    </div>
    <p class="text-sm">
      Please try again. If the problem persists, contact support <a href="mailto:admin@vulpineinteractive.com?subject=Foxtrax%20Support" class="link link-primary">here</a>.
    </p>
    <button class="btn btn-primary" @click="handleError">
      Head Back Home
      <Icon name="streamline-plump:triangle-arrow-turn-down-left-large-remix" size="32" />
    </button>
  </div>
</template>
