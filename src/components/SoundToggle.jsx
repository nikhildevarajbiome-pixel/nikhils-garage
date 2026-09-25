import { useRef, useState } from "react";
import "./SoundToggle.css";

/**
 * Ambient sound toggle. Off by default — nothing plays until the
 * visitor explicitly clicks it, in line with browser autoplay rules.
 * Drop an ambient loop at /public/audio/ambience.mp3 to use this;
 * if the file is missing, the button still works but stays silent.
 */
export default function SoundToggle() {
  const audioRef = useRef(null);
  const [on, setOn] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (on) {
      audio.pause();
    } else {
      audio.volume = 0.35;
      audio.play().catch(() => {
        /* file not present yet — fails silently */
      });
    }
    setOn(!on);
  };

  return (
    <>
      {/* ADD YOUR AMBIENT AUDIO HERE — /public/audio/ambience.mp3 */}
      <audio ref={audioRef} src="/audio/ambience.mp3" loop preload="none" />
      <button
        className={`sound-toggle ${on ? "sound-toggle--on" : ""}`}
        onClick={toggle}
        aria-pressed={on}
        aria-label={on ? "Turn sound off" : "Turn sound on"}
      >
        <span className="sound-toggle__bar" />
        <span className="sound-toggle__bar" />
        <span className="sound-toggle__bar" />
      </button>
    </>
  );
}
