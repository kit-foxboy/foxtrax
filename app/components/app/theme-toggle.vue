<script setup lang="ts">
import { THEMES } from "~/config/themes";

const colorMode = useColorMode();

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
