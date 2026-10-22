<script lang="ts" setup>
const client = useAuthClient();
const clientError = ref<unknown>(null);
onMounted(async () => {
  try {
    if (!client) {
      throw new Error("Auth client not available");
    }
    await client.signOut();
    navigateTo("/farewell");
  }
  catch (error) {
    clientError.value = error;
  }
});
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center">
    <span v-if="clientError">An error has occurred: {{ clientError }}</span>
    <span v-else class="loading loading-spinner loading-xl" />
  </div>
</template>
