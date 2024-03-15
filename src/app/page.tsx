// import videosrc from "@/app/assets/video/video-sistemas-de-agua-2018.mov";

import About from "./components/About";
import Footer from "./components/Footer";
import IntroReel from "./components/IntroReel";
import Prices from "./components/Prices";
import Production from "./components/Production";
import Taller from "./components/Taller";
import VideoCorporativo from "./components/VideoCorporativo";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="home">
      <div className="main-content">
        <IntroReel />
        <About />
        <VideoCorporativo />
        <Production />
        <Prices />
        <Taller />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
