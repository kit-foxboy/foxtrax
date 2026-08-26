<script setup lang="ts">
const showLogin = ref(true);
const loginClass = computed(() => showLogin.value ? "btn-primary" : "btn-outline");
const signUpClass = computed(() => !showLogin.value ? "btn-primary" : "btn-outline");
function toggleLogin(show: boolean) {
  showLogin.value = show;
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-cover bg-center sm:h-full sm:min-h-0">
    <div class="card bg-base-300 card-xl min-h-90 shadow-sm">
      <div class="card-body">
        <h2 class="card-title mb-4">
          <div class="join m-auto">
            <button class="btn join-item" :class="loginClass" @click="toggleLogin(true)">
              Log In
            </button>
            <button class="btn join-item" :class="signUpClass" @click="toggleLogin(false)">
              Sign Up
            </button>
          </div>
        </h2>
        <p class="text-sm text-center">
          Choose how you want to log in or sign up.<br>
          A guest account can be upgraded to a full account later at any time.
        </p>
        <div class="justify-center card-actions">
          <AuthButton method="anonymous" />
          <AuthButton method="github" />
        </div>
      </div>
    </div>
  </div>
</template>
