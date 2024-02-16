// import videosrc from "@/app/assets/video/video-sistemas-de-agua-2018.mov";

import MainBtn from "./components/MainBtn";
import Video from "./components/Video";

export default function Home() {
  return (
    <div className="main-content">
      <section className="intro-reel">
        <div className="intro-video-wrapper">
          <div className="intro-video-copy">
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
          </div>
          <Video videoSrc="/video/reel-placeholder.mp4" tag="video" />
        </div>
      </section>
    </div>
  );
}