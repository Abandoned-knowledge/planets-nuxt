<script setup lang="ts"></script>

<template>
  <div class="frame animation-scale">
    <div class="frame__inner">
      <img src="https://img.pikbest.com/origin/09/29/10/93EpIkbEsTdJ4.png!sw800" alt="planet" />
    </div>
  </div>
</template>

<style lang="css" scoped>
  .frame {
    @apply relative flex aspect-square w-full items-center justify-center overflow-hidden bg-primary;
    .frame__inner {
      @apply z-10 aspect-square w-[99%] overflow-hidden bg-surface;
    }
    img {
      @apply rounded-full p-2;
    }
    &::after,
    &::before {
      content: "";
      @apply absolute h-[70%] w-full bg-surface;
    }

    &::before {
      @apply rotate-90;
    }
  }

  .animation-scale {
    /* animation: scale 0.3s forwards ease-in-out; */
  }

  @keyframes scale {
    0% {
      scale: 1;
    }
    100% {
      scale: 0;
    }
  }
</style>
