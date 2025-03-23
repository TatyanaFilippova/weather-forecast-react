import React, { useEffect } from "react";
import s from "./Days.module.scss";
import Card from "./Card";
import Tabs from "./Tabs";
import { fetchCurrentWeather } from "../../../../store/thunks/fethCurrentWeather";
import { useCustomDispatch, useCustomSelector } from "../../../../hooks/store";
import { fetchForecastList } from "../../../../store/thunks/fetchForecastList";
import {
  selectCurrentCityData,
  selectCurrentWeatherData,
  selectForecastListData,
} from "../../../../store/selectors";

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

const Days = () => {
  const dispatch = useCustomDispatch();
  const { forecast } = useCustomSelector(selectForecastListData);
  const { city } = useCustomSelector(selectCurrentCityData);
  const days: Day[] = [
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sunny",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sunny",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sunny",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sunny",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sunny",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sunny",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sunny",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
  ];
  useEffect(() => {
    dispatch(fetchForecastList({ city: city.value, days: 10 }));
  }, [city.label]);

  const getDayOfTheWeek = (dt: number) => {
    const day = new Date(dt * 1000);
    let currentDate = Date.parse(new Date().toString());
    let days = Math.round(
      (currentDate - Date.parse(day.toString())) / 86400000,
    ); //86400000 - ms в дне
    console.log(days);
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

  const dayOfTheMonth = (dt: number) => {
    const day = new Date(dt * 1000);
    const month = ["янв", "фев", "марта", "апр", "май"];
    return day.getDate() + " " + month[day.getMonth()];
  };

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {forecast.list.map((day) => {
          return (
            <Card
              day={{
                day: getDayOfTheWeek(day.dt),
                day_info: dayOfTheMonth(day.dt),
                icon_id: "sunny",
                temp_day: "+18",
                temp_night: "+15",
                info: "Облачно",
              }}
              key={day.temp.day}
            />
          );
        })}
      </div>
    </>
  );
};

export default Days;
