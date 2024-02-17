import Icon from "./GoogleIcon";
import MainBtn from "./MainBtn";

const PricesItem = () => {
  return (
    <div className="prices-item">
      <div className="prices-heading">
        <h3>STANDARD</h3>
        <h4>Lorem Ipsum</h4>
      </div>

      <div className="prices-number">
        <span>$ 1&apos;500.000</span>
      </div>

      <div className="prices-info">
        <div className="prices-info-item">
          <Icon icon="check_box" />
          <span>1 guion de 3 minutos.</span>
        </div>
        <div className="prices-info-item">
          <Icon icon="check_box" />
          <span>
            1 dia de grabacion en locacion con camara, luces y microfono.
          </span>
        </div>
        <div className="prices-info-item">
          <Icon icon="check_box" />
          <span>3 dias de edicion, creditaje basico y musica stock.</span>
        </div>
      </div>
      <MainBtn
        btnTextEN="Let's work together"
        btnTextES="Trabajemos juntos"
        href="/"
        target={false}
      />
    </div>
  );
};

export default PricesItem;
