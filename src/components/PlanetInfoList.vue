<script setup lang="ts">
  const planetStore = usePlanetStore();
</script>

<template>
  <ul class="flex flex-col gap-1 text-sm">
    <li class="text-secondary">
      {{ $t("planet_info_list.radius.title") }}:
      <span class="text-primary">
        {{ planetStore.planet.radius.value }}
        {{ $t("planet_info_list.radius.unit_measure") }}
      </span>
    </li>

    <li class="text-secondary">
      {{ $t("planet_info_list.weight.title") }}:
      <span class="text-primary">
        {{ planetStore.planet.weight.value }}
        {{ $t("planet_info_list.weight.unit_measure") }}
      </span>
    </li>

    <li class="text-secondary">
      {{ $t("planet_info_list.distance.title") }}:
      <span class="text-primary">
        {{ planetStore.planet.distance }}
        {{ $t("planet_info_list.distance.unit_measure") }}
      </span>
    </li>

    <li class="text-secondary">
      Время оборота:
      <span class="text-primary">
        {{ planetStore.planet.rotation_period.days }}
        {{ planetStore.planet.rotation_period.hours }}
      </span>
    </li>

    <li class="text-secondary">
      {{ $t("planet_info_list.satellite_count") }}:
      <span class="text-primary">
        {{ planetStore.planet.satellite_count.count }}
      </span>
    </li>
    <li class="text-secondary">
      {{ $t("planet_info_list.day_length") }}:
      <span class="text-primary">{{ planetStore.getDayLength }}</span>
    </li>

    <li class="text-secondary">
      {{ $t("planet_info_list.temperature.title") }}:
      <span class="text-primary">
        {{ $t("planet_info_list.temperature.from") }}
        <span class="text-cold">
          {{ planetStore.planet.temperature.min }}
        </span>
        {{ $t("planet_info_list.temperature.to") }}
        <span class="text-hot">
          {{ planetStore.planet.temperature.max }}
        </span>
        °С
      </span>
    </li>
  </ul>
</template>
