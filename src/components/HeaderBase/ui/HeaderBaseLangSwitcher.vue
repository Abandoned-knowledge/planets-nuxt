<script setup lang="ts">
  const { locale, setLocale } = useI18n();
  const currentLocale = ref(locale.value);

  const changeLang = () => setLocale(currentLocale.value);
</script>

<template>
  <select @change="changeLang" v-model="currentLocale" class="swither">
    <option value="en">En</option>
    <option value="ru">Ru</option>
  </select>
</template>
