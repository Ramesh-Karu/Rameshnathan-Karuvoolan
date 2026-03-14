import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Float, Ring } from '@react-three/drei';
import * as THREE from 'three';

export const WireframeEarth = ({ warp = false }: { warp?: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      if (warp) {
        meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 20, 0.05));
      }
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.01;
      ringRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* Main Wireframe Sphere */}
        <Sphere args={[2, 32, 32]} ref={meshRef}>
          <meshBasicMaterial color="#00f2ff" wireframe transparent opacity={0.3} />
        </Sphere>
        
        {/* Inner Glow */}
        <Sphere args={[1.9, 32, 32]}>
          <meshBasicMaterial color="#00f2ff" transparent opacity={0.1} />
        </Sphere>

        {/* Orbiting Rings */}
        <group ref={ringRef}>
          <Ring args={[2.5, 2.55, 64]} rotation={[Math.PI / 2, 0, 0]}>
            <meshBasicMaterial color="#bc13fe" transparent opacity={0.5} side={THREE.DoubleSide} />
          </Ring>
          <Ring args={[2.8, 2.85, 64]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
            <meshBasicMaterial color="#00f2ff" transparent opacity={0.3} side={THREE.DoubleSide} />
          </Ring>
        </group>
      </group>
    </Float>
  );
};
