import React, { useEffect, useState } from "react";
import s from "./ThisDay.module.scss";
import GlobalSwgSelector from "../../../../assets/icons/global/GlobalSwgSelector";
import { Weather } from "../../../../store/types/types";
import { precipitation } from "../ThisDayInfo/ThisDayInfo";

interface Props {
  weather: Weather;
  city?: string;
}

export const icon = (weather: string) => {
  if (weather === "Snow") {
    return "snow";
  }
  if (weather === "Rain") {
    return "rain";
  }
  if (weather === "Clouds") {
    return "cloudy";
  }
  return "sun";
};

const ThisDay = ({ weather, city }: Props) => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>{Math.ceil(weather.main.temp)}°</div>
          <div className={s.this_day_day_name}>Сегодня</div>
        </div>
        <GlobalSwgSelector id={icon(weather.weather[0].main)} />
      </div>

      <div className={s.bottom_block}>
        <div className={s.this_time}>
          Время:{" "}
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </div>
        <div className={s.this_city}>Город: {city}</div>
      </div>
    </div>
  );
};

export default ThisDay;
