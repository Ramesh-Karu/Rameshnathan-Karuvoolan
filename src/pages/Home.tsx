import React from 'react';
import { motion } from 'motion/react';
import { Hero, Achievements, About, Projects, Skills, Contact } from '../components/Sections';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10"
    >
      <Hero />
      <Achievements />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  );
};
