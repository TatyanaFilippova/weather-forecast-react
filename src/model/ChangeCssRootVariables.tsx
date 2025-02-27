import {Theme} from "../context/ThemeContext";

export const ChangeCssRootVariables = (theme: Theme) => {
  const root = document.querySelector(":root") as HTMLElement;
  const components = [
    "components-background",
    "card-background",
    "card-shadow",
    "text-color",
    "body-background",
  ];

  components.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`,
    );
  });
};
