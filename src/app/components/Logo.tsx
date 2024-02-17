import Link from "next/link";
import Btn from "./Btn";
import Image from "next/image";
import logoblack from "@/app/assets/jpgImages/logo-black-1.png";
import logowhite from "@/app/assets/jpgImages/logo-white-1.png";
import { useNav, useTheme } from "../contexts/ContextHooks";

const Logo = () => {
  const { theme } = useTheme();
  const { setNavActive } = useNav();

  return (
    <div className="logo-container">
      <Btn>
        <Link onClick={() => setNavActive(false)} className="logo" href={"/"}>
          <Image
            src={theme === "light" ? logoblack : logowhite}
            alt="logo"
            priority
            width={150}
            height={150}
          />
        </Link>
      </Btn>
    </div>
  );
};

export default Logo;
