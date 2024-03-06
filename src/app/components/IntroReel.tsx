"use client";

import { useEffect, useState } from "react";
import Video from "./Video";

const IntroReel = () => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const translate = () => {
      let scrollY = window.scrollY;
      setTranslateY(scrollY);
    };

    window.addEventListener("scroll", translate);

    return () => {
      window.removeEventListener("scroll", translate);
    };
  }, []);

  return (
    <section className="intro-reel">
      <div
        style={{ opacity: `${0 + translateY / 1200}` }}
        className="reel-overlay"
      ></div>
      <div className="intro-video-wrapper">
        {/* <div className="intro-video-copy">
        <h1>
          Somos una productora audiovisual que te acompaña de principio a
          fin
        </h1>
        <MainBtn
          btnTextEN="Trabajemos juntos"
          btnTextES="Let's work together"
          href="/"
          target={false}
        />
      </div> */}
        <Video videoSrc="/video/reel.mov" tag="video" />
      </div>
    </section>
  );
};

export default IntroReel;
