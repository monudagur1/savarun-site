'use client';

import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function MonochromeOrb() {
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.35}>
      <mesh scale={1.9}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#D4D4D8" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh scale={2.15} rotation={[0.4, 0.6, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#E4E4E7" wireframe transparent opacity={0.18} />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="h-full w-full opacity-80"
    >
      <ambientLight intensity={0.4} />
      <MonochromeOrb />
    </Canvas>
  );
}
