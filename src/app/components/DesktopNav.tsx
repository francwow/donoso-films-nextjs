"use client";

import Link from "next/link";
import Languages from "./Languages";
import { useLanguage, useNav } from "../contexts/ContextHooks";
import { navItems, navSubItems } from "@/app/data/navItems";
import Btn from "./Btn";
// import Theme from "./Theme";
import Social from "./Social";
import Icon from "./GoogleIcon";
import { useState } from "react";

const DesktopNav = () => {
  const { language } = useLanguage();
  const { setNavActive } = useNav();

  const [subNavHover, setSubNavHover] = useState(false);

  return (
    <div className="nav-container">
      <nav className="main-nav">
        <ul className="nav-items">
          {navItems.map((item) => {
            return (
              <Btn key={item.id}>
                <Link onClick={() => setNavActive(false)} href={item.href}>
                  {item.more === true ? (
                    <li
                      onPointerEnter={() => setSubNavHover(true)}
                      onPointerLeave={() => setSubNavHover(false)}
                      data-subnav={subNavHover ? "true" : "false"}
                      className="nav-item"
                    >
                      {language === "EN" ? item.textEN : item.textES}{" "}
                      <Icon icon="add" />
                    </li>
                  ) : (
                    <li className="nav-item">
                      {language === "EN" ? item.textEN : item.textES}
                    </li>
                  )}
                </Link>
              </Btn>
            );
          })}
          <ul
            onPointerEnter={() => setSubNavHover(true)}
            onPointerLeave={() => setSubNavHover(false)}
            className={
              subNavHover ? "secondary-nav-items active" : "secondary-nav-items"
            }
          >
            {navSubItems.map((item) => {
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
        </ul>
      </nav>
      {/* <Theme /> */}
      <Languages />
      <Social />
    </div>
  );
};

export default DesktopNav;
