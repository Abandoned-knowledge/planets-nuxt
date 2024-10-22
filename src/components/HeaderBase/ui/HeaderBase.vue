<script setup lang="ts">
  const { locale, setLocale } = useI18n();
  const currentLocale = ref(locale.value);

  watch(currentLocale, (newValue) => setLocale(newValue));
</script>

<template>
  <header class="container mt-10 flex justify-center">
    <select v-model="currentLocale" class="bg-transparent">
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  </header>
</template>

<style lang="css" scoped>
  select option {
    @apply text-surface;
  }
</style>
