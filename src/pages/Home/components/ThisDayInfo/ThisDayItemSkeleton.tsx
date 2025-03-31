import React from "react";
import { Item } from "./ThisDayInfo";
import s from "./ThisDayInfo.module.scss";
import { IndicatorSvgSelector } from "../../../../assets/icons/indicators/indicatorSwgSelector";
import Skeleton from "react-loading-skeleton";

interface Props {
  item: Item;
}

const ThisDayItemSkeleton = ({ item }: Props) => {
  const { icon_id, name } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator_name}>{name}</div>
      <div className={s.indicator_value}>
        <Skeleton
          width={150}
          height={17}
          baseColor={"#a6a6a6"}
          customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        />
      </div>
    </div>
  );
};

export default ThisDayItemSkeleton;
