import React from "react";
import s from "./Days.module.scss";
import { Day } from "./Days";
import GlobalSwgSelector from "../../../../assets/icons/global/GlobalSwgSelector";

interface Props {
  day: Day;
}

const Card = ({ day }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day_info}>{day.day_info}</div>
      <div className={s.img}>
        <GlobalSwgSelector id={day.icon_id} />
      </div>
      <div className={s.day_temp}>{day.temp_day}</div>
      <div className={s.day_night}>{day.temp_night}</div>
        <div className={s.info}>{day.info}</div>
    </div>
  );
};

export default Card;
