import { useNav, useScrolled, useSubNav } from "../contexts/ContextHooks";
import Btn from "./Btn";

const BurgerBtn = () => {
  const { navActive, setNavActive } = useNav();
  const { setSubNavActive } = useSubNav();
  const { setScrolled } = useScrolled();

  return (
    <div className="burger-container">
      <Btn>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setNavActive(!navActive);
              setSubNavActive(false);
              setScrolled(false);
            }
          }}
          onClick={() => {
            setNavActive(!navActive);
            setSubNavActive(false);
            setScrolled(false);
          }}
          className="burger"
        >
          <div
            className={navActive ? "burger-stick nav-active" : "burger-stick"}
          ></div>
        </div>
      </Btn>
    </div>
  );
};

export default BurgerBtn;
