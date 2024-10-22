<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <div class="frame">
    <div class="frame__inner">
      <img :src="`/img/${planetStore.planet.name.en}.png`" :alt="planetStore.planet.name.en" />
    </div>
  </div>
</template>

<style lang="css" scoped>
  .frame {
    @apply relative inline-flex aspect-square max-h-[400px] min-w-[400px] items-center justify-center overflow-hidden bg-primary;
    .frame__inner {
      @apply z-10 aspect-square w-[99%] overflow-hidden bg-surface p-10;
    }

    &::after,
    &::before {
      @apply absolute bg-surface content-[""];
    }

    &::after {
      @apply h-[70%] w-full;
    }

    &::before {
      @apply h-full w-[70%];
    }
  }

  .animation-scale {
    /* animation: scale 0.3s forwards ease-in-out; */
  }

  @keyframes scale {
    0% {
      scale: 1;
    }
    100% {
      scale: 0;
    }
  }
</style>
