"use client";

// import Image from "next/image";
// import aboutImg from "@/app/assets/webpImages/about-placeholder.webp";
// import { useMediaQuery } from "usehooks-ts";
import MainBtn from "./MainBtn";

const About = () => {
  // const desktop = useMediaQuery("(min-width: 991px)");

  return (
    <section id="about" className="about-section">
      <div className="content-wrapper">
        <div className="about-info">
          {/* <div className="img-container">
              <Image
                src={aboutImg}
                alt="filming crew"
                loading="lazy"
                width={700}
                height={700}
              />
            </div> */}
          <div className="about-text">
            <h2>DONOSO FILMS ES UNA PRODUCTORA QUE HACE VIDEOS Y AMIGOS</h2>
            <p>
              Hacemos amigos porque acompañamos el proceso creativo y de
              producción de nuestros clientes de principio a fin, nos gusta ser
              parte de su inspiración y su crecimiento generando vínculos que
              permitan una relación duradera, confiable y eficaz; y hacemos
              videos porque amamos lo que hacemos y nos encanta hacerlo bien.
              <br />
              <br />
              Para Donoso Films no existen clientes grandes o pequeños,
              sencillamente creemos que todo cliente es importante ya que del
              éxito de su producto depende nuestro éxito y nos encanta darle un
              producto bien finalizado, a satisfacción y efectivo para la marca,
              el concepto o idea.
            </p>

            <p>
              Por nuestros 25 años de oficio audiovisual nos consideramos
              expertos en la realización de videos corporativos para empresas,
              conceptos humanos y emprendimientos.
            </p>
          </div>
          <MainBtn
            btnTextEN="Let's work together"
            btnTextES="Trabajemos juntos"
            href="/"
            target={false}
          />
        </div>
      </div>
    </section>
  );
};

export default About;