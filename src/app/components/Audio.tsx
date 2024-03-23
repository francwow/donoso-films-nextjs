/* eslint-disable jsx-a11y/media-has-caption */
"use client";

import { useRef, useState } from "react";
import Btn from "./Btn";
import Icon from "./GoogleIcon";

const Audio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [active, setActive] = useState<"play" | "pause">("play");

  return (
    <div className="reel-audio">
      <Btn>
        <div>
          <button
            className={active === "play" ? "audio-play active" : "audio-play"}
            onClick={() => {
              audioRef.current?.play();
              setActive("pause");
            }}
          >
            <Icon icon="volume_off" />
          </button>
          <button
            className={active === "pause" ? "audio-stop active" : "audio-stop"}
            onClick={() => {
              audioRef.current?.pause();
              setActive("play");
            }}
          >
            <Icon icon="volume_up" />
          </button>
        </div>
      </Btn>
      <audio ref={audioRef} loop src="/audio/musica-reel.mp3"></audio>
    </div>
  );
};

export default Audio;
