<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <div class="overflow-hidden">
    <p
      :class="[
        'text-balance py-4 text-sm transition-all ease-in-out',
        { 'translate-y-full': planetStore.isChanged },
      ]"
    >
      {{ planetStore.getDescription }}
    </p>
  </div>
</template>
