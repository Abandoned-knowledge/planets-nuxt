<script setup lang="ts">
  import planetsList from "../model/planets";
  const planetsRef = ref<HTMLElement[]>([]);
  const planetStore = usePlanetStore();

  function handleClick(event: Event) {
    const target = event.target as HTMLElement;

    if (target.closest(".planet") && target.parentElement) {
      planetsRef.value.forEach((planet) => planet.classList.remove("planet-selected"));
      target.parentElement.classList.add("planet-selected");
    }
  }

  async function handlePlanetSwitch(obj: PlanetInfo) {
    planetStore.isChanged = true;
    setTimeout(() => (planetStore.planet = obj), 300);
  }
</script>

<template>
  <div @click="handleClick" class="slider mt-32 gap-5">
    <div
      v-for="item in planetsList"
      @click="handlePlanetSwitch(item)"
      ref="planetsRef"
      class="planet"
      :key="item.id"
    >
      <img :src="`/img/${item.name.en.toLowerCase()}.png`" :alt="item.name.en" />
    </div>
  </div>
</template>

<style scoped>
  .slider {
    @apply relative flex items-center justify-between;

    &::before {
      @apply absolute -z-10 h-[1px] w-full bg-primary content-[''];
    }
  }

  .planet {
    @apply relative flex aspect-square w-24 cursor-pointer justify-center rounded-full transition-all;

    &:hover {
      @apply scale-110;
    }
    &::after,
    &::before {
      content: "";
      @apply invisible absolute aspect-square w-3 border-b border-r border-primary opacity-0 transition-all;

      &:hover {
        @apply visible translate-y-0 opacity-100;
      }

      &.planet-selected {
        @apply visible w-5 translate-y-0 border-b-2 border-r-2 border-accent opacity-100;
      }
    }

    &.planet-selected {
      @apply scale-110;
    }

    &::after {
      @apply -top-8 -translate-y-10 rotate-45;
      &.planet-selected {
        @apply -top-10;
      }
    }
    &::before {
      @apply -bottom-8 translate-y-10 rotate-[225deg];
      &.planet-selected {
        @apply -bottom-10;
      }
    }
  }
</style>
