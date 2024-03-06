export type LanguageType = "ES" | "EN";

export type PointerIn = boolean;

export type ThemeType = "dark" | "light";

export type NavType = boolean;

export type ScrolledType = boolean;

export type LanguageContextType = {
  language: LanguageType;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (Language: LanguageType) => void;
};

export type PointerContextType = {
  pointerIn: PointerIn;
  // eslint-disable-next-line no-unused-vars
  setPointerIn: (pointerIn: PointerIn) => void;
};

export type ThemeContextType = {
  theme: ThemeType;
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: ThemeType) => void;
};

export type NavContextType = {
  navActive: NavType;
  // eslint-disable-next-line no-unused-vars
  setNavActive: (navActive: NavType) => void;
};

export type subNavContextType = {
  subNavActive: NavType;
  // eslint-disable-next-line no-unused-vars
  setSubNavActive: (subNavActive: NavType) => void;
};

export type ScrolledContextType = {
  scrolled: ScrolledType;
  // eslint-disable-next-line no-unused-vars
  setScrolled: (scrolled: ScrolledType) => void;
};
