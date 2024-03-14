"use client";

import Link from "next/link";
import whatsappLogo from "../../../public/img/whatsapp_logo.webp";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <aside className="whatsapp">
      <Link target="_blank" href={"https://wa.me/573157865114"}>
        <Image src={whatsappLogo} alt="Whatsapp logo" priority />
      </Link>
    </aside>
  );
};

export default Whatsapp;
