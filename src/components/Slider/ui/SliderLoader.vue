<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <div class="absolute -top-10 right-0 z-10 rounded-xl border border-accent px-4 py-3">
    <p v-if="planetStore.isChanged" class="center flex items-center justify-center gap-2 text-sm">
      {{ $t("switching") }}
      <Icon
        name="mdi:planet"
        class="animate-spin text-xl text-primary"
        :style="{ 'animation-duration': `${planetStore.planetReturnStateDelay + 300}ms` }"
      />
    </p>

    <p v-else class="center flex items-center justify-center gap-2 text-sm">
      {{ $t("complete") }}
      <Icon name="icon-park-solid:correct" class="scale-100 text-xl text-primary" />
    </p>
  </div>
</template>
