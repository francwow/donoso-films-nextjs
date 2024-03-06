type VideoProps = {
  videoSrc: string;
  // type: string;
  tag: string;
};

const Video = ({ videoSrc, tag }: VideoProps) => {
  return (
    <div className="video-container">
      <div className="video">
        {tag === "video" ? (
          <video
            width={1920}
            height={1080}
            src={videoSrc}
            preload="true"
            muted
            loop
            autoPlay
          ></video>
        ) : (
          <iframe title="youtube-video" src={videoSrc} allowFullScreen />
        )}
      </div>
    </div>
  );
};

export default Video;
