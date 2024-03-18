"use client";

import { useLanguage } from "../contexts/ContextHooks";
import ProductionItem from "./ProductionItem";
import Btn from "./Btn";

const Production = () => {
  const { language } = useLanguage();

  return (
    <section id="production" className="production-section">
      <div className="production-overlay"></div>
      <div className="content-wrapper">
        <div className="production-container">
          <div className="production-heading">
            <h2 className="section-header">
              {language === "ES"
                ? "EL PROCESO DE PRODUCCIÓN"
                : "PRODUCTION PROCESS"}
            </h2>
          </div>
          <div className="production-items">
            <Btn>
              <ProductionItem
                icon="article"
                position="first"
                language={language}
                h3ES="Creación de Guiones"
                h3EN="Script Creation"
                pES="A partir de la información que nos brinda el cliente, desarrollamos un guion, el cual consideramos es el “mapa del tesoro”; en donde tanto cliente como productora tendrá claro las imágenes y textos que narrarán la historia."
                pEN="Based on the information provided by the client, we develop a script, which we consider to be the “treasure map”; where both client and producer will be clear about the images and texts that will tell the story."
              />
            </Btn>
            <Btn>
              <ProductionItem
                icon="video_camera_front"
                position="second"
                language={language}
                h3ES="Producción de Video y Fotografía"
                h3EN="Video and Photography Production"
                pES="Según se haya ajustado y aprobado el guion de grabación, procedemos a organizar el rodaje: fechas, selección de los modelos, presentadores o entrevistados, selección y adecuación de locaciones, preparación de los productos. Una vez preparada la grabación el equipo técnico y humano se cita en la locación escogida y se graban los planos propuestos según el guion aprobado, en este proceso participan director, camarógrafo, productor, asistente de luces y asistente de sonido. (en ocasiones y según la necesidad pueden intervenir mas personas: maquillaje, vestuarista, diseñador de dummies)."
                pEN="After the recording script has been adjusted and approved, we proceed to organize the filming: dates, selection of models, presenters or interviewees, selection and adaptation of locations, preparation of the products. Once the recording is prepared, the technical and human team meets at the chosen location and the proposed shots are recorded according to the approved script. Director, cameraman, producer, lighting assistant and sound assistant participate in this process. (sometimes and depending on the need, more people can intervene: makeup, costume designer, dummies designer)."
              />
            </Btn>
            <Btn>
              <ProductionItem
                icon="movie_edit"
                position="third"
                language={language}
                h3ES="Edición y Finalización"
                h3EN="Editing and Completion"
                pES="Con el material grabado se inicia el proceso de montaje en el cual se selecciona el mejor material y se arma una línea de tiempo en donde quedan armados los planos, sonidos y créditos propuestos. Este primer corte es revisado por el cliente quien a su vez solicita los ajustes que considere, una vez acordados los ajustes se lleva a cabo el proceso de finalización con música, color, créditos y efectos, esta segunda versión es revisada por el cliente quien solicitará ajustes finales, tras este nuevo acuerdo se procede a finalizar y entregar la pieza audiovisual."
                pEN="With the recorded material, the editing process begins in which the best material is selected and a timeline is put together where the proposed plans, sounds and credits are put together. This first cut is reviewed by the client who in turn requests the adjustments he considers. Once the adjustments are agreed, the finalization process is carried out with music, color, credits and effects. This second version is reviewed by the client who requests final adjustments, after this new agreement we proceed to finalize and deliver the audiovisual piece."
              />
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;
