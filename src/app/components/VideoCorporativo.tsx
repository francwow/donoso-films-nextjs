"use client";

import { useLanguage } from "../contexts/ContextHooks";
import img1 from "../../../public/img/presentativos.webp";
import img2 from "../../../public/img/entrevista.webp";
import img3 from "../../../public/img/evento.webp";
import img4 from "../../../public/img/demostrativos.webp";
import img5 from "../../../public/img/institucionales.webp";
import img6 from "../../../public/img/animados.webp";
import img7 from "../../../public/img/testimoniales.webp";
import img8 from "../../../public/img/infografias.webp";
import Link from "next/link";
import Image from "next/image";
import Btn from "./Btn";

type WorkItems = {
  titleES: string;
  titleEN: string;
  link: string;
  clientES: string;
  clientEN?: string;
  imgSrc: string;
};

const workItems: WorkItems[] = [
  {
    titleES: "Presentavivos",
    titleEN: "Presentation",
    link: "https://youtu.be/XSEsonfHMRc",
    clientES: "Cacique Mall",
    imgSrc: img1.src,
  },
  {
    titleES: "Entrevista",
    titleEN: "Interview",
    link: "https://www.youtube.com/watch?v=koMkK8fF5dM",
    clientES: "Why not",
    imgSrc: img2.src,
  },
  {
    titleES: "Evento",
    titleEN: "Event",
    link: "https://youtu.be/GOLWfr5URF8",
    clientES: "Escape Room",
    imgSrc: img3.src,
  },
  // {
  //   titleES: "Tutoriales(producto y/o servicio)",
  //   titleEN: "Tutorials (product and/or service)",
  //   link: "",
  //   clientES: "Nikken instalación de productos",
  //   clientEN: "Nikken product installation",
  //   imgSrc: img4.src,
  // },
  {
    titleES: "Demostrativos(producto y/o servicio)",
    titleEN: "Demonstrative(product and/or service)",
    link: "https://youtu.be/BHHR59Mfrmg",
    clientES: "Nikken productos",
    clientEN: "Nikken products",
    imgSrc: img4.src,
  },
  {
    titleES: "Institucionales",
    titleEN: "Institutional",
    link: "https://youtu.be/esMbkQ6qRMU",
    clientES: "Reyes Católicos",
    imgSrc: img5.src,
  },
  {
    titleES: "Animados",
    titleEN: "Animated",
    link: "https://youtu.be/Xgc_zAB0FRg",
    clientES: "Nikken plan de negocios",
    clientEN: "Nikken business plan",
    imgSrc: img6.src,
  },
  {
    titleES: "Testimoniales",
    titleEN: "Testimonial",
    link: "https://youtu.be/1n8TYI2TK7A",
    clientES: "Cancer",
    imgSrc: img7.src,
  },
  {
    titleES: "Infografías animadas",
    titleEN: "Animated infographics",
    link: "https://youtu.be/pHJvBBK9iXY",
    clientES: "Nikken",
    imgSrc: img8.src,
  },
];

// const itemStyle = workItems.map((item) => {
//   const style = {
//     backgroundImage: `url(${item.imgSrc})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundBlendMode: "overlay",
//     backgroundColor: "var(--bg-color-cover)",
//   };

//   return style;
// });

const VideoCorporativo = () => {
  const { language } = useLanguage();

  return (
    <section id="work" className="work-section">
      <div className="content-wrapper">
        <div className="work-container">
          <div className="work-heading">
            <h2 className="section-header">
              {language === "ES"
                ? "TIPOS DE VIDEO CORPORATIVO"
                : "TYPES OF CORPORATE VIDEO"}
            </h2>
          </div>
          <div className="work-items">
            {workItems.map((item, index) => {
              return (
                <Link key={index} href={item.link} target="_blank">
                  <Btn>
                    <div className="work-item">
                      <div className="work-item-overlay"></div>
                      <div className="work-item-overlay-secondary"></div>
                      <div className="work-item-img">
                        <Image
                          src={item.imgSrc}
                          alt="video corporativo"
                          width={600}
                          height={600}
                          priority
                        />
                      </div>
                      {language === "ES" ? (
                        <div className="work-item-text">
                          <h3>{item.titleES}</h3>
                          <h4>{item.clientES}</h4>
                        </div>
                      ) : (
                        <div className="work-item-text">
                          <h3>{item.titleEN}</h3>
                          <h4>
                            {item.clientEN ? item.clientEN : item.clientES}
                          </h4>
                        </div>
                      )}
                    </div>
                  </Btn>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCorporativo;
