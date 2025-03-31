import React from "react";
import s from "./Header.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const HeaderSkeleton = () => {
  return (
    <SkeletonTheme
      baseColor={"#a6a6a6"}
      customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
    >
      <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <Skeleton circle height={65} width={65} />
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.change_theme}>
            <Skeleton width={240} height={38} />
          </div>
          <Skeleton />
        </div>
      </header>
    </SkeletonTheme>
  );
};

export default HeaderSkeleton;
