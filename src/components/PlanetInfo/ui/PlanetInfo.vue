<script setup lang="ts">
  import PlanetInfoID from "./PlanetInfoID.vue";
  import PlanetInfoTitle from "./PlanetInfoTitle.vue";
  import PlanetInfoList from "./PlanetInfoList.vue";
  import PlanetInfoDescription from "./PlanetInfoDescription.vue";
  const planetStore = usePlanetStore();
</script>

<template>
  <section class="overflow-hidden">
    <PlanetInfoID />
    <PlanetInfoTitle />
    <div
      :class="[
        'line mt-8 w-full transition-all ease-in-out',
        { '-translate-x-full delay-300': planetStore.isChanged },
      ]"
    ></div>
    <PlanetInfoList class="mt-4" />
    <PlanetInfoDescription />
    <div
      :class="[
        'line mb-1 w-full transition-all ease-in-out',
        { 'translate-x-full delay-300': planetStore.isChanged },
      ]"
    ></div>
  </section>
</template>
