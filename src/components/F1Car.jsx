import { Suspense, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function MercedesModel({ hovered }) {
  const group = useRef(null);

  const { scene } = useGLTF("/models/mercedes-w13.glb");

  const [modelScale, setModelScale] = useState(1);

  useEffect(() => {
    if (!scene) return;

    // --------------------------------
    // CALCULATE MODEL SIZE
    // --------------------------------

    const box = new THREE.Box3().setFromObject(scene);

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    // --------------------------------
    // CENTER THE MERCEDES
    // --------------------------------

    scene.position.sub(center);

    // --------------------------------
    // SCALE THE MERCEDES
    // --------------------------------

    const maxDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    if (maxDimension > 0) {
      // Car size
      const targetSize = 5.0;

      setModelScale(
        targetSize / maxDimension
      );
    }

    // --------------------------------
    // ENABLE SHADOWS
    // --------------------------------

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

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    // --------------------------------
    // SLOW AUTOMATIC ROTATION
    // --------------------------------

    const automaticRotation = t * 0.04;

    // --------------------------------
    // MOUSE LEFT / RIGHT ROTATION
    // --------------------------------

    const mouseRotation =
      pointer.x * 0.9;

    const targetRotation =
      automaticRotation + mouseRotation;

    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotation,
        0.08
      );

    // --------------------------------
    // MOUSE UP / DOWN TILT
    // --------------------------------

    const targetTilt =
      pointer.y * -0.08;

    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetTilt,
        0.06
      );

    // --------------------------------
    // FLOATING + HIGHER POSITION
    // --------------------------------

    group.current.position.y =
      1.0 + Math.sin(t * 1.2) * 0.08;

    // --------------------------------
    // HOVER EFFECT
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
    <group ref={group}>
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
// PRELOAD MERCEDES MODEL
// --------------------------------

useGLTF.preload(
  "/models/mercedes-w13.glb"
);