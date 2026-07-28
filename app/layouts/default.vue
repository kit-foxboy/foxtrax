<template>
  <div class="min-h-dvh sm:grid sm:grid-rows-[auto_minmax(20rem,1fr)_auto]">
    <AppNavbar />
    <main class="sm:min-h-0">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
