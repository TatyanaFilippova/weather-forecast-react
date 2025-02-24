import React from "react";
import s from "./Days.module.scss";
import Card from "./Card";
import Tabs from "./Tabs";

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

const Days = () => {
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
  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => {
          return <Card day={day} />;
        })}
      </div>
    </>
  );
};

export default Days;
