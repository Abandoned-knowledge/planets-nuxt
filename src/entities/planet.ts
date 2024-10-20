import planets from "~/components/model/planets";

export const usePlanetStore = defineStore("planet", () => {
  const { locale } = useI18n();
  const planet = ref<PlanetInfo>(planets[0]);

  const getDescription = computed(() =>
    locale.value == "ru" ? planet.value.description.ru : planet.value.description.en,
  );

  const getDayLength = computed(() => {
    const days = planet.value.day_length.days;
    const hours = planet.value.day_length.hours;
    const minutes = planet.value.day_length.minutes;
    let showingDays = getCorrectForm(days, locale.value == "ru" ? "ru" : "en", "day");
    let showingHours = getCorrectForm(hours, locale.value == "ru" ? "ru" : "en", "hour");
    let showingMinutes = getCorrectForm(minutes, locale.value == "ru" ? "ru" : "en", "minute");
    return `
    ${days !== 0 ? showingDays : ""} 
    ${hours !== 0 ? showingHours : ""} 
    ${minutes !== 0 ? showingMinutes : ""}
    `;
  });
  return { planet, getDayLength, getDescription };
});
