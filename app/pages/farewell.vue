<script setup lang="ts">
import { APP_URL } from "~/utils/settings";

const shareUrl = APP_URL;
const shareText = "Check out FoxTrax! 🦊";

const socials = [
  {
    name: "Share on Bluesky",
    icon: "tabler:brand-bluesky",
    to: `https://bsky.app/intent/compose?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
  },
  {
    name: "Share on Twitter (no I will not call it X)",
    icon: "tabler:brand-twitter",
    to: `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
  },
  {
    name: "Share on Mastodon",
    icon: "tabler:brand-mastodon",
    to: `https://mastodonshare.com/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
  },
];

const links = [
  {
    name: "GitHub",
    description: "Follow my code and dev updates",
    icon: "tabler:brand-github",
    to: "https://github.com/kit-foxboy",
  },
  {
    name: "Ko-fi",
    description: "Support development with a donation",
    icon: "streamline-plump:coffee-mug",
    to: "https://ko-fi.com/kitkabbit4209",
  },
];
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-8 sm:h-full sm:min-h-0 sm:py-6">
    <div class="w-full max-w-2xl text-center space-y-6">
      <div class="space-y-3">
        <span
          role="img"
          aria-label="Kit Farewell"
          class="mx-auto block h-24 w-24 bg-secondary sm:h-28 sm:w-28"
          style="mask: url('/images/fox-pounce.svg') center / contain no-repeat; -webkit-mask: url('/images/fox-pounce.svg') center / contain no-repeat;"
        />
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight">
          Farewell!
        </h1>
        <p class="text-lg text-(--ui-text-muted)">
          You've been logged out safely. Thanks for using FoxTrax!
        </p>
      </div>

      <div class="space-y-3">
        <h2 class="text-xl font-semibold">
          Enjoying FoxTrax and want to compare travels with your friends? Spread the word!
        </h2>
        <p class="text-(--ui-text-muted)">
          Sharing with your friends is the biggest way you can help this project grow.
        </p>
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <NuxtLink
            v-for="social in socials"
            :key="social.name"
            :to="social.to"
            :aria-label="`${social.name} (opens in a new tab)`"
            target="_blank"
            class="btn btn-primary w-full justify-start gap-3 sm:w-auto sm:justify-center"
            rel="noopener"
            color="neutral"
            variant="outline"
            size="lg"
          >
            <Icon :name="social.icon" size="24" aria-hidden="true" />
            <span class="text-left sm:sr-only">
              {{ social.name }}
            </span>
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 text-left">
        <div
          v-for="link in links"
          :key="link.name"
          class="card bg-base-100 shadow-sm flex-wrap"
        >
          <div class="card-body flex items-start gap-3 p-4">
            <Icon
              :name="link.icon"
              size="32"
              aria-hidden="true"
            />
            <div class="card-actions">
              <NuxtLink
                :to="link.to"
                target="_blank"
                rel="noopener"
                variant="link"
                class="link"
                trailing-icon="i-lucide-arrow-up-right"
                :aria-label="`Visit ${link.name} (opens in a new tab)`"
              >
                Visit {{ link.name }}
              </NuxtLink>
              <p class="text-sm">
                {{ link.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
