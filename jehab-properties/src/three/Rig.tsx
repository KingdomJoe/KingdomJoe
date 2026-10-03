import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Subtle pointer parallax: the camera eases toward the pointer so the model
 * feels present and tactile without hijacking scroll or requiring controls.
 * Disabled for reduced-motion users.
 */
export function Rig({ children }: { children?: React.ReactNode }) {
  const group = React.useRef<THREE.Group>(null);
  const pointer = React.useRef({ x: 0, y: 0 });
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  React.useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduced]);

  useFrame((state, delta) => {
    if (!group.current || reduced) return;
    // Gentle continuous rotation for a living maquette.
    group.current.rotation.y += delta * 0.12;

    const k = 1 - Math.pow(0.001, delta);
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      pointer.current.y * 0.08,
      2,
      delta,
    );
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      pointer.current.x * 0.35,
      2,
      delta,
    );
    void state;
    void k;
  });

  return <group ref={group}>{children}</group>;
}
