<script setup lang="ts">
  import ArrowIcon from "~/shared/icons/ArrowIcon.vue";
</script>

<template>
  <div class="slider mt-8">
    <div class="slider__line"></div>
    <div class="slider__content">
      <ArrowIcon direction="left" />
      <p>hello fucker motherfucker</p>
      <ArrowIcon direction="right" />
    </div>
    <div class="slider__line"></div>
  </div>
</template>

<style lang="css" scoped>
  .slider {
    @apply flex flex-col gap-3;
    .slider__content {
      @apply flex justify-between py-5;
    }
    .slider__line {
      @apply relative flex h-[1px] w-full items-center bg-primary;
      &::after,
      &::before {
        content: "";
        @apply absolute aspect-square w-[9px] rounded-full border border-primary bg-surface;
      }

      &::before {
        @apply right-0;
      }
    }
  }
</style>
