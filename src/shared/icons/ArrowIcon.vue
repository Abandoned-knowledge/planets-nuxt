<script setup lang="ts">
  interface Props {
    direction: "right" | "left";
  }

  const { direction } = defineProps<Props>();

  const classObject = {
    animation_direction_right: direction == "right",
    animation_direction_left: direction == "left",
  };
</script>

<template>
  <div class="arrow" :class="classObject"></div>
</template>

<style lang="css" scoped>
  .arrow {
    @apply relative aspect-square w-7 cursor-pointer border-b border-r border-primary;

    &::before {
      @apply absolute bottom-[25%] right-[25%] aspect-square w-4 border-b border-r border-primary transition-all content-[''];
      animation:
        move_before 1s infinite ease-in-out paused,
        fade_color 1s infinite ease-in-out paused;
    }

    &:hover,
    &:hover::before {
      animation-play-state: running;
    }

    &.animation_direction_left,
    &.animation_direction_right {
      &:hover {
        animation-play-state: inherit;
      }
    }

    &.animation_direction_left {
      animation:
        move_arrow_left 1s infinite ease-in-out paused,
        fade_color 1s infinite ease-in-out paused;
      @apply rotate-[135deg];
    }
    &.animation_direction_right {
      animation:
        move_arrow_right 1s infinite ease-in-out paused,
        fade_color 1s infinite ease-in-out paused;
      @apply -rotate-45;
    }
  }

  @keyframes fade_color {
    0% {
      @apply border-primary;
    }
    50% {
      @apply border-accent;
    }
    100% {
      @apply border-primary;
    }
  }

  @keyframes move_before {
    0% {
      translate: 0%;
    }
    50% {
      translate: -30% -30%;
    }
    100% {
      translate: 0%;
    }
  }

  @keyframes move_arrow_right {
    0% {
      translate: 0%;
    }
    50% {
      translate: -15%;
    }
    100% {
      translate: 0%;
    }
  }

  @keyframes move_arrow_left {
    0% {
      translate: 0%;
    }
    50% {
      translate: 15%;
    }
    100% {
      translate: 0%;
    }
  }
</style>
