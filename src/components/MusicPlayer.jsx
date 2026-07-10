import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = forwardRef((props, ref) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    playMusic() {
      audioRef.current?.play().catch(() => {});
      setPlaying(true);
    },
  }));

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/weddingMusic.m4a" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-[#c8a97e] text-white p-3 rounded-full"
      >
        {playing ? <Volume2 /> : <VolumeX />}
      </button>
    </>
  );
});

export default MusicPlayer;