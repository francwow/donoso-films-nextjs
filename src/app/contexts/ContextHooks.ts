"use client";

import { createContext, useContext } from "react";
import {
  LanguageContextType,
  ThemeContextType,
  PointerContextType,
  NavContextType,
  ScrolledContextType,
  subNavContextType,
} from "../types/Types";

export const LanguageContext = createContext<LanguageContextType | null>(null);
export const PointerContext = createContext<PointerContextType | null>(null);
export const ThemeContext = createContext<ThemeContextType | null>(null);
export const NavContext = createContext<NavContextType | null>(null);
export const SubNavContext = createContext<subNavContextType | null>(null);
export const ScrolledContext = createContext<ScrolledContextType | null>(null);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const usePointer = (): PointerContextType => {
  const context = useContext(PointerContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useNav = (): NavContextType => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useSubNav = (): subNavContextType => {
  const context = useContext(SubNavContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useScrolled = (): ScrolledContextType => {
  const context = useContext(ScrolledContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};
