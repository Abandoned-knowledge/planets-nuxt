<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <div class="overflow-hidden">
    <p
      ref="idContainer"
      :class="[
        'font-title text-xl transition-all',
        { '-translate-y-full delay-300': planetStore.isChanged },
      ]"
    >
      {{ planetStore.getID }}
    </p>
  </div>
</template>
