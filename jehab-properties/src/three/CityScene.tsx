import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, Float, Lightformer } from '@react-three/drei';

import { ArchvizModel } from './ArchvizModel';
import { Rig } from './Rig';

/**
 * Commercial section: the CC0 skyscraper rendered as a tall monochrome
 * maquette, framed by trees, for the "Commercial & Investment" division.
 */
export function CityScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      performance={{ min: 0.5 }}
      camera={{ position: [0, 2.6, 9.5], fov: 30 }}
      className="!bg-transparent"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 10, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-7, 4, -6]} intensity={0.8} color="#93c5fd" />

      <Rig>
        <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.35}>
          <ArchvizModel url="/models/tower-commercial.glb" scale={0.62} position={[0, -2.1, 0]} />
          <ArchvizModel url="/models/tree-detailed.glb" scale={0.5} position={[-2.9, -2.1, 0.8]} />
          <ArchvizModel url="/models/tree-detailed.glb" scale={0.42} position={[2.9, -2.1, 0.5]} />

          <group position={[0, -2.18, 0]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[3.6, 3.8, 0.22, 72]} />
              <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.02} />
            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.12, 0]}>
              <ringGeometry args={[3.62, 3.72, 72]} />
              <meshBasicMaterial color="#2563eb" />
            </mesh>
          </group>
        </Float>
      </Rig>

      <ContactShadows position={[0, -2.42, 0]} opacity={0.3} scale={13} blur={2.6} far={3.2} color="#0b0d10" />

      <Environment resolution={64} frames={1}>
        <Lightformer intensity={2} position={[0, 5, -9]} scale={[10, 10, 1]} />
        <Lightformer intensity={1.2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} color="#93c5fd" />
        <Lightformer intensity={1.2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
      </Environment>
    </Canvas>
  );
}
