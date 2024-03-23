"use client";

import { useLanguage } from "../contexts/ContextHooks";
import Icon from "./GoogleIcon";
import MainBtn from "./MainBtn";

type PricesItemProps = {
  h3ES: string;
  h3EN: string;
  h4ES?: string;
  h4EN?: string;
  price: string;
  info1ES: string;
  info1EN: string;
  info2ES: string;
  info2EN: string;
  info3ES: string;
  info3EN: string;
  info4ES: string;
  info4EN: string;
};

const PricesItem = ({
  h3ES,
  h3EN,
  h4ES,
  h4EN,
  price,
  info1ES,
  info1EN,
  info2ES,
  info2EN,
  info3ES,
  info3EN,
  info4ES,
  info4EN,
}: PricesItemProps) => {
  const { language } = useLanguage();

  return (
    <div className="prices-item">
      {language === "ES" ? (
        <>
          <div className="prices-heading">
            <h3>{h3ES}</h3>
            <h4>{h4ES}</h4>
          </div>

          <div className="prices-number">
            <span>{price}</span>
          </div>

          <div className="prices-info">
            <div className="prices-info-item">
              <Icon icon="check_box" />
              <span>{info1ES}</span>
            </div>
            <div className="prices-info-item">
              <Icon icon="check_box" />
              <span>{info2ES}</span>
            </div>
            <div className="prices-info-item">
              <Icon icon="check_box" />
              <span>{info3ES}</span>
            </div>
            <div className="prices-info-item">
              <span>{info4ES}</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="prices-heading">
            <h3>{h3EN}</h3>
            <h4>{h4EN}</h4>
          </div>

          <div className="prices-number">
            <span>{price}</span>
          </div>

          <div className="prices-info">
            <div className="prices-info-item">
              <Icon icon="check_box" />
              <span>{info1EN}</span>
            </div>
            <div className="prices-info-item">
              <Icon icon="check_box" />
              <span>{info2EN}</span>
            </div>
            <div className="prices-info-item">
              <Icon icon="check_box" />
              <span>{info3EN}</span>
            </div>
            <div className="prices-info-item">
              <span>{info4EN}</span>
            </div>
          </div>
        </>
      )}

      <MainBtn
        btnTextEN="Let's work together"
        btnTextES="Trabajemos juntos"
        href="#contact"
        target={false}
      />
    </div>
  );
};

export default PricesItem;
