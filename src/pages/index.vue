<template>
  <div
    class="mt-10 flex min-h-[375px] flex-col items-center justify-center gap-8 md:flex-row md:gap-16 lg:min-h-[425px] xl:gap-32"
  >
    <PlanetFrame />
    <PlanetInfo />
  </div>
  <Slider class="order-first md:order-last" />

  <SatelliteList />
</template>
