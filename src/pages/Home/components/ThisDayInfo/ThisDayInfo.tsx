import React from "react";
import s from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import ThisDayItem from "./ThisDayItem";
import { useCustomSelector } from "../../../../hooks/store";
import { selectCurrentWeatherData } from "../../../../store/selectors";
import { Weather } from "../../../../store/types/types";

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const pressure = (weather: number) => {
  if (weather === 760) {
    return "нормальное"
  }
  if (weather < 760) {
    return "низкое"
  }
  if (weather > 760) {
    return "высокое"
  }
}

const precipitation = (weather: string) => {
  if (weather === "Snow") {
    return "Снег";
  }
  if (weather === "Rain") {
    return "Дождь";
  }
  if (weather === "Clouds") {
    return "Облачно";
  }
  return "";
};

const wind = (weather: number) => {
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

const windCharacteristics = (weather: number) => {
  console.log(weather);
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

const ThisDayInfo = () => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value:
        Math.ceil(weather.main.temp) +
        " - ощущается как " +
        Math.ceil(weather.main.feels_like) +
        "°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value:
        Math.ceil(weather.main.pressure) + " мм ртутного столба - " + pressure(weather.main.pressure),
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: precipitation(weather.weather[0].main),
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value:
        Math.ceil(weather.wind.speed) +
        " м/с " +
        wind(weather.wind.deg) +
        " - " +
        windCharacteristics( Math.ceil(weather.wind.speed)),
    },
  ];

  return (
    <div className={s.this_day_info}>
      <div className={s.this_day_info_items}>
        {items.map((item: Item) => {
          return <ThisDayItem item={item} key={item.icon_id} />;
        })}
      </div>
      <img src={cloud} alt="облако" className={s.cloud_img} />
    </div>
  );
};

export default ThisDayInfo;
