<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-cover bg-center sm:h-full sm:min-h-0">
    <div class="card bg-base-300 card-xl min-h-90 shadow-sm">
      <div class="card-body">
        <h2 class="card-title mb-4 justify-center">
          Upgrade Account
        </h2>
        <p class="text-sm text-center">
          Add a persistent sign-in method to keep access to your account across devices.
        </p>
        <AuthSignUpForm />

        <div class="divider mx-auto">
          - OR -
        </div>

        <div class="justify-center card-actions">
          <AuthButton method="github" />
        </div>
      </div>
    </div>
  </div>
</template>
