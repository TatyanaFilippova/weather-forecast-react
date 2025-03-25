import React, { useState } from "react";
import s from "./Days.module.scss";
import { Day } from "./Days";
import GlobalSwgSelector from "../../../../assets/icons/global/GlobalSwgSelector";
import Popup from "../../../../shared/Popup/Popup";

interface Props {
  day: Day;
}

const Card = ({ day }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <Popup day={day} setOpen={setOpen} />}
      <div className={s.card} onClick={() => setOpen(true)}>
        <div className={s.day}>{day.day}</div>
        <div className={s.day_info}>{day.day_info}</div>
        <div className={s.img}>
          <GlobalSwgSelector id={day.icon_id} />
        </div>
        <div className={s.day_temp}>{day.temp_day}</div>
        <div className={s.day_night}>{day.temp_night}</div>
        <div className={s.info}>{day.info}</div>
      </div>
    </>
  );
};

export default Card;
