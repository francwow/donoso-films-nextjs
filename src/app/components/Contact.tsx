"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/ContextHooks";
import Icon from "./GoogleIcon";

const Contact = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-overlay"></div>
      <div className="content-wrapper">
        <div className="contact-info">
          <div className="contact-heading">
            <h2 className="section-header">
              {language === "ES" ? "CONTACTO" : "CONTACT"}
            </h2>
          </div>
          <div className="contact-info-item">
            <Link href={""} target="_blank">
              <Icon icon="location_on" />
              <span>cra 4 # 34-28, Bogotá, Colombia</span>
            </Link>
          </div>
          <div className="contact-info-item">
            <Link href={""} target="_blank">
              <Icon icon="call" />
              <span>+57 315 7865114</span>
            </Link>
          </div>
          <div className="contact-info-item">
            <Link href={""} target="_blank">
              <Icon icon="mail" />
              <span>comercialdonosofilms@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
