"use client";

import Link from "next/link";
import { useLanguage, useNav, useSubNav } from "../contexts/ContextHooks";
import { navItems, navSubItems } from "../data/navItems";
import Btn from "./Btn";
import Social from "./Social";
import Icon from "./GoogleIcon";
import Languages from "./Languages";
import Theme from "./Theme";
import BurgerBtn from "./BurgerBtn";

const MobileNav = () => {
  const { navActive, setNavActive } = useNav();
  const { subNavActive, setSubNavActive } = useSubNav();
  const { language } = useLanguage();

  return (
    <div className={navActive ? "mobile-nav nav-active" : "mobile-nav"}>
      <Social />
      <Languages />
      <Theme />
      <BurgerBtn />
      <div className="nav-container">
        <nav className="main-nav">
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <Btn key={item.id}>
                  {item.more ? (
                    <button onClick={() => setSubNavActive(true)}>
                      <li className="nav-item">
                        {language === "EN" ? item.textEN : item.textES}
                        <Icon icon="chevron_right" />
                      </li>
                    </button>
                  ) : (
                    <Link onClick={() => setNavActive(false)} href={item.href}>
                      <li className="nav-item">
                        {language === "EN" ? item.textEN : item.textES}
                      </li>
                    </Link>
                  )}
                </Btn>
              );
            })}
          </ul>
        </nav>
      </div>
      <div
        className={
          subNavActive && navActive ? "secondary-nav active" : "secondary-nav"
        }
      >
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSubNavActive(false);
            }
          }}
          onClick={() => setSubNavActive(false)}
          className="nav-item back"
        >
          <Btn>
            <Icon icon="chevron_left" />
            {language === "EN" ? "Back" : "Volver"}
          </Btn>
        </div>

        <ul className={"secondary-nav-items"}>
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
      </div>
    </div>
  );
};

export default MobileNav;
