<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <div class="image-frame" :class="{ 'image-frame_collapse': planetStore.isChanged }">
    <img :src="`/img/${planetStore.planet.name.en}.png`" :alt="planetStore.planet.name.en" />
  </div>
</template>

<style lang="css" scoped>
  .image-frame {
    @apply flex aspect-square h-[400px] max-h-[400px] w-[400px] min-w-[400px] items-center justify-center overflow-hidden border-b border-t border-transparent transition-all;

    &.image-frame_collapse {
      @apply h-0 max-h-0;
    }
    img {
      @apply relative flex aspect-square max-h-[400px] w-[400px] min-w-[400px] items-center justify-center p-10;
    }
  }
</style>
