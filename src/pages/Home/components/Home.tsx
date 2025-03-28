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

const Home = () => {
  const dispatch = useCustomDispatch();

  // пример как берем данные со стора
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  const { city } = useCustomSelector(selectCurrentCityData);

  useEffect(() => {
    dispatch(fetchCurrentWeather(city.value));
  }, [city.label]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} city={city.label} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export default Home;
