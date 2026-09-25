import { useEffect, useState } from "react";

/**
 * Rough mobile/low-power device detection so we can dial back
 * expensive 3D effects (particle counts, DPR, blur) on phones.
 */
export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const narrow = window.innerWidth < 820;
      const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(narrow && touch || window.innerWidth < 600);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}
