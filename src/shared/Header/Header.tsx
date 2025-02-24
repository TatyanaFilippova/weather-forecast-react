import React from "react";
import s from "./Header.module.scss";
import GlobalSwgSelector from "../../assets/icons/global/GlobalSwgSelector";
import Select from "react-select";

const Header = () => {
  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71,147,255,0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
      cursor: "pointer",
    }),
  };
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSwgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSwgSelector id="change-theme" />
        </div>

        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
