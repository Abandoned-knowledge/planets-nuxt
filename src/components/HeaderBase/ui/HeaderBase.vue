<script setup lang="ts">
  import HeaderBaseLangSwitcher from "./HeaderBaseLangSwitcher.vue";
  import HeaderBaseThemeSwitcher from "./HeaderBaseThemeSwitcher.vue";
</script>

<template>
  <header class="container mt-10 grid grid-cols-[auto_auto] content-center gap-x-5 gap-y-7">
    <SliderLoader class="col-span-2 mx-auto w-fit" />
    <HeaderBaseLangSwitcher class="ml-auto w-fit" />
    <HeaderBaseThemeSwitcher class="mr-auto w-fit" />
  </header>
</template>

<style lang="css" scoped></style>
