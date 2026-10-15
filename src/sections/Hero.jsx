import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import Telemetry from "../components/Telemetry";
import personalData from "../data/personalData";
import useIsMobile from "../hooks/useIsMobile";
import "./Hero.css";

const F1Car = lazy(() => import("../components/F1Car"));

class SceneErrorBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

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
  const [isVisible, setIsVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(!document.hidden);

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
    const updateVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
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

      const canvas = sectionRef.current?.querySelector(".hero__canvas-wrap");
      if (canvas) {
        canvas.style.transform = `translateY(${t * 40 + carLiftRef.current}px) scale(${1 - t * 0.08})`;
        canvas.style.opacity = String(1 - t * 0.8);
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const carLiftRef = useRef(isMobile ? -65 : -115);
  carLiftRef.current = isMobile ? -65 : -115;

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
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        <Canvas
          frameloop={isVisible && pageVisible ? "always" : "never"}
          dpr={isMobile ? 1 : [1, 1.35]}
          camera={{
            position: [4.4, 1.6, 4.4],
            fov: 34,
          }}
          gl={{
            antialias: !isMobile,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: true,
          }}
          fallback={null}
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
            castShadow={!isMobile}
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

          <SceneErrorBoundary>
          <Suspense fallback={null}>

            {/* 3D MC LAREN */}
            <F1Car hovered={hovered} />

            {/* Environment lighting */}
            <Environment preset="city" />

            {/* Ground shadow */}
            {!isMobile && <ContactShadows
              position={[0, -0.63, 0]}
              opacity={0.5}
              scale={10}
              blur={2.4}
              far={2}
            />}

          </Suspense>
          </SceneErrorBoundary>

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
