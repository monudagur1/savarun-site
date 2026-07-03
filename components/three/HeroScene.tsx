'use client';

import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

function MonochromeOrb() {
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh scale={2.2}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color="#ffffff"
          roughness={0.15}
          metalness={0.85}
          distort={0.3}
          speed={1.2}
          wireframe
        />
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
      className="h-full w-full"
    >
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 4, 4]} intensity={0.6} />
      <MonochromeOrb />
    </Canvas>
  );
}
