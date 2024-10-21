type format = "day" | "hour" | "minute";
type lang = "en" | "ru";

export function getCorrectForm(number: number, lang: lang, format: format) {
  return lang == "ru" ? getCorrectFormRU(number, format) : getCorrectFormEN(number, format);
}

function getCorrectFormRU(number: number, format: format) {
  let defaultForm = "";
  if (format == "day") {
    defaultForm = "дней";
    if (number == 1 || number == 21 || number == 31) {
      defaultForm = "день";
    } else if ((number >= 2 && number <= 4) || (number >= 22 && number <= 24)) {
      defaultForm = "дня";
    } else {
      defaultForm = "дней";
    }
  } else if (format == "hour") {
    defaultForm = "часов";
    if (number == 1 || number == 21) {
      defaultForm = "час";
    } else if ((number >= 2 && number <= 4) || (number >= 22 && number <= 24)) {
      defaultForm = "часа";
    } else {
      defaultForm = "часов";
    }
  } else {
    defaultForm = "минут";
    if (number == 1 || number == 21 || number == 31 || number == 41 || number == 51) {
      defaultForm = "минута";
    } else if (
      (number >= 2 && number <= 4) ||
      (number >= 22 && number <= 24) ||
      (number >= 32 && number <= 34) ||
      (number >= 42 && number <= 44) ||
      (number >= 52 && number <= 54)
    ) {
      defaultForm = "минуты";
    } else {
      defaultForm = "минут";
    }
  }
  return `${number} ${defaultForm}`;
}

function getCorrectFormEN(number: number, format: format) {
  let defaultForm = "";
  if (format == "day") {
    defaultForm = number == 1 ? "day" : "days";
  } else if (format == "hour") {
    defaultForm = number == 1 ? "hour" : "hours";
  } else {
    defaultForm = number == 1 ? "minute" : "minutes";
  }
  return `${number} ${defaultForm}`;
}
