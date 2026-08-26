<script lang="ts" setup>
const props = withDefaults(defineProps<{ method?: LoginMethodKey }>(), {
  method: "anonymous",
});

const authStore = useAuthStore();
const { goToDashboard } = useNavigation();

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

async function handleLogin() {
  const result = await activeMethod.value.login();
  if (result.isErr()) {
    console.error(result.error.message); // Replace with a proper user-facing error (toast or something)
    return;
  }
  await goToDashboard();
}
</script>

<template>
  <button class="btn btn-primary" :disabled="authStore.loading" @click="handleLogin">
    <Icon :name="activeMethod.icon" size="24" />
    {{ activeMethod.label }}
  </button>
</template>
