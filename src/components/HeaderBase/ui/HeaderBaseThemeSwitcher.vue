<script setup lang="ts">
  const currentTheme = ref("dark");

  function setTheme(theme: string) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  const changeTheme = () => setTheme(currentTheme.value);

  function setDefaultTheme() {
    if (localStorage.getItem("theme") == "light") {
      setTheme("light");
      currentTheme.value = "light";
    } else {
      setTheme("dark");
      currentTheme.value = "dark";
    }
  }

  onMounted(() => setDefaultTheme());
</script>

<template>
  <select @change="changeTheme" v-model="currentTheme" class="swither">
    <option value="light">{{ $t("theme.light") }}</option>
    <option value="dark">{{ $t("theme.dark") }}</option>
  </select>
</template>

<style lang="scss" scoped></style>
