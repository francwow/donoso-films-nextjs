"use client";

import Nav from "./DesktopNav";
import Logo from "./Logo";
import Btn from "./Btn";
import { useNav, useScrolled } from "../contexts/ContextHooks";
import { useEffect, useRef } from "react";

const Header = () => {
  const { navActive, setNavActive } = useNav();
  const { scrolled, setScrolled } = useScrolled();
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    let noScroll = 0;

    const scrollHandle = () => {
      const scrollY = window.scrollY;
      if (noScroll < scrollY) {
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
        <div>
          <Nav />
          <div className="burger-container">
            <Btn>
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setNavActive(!navActive);
                    setScrolled(false);
                  }
                }}
                onClick={() => {
                  setNavActive(!navActive);
                  setScrolled(false);
                }}
                className="burger"
              >
                <div
                  className={
                    navActive ? "burger-stick nav-active" : "burger-stick"
                  }
                ></div>
              </div>
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
