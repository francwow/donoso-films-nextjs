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
  return (
    <div className={`production-item ${position}`}>
      <div className="production-item-text">
        <div className="production-item-heading">
          <h3>{language === "ES" ? h3ES : h3EN}</h3>
        </div>
        <p>{language === "ES" ? pES : pEN}</p>
      </div>

      <div className="production-item-icon">
        <Icon icon={icon} />
      </div>
    </div>
  );
};

export default ProductionItem;
