import { Suspense, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function MercedesModel({ hovered }) {
  const group = useRef(null);

  const { scene } = useGLTF("/models/mercedes-w13.glb");

  const [modelScale, setModelScale] = useState(1);

  // --------------------------------
  // DRAG ROTATION STATE
  // --------------------------------

  const isDragging = useRef(false);
  const lastPointerX = useRef(0);
  const targetRotationY = useRef(0);

  // --------------------------------
  // PREPARE MODEL
  // --------------------------------

  useEffect(() => {
    if (!scene) return;

    const box = new THREE.Box3().setFromObject(scene);

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    // Center model
    scene.position.sub(center);

    // Calculate scale
    const maxDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    if (maxDimension > 0) {
      const targetSize = 5.0;

      setModelScale(
        targetSize / maxDimension
      );
    }

    // Enable shadows
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;

        if (object.material) {
          object.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  // --------------------------------
  // POINTER DOWN
  // --------------------------------

  const handlePointerDown = (event) => {
    isDragging.current = true;

    lastPointerX.current =
      event.clientX ?? event.touches?.[0]?.clientX ?? 0;
  };

  // --------------------------------
  // POINTER MOVE
  // --------------------------------

  const handlePointerMove = (event) => {
    if (!isDragging.current) return;

    const currentX =
      event.clientX ??
      event.touches?.[0]?.clientX ??
      0;

    const deltaX =
      currentX - lastPointerX.current;

    lastPointerX.current = currentX;

    // Drag sensitivity
    targetRotationY.current +=
      deltaX * 0.012;
  };

  // --------------------------------
  // POINTER UP
  // --------------------------------

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  // --------------------------------
  // POINTER LEAVE
  // --------------------------------

  const handlePointerLeave = () => {
    isDragging.current = false;
  };

  // --------------------------------
  // FRAME ANIMATION
  // --------------------------------

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    // --------------------------------
    // SMOOTH DRAG ROTATION
    // --------------------------------

    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotationY.current,
        0.12
      );

    // --------------------------------
    // FLOATING ANIMATION
    // --------------------------------

    group.current.position.y =
      1.0 +
      Math.sin(t * 1.2) * 0.08;

    // --------------------------------
    // HOVER SCALE
    // --------------------------------

    const targetScale =
      hovered ? 1.05 : 1;

    const finalScale =
      modelScale * targetScale;

    group.current.scale.lerp(
      new THREE.Vector3(
        finalScale,
        finalScale,
        finalScale
      ),
      0.08
    );
  });

  return (
    <group
      ref={group}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerLeave}
    >
      <primitive
        object={scene}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}


// --------------------------------
// FALLBACK WHILE MODEL LOADS
// --------------------------------

function FallbackCar() {
  return (
    <mesh>
      <boxGeometry
        args={[3, 0.5, 1]}
      />

      <meshStandardMaterial
        color="#c40500"
      />
    </mesh>
  );
}


// --------------------------------
// MAIN F1 CAR COMPONENT
// --------------------------------

export default function F1Car({
  hovered = false
}) {
  return (
    <Suspense
      fallback={<FallbackCar />}
    >
      <MercedesModel
        hovered={hovered}
      />
    </Suspense>
  );
}


// --------------------------------
// PRELOAD MODEL
// --------------------------------

useGLTF.preload(
  "/models/mercedes-w13.glb"
);