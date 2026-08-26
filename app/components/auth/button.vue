<script lang="ts" setup>
const props = withDefaults(defineProps<{ method?: LoginMethodKey }>(), {
  method: "anonymous",
});

const authStore = useAuthStore();

type LoginMethod = {
  login: () => void;
  icon: string;
  label: string;
};

type LoginMethodKey = keyof typeof methodMap;

const methodMap = {
  anonymous: {
    login: authStore.loginAnon,
    icon: "streamline-plump:theater-mask-solid",
    label: "Log in as guest",
  },
  github: {
    login: authStore.loginAnon, // Temporary placeholder for GitHub login
    icon: "tabler:brand-github",
    label: "Log in with GitHub",
  },
} satisfies Record<string, LoginMethod>;

const activeMethod = computed(() => methodMap[props.method]);

// Invoke the login method for the active authentication method
function handleLogin() {
  activeMethod.value.login();
}
</script>

<template>
  <button class="btn btn-primary" :disabled="authStore.loading" @click="handleLogin">
    <Icon :name="activeMethod.icon" size="24" />
    {{ activeMethod.label }}
  </button>
</template>
