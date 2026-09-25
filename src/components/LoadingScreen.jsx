import { useEffect, useState } from "react";
import personalData from "../data/personalData";
import "./LoadingScreen.css";

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    // Short, deterministic fake-load so we never block on decorative assets.
    const duration = 1400;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.floor(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setLeaving(true);
          setTimeout(onDone, 480);
        }, 220);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div className={`loading-screen ${leaving ? "loading-screen--leave" : ""}`} role="status" aria-live="polite">
      <div className="loading-screen__grid" aria-hidden="true" />
      <div className="loading-screen__content">
        <div className="loading-screen__title">{personalData.siteTitle.toUpperCase()}</div>
        <div className="loading-screen__status">INITIALIZING SYSTEMS...</div>
        <div className="loading-screen__bar-track">
          <div className="loading-screen__bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="loading-screen__percent">{progress}%</div>
      </div>
    </div>
  );
}
