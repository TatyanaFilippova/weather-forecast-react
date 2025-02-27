import React from "react";
import s from "./Header.module.scss";
import GlobalSwgSelector from "../../assets/icons/global/GlobalSwgSelector";
import Select from "react-select";
import {StylesConfig} from "react-select/dist/declarations/src/styles";
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeContext";

const Header = () => {
  const theme = useTheme();
  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-3", label: "Новгород" },
    { value: "city-2", label: "Москва" },
  ];



  const colourStyles: StylesConfig = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71,147,255,0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
      cursor: "pointer",
    }),

    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),

    menu: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71,147,255,0.2)",
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),

    option: (styles: any, state: any) => {
      if (theme.theme === Theme.DARK) {
        return {
          ...styles,
          backgroundColor: state.isSelected
            ? "#4793FF"
            : state.isFocused
              ? "#858484"
              : "#4f4f4f",
        };
      } else {
        return {
          ...styles,
        };
      }
    },
  };



  function changeTheme() {

    theme.changeTheme(theme.theme===Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }



  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSwgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
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
