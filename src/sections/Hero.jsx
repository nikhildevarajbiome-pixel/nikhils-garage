import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import F1Car from "../components/F1Car";
import Telemetry from "../components/Telemetry";
import personalData from "../data/personalData";
import useIsMobile from "../hooks/useIsMobile";
import "./Hero.css";

function ScrollCue() {
  return (
    <div className="hero__scroll-cue" aria-hidden="true">
      <span />
    </div>
  );
}

export default function Hero() {
  const isMobile = useIsMobile();

  const [hovered, setHovered] = useState(false);
  const [scrollT, setScrollT] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight;

      const t = Math.min(
        1,
        Math.max(
          0,
          window.scrollY / (h * 0.9)
        )
      );

      setScrollT(t);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const carLift = isMobile ? -65 : -115;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero section"
    >

      {/* =================================================
          3D MC LAREN
          ================================================= */}

      <div
        className="hero__canvas-wrap"
        style={{
          transform: `translateY(${scrollT * 40 + carLift}px) scale(${1 - scrollT * 0.08})`,
          opacity: 1 - scrollT * 0.8,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        <Canvas
          frameloop={isVisible ? "always" : "never"}
          dpr={isMobile ? [1, 1.2] : [1, 1.6]}
          camera={{
            position: [4.4, 1.6, 4.4],
            fov: 34,
          }}
          gl={{
            antialias: !isMobile,
            powerPreference: "high-performance",
          }}
        >

          {/* =================================================
              LIGHTING
              ================================================= */}

          <ambientLight
            intensity={isMobile ? 0.85 : 0.5}
          />

          <spotLight
            position={[6, 8, 4]}
            angle={0.35}
            penumbra={0.6}
            intensity={isMobile ? 2.0 : 1.4}
            castShadow
            color="#ffffff"
          />

          <pointLight
            position={[-5, 2, -4]}
            intensity={isMobile ? 1.5 : 1.1}
            color="#e10600"
          />

          <pointLight
            position={[3, -1, -3]}
            intensity={isMobile ? 0.8 : 0.5}
            color="#3a6bff"
          />

          {/* Extra front light for mobile */}
          {isMobile && (
            <pointLight
              position={[0, 3, 5]}
              intensity={1.3}
              distance={10}
              color="#ffffff"
            />
          )}

          <Suspense fallback={null}>

            {/* 3D MC LAREN */}
            <F1Car hovered={hovered} />

            {/* Environment lighting */}
            <Environment preset="city" />

            {/* Ground shadow */}
            <ContactShadows
              position={[0, -0.63, 0]}
              opacity={0.5}
              scale={10}
              blur={2.4}
              far={2}
            />

          </Suspense>

        </Canvas>

      </div>


      {/* =================================================
          HERO TEXT
          ================================================= */}

      <div className="hero__content container">

        <Telemetry>
          SYSTEM ONLINE
        </Telemetry>

        <h1 className="hero__title">
          {personalData.siteTitle}
        </h1>

        <p className="hero__tagline">
          {personalData.tagline}
        </p>

        <div className="hero__meta">

          <span>
            {personalData.nickname.toUpperCase()}
          </span>

          <span className="hero__meta-divider" />

          <span>
            {personalData.location.toUpperCase()}
          </span>

        </div>

      </div>

      {/* =================================================
          SCROLL CUE
          ================================================= */}

      <ScrollCue />

    </section>
  );
}