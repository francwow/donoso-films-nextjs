"use client";

import Link from "next/link";
import Languages from "./Languages";
import { useLanguage, useNav } from "../contexts/ContextHooks";
import navItems from "@/app/data/navItems";
import Btn from "./Btn";
// import Theme from "./Theme";
import Social from "./Social";

const DesktopNav = () => {
  const { language } = useLanguage();
  const { setNavActive } = useNav();

  return (
    <div className="nav-container">
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
      {/* <Theme /> */}
      <Languages />
      <Social />
    </div>
  );
};

export default DesktopNav;
