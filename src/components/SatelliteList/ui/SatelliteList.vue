<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <dialog
    class="h-[350px] w-[200px] overflow-y-scroll rounded-xl border border-accent bg-surface p-4 text-center backdrop:bg-[#000] backdrop:opacity-50"
    id="satellite-list"
  >
    <ul class="text-primary">
      <li v-for="item in planetStore.getSatellites">
        {{ item }}
      </li>
    </ul>
  </dialog>
</template>
