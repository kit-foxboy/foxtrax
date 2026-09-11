<script lang="ts" setup>
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const signUpEmail = useSignUp("email");
const isPending = computed(() => signUpEmail.status.value === "pending");
const passwordMismatch = computed(() => confirmPassword.value.length > 0 && password.value !== confirmPassword.value);

type NameAvailability = "idle" | "checking" | "available" | "taken" | "error";
const nameAvailability = ref<NameAvailability>("idle");
let nameCheckTimeout: ReturnType<typeof setTimeout> | undefined;
let latestCheckedName = "";

watch(name, (value) => {
  clearTimeout(nameCheckTimeout);
  const trimmed = value.trim();
  if (!trimmed) {
    nameAvailability.value = "idle";
    return;
  }
  nameAvailability.value = "checking";
  nameCheckTimeout = setTimeout(async () => {
    try {
      const { available } = await $fetch<{ available: boolean }>("/api/username-availability", { query: { name: trimmed } });
      // Ignore stale responses from a name the user has since changed.
      if (trimmed !== name.value.trim())
        return;
      latestCheckedName = trimmed;
      nameAvailability.value = available ? "available" : "taken";
    }
    catch {
      nameAvailability.value = "error";
    }
  }, 400);
});

const nameTaken = computed(() => nameAvailability.value === "taken" && latestCheckedName === name.value.trim());
const canSubmit = computed(() => !isPending.value && !passwordMismatch.value && nameAvailability.value !== "taken" && nameAvailability.value !== "checking");

function onSubmit() {
  if (!canSubmit.value)
    return;
  signUpEmail.execute({ name: name.value, email: email.value, password: password.value });
}
</script>

<template>
  <form class="justify-center card-actions flex flex-col gap-2 items-center" @submit.prevent="onSubmit">
    <label class="input" for="name" :class="{ 'input-error': nameTaken }">
      <span>Name</span>
      <input id="name" v-model="name" type="text" name="name" autocomplete="name" required>
      <span v-if="nameAvailability === 'checking'" class="loading loading-spinner loading-sm" />
      <Icon v-else-if="nameAvailability === 'available'" name="streamline-plump:user-protection-check" class="text-success" size="20" />
    </label>
    <p v-if="nameTaken" class="text-error text-sm">
      That name is already taken.
    </p>
    <label class="input" for="email">
      <span>Email</span>
      <input id="email" v-model="email" type="email" name="email" autocomplete="email" required>
    </label>
    <label class="input" for="password">
      <span>Password</span>
      <input id="password" v-model="password" type="password" name="password" autocomplete="new-password" required>
    </label>
    <label class="input" for="confirm-password" :class="{ 'input-error': passwordMismatch }">
      <span>Confirm Password</span>
      <input id="confirm-password" v-model="confirmPassword" type="password" name="confirm-password" autocomplete="new-password" required>
    </label>
    <p v-if="passwordMismatch" class="text-error text-sm">
      Passwords do not match.
    </p>
    <button type="submit" class="btn btn-primary" :disabled="!canSubmit">
      <span v-if="isPending" class="loading loading-spinner loading-md" />
      Sign Up
    </button>
  </form>
</template>
