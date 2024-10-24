<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <div
    class="image-frame planet-frame-size"
    :class="{ 'collapse-x image-frame-collapse': planetStore.isChanged }"
  >
    <img
      :src="`/img/${planetStore.planet.name.en}.png`"
      class="animation"
      :alt="planetStore.planet.name.en"
    />
  </div>
</template>

<style lang="css" scoped>
  .planet-frame-size {
    @apply h-[300px] max-h-[300px] w-[300px] min-w-[300px] lg:h-[350px] lg:max-h-[350px] lg:w-[350px] lg:min-w-[350px] xl:h-[400px] xl:max-h-[400px] xl:w-[400px] xl:min-w-[400px];

    img {
      @apply max-h-[300px] w-[300px] min-w-[300px] lg:max-h-[350px] lg:w-[350px] lg:min-w-[350px] xl:max-h-[400px] xl:w-[400px] xl:min-w-[400px];
    }
  }

  .image-frame {
    @apply flex aspect-square items-center justify-center overflow-hidden border-b border-t border-transparent transition-all;

    &.image-frame-collapse {
      @apply max-md:w-0 max-md:min-w-0 md:h-0 md:max-h-0;
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
