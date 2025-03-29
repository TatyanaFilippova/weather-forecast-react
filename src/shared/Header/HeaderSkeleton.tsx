import React from "react";
import s from "./Header.module.scss";
import Skeleton from "react-loading-skeleton";

const HeaderSkeleton = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <Skeleton
            circle
            height={65}
            width={65}
            baseColor={"#a6a6a6"}
            customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
          />
        </div>
        <Skeleton
          width={228}
          height={28}
          baseColor={"#a6a6a6"}
          customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        />
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <Skeleton
            width={240}
            height={38}
            baseColor={"#a6a6a6"}
            customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
          />
        </div>

        <Skeleton
          baseColor={"#a6a6a6"}
          customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        />
      </div>
    </header>
  );
};

export default HeaderSkeleton;
