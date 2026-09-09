<script lang="ts" setup>
const props = withDefaults(defineProps<{ method?: LoginMethodKey }>(), {
  method: "anonymous",
});

type LoginMethodKey = "anonymous" | "github";

const signInAnonymous = useSignIn("anonymous");
const signInSocial = useSignIn("social");

const methodMap = {
  anonymous: {
    execute: () => signInAnonymous.execute(),
    status: signInAnonymous.status,
    icon: "streamline-plump:theater-mask-solid",
    label: "Log in as guest",
  },
  github: {
    execute: () => signInSocial.execute({ provider: "github", errorCallbackURL: "/auth/error" }),
    status: signInSocial.status,
    icon: "tabler:brand-github",
    label: "Log in with GitHub",
  },
} as const;

const activeMethod = computed(() => methodMap[props.method]);
const isPending = computed(() => activeMethod.value.status.value === "pending");
</script>

<template>
  <button class="btn btn-primary" :disabled="isPending" @click="activeMethod.execute">
    <span v-if="isPending" class="loading loading-spinner loading-md" />
    <Icon v-else :name="activeMethod.icon" size="32" />
    {{ activeMethod.label }}
  </button>
</template>
