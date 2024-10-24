<script setup lang="ts">
  import HeaderBaseLangSwitcher from "./HeaderBaseLangSwitcher.vue";
  import HeaderBaseThemeSwitcher from "./HeaderBaseThemeSwitcher.vue";
</script>

<template>
  <header class="container relative mt-10 flex justify-center gap-10">
    <HeaderBaseLangSwitcher />
    <HeaderBaseThemeSwitcher />
    <SliderLoader />
  </header>
</template>

<style lang="css" scoped></style>
