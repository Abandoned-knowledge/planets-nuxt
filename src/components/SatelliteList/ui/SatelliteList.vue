<script setup lang="ts">
  const planetStore = usePlanetStore();

  const closeDialog = () => {
    const dialog = document.getElementById("satellite-list") as HTMLDialogElement;
    dialog.close();
  };
</script>

<template>
  <dialog
    class="min-w-[200px] rounded-xl border border-accent bg-surface p-8 text-center backdrop:bg-[#000] backdrop:opacity-50"
    id="satellite-list"
  >
    <ul class="max-h-[250px] overflow-y-scroll text-primary">
      <li v-for="item in planetStore.getSatellites">
        {{ item }}
      </li>
    </ul>

    <button @click="closeDialog" class="button mt-7">{{ $t("actions.close") }}</button>
  </dialog>
</template>

<style lang="css" scoped>
  #satellite-list ul {
    scrollbar-width: none;
  }
</style>
