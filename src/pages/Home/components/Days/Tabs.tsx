import React from "react";
import s from "./Days.module.scss";

interface Props {
  value: string;
}

const Tabs = () => {
  const tabs = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>
        {tabs.map((tab: Props) => {
          return (
            <div className={s.tab} key={tab.value}>
              {tab.value}
            </div>
          );
        })}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};

export default Tabs;
