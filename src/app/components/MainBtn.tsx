"use client";

import Link from "next/link";
import Btn from "./Btn";
import { useLanguage } from "../contexts/ContextHooks";
import Icon from "./GoogleIcon";

type MainBtnProps = {
  btnTextES: string;
  btnTextEN: string;
  href: string;
  target: boolean;
};

const MainBtn = ({ btnTextES, btnTextEN, href, target }: MainBtnProps) => {
  const { language } = useLanguage();

  return (
    <div className="main-btn-container">
      <Btn>
        {language === "ES" ? (
          <Link href={href} target={target ? "_blank" : "_self"}>
            {btnTextES}
            <Icon icon="arrow_forward_ios" />
          </Link>
        ) : (
          <Link href={href} target={target ? "_blank" : "_self"}>
            {btnTextEN}
            <Icon icon="arrow_forward_ios" />
          </Link>
        )}
      </Btn>
    </div>
  );
};

export default MainBtn;
