<template>
  <NuxtLayout>
    <!-- TODO: Add scrolling background images if I decide I like it better -->
    <div
      class="hero min-h-screen bg-cover bg-center sm:h-full sm:min-h-0"
      style="background-image: url('/images/hero-map.jpg')"
      data-fox-hero
    >
      <div class="hero-overlay" />
      <div data-fox-stage aria-hidden="true">
        <div data-fox-sprite />
      </div>
      <div class="hero-content -translate-y-8 px-6 text-center text-neutral-content sm:-translate-y-6 sm:px-10" data-fox-content>
        <div class="max-w-md">
          <h1 class="mb-5 text-4xl font-bold sm:text-5xl">
            Leave Your Pawprint!
          </h1>
          <p class="mb-5">
            Let the world know about your travels or view desired destinations from others. The world awaits what keeps your paws moving.
          </p>
          <button class="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
[data-fox-hero] {
  position: relative;
  overflow: hidden;
}

[data-fox-stage] {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
}

[data-fox-content] {
  position: relative;
  z-index: 3;
}

[data-fox-sprite] {
  --fox-frame-w: 20vw;
  --fox-frame-h: calc(var(--fox-frame-w) * 281 / 498);
  --fox-left: clamp(0.5rem, 3vw, 2rem);
  --fox-bottom: calc(var(--fox-frame-h) * -0.18);
  position: absolute;
  left: var(--fox-left);
  bottom: var(--fox-bottom);
  width: var(--fox-frame-w);
  height: var(--fox-frame-h);
  background-image: url("/images/fox-spritesheet-transp.webp");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: calc(var(--fox-frame-w) * 5) calc(var(--fox-frame-h) * 3);
  opacity: 0.94;
  filter: drop-shadow(0 8px 10px rgb(0 0 0 / 35%));
  image-rendering: smooth;
  will-change: background-position;
  animation: fox-sprite-frames 1s linear infinite;
}

@media (max-width: 1200px) {
  [data-fox-sprite] {
    --fox-frame-w: 25vw;
  }
}

@media (max-width: 768px) {
  [data-fox-sprite] {
    --fox-frame-w: 80vw;
  }
}

@media (max-width: 400px) {
  [data-fox-sprite] {
    --fox-frame-w: 100vw;
  }
}

@keyframes fox-sprite-frames {
  0%,
  7.692% {
    background-position: 0 0;
  }

  7.693%,
  15.384% {
    background-position: calc(var(--fox-frame-w) * -1) 0;
  }

  15.385%,
  23.076% {
    background-position: calc(var(--fox-frame-w) * -2) 0;
  }

  23.077%,
  30.768% {
    background-position: calc(var(--fox-frame-w) * -3) 0;
  }

  30.769%,
  38.46% {
    background-position: calc(var(--fox-frame-w) * -4) 0;
  }

  38.461%,
  46.152% {
    background-position: 0 calc(var(--fox-frame-h) * -1);
  }

  46.153%,
  53.844% {
    background-position: calc(var(--fox-frame-w) * -1) calc(var(--fox-frame-h) * -1);
  }

  53.845%,
  61.536% {
    background-position: calc(var(--fox-frame-w) * -2) calc(var(--fox-frame-h) * -1);
  }

  61.537%,
  69.228% {
    background-position: calc(var(--fox-frame-w) * -3) calc(var(--fox-frame-h) * -1);
  }

  69.229%,
  76.92% {
    background-position: calc(var(--fox-frame-w) * -4) calc(var(--fox-frame-h) * -1);
  }

  76.921%,
  84.612% {
    background-position: 0 calc(var(--fox-frame-h) * -2);
  }

  84.613%,
  92.304% {
    background-position: calc(var(--fox-frame-w) * -1) calc(var(--fox-frame-h) * -2);
  }

  92.305%,
  100% {
    background-position: calc(var(--fox-frame-w) * -2) calc(var(--fox-frame-h) * -2);
  }
}
</style>
