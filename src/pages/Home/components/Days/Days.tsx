import React, { useEffect, useState } from "react";
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
import {
  dayOfTheMonth,
  getDayOfTheWeek,
  getTempDay,
  precipitation,
  precipitationDetailed,
  pressure,
  windCharacteristics,
} from "../../../../utilities/utilities";

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
  pressure: string;
  feels_like: string;
  description: string;
  speed: string;
}

const Days = () => {
  const dispatch = useCustomDispatch();
  const { forecast } = useCustomSelector(selectForecastListData);
  const { city } = useCustomSelector(selectCurrentCityData);
  const [open, setOpen] = useState("7");
  useEffect(() => {
    dispatch(fetchForecastList({ city: city.value, days: +open }));
  }, [city.label, city.value, open, dispatch]);

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
                pressure:
                  `${day.pressure} мм ртутного столба - ` +
                  pressure(day.pressure),
                feels_like: ` - ощущается как ${getTempDay(Math.ceil(day.feels_like.day))}`,
                description: precipitationDetailed(day.weather[0].description),
                speed:
                  Math.ceil(day.speed).toString() +
                  " м/с - " +
                  windCharacteristics(Math.ceil(day.speed)),
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
