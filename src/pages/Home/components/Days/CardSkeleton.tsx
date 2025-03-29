import React from "react";
import s from "./Days.module.scss";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <>
      <div className={s.card}>
        <div className={s.day}>
          <Skeleton
            width={129}
            height={20}
            baseColor={"#a6a6a6"}
            customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
          />
        </div>
        <div className={s.day_info}>
          <Skeleton
            width={129}
            height={16}
            baseColor={"#a6a6a6"}
            customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
          />
        </div>
        <div className={s.img}>
          <Skeleton
            width={44}
            height={44}
            baseColor={"#a6a6a6"}
            customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
          />
        </div>
        <div className={s.day_temp}>
          <Skeleton
            width={129}
            height={16}
            baseColor={"#a6a6a6"}
            customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
          />
        </div>
        <div className={s.day_night}>
          <Skeleton
            width={129}
            height={14}
            baseColor={"#a6a6a6"}
            customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
          />
        </div>
        <div className={s.info}>
          <Skeleton
            width={129}
            height={15}
            baseColor={"#a6a6a6"}
            customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
          />
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
