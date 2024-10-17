<script setup lang="ts">
  const { locale, setLocale } = useI18n();
  const currentLocale = ref(locale.value);

  watch(currentLocale, (newValue) => setLocale(newValue));
</script>

<template>
  <div>
    <div>
      {{ currentLocale }}
      <select v-model="currentLocale">
        <option value="en">en</option>
        <option value="ru">ru</option>
      </select>
      <h1>{{ $t("planets.mars") }}</h1>
      <p>{{ $t("welcome") }}</p>
    </div>
  </div>
</template>
