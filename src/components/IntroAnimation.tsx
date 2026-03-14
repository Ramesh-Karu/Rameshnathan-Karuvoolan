import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette, Noise } from '@react-three/postprocessing';
import * as THREE from 'three';
import { WireframeEarth } from './WireframeEarth';
import { DataStream, OrbitingParticles } from './Earth';

const CameraController = ({ warp }: { warp: boolean }) => {
  useFrame((state) => {
    if (warp) {
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 0.05, 0.1);
      (state.camera as THREE.PerspectiveCamera).fov = THREE.MathUtils.lerp((state.camera as THREE.PerspectiveCamera).fov, 180, 0.1);
      state.camera.updateProjectionMatrix();
    } else {
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 5, 0.05);
    }
  });
  return null;
};

const GlitchText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split('').map((char, index) => {
        if (index < iterations) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));
      
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1/2;
    }, 15);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="font-mono">{displayText}</span>;
};

export const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [warp, setWarp] = useState(false);
  const [flash, setFlash] = useState(false);
  
  const texts = [
    "INITIALIZING SYSTEM...",
    "LOADING INTERFACE...",
    "PREPARING EXPERIENCE...",
    "WELCOME"
  ];
  
  const currentTextIndex = Math.min(Math.floor((progress / 100) * texts.length), texts.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Glitchy increment
        const jump = Math.random() > 0.8 ? Math.random() * 15 : Math.random() * 5;
        return Math.min(100, prev + jump);
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setWarp(true), 200);
      setTimeout(() => setFlash(true), 800);
      setTimeout(onComplete, 1400);
    }
  }, [progress, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-[#020205] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* System Status Overlay */}
      <div className="absolute top-10 left-10 z-50 font-mono text-[10px] text-neon-cyan/40 space-y-1 hidden md:block">
        <p>SYSTEM_CORE: ACTIVE</p>
        <p>NEURAL_LINK: STABLE</p>
        <p>LOCATION: 37.7749° N, 122.4194° W</p>
        <p>ENCRYPTION: AES-256</p>
      </div>

      <div className="absolute top-10 right-10 z-50 font-mono text-[10px] text-neon-purple/40 text-right hidden md:block">
        <p>Uptime: {Math.floor(progress * 1234)}ms</p>
        <p>Packets: {Math.floor(progress * 42)}/100</p>
        <p>Signal: 98.4%</p>
      </div>

      {/* Digital Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat animate-grain" />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,242,255,0.05)_50%,transparent_100%)] bg-[length:100%_4px]"
          animate={{ translateY: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <color attach="background" args={['#020205']} />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
          
        <React.Suspense fallback={<Sphere args={[2, 32, 32]}><meshBasicMaterial color="#00f2ff" wireframe opacity={0.1} transparent /></Sphere>}>
          <WireframeEarth warp={warp} />
        </React.Suspense>
          
          <DataStream />
          <OrbitingParticles />
          <Stars radius={100} depth={50} count={2000} factor={6} saturation={0.5} fade speed={2} />
          
          <CameraController warp={warp} />
          
          <EffectComposer>
            <Bloom intensity={1.5} luminanceThreshold={0.1} mipmapBlur />
            <ChromaticAberration offset={[0.002, 0.002] as any} />
            <Vignette eskil={false} offset={0.1} darkness={1.2} />
            <Noise opacity={0.1} />
          </EffectComposer>
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col items-center mt-[35vh]">
        <motion.div 
          className="text-neon-cyan font-display text-xs tracking-[0.8em] mb-6 h-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <GlitchText text={texts[currentTextIndex]} />
        </motion.div>

        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative border border-white/10 p-[1px]">
          <motion.div 
            className="h-full bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple shadow-[0_0_15px_rgba(0,242,255,0.6)] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        
        <motion.div 
          className="mt-3 text-white/30 font-mono text-[8px] tracking-[0.4em]"
        >
          SYNC_PROGRESS: {Math.floor(progress)}%
        </motion.div>
      </div>

      <AnimatePresence>
        {flash && (
          <motion.div 
            className="absolute inset-0 bg-white z-[110]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
;

