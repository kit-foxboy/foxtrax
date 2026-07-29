<script setup lang="ts">
const isOpen = useCookie("sidebar-is-open", { default: () => false });
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="sidebar-drawer" v-model="isOpen" type="checkbox" class="drawer-toggle">
    <div class="drawer-content">
      <div class="min-h-dvh sm:grid sm:grid-rows-[auto_minmax(20rem,1fr)_auto]">
        <AppNavbar />
        <main class="sm:min-h-0">
          <slot />
        </main>
        <AppFooter />
      </div>
    </div>
    <AppSidebar />
  </div>
</template>
