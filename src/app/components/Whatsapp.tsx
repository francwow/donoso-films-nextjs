"use client";

import Link from "next/link";
import whatsappLogo from "../../../public/img/whatsapp_logo.webp";
import Image from "next/image";
import Btn from "./Btn";

const Whatsapp = () => {
  return (
    <aside className="whatsapp">
      <Btn>
        <Link target="_blank" href={"https://wa.me/573157865114"}>
          <Image src={whatsappLogo} alt="Whatsapp logo" priority />
        </Link>
      </Btn>
    </aside>
  );
};

export default Whatsapp;
