<script setup lang="ts"></script>

<template>
  <section>
    <p class="font-title text-xl">04</p>
    <div class="flex h-fit items-center gap-4">
      <h1 class="font-title text-6xl">MARS</h1>
      <div class="flex h-10 w-full flex-col justify-between">
        <hr v-for="_ in 4" class="w-full bg-primary text-primary" />
      </div>
    </div>
    <div class="line mt-8"></div>
    <PlanetInfoList class="mt-4" />

    <p class="mt-4 text-sm">
      Марс – седьмая по размеру планета в Солнечной системе. Температура на поверхности Марса
      колеблется в пределах от -153 до +35°C. Радиус Марса составляет 3389 километров (53% радиуса
      Земли). Площадь поверхности Марса составляет 144,37 миллиона квадратных километров (28,3%
      поверхности Земли).
    </p>

    <div class="line mt-4"></div>
  </section>
</template>
