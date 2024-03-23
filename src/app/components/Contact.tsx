"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/ContextHooks";
import Icon from "./GoogleIcon";
import Btn from "./Btn";

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
            <h3>{language === "ES" ? "HABLEMOS" : "LET'S TALK"}</h3>
          </div>
          <div className="contact-info-item">
            <Btn>
              <Link href={""} target="_blank">
                <Icon icon="location_on" />
                <span>cra 4 # 34-28, Bogotá, Colombia</span>
              </Link>
            </Btn>
          </div>
          <div className="contact-info-item">
            <Btn>
              <Link href={""} target="_blank">
                <Icon icon="call" />
                <span>+57 315 7865114</span>
              </Link>
            </Btn>
          </div>
          <div className="contact-info-item">
            <Btn>
              <Link href={""} target="_blank">
                <Icon icon="mail" />
                <span>comercialdonosofilms@gmail.com</span>
              </Link>
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
