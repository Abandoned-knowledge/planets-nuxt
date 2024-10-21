<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <section>
    <p class="font-title text-xl">0{{ planetStore.planet.id }}</p>
    <div class="flex h-fit items-center gap-4">
      <h1 class="font-title text-6xl">{{ planetStore.planet.name.en }}</h1>
      <div class="flex h-10 w-full flex-col justify-between">
        <hr v-for="_ in 4" class="w-full bg-primary text-primary" />
      </div>
    </div>
    <div class="line mt-8"></div>
    <PlanetInfoList class="mt-4" />

    <p class="mt-4 text-sm">{{ planetStore.getDescription }}</p>

    <div class="line mt-4"></div>
  </section>
</template>
