<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <div class="overflow-hidden">
    <p
      :class="[
        'mt-4 text-sm transition-all ease-in-out',
        { 'translate-y-full': planetStore.isChanged },
      ]"
    >
      {{ planetStore.getDescription }}
    </p>
  </div>
</template>
