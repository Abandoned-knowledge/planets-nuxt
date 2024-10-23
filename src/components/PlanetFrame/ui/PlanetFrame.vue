<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <div
    class="image-frame planet-frame-size"
    :class="{ 'image-frame_collapse': planetStore.isChanged }"
  >
    <img
      :src="`/img/${planetStore.planet.name.en}.png`"
      class="animation"
      :alt="planetStore.planet.name.en"
    />
  </div>
</template>

<style lang="css" scoped>
  .image-frame {
    @apply flex aspect-square items-center justify-center overflow-hidden border-b border-t border-transparent transition-all;

    &.image-frame_collapse {
      @apply h-0 max-h-0;
    }
    img {
      @apply relative flex aspect-square items-center justify-center p-10;
    }
  }

  .animation {
    animation: animation 8s ease-in-out infinite forwards;
  }

  @keyframes animation {
    0% {
      scale: 1;
    }
    25% {
      scale: 1.2;
    }
    50% {
      scale: 0.95;
    }
    75% {
      scale: 1.1;
    }

    100% {
      scale: 1;
    }
  }
</style>
