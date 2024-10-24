<script setup lang="ts">
  import HeaderBaseLangSwitcher from "./HeaderBaseLangSwitcher.vue";
  import HeaderBaseThemeSwitcher from "./HeaderBaseThemeSwitcher.vue";
</script>

<template>
  <header class="container mt-10 flex justify-center gap-10">
    <HeaderBaseLangSwitcher />
    <HeaderBaseThemeSwitcher />
  </header>
</template>

<style lang="css" scoped></style>
