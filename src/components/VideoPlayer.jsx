import { useRef, useState, useEffect } from "react";
import VideoMP from "../assets/video.mp4";
import backward from "../assets/backward.png";
import forward from "../assets/forward.png";
import play from "../assets/play.png";
import pause from "../assets/pause.png";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", () =>
        setCurrentTime(video.currentTime)
      );
      video.addEventListener("loadedmetadata", () =>
        setDuration(video.duration)
      );
    }
  }, []);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const skipTime = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime += time;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="videoContainer relative rounded-[34px] overflow-hidden p-1.5 bg-white w-fit h-full shadow-[0_0_34.5px_0_#FFB2B2]">
      <video
        ref={videoRef}
        className="video w-full h-full object-cover rounded-[34px] overflow-hidden"
        src={VideoMP}
      ></video>
      <div className="controlsContainer">
        <div className="controls absolute top-1/2 left-1/2 -translate-1/2 w-full flex justify-evenly">
          <img
            className="controlsIcon"
            alt="Backward"
            src={backward}
            onClick={() => skipTime(-5)}
          />
          {playing ? (
            <img
              onClick={() => videoHandler("pause")}
              className="controlsIcon--small"
              alt="Pause"
              src={pause}
            />
          ) : (
            <img
              onClick={() => videoHandler("play")}
              className="controlsIcon--small"
              alt="Play"
              src={play}
            />
          )}
          <img
            className="controlsIcon"
            alt="Forward"
            src={forward}
            onClick={() => skipTime(5)}
          />
        </div>
      </div>
      <div className="timecontrols px-3.5">
        <p className="controlsTime">{formatTime(currentTime)}</p>
        <div className="time_progressbarContainer w-[40.5vw]">
          <div
            style={{ width: `${(currentTime / duration) * 100}%` }}
            className="time_progressBar"
          ></div>
        </div>
        <p className="controlsTime">{formatTime(duration)}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
