"use client";

import { useLanguage } from "../contexts/ContextHooks";
import PricesItem from "./PricesItem";

const Prices = () => {
  const { language } = useLanguage();

  return (
    <section id="prices" className="prices-section">
      <div className="prices-bg"></div>
      <div className="content-wrapper">
        <div className="prices-container">
          <div className="prices">
            <PricesItem
              h3ES="Standard"
              h3EN="Standard"
              price="1'500.000"
              info1ES="1 guion de 3 minutos"
              info1EN="1 3-minute script"
              info2ES="1 día de grabación en locación con cámara, luces y micrófono."
              info2EN="1 day of recording on location with camera, lights and microphone."
              info3ES="3 dias de edición, creditaje básico y música stock."
              info3EN="3 days of editing, basic credit and stock music."
              info4ES="Se entregará 1 video de 3 minutos y 2 Reels de 20 segundos para redes a partir del material grabado."
              info4EN="1 3-minute video and 2 20-second reels for social media will be delivered based on the recorded material."
            />
            <PricesItem
              h3ES="Avanzado"
              h3EN="Advanced"
              price="3'000.000"
              info1ES="1 guion de 3 a 5 minutos"
              info1EN="1 3 or 5 minute script"
              info2ES="1 día de grabación en locación con cámara, ronin (soporte para cámara en movimiento) y segunda cámara, luces y micrófono."
              info2EN="1 day of location recording with camera, ronin (support for moving camera) and second camera, lights and microphone."
              info3ES="5 dias de edición, diseño de créditos original y música stock."
              info3EN="5 days of editing, original credits design and stock music."
              info4ES="Se entregará 1 video de 4 minutos y 3 Reels de 20 segundos para redes a partir del material grabado."
              info4EN="1 4-minute video and 3 20-second reels for social media will be delivered based on the recorded material."
            />
            <PricesItem
              h3ES="Premium"
              h3EN="Premium"
              price="4'500.000"
              info1ES="1 guion de 3 minutos"
              info1EN="1 3-minute script"
              info2ES="1 día de grabación en locación con cámara, luces y micrófono."
              info2EN="1 day of recording on location with camera, lights and microphone."
              info3ES="3 dias de edición, creditaje básico y música stock."
              info3EN=""
              info4ES="Se entregará 1 video de 3 minutos y 2 Reels de 20 segundos para redes a partir del material grabado."
              info4EN="1 3-minute video and 2 20-second reels for social media will be delivered based on the recorded material."
            />
          </div>
        </div>
        <div className="disclaimer">
          <p>
            {language === "ES"
              ? "*Estos precios NO incluyen desplazamientos a locaciones fuera de Bogotá, así como hospedajes, ni alimentación o compra de elementos para producción. Tampoco incluyen IVA."
              : `*Prices DO NOT include travel to locations outside Bogotá, as well as lodging, food or purchase of elements for production. IVA not included.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prices;
