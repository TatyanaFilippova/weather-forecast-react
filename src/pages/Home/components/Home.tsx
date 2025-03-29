import React, { useEffect } from "react";
import s from "./Home.module.scss";
import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";
import Days from "./Days/Days";
import { useCustomDispatch, useCustomSelector } from "../../../hooks/store";
import { fetchCurrentWeather } from "../../../store/thunks/fethCurrentWeather";
import {
  selectCurrentCityData,
  selectCurrentWeatherData,
} from "../../../store/selectors";
import ThisDaySkeleton from "./ThisDay/ThisDaySkeleton";
import DaysSkeleton from "./Days/DaysSkeleton";

const Home = () => {
  const dispatch = useCustomDispatch();

  // пример как берем данные со стора
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { isLoading } = useCustomSelector(selectCurrentWeatherData);
  const { city } = useCustomSelector(selectCurrentCityData);

  useEffect(() => {
    dispatch(fetchCurrentWeather(city.value));
  }, [city.label]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        {isLoading === false ? (
          <ThisDay weather={weather} city={city.label} />
        ) : (
          <ThisDaySkeleton />
        )}

        <ThisDayInfo />
      </div>
      {isLoading === false ? <Days /> : <DaysSkeleton />}
    </div>
  );
};

export default Home;
