import React, {useState} from "react";
import s from "./Days.module.scss";

interface Props {
  value: string;
  id: string;
}

interface State {
  open: string;
  setOpen: (open: string) => void;
}

const Tabs = ({ open, setOpen }: State) => {
  const tabs = [
    {
      value: "На неделю",
      id: "7",
    },
    {
      value: "На 10 дней",
      id: "10",
    },
    {
      value: "На 14 дней",
      id: "14",
    },
  ];



  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>
        {tabs.map((tab: Props) => {
          return (
            <div

              className={open===tab.id? s.active: s.tab}
              key={tab.value}

              onClick={() => {
                setOpen(tab.id);

              }}
            >
              {tab.value}
            </div>
          );
        })}
      </div>
      {/*<div className={s.cancel}>Отменить</div>*/}
    </div>
  );
};

export default Tabs;
