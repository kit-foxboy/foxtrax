<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "An unknown authentication error occurred.";
const redirect = route.query.redirect || "/";
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-4">
    <div role="alert" class="alert alert-error min-w-50 text-center">
      <span class="font-bold">Oh no! {{ error }}</span>
    </div>
    <p class="text-sm">
      Please try again. If the problem persists, contact support <a href="mailto:admin@vulpineinteractive.com?subject=Foxtrax%20Support" class="link link-primary">here</a>.
    </p>
    <NuxtLink :to="redirect.toString()" class="btn btn-primary">
      Head Back
      <Icon name="streamline-plump:triangle-arrow-turn-down-left-large-remix" size="32" />
    </NuxtLink>
  </div>
</template>
