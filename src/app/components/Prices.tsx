import PricesItem from "./PricesItem";

const Prices = () => {
  return (
    <section className="prices-section">
      <div className="prices-bg"></div>
      <div className="content-wrapper">
        <div className="prices-container">
          <div className="prices">
            <PricesItem />
            <PricesItem />
            <PricesItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
