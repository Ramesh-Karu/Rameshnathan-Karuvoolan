import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const FloatingNavIcon = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) => {
  return (
    <motion.button
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      onClick={() => setIsOpen(!isOpen)}
      className="fixed top-4 right-4 md:right-6 z-[60] p-3 md:p-4 glass-panel rounded-full border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl text-white/80 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </motion.button>
  );
};
