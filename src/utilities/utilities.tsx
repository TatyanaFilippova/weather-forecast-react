//хар-ка давления

export const pressure = (weather: number) => {
  if (weather === 760) {
    return "нормальное";
  }
  if (weather < 760) {
    return "низкое";
  }
  if (weather > 760) {
    return "высокое";
  }
};

//хар-ка осадков

export const precipitation = (weather: string) => {
  if (weather === "Snow") {
    return "Снег";
  }
  if (weather === "Rain") {
    return "Дождь";
  }
  if (weather === "Clouds") {
    return "Облачно";
  }
  if (weather === "Clear") {
    return "Без осадков";
  }
  return "";
};

//хар-ка направления ветра

export const wind = (weather: number) => {
  if (weather === 0 || weather === 360) {
    return "северный";
  }

  if (weather === 90) {
    return "восточный";
  }
  if (weather === 180) {
    return "южный";
  }
  if (weather === 270) {
    return "западный";
  }
  if (weather > 0 && weather < 90) {
    return "северо-восточный";
  }
  if (weather > 90 && weather < 180) {
    return "юго-восточный";
  }
  if (weather > 180 && weather < 270) {
    return "юго-западный";
  }
  if (weather > 270 && weather < 360) {
    return "северо-западный";
  }
};

//хар-ка ветра

export const windCharacteristics = (weather: number) => {
  if (weather === 0 && weather < 1) {
    return "штиль";
  }
  if (weather >= 1 && weather <= 3) {
    return "очень слабый ветер";
  }
  if (weather >= 4 && weather <= 5) {
    return "лёгкий ветер";
  }
  if (weather >= 6 && weather <= 7) {
    return "умеренный ветер";
  }
  if (weather >= 8 && weather <= 9) {
    return "свежий ветер";
  }
  if (weather >= 10 && weather <= 11) {
    return "очень свежий ветер";
  }
  if (weather >= 12 && weather <= 14) {
    return "сильный ветер";
  }
  if (weather >= 15 && weather <= 16) {
    return "резкий ветер";
  }
  if (weather >= 17 && weather <= 19) {
    return "буря";
  }
};

//детальная хар-ка осадков

export const precipitationDetailed = (weather: string) => {
  if (weather === "light snow") {
    return "лёгкий снег";
  }
  if (weather === "light rain") {
    return "лёгкий дождь";
  }
  if (weather === "few clouds") {
    return "немного облачно";
  }
  if (weather === "broken clouds") {
    return "разорванные облака";
  }
  if (weather === "clear sky") {
    return "чистое небо";
  }
  if (weather === "overcast clouds") {
    return "затянутые облака";
  }
  if (weather === "rain and snow") {
    return "дождь и снег";
  }
  if (weather === "sky is clear") {
    return "безоблачно";
  }
  if (weather === "moderate rain") {
    return "умеренный дождь";
  }
  if (weather === "heavy intensity rain") {
    return "сильный дождь";
  }
  if (weather === "scattered clouds") {
    return "рассеянные облака";
  }
  if (weather === "snow") {
    return "снег";
  }

  return weather;
};

// знак температуры

export const getTempDay = (value: number) => {
  const temp = Math.ceil(value).toString() + "°";
  if (value > 0) {
    return "+" + temp;
  }
  return temp;
};

//месяц

export const dayOfTheMonth = (dt: number) => {
  const day = new Date(dt * 1000);
  const month = [
    "янв",
    "фев",
    "марта",
    "апр",
    "май",
    "июня",
    "июля",
    "авг",
    "сент",
    "окт",
    "нояб",
    "дек",
  ];
  return day.getDate() + " " + month[day.getMonth()];
};

//день недели

export const getDayOfTheWeek = (dt: number) => {
  const day = new Date(dt * 1000);
  let currentDate = Date.parse(new Date().toString());
  let days = Math.round((currentDate - Date.parse(day.toString())) / 86400000); //86400000 - ms в дне
  if (days === 0) {
    return "Сегодня";
  }
  if (days === -1) {
    return "Завтра";
  }
  const weeks = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return weeks[day.getDay()];
};
