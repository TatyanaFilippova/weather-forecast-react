import React from "react";
import s from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import ThisDayItem from "./ThisDayItem";
import { useCustomSelector } from "../../../../hooks/store";
import { selectCurrentWeatherData } from "../../../../store/selectors";
import ThisDayItemSkeleton from "./ThisDayItemSkeleton";
import {
  getTempDay,
  precipitation,
  precipitationDetailed,
  pressure,
  wind,
  windCharacteristics,
} from "../../../../utilities/utilities";

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayInfo = () => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value:
        getTempDay(Math.ceil(weather.main.temp)) +
        " - ощущается как " +
        getTempDay(Math.ceil(weather.main.feels_like)),
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value:
        Math.ceil(weather.main.pressure) +
        " мм ртутного столба - " +
        pressure(weather.main.pressure),
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value:
        precipitation(weather.weather[0].main) +
        " - " +
        precipitationDetailed(weather.weather[0].description),
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value:
        Math.ceil(weather.wind.speed) +
        " м/с " +
        wind(weather.wind.deg) +
        " - " +
        windCharacteristics(Math.ceil(weather.wind.speed)),
    },
  ];
  const { isLoading } = useCustomSelector(selectCurrentWeatherData);
  return (
    <div className={s.this_day_info}>
      <div className={s.this_day_info_items}>
        {items.map((item: Item) => {
          return (
            <>
              {isLoading === false ? (
                <ThisDayItem item={item} key={item.icon_id} />
              ) : (
                <ThisDayItemSkeleton item={item} key={item.icon_id} />
              )}
            </>
          );
        })}
      </div>
      <img src={cloud} alt="облако" className={s.cloud_img} />
    </div>
  );
};

export default ThisDayInfo;
