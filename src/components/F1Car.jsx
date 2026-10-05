import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function MercedesModel({ hovered }) {
  const group = useRef(null);

  const { scene } = useGLTF("/models/mercedes-w13.glb");

  const [modelScale, setModelScale] = useState(1);

  const isDragging = useRef(false);
  const lastPointerX = useRef(0);
  const targetRotationY = useRef(0);

  useEffect(() => {
    if (!scene) return;

    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    scene.position.sub(center);

    const maxDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    if (maxDimension > 0) {
      setModelScale(5.0 / maxDimension);
    }

    scene.traverse((object) => {
      if (!object.isMesh) return;

      object.castShadow = true;
      object.receiveShadow = true;

      if (object.material) {
        object.material.needsUpdate = true;
      }
    });
  }, [scene]);

  const handlePointerDown = (event) => {
    isDragging.current = true;
    lastPointerX.current = event.clientX ?? 0;
    event.stopPropagation();
  };

  const handlePointerMove = (event) => {
    if (!isDragging.current) return;

    const currentX = event.clientX ?? 0;
    const deltaX = currentX - lastPointerX.current;

    lastPointerX.current = currentX;

    targetRotationY.current += deltaX * 0.012;

    event.stopPropagation();
  };

  const handlePointerUp = (event) => {
    isDragging.current = false;
    event.stopPropagation();
  };

  const handlePointerCancel = () => {
    isDragging.current = false;
  };

  const handlePointerLeave = () => {
    isDragging.current = false;
  };

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    // Slowly return to the normal position
    if (!isDragging.current) {
      targetRotationY.current = THREE.MathUtils.lerp(
        targetRotationY.current,
        0,
        0.018
      );
    }

    // Smooth rotation
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetRotationY.current,
      0.12
    );

    // Floating animation
    group.current.position.y =
      1.0 + Math.sin(t * 1.2) * 0.08;

    // Hover scale
    const targetScale = hovered ? 1.05 : 1;
    const finalScale = modelScale * targetScale;

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
      onPointerCancel={handlePointerCancel}
      onPointerLeave={handlePointerLeave}
    >
      <primitive
        object={scene}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

export default function F1Car({ hovered = false }) {
  return (
    <MercedesModel hovered={hovered} />
  );
}

useGLTF.preload("/models/mercedes-w13.glb");