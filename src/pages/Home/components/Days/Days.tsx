import React, {useEffect, useState} from "react";
import s from "./Days.module.scss";
import Card from "./Card";
import Tabs from "./Tabs";

import { useCustomDispatch, useCustomSelector } from "../../../../hooks/store";
import { fetchForecastList } from "../../../../store/thunks/fetchForecastList";
import {
  selectCurrentCityData,
  selectForecastListData,
} from "../../../../store/selectors";

import { icon } from "../ThisDay/ThisDay";
import { precipitation } from "../ThisDayInfo/ThisDayInfo";

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

interface State{
  open: string
}

const Days = () => {
  const dispatch = useCustomDispatch();
  const { forecast } = useCustomSelector(selectForecastListData);
  const { city } = useCustomSelector(selectCurrentCityData);

  const [open, setOpen] = useState("7");

  useEffect(() => {
    dispatch(fetchForecastList({ city: city.value, days: +open  }));
  }, [city.label, city.value, open, dispatch]);

  const getDayOfTheWeek = (dt: number) => {
    const day = new Date(dt * 1000);
    let currentDate = Date.parse(new Date().toString());
    let days = Math.round(
      (currentDate - Date.parse(day.toString())) / 86400000,
    ); //86400000 - ms в дне
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

  const getTempDay = (value: number) => {
    const temp = Math.ceil(value).toString();
    if (value > 0) {
      return "+" + temp;
    }
    return temp;
  };

  return (
    <>
      <Tabs open={open} setOpen={setOpen} />
      <div className={s.days}>
        {forecast.list.map((day) => {
          return (
            <Card
              day={{
                day: getDayOfTheWeek(day.dt),
                day_info: dayOfTheMonth(day.dt),
                icon_id: icon(day.weather[0].main),
                temp_day: getTempDay(day.temp.day),
                temp_night: getTempDay(day.temp.night),
                info: precipitation(day.weather[0].main),
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
