/* eslint-disable jsx-a11y/media-has-caption */
"use client";

import Nav from "./DesktopNav";
import Logo from "./Logo";
import { useNav, useScrolled } from "../contexts/ContextHooks";
import { useEffect, useRef } from "react";
import BurgerBtn from "./BurgerBtn";

const Header = () => {
  const { navActive } = useNav();
  const { scrolled, setScrolled } = useScrolled();
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    let noScroll = 0;

    const scrollHandle = () => {
      const scrollY = window.scrollY;
      if (noScroll < scrollY && scrollY > 200) {
        setScrolled(true);
      } else if (noScroll > scrollY) {
        setScrolled(false);
      }

      noScroll = scrollY <= 0 ? 0 : scrollY;
    };

    window.addEventListener("scroll", scrollHandle);
    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  useEffect(() => {
    if (headerRef.current !== undefined) {
      const headerRect = headerRef.current?.getBoundingClientRect();
      const headerHeight = headerRect?.height;

      document.body.style.setProperty("--header-height", `${headerHeight}`);
    }
  }, []);

  useEffect(() => {
    if (navActive) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "scroll";
    }
  }, [navActive]);

  return (
    <div
      ref={headerRef}
      className={scrolled ? "header-container scrolled" : "header-container"}
    >
      <div className="header">
        <Logo />
        <div className="nav-wrapper">
          <Nav />
          <BurgerBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
