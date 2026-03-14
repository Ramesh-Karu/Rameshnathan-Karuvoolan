import React, { useRef, useMemo, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere, Float, Ring } from '@react-three/drei';
import * as THREE from 'three';

const DigitalHUD = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [opacity, setOpacity] = useState(0.3);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z -= 0.005;
      setOpacity(0.2 + Math.sin(state.clock.elapsedTime * 4) * 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <Ring args={[3.2, 3.22, 128]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#00f2ff" transparent opacity={opacity * 0.5} side={THREE.DoubleSide} />
      </Ring>
      {Array.from({ length: 12 }).map((_, i) => (
        <Ring 
          key={i} 
          args={[3.3, 3.35, 32, 1, (i * Math.PI * 2) / 12, Math.PI / 12]} 
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial color="#00f2ff" transparent opacity={opacity} side={THREE.DoubleSide} />
        </Ring>
      ))}
    </group>
  );
};

const ConnectionLine = () => {
  const lineRef = useRef<THREE.LineSegments>(null);
  const points = useMemo(() => {
    const pts = [];
    const r = 2.1;
    for (let i = 0; i < 2; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      pts.push(
        r * Math.sin(theta) * Math.cos(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(theta)
      );
    }
    return new Float32Array(pts);
  }, []);

  useFrame(() => {
    if (lineRef.current) {
      lineRef.current.rotation.y += 0.005;
    }
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes.position" args={[points, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#00f2ff" transparent opacity={0.2} />
    </lineSegments>
  );
};

export const FuturisticEarth = ({ warp = false }: { warp?: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const scannerRef = useRef<THREE.Mesh>(null);
  
  const [earthTexture, nightTexture, cloudTexture] = useLoader(THREE.TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
  ]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      if (warp) {
        meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 25, 0.08));
      } else {
        meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 1, 0.05));
      }
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y += 0.003;
      if (warp) {
        cloudRef.current.scale.setScalar(THREE.MathUtils.lerp(cloudRef.current.scale.x, 25.1, 0.08));
      } else {
        cloudRef.current.scale.setScalar(THREE.MathUtils.lerp(cloudRef.current.scale.x, 1, 0.05));
      }
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.02;
      ringRef.current.rotation.x = Math.sin(t) * 0.5;
    }
    if (scannerRef.current) {
      scannerRef.current.position.y = Math.sin(t * 0.5) * 2.2;
      scannerRef.current.rotation.y += 0.01;
    }
    if (glowRef.current) {
      const s = 1.05 + Math.sin(t * 2) * 0.02;
      glowRef.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <DigitalHUD />
        <Sphere args={[2, 64, 64]} ref={meshRef}>
          <meshStandardMaterial 
            color="#00f2ff"
            wireframe
            transparent
            opacity={0.4}
          />
        </Sphere>
        <Sphere args={[2.01, 64, 64]}>
          <meshBasicMaterial color="#00f2ff" wireframe transparent opacity={0.1} />
        </Sphere>
        <Sphere args={[2.05, 64, 64]} ref={cloudRef}>
          <meshStandardMaterial map={cloudTexture} transparent opacity={0.3} depthWrite={false} color="#00f2ff" />
        </Sphere>
        <Sphere args={[2.15, 64, 64]} ref={glowRef}>
          <meshBasicMaterial color="#00f2ff" transparent opacity={0.1} side={THREE.BackSide} />
        </Sphere>
        <Ring args={[2.2, 2.22, 64]} ref={scannerRef} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#00f2ff" transparent opacity={0.6} side={THREE.DoubleSide} />
        </Ring>
        <Ring args={[2.6, 2.65, 64]} ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#bc13fe" transparent opacity={0.4} side={THREE.DoubleSide} />
        </Ring>
        <Ring args={[2.8, 2.82, 64]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <meshBasicMaterial color="#00f2ff" transparent opacity={0.2} side={THREE.DoubleSide} />
        </Ring>
      </Float>
      <group>
        {Array.from({ length: 20 }).map((_, i) => (
          <ConnectionLine key={i} />
        ))}
      </group>
    </group>
  );
};

export const DataStream = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 100;
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      spd[i] = 0.02 + Math.random() * 0.05;
    }
    return [pos, spd];
  }, []);

  useFrame(() => {
    if (pointsRef.current?.geometry?.attributes?.position) {
      const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] -= speeds[i];
        if (pos[i * 3 + 1] < -5) pos[i * 3 + 1] = 5;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes.position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00f2ff" transparent opacity={0.4} />
    </points>
  );
};

export const OrbitingParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1000;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const color1 = new THREE.Color("#00f2ff");
    const color2 = new THREE.Color("#bc13fe");
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 4;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      pos[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(theta);
      const mixedColor = color1.clone().lerp(color2, Math.random());
      cols[i * 3] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }
    return [pos, cols];
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes.position" args={[positions, 3]} />
        <bufferAttribute attach="attributes.color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.6} />
    </points>
  );
};
