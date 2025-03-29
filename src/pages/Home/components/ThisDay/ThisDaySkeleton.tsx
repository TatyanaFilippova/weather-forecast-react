import React from "react";
import s from "./ThisDay.module.scss";
import Skeleton from "react-loading-skeleton";

const ThisDaySkeleton = () => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>
            <Skeleton
              baseColor={"#a6a6a6"}
              customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
            />
          </div>
          <div className={s.this_day_day_name}>Сегодня</div>
        </div>
        <Skeleton
          width={119}
          height={119}
          baseColor={"#a6a6a6"}
          customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        />
      </div>

      <div className={s.bottom_block}>
        <div className={s.this_time}>
          <Skeleton
            width={190}
            baseColor={"#a6a6a6"}
            customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
          />
        </div>
        <div className={s.this_city}>
          <Skeleton
            width={300}
            baseColor={"#a6a6a6"}
            customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
          />
        </div>
      </div>
    </div>
  );
};

export default ThisDaySkeleton;
