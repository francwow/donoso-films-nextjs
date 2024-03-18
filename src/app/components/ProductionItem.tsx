"use client";

import { useInView } from "react-intersection-observer";
import Icon from "./GoogleIcon";

type ProductionItemProps = {
  language: string;
  h3ES: string;
  h3EN: string;
  pES: string;
  pEN: string;
  position: string;
  icon: string;
};

const ProductionItem = ({
  language,
  h3ES,
  h3EN,
  pES,
  pEN,
  position,
  icon,
}: ProductionItemProps) => {
  const { inView: containerInView, ref: containerRef } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={containerRef} className={`production-item ${position}`}>
      <div
        className={
          containerInView
            ? "production-item-text in-view"
            : "production-item-text"
        }
      >
        <div className="production-item-heading">
          <h3>{language === "ES" ? h3ES : h3EN}</h3>
        </div>
        <p>{language === "ES" ? pES : pEN}</p>
      </div>

      <div
        className={
          containerInView
            ? "production-item-icon in-view"
            : "production-item-icon"
        }
      >
        <Icon icon={icon} />
      </div>
    </div>
  );
};

export default ProductionItem;
