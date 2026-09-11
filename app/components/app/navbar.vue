<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const session = useUserSession();
const user = session.user?.value;

function getUserInitials() {
  if (!user) {
    return "";
  }

  if (user.name.includes("Guest")) {
    return "Guest";
  }

  const names = user.name.split(" ");
  if (names.length === 1) {
    return user.name.charAt(0) + user.name.charAt(1);
  }
  const first = names[0]?.charAt(0) ?? "";
  const last = names[names.length - 1]?.charAt(0) ?? "";
  return first + last;
}

function navigateHome() {
  if (router.currentRoute.value.path !== "/") {
    router.push("/");
  }
}

function navigateLogin() {
  if (router.currentRoute.value.path !== "/auth/login") {
    router.push("/auth/login");
  }
}
</script>

<template>
  <div class="navbar gap-2 bg-neutral px-2 text-neutral-content sm:px-4">
    <div class="navbar-start min-w-0">
      <label for="sidebar-drawer" aria-label="toggle sidebar" class="btn btn-ghost btn-sm btn-square lg:hidden">
        <Icon class="is-drawer-open:text-accent" name="streamline-plump:line-arrow-expand-horizontal-remix" size="20" />
      </label>
      <button class="btn btn-sm btn-neutral gap-1 text-lg sm:btn-md sm:gap-2 sm:text-xl" @click="navigateHome">
        <Icon name="streamline-plump:pet-paw" size="24" />
        Foxtrax
        <span class="hidden sm:inline-flex">
          <Icon name="streamline-plump:pet-paw-solid" class="mt-2" size="24" />
        </span>
      </button>
    </div>
    <div class="navbar-end min-w-0 gap-2">
      <AppThemeToggle />
      <button v-if="!session.loggedIn" class="btn btn-square btn-sm btn-primary sm:btn-md sm:w-auto sm:px-4 max-sm:tooltip max-sm:tooltip-primary max-sm:tooltip-left" data-tip="Log In" aria-label="Login coming soon" title="Login coming soon" @click="navigateLogin">
        <span class="hidden sm:inline">Login</span>
        <Icon name="streamline-plump:log-solid" size="18" />
      </button>
      <div v-else class="dropdown dropdown-end">
        <div tabindex="0" class="btn btn-square btn-sm btn-ghost sm:btn-md sm:w-auto sm:px-4">
          <div v-if="user?.image" class="avatar">
            <div class="w-8 rounded-full">
              <NuxtImg
                :src="user?.image"
                :alt="user?.name"
                width="96"
                height="96"
              />
            </div>
          </div>
          {{ getUserInitials() }}
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box w-52 z-1 p-2 shadow-sm">
          <!-- <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li> -->
          <li v-if="user?.isAnonymous">
            <NuxtLink to="/auth/upgrade-account" class="btn btn-link">
              Upgrade Account
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/auth/logout" class="btn btn-link">
              Logout
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
