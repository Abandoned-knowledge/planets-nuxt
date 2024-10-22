<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <div class="flex h-fit items-center gap-4 overflow-hidden">
    <h1
      :class="[
        'font-title text-6xl uppercase transition-all',
        { '-translate-x-full': planetStore.isChanged },
      ]"
    >
      {{ planetStore.getName }}
    </h1>
    <div
      :class="[
        'flex h-10 w-full flex-col justify-between transition-all',
        { 'translate-x-full': planetStore.isChanged },
      ]"
    >
      <hr v-for="_ in 4" class="w-full bg-primary text-primary" />
    </div>
  </div>
</template>
