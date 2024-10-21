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
    @apply bg-primary relative flex aspect-square w-full items-center justify-center overflow-hidden;
    .frame__inner {
      @apply bg-surface z-10 aspect-square w-[99%] overflow-hidden;
    }
    img {
      @apply rounded-full p-2;
    }
    &::after,
    &::before {
      content: "";
      @apply bg-surface absolute h-[70%] w-full;
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
