<script setup lang="ts">
import { THEMES } from "~/config/themes";

const colorMode = useColorMode();

// currently using import.meta.client to check if the script is running on the client side, since useColorMode() is not available on the server side. This is a workaround I may later be able
// to mitigate if I lazy load or use a different configuration for the color mode plugin. I'm worrying about SSR vs CSR efficiency later and will reevaluate then
if (import.meta.client && colorMode.preference === "system") {
  colorMode.preference = colorMode.value === "dark" ? THEMES.dark : THEMES.light;
}

const isDark = computed(() => colorMode.value === THEMES.dark);

function onToggle(event: Event) {
  const input = event.target as HTMLInputElement;
  colorMode.preference = input.checked ? THEMES.dark : THEMES.light;
}
</script>

<template>
  <ClientOnly>
    <label class="swap swap-rotate mx-4">
      <input :checked="isDark" type="checkbox" @change="onToggle">
      <icon name="streamline-plump:sun-remix" class="swap-off" size="24" />
      <icon name="streamline-plump:moon-stars-remix" class="swap-on" size="24" />
    </label>

    <template #fallback>
      <div class="mx-4 size-6" />
    </template>
  </ClientOnly>
</template>
