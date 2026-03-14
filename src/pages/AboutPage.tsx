import React from 'react';
import { motion } from 'motion/react';
import { About } from '../components/Sections';

export const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 md:pt-32 pb-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-black mb-12 uppercase tracking-tighter">
          About <span className="text-neon-cyan">Me</span>
        </h1>
        <About />
        <div className="mt-20 glass-panel p-8 rounded-3xl border border-white/10">
          <h3 className="text-2xl font-display font-bold mb-6 text-neon-purple">My Journey</h3>
          <p className="text-white/70 font-space leading-relaxed mb-6">
            I am a dedicated student developer with a passion for creating intelligent systems. My journey started with a curiosity about how things work under the hood, which led me to dive deep into web development, AI, and community leadership.
          </p>
          <p className="text-white/70 font-space leading-relaxed">
            Winning the GDG Hackathon 2024 was a turning point, validating my approach to solving real-world problems through technology. I believe in the power of open source and community-driven innovation.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
