import React from "react";
import s from "./ThisDay.module.scss";
import GlobalSwgSelector from "../../../../assets/icons/global/GlobalSwgSelector";
import { Weather } from "../../../../store/types/types";

interface Props {
  weather: Weather;
}

const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this_day_day_name}>Сегодня</div>
        </div>
        <GlobalSwgSelector id="sun" />
      </div>

      <div className={s.bottom_block}>
        <div className={s.this_time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this_city}>
          Город: <span>Cанкт-Петербург</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
