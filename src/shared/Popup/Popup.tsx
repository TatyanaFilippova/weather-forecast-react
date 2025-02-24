import React from "react";
import s from "./Popup.module.scss";
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import cloud from "../../assets/images/cloud.png";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import GlobalSwgSelector from "../../assets/icons/global/GlobalSwgSelector";

const Popup = () => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветерв",
    },
  ];
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>20</div>
          <div className={s.day_name}>Среда</div>
          <div className={s.img}>
            <GlobalSwgSelector id="sunny" />
          </div>
          <div className={s.day_time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.day_city}>
            Город: <span>Cанкт-Петербург</span>
          </div>
        </div>
        <div className={s.this_day_info_items}>
          {items.map((item: Item) => {
            return <ThisDayItem item={item} key={item.icon_id} />;
          })}
        </div>
        <div className={s.close}>
          <GlobalSwgSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
