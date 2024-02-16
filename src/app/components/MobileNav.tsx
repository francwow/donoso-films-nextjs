"use client";

import Link from "next/link";
import Languages from "./Languages";
import { useLanguage, useNav } from "../contexts/ContextHooks";
import navItems from "@/app/data/navItems";
import Btn from "./Btn";
import Theme from "./Theme";
import Social from "./Social";
import Icon from "./GoogleIcon";
import { useState } from "react";

const MobileNav = () => {
  const { navActive, setNavActive } = useNav();
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={navActive ? "mobile-nav nav-active" : "mobile-nav"}>
      <div className="nav-container">
        <div></div>
        <nav className="main-nav">
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <Btn key={item.id}>
                  <Link onClick={() => setNavActive(false)} href={item.href}>
                    <li className="nav-item">
                      {language === "EN" ? item.textEN : item.textES}
                    </li>
                  </Link>
                </Btn>
              );
            })}
          </ul>
        </nav>
        <div className="mobile-nav-divider">
          {expanded ? (
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setExpanded(false);
                }
              }}
              onClick={() => setExpanded(false)}
              className="expand-btn"
            >
              <Icon icon="expand_less" />
            </div>
          ) : (
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setExpanded(false);
                }
              }}
              onClick={() => setExpanded(true)}
              className="expand-btn"
            >
              <Icon icon="expand_more" />
            </div>
          )}
        </div>
        <div
          className={
            expanded ? "nav-secondary-items expanded" : "nav-secondary-items"
          }
        >
          <Theme />
          <Languages />
          <Social />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
