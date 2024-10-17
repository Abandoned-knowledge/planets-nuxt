import en from "~/app/i18n/en.json";
import ru from "~/app/i18n/ru.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: en,
    ru: ru,
  },
}));
