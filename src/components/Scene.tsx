import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PerspectiveCamera, Sphere } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette, Noise } from '@react-three/postprocessing';
import * as THREE from 'three';
import { DataStream, OrbitingParticles } from './Earth';

const CameraController = () => {
  useFrame((state) => {
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 8, 0.05);
  });
  return null;
};

export const Scene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        
        <DataStream />
        <OrbitingParticles />
        <Stars radius={100} depth={50} count={2000} factor={6} saturation={0.5} fade speed={2} />
        
        <CameraController />
        
        <EffectComposer>
          <Bloom intensity={1.5} luminanceThreshold={0.1} mipmapBlur />
          <ChromaticAberration offset={[0.002, 0.002] as any} />
          <Vignette eskil={false} offset={0.1} darkness={1.2} />
          <Noise opacity={0.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};
