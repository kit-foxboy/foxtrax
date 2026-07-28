<template>
  <div class="drawer-side is-drawer-close:overflow-visible">
    <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
    <label for="sidebar-drawer" aria-label="close sidebar" class="drawer-overlay" />

    <aside class="menu min-h-full bg-base-300 is-drawer-open:w-40 is-drawer-close:w-20">
      <ul class="flex flex-col mx-auto">
        <li class="p-1">
          <label for="sidebar-drawer" aria-label="toggle sidebar" class="btn btn-ghost btn-sm mx-auto mb-2">
            <Icon class="is-drawer-open:text-primary" name="streamline-plump:line-arrow-expand-horizontal-remix" size="24" />
          </label>
        </li>
        <li class="p-1">
          <NuxtLink to="/" class="is-drawer-close:tooltip is-drawer-close:tooltip-right tooltip-primary" data-tip="Home">
            <Icon name="streamline-plump:home-1-remix" size="24" />
            <span class="is-drawer-close:hidden">Home</span>
          </NuxtLink>
        </li>
        <li class="p-1">
          <NuxtLink to="/locations" class="is-drawer-close:tooltip is-drawer-close:tooltip-right tooltip-primary" data-tip="Locations">
            <Icon name="streamline-plump:map-fold-remix" size="24" />
            <span class="is-drawer-close:hidden">Locations</span>
          </NuxtLink>
        </li>
        <li class="p-1">
          <NuxtLink to="/locations/add" class="is-drawer-close:tooltip is-drawer-close:tooltip-right tooltip-primary" data-tip="Add Location">
            <Icon name="streamline-plump:map-location-star-pin-remix" size="24" />
            <span class="is-drawer-close:hidden">Add Location</span>
          </NuxtLink>
        </li>
        <li class="p-1 pt-5 mt-5 border-t-base-100 border-t-2">
          <NuxtLink to="/#" class="is-drawer-close:tooltip is-drawer-close:tooltip-right tooltip-primary" data-tip="Log Out">
            <Icon name="streamline-plump:log" size="24" />
            <span class="is-drawer-close:hidden">Log Out</span>
          </NuxtLink>
        </li>
      </ul>
    </aside>
  </div>
</template>
