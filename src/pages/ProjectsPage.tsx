import React from 'react';
import { motion } from 'motion/react';
import { Projects } from '../components/Sections';

export const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 md:pt-32 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-black mb-12 uppercase tracking-tighter">
          My <span className="text-neon-cyan">Projects</span>
        </h1>
        <Projects />
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-neon-blue">Upcoming Ventures</h3>
            <p className="text-white/60 font-space">
              Currently working on a decentralized identity system for student credentials and an AI-driven research assistant for academic publications.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-neon-purple">Tech Stack</h3>
            <p className="text-white/60 font-space">
              My primary stack includes React, TypeScript, Node.js, and various AI models (Gemini, OpenAI). I also have experience with Three.js for immersive web experiences.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
