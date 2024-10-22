<script setup lang="ts">
  import PlanetInfoID from "./PlanetInfoID.vue";
  import PlanetInfoTitle from "./PlanetInfoTitle.vue";
  import PlanetInfoList from "./PlanetInfoList.vue";
  import PlanetInfoDescription from "./PlanetInfoDescription.vue";
</script>

<template>
  <section>
    <PlanetInfoID />
    <PlanetInfoTitle />

    <div class="line mt-8"></div>
    <PlanetInfoList class="mt-4" />
    <PlanetInfoDescription />
    <div class="line mt-4"></div>
  </section>
</template>
