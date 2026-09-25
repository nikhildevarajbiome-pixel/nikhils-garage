import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import useIsMobile from "../hooks/useIsMobile";
import useReducedMotion from "../hooks/useReducedMotion";

function Planet({ position, size, color, speed }) {
  const ref = useRef(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.85} metalness={0.15} />
    </mesh>
  );
}

function DriftingScene({ reducedMotion }) {
  const group = useRef(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current || reducedMotion) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.008 + pointer.x * 0.05;
    group.current.rotation.x = pointer.y * 0.02;
  });

  return (
    <group ref={group}>
      <Stars radius={140} depth={60} count={2600} factor={3.2} saturation={0} fade speed={0.4} />
      <Planet position={[-9, 3, -26]} size={2.1} color="#3a3f47" speed={0.04} />
      <Planet position={[11, -4, -34]} size={3.4} color="#521a17" speed={0.02} />
      <Planet position={[4, 7, -42]} size={1.3} color="#6b6f76" speed={0.06} />
    </group>
  );
}

/**
 * Fixed, full-viewport Three.js canvas that sits behind all page content.
 * Purely atmospheric — pointer-events disabled so it never blocks clicks.
 */
export default function SpaceBackground() {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  return (
    <div className="space-background" aria-hidden="true">
      <Canvas
        dpr={isMobile ? [1, 1.2] : [1, 1.8]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 8], fov: 55 }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#ffffff" />
        <pointLight position={[-14, -6, -10]} intensity={0.4} color="#e10600" />
        <Suspense fallback={null}>
          <DriftingScene reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
      <div className="space-background__nebula" />
      <div className="space-background__vignette" />
    </div>
  );
}
