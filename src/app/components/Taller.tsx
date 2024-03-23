"use client";

import { useLanguage } from "../contexts/ContextHooks";
import MainBtn from "./MainBtn";

const Taller = () => {
  const { language } = useLanguage();

  return (
    <section id="taller" className="taller-section">
      <div className="taller-overlay"></div>
      <div className="content-wrapper">
        <div className="taller-info">
          <div className="taller-heading">
            <h2 className="section-header">
              {language === "ES"
                ? "TALLER DE PRODUCCIÓN AUDIOVISUAL"
                : "AUDIOVISUAL PRODUCTION WORKSHOP"}
            </h2>
          </div>
          <div className="taller-text">
            <p>
              {language === "ES"
                ? "En Donoso Films también puedes aprender a hacer tus propios videos. En muchas ocasiones el contratar constantemente a una productora resulta costoso, es por ello que te ofrecemos un taller básico de realización de videos con celulares práctico y eficaz."
                : "At Donoso Films you can also learn to make your own videos. In many cases, constantly hiring a production company is expensive, which is why we offer you a basic workshop on making videos with cell phones that is practical and effective."}
            </p>
          </div>
          <div className="taller-text">
            <p>
              {language === "ES"
                ? "En una semana de capacitación virtual o presencial te enseñaremos a crear la idea a partir de tu necesidad o la de tu empresa, escribir un guion, preparar el rodaje, grabar y editar."
                : "In a week of virtual or in-person training we will teach you how to create the idea based on your needs or that of your company, write a script, prepare for filming, record and edit."}
            </p>
          </div>
          <div className="taller-text">
            <p>
              {language === "ES"
                ? "Durante 20 horas de capacitación repartidas en clases de 4 horas diarias de Lunes a Viernes podrás crear tu primer video con nuestra asesoría."
                : "During 20 hours of training divided into 4-hour daily classes from Monday to Friday, you will be able to create your first video with our advice."}
            </p>
          </div>
          <div className="taller-text">
            <p>{language === "ES" ? "Valor: 1'000.000" : "Price: 1'000.000"}</p>
            <span>
              {language === "ES"
                ? "*Pueden participar de 1 a 4 personas por taller con el mismo costo."
                : "*1 to 4 people can participate per workshop for the same price."}
            </span>
          </div>
          <MainBtn
            btnTextEN="Let's work together"
            btnTextES="Trabajemos juntos"
            href="#contact"
            target={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Taller;
