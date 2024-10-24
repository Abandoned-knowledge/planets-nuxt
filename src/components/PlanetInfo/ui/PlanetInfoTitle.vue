<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <div class="flex h-fit items-center gap-4 overflow-hidden">
    <h1
      :class="[
        'text-title font-title uppercase transition-all',
        { '-translate-x-full': planetStore.isChanged },
      ]"
    >
      {{ planetStore.getName }}
    </h1>
    <div
      :class="[
        'flex h-6 w-full flex-col justify-between transition-all xl:h-10',
        { 'translate-x-full': planetStore.isChanged },
      ]"
    >
      <hr v-for="_ in 4" class="w-full bg-primary text-primary" />
    </div>
  </div>
</template>
