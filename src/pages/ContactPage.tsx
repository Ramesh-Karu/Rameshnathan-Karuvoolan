import React from 'react';
import { motion } from 'motion/react';
import { Contact } from '../components/Sections';

export const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 md:pt-32 pb-10"
    >
      <div className="px-6">
        <h1 className="max-w-4xl mx-auto text-4xl md:text-7xl font-display font-black mb-8 md:mb-12 uppercase tracking-tighter text-center md:text-left">
          Get In <span className="text-neon-purple">Touch</span>
        </h1>
      </div>
      <Contact />
    </motion.div>
  );
};
