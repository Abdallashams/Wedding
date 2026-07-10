import { useRef, useState } from "react";
import "./intro.css";

function Intro({ onFinish, playMusic }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);

    playMusic?.();
    videoRef.current?.play();
  };

  return (
    <div className="intro">
 {!started && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
    <button
      onClick={handleStart}
      className="group relative overflow-hidden rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold tracking-wide text-white shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
    >
      <span className="relative z-10 flex items-center gap-3">
        🤍 Click to Open Our Invitation
      </span>

      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>
    </button>

    <p className="absolute bottom-14 text-center text-sm tracking-[0.3em] text-white/70">
      TAP TO BEGIN
    </p>
  </div>
)}
      <video
        ref={videoRef}
        playsInline
        onEnded={onFinish}
        style={{ display: started ? "block" : "none" }}
      >
        <source src="/videos/Door_Open - Trim.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Intro;