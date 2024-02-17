"use client";

import { useLanguage, useTheme } from "../contexts/ContextHooks";
import Btn from "./Btn";
import Icon from "./GoogleIcon";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();

  const themeHandle = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.setAttribute("data-theme", "dark");
    } else if (theme === "dark") {
      setTheme("light");
      document.body.setAttribute("data-theme", "light");
    }

    console.log(theme);
  };

  return (
    <div className="theme-container">
      <Btn>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => themeHandle()}
          onClick={() => themeHandle()}
          className="theme"
        >
          <div
            className={
              theme === "light"
                ? "theme-overlay light-active"
                : "theme-overlay dark-active"
            }
          ></div>
          <div className={theme === "light" ? "light light-active" : "light"}>
            {language === "EN" ? <span>LIGHT</span> : <span>CLARO</span>}
            <Icon icon="light_mode" />
          </div>
          <div className={theme === "dark" ? "dark dark-active" : "dark"}>
            {language === "EN" ? <span>DARK</span> : <span>OSCURO</span>}
            <Icon icon="dark_mode" />
          </div>
        </div>
      </Btn>
    </div>
  );
};

export default Theme;
