<template>
  <footer
    class="footer max-sm:footer-center gap-8 bg-base-200 p-6 text-base-content sm:footer-horizontal sm:gap-6 sm:px-8 sm:py-5"
  >
    <aside class="sm:self-center">
      <NuxtLink to="/" class="btn flex items-center gap-2 btn-ghost text-4xl">
        <Icon name="streamline-plump:pet-paw" class="-mt-2" size="48" />
        <p class="text-xl font-bold">
          Foxtrax
        </p>
        <Icon name="streamline-plump:pet-paw-solid" class="mt-2" size="48" />
      </NuxtLink>
      &copy; 2026 Vulpine Interactive. All rights reserved.
    </aside>
    <nav>
      <h6 class="footer-title">
        Services
      </h6>
      <NuxtLink to="#" class="link link-hover">
        Full-Stack
      </NuxtLink>
      <NuxtLink to="#" class="link link-hover">
        Databases
      </NuxtLink>
      <NuxtLink to="#" class="link link-hover">
        Front-End Frameworks
      </NuxtLink>
      <NuxtLink to="#" class="link link-hover">
        APIs
      </NuxtLink>
    </nav>
    <nav>
      <h6 class="footer-title">
        About
      </h6>
      <NuxtLink to="#" class="link link-hover">
        About us
      </NuxtLink>
      <NuxtLink to="#" class="link link-hover">
        Contact
      </NuxtLink>
      <!-- TODO: Add social media links with icons (Bluesky, Ko-fi, Fuck Twitter, Who even still uses facebook?, FurAffinity if I'm feeling bold enough to advertise being furry trash) -->
    </nav>
    <nav>
      <h6 class="footer-title">
        Legal
      </h6>
      <NuxtLink to="#" class="link link-hover">
        Terms of use
      </NuxtLink>
      <NuxtLink to="#" class="link link-hover">
        Privacy policy
      </NuxtLink>
      <NuxtLink to="#" class="link link-hover">
        Cookie policy
      </NuxtLink>
    </nav>
  </footer>
</template>
