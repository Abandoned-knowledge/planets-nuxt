<script setup lang="ts">
  import planetsList from "../model/planets";
  const planetsRef = ref<HTMLElement[]>([]);
  const planetStore = usePlanetStore();

  function handleClick(event: Event, obj: PlanetInfo) {
    if (!planetStore.isChanged) {
      addPlanetStyle(event.currentTarget as HTMLElement);
      switchPlanet(obj);
    }
  }

  const addPlanetStyle = (target: HTMLElement) => {
    planetsRef.value.forEach((planet) => planet.classList.remove("planet-selected"));
    target.classList.add("planet-selected");
  };

  const switchPlanet = (obj: PlanetInfo) => {
    planetStore.isChanged = true;
    setTimeout(() => (planetStore.planet = obj), planetStore.planetSliderDelay);
  };
</script>

<template>
  <!-- <SliderLoader /> -->
  <div :class="['slider mt-20 gap-5 lg:mt-24 xl:mt-32', $attrs.class]">
    <template v-for="item in planetsList" :key="item.id">
      <div
        @click="handleClick($event, item)"
        ref="planetsRef"
        :class="['planet', { '!w-28': item.name.en == 'Saturn' }]"
      >
        <img :src="`/img/${item.name.en.toLowerCase()}.png`" :alt="item.name.en" />
      </div>
    </template>
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
    @apply relative flex aspect-square w-20 cursor-pointer justify-center rounded-full transition-all duration-short;

    &:hover {
      @apply scale-110;
    }
    &::after,
    &::before {
      content: "";
      @apply invisible absolute aspect-square w-3 border-b border-r border-primary opacity-0 transition-all duration-short;

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
