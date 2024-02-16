"use client";

import Nav from "./DesktopNav";
import Logo from "./Logo";
import Btn from "./Btn";
import { useNav } from "../contexts/ContextHooks";
import { useEffect, useRef } from "react";

const Header = () => {
  const { navActive, setNavActive } = useNav();
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef.current !== undefined) {
      const headerRect = headerRef.current?.getBoundingClientRect();
      const headerHeight = headerRect?.height;

      document.body.style.setProperty("--header-height", `${headerHeight}`);
    }
  }, []);

  return (
    <div ref={headerRef} className="header-container">
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
                  }
                }}
                onClick={() => setNavActive(!navActive)}
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
