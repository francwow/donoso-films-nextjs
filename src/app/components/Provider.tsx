"use client";

import { PropsWithChildren, useState } from "react";
import { LanguageType, NavType, PointerIn, ThemeType } from "../types/Types";
import {
  LanguageContext,
  NavContext,
  PointerContext,
  ThemeContext,
} from "../contexts/ContextHooks";

const Provider = (props: PropsWithChildren) => {
  const [pointerIn, setPointerIn] = useState<PointerIn>(false);
  const [language, setLanguage] = useState<LanguageType>("ES");
  const [theme, setTheme] = useState<ThemeType>("light");
  const [navActive, setNavActive] = useState<NavType>(false);

  return (
    <NavContext.Provider value={{ navActive, setNavActive }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <PointerContext.Provider value={{ pointerIn, setPointerIn }}>
            {props.children}
          </PointerContext.Provider>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </NavContext.Provider>
  );
};

export default Provider;
