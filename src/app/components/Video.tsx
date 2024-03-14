// import Icon from "./GoogleIcon";

type VideoProps = {
  videoSrc: string;
  // type: string;
  tag: string;
};

const Video = ({ videoSrc, tag }: VideoProps) => {
  return (
    <div className="video-container">
      {/* <div className="mute">
        <Icon icon="volume_off" />
      </div> */}
      <div className="video">
        {tag === "video" ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video
            width={1920}
            height={1080}
            src={videoSrc}
            preload="true"
            muted={true}
            loop
            playsInline
            autoPlay
          >
            <source src={videoSrc} type="video/mov" />
          </video>
        ) : (
          <iframe title="youtube-video" src={videoSrc} allowFullScreen />
        )}
      </div>
    </div>
  );
};

export default Video;
