import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <motion.div 
      className={cn("flex items-center font-mono text-xl md:text-2xl font-black cursor-pointer select-none group relative", className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-neon-cyan/60 group-hover:text-neon-cyan transition-colors duration-300 drop-shadow-[0_0_5px_rgba(0,242,255,0.5)]">&lt;</span>
      <span className="relative mx-1">
        <span className="text-white group-hover:text-neon-cyan transition-colors duration-300">RK</span>
        <motion.span 
          className="absolute inset-0 text-neon-purple opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1"
          aria-hidden="true"
        >
          RK
        </motion.span>
        <motion.span 
          className="absolute inset-0 text-neon-cyan opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2"
          aria-hidden="true"
        >
          RK
        </motion.span>
      </span>
      <span className="text-neon-purple/60 group-hover:text-neon-purple transition-colors duration-300 drop-shadow-[0_0_5px_rgba(188,19,254,0.5)]">/&gt;</span>
      
      {/* Subtle glowing shadow behind the logo */}
      <div className="absolute inset-0 bg-neon-cyan/0 group-hover:bg-neon-cyan/20 blur-xl rounded-full transition-colors duration-500 -z-10" />
    </motion.div>
  );
};
