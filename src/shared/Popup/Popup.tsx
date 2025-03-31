import React from "react";
import s from "./Popup.module.scss";
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import GlobalSwgSelector from "../../assets/icons/global/GlobalSwgSelector";
import { Day } from "../../pages/Home/components/Days/Days";
import { useCustomSelector } from "../../hooks/store";
import { selectCurrentCityData } from "../../store/selectors";

interface State {
  day: Day;

  setOpen: (open: boolean) => void;
}

const Popup = ({ setOpen, day }: State) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: day.temp_day + day.feels_like,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: day.pressure,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: day.info + " - " + day.description,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: day.speed,
    },
  ];
  const { city } = useCustomSelector(selectCurrentCityData);
  return (
    <>
      <div className={s.blur} onClick={() => setOpen(false)}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_popup}>
            <div className={s.day_temp}>{day.temp_day}</div>
            <div className={s.day_name}>{day.day}</div>
            <div className={s.day_info}>{day.day_info}</div>
          </div>
          <div>
            <div className={s.img}>
              <GlobalSwgSelector id={day.icon_id} />
            </div>
            <div className={s.day_city}>
              Город: <span>{city.label}</span>
            </div>
          </div>
        </div>
        <div className={s.this_day_info_items}>
          {items.map((item: Item) => {
            return <ThisDayItem item={item} key={item.icon_id} />;
          })}
        </div>
        <div className={s.close} onClick={() => setOpen(false)}>
          <GlobalSwgSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
