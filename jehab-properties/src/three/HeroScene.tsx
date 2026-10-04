import { Canvas } from '@react-three/fiber';
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
} from '@react-three/drei';

import { ArchvizModel } from './ArchvizModel';
import { Rig } from './Rig';

/**
 * Hero: a monochrome architectural maquette — the suburban house flanked by
 * trees on a floating plinth — rendered in pure white space with soft contact
 * shadows and a single blue accent. Fully offline (no CDN).
 */
export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      performance={{ min: 0.5 }}
      camera={{ position: [0, 2.4, 8.5], fov: 32 }}
      className="!bg-transparent"
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[6, 9, 5]} intensity={1.15} color="#ffffff" />
      {/* Blue rim to separate the maquette from the white void */}
      <directionalLight position={[-7, 4, -6]} intensity={0.7} color="#93c5fd" />

      <Rig>
        <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.5}>
          {/* Plinth */}
          <group position={[0, -1.42, 0]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[3.4, 3.6, 0.24, 72]} />
              <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.02} />
            </mesh>
            {/* Brand accent ring */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.13, 0]}>
              <ringGeometry args={[3.42, 3.52, 72]} />
              <meshBasicMaterial color="#2563eb" />
            </mesh>
          </group>

          {/* Hero house */}
          <ArchvizModel url="/models/house-suburban.glb" scale={0.9} position={[0, -1.28, 0]} />

          {/* Framing trees */}
          <ArchvizModel url="/models/tree-detailed.glb" scale={0.5} position={[-2.5, -1.3, 0.6]} />
          <ArchvizModel url="/models/tree-detailed.glb" scale={0.38} position={[2.55, -1.3, -0.4]} />
        </Float>
      </Rig>

      <ContactShadows
        position={[0, -1.72, 0]}
        opacity={0.32}
        scale={13}
        blur={2.6}
        far={3.2}
        color="#0b0d10"
      />

      {/* Procedural studio environment — no network fetch */}
      <Environment resolution={64} frames={1}>
        <Lightformer intensity={2} position={[0, 5, -9]} scale={[10, 10, 1]} />
        <Lightformer intensity={1.2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} color="#93c5fd" />
        <Lightformer intensity={1.2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
        <Lightformer type="ring" intensity={2} position={[0, 4, 9]} scale={6} />
      </Environment>
    </Canvas>
  );
}
