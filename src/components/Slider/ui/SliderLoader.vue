<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <div class="absolute right-10 top-10 z-10 rounded-xl border border-accent p-4">
    <p v-if="planetStore.isChanged" class="center flex items-center justify-center gap-2">
      {{ $t("switching") }}
      <Icon
        name="mdi:planet"
        class="animate-spin text-2xl text-primary"
        :style="{ 'animation-duration': `${planetStore.planetReturnStateDelay + 300}ms` }"
      />
    </p>

    <p v-else class="center flex items-center justify-center gap-2">
      {{ $t("complete") }}
      <Icon name="icon-park-solid:correct" class="scale-100 text-2xl text-primary" />
    </p>
  </div>
</template>
