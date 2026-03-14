import React from 'react';
import { motion } from 'motion/react';

export const Profile3D = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto flex items-center justify-center">
      {/* Profile Image Circle */}
      <div className="relative w-full h-full rounded-full border-4 border-neon-cyan/30 shadow-[0_0_50px_rgba(0,242,255,0.2)] overflow-hidden z-10">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Satellites Container */}
      {[0, 120, 240].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full"
          initial={{ rotate: angle }}
          animate={{ rotate: angle + 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neon-purple rounded-full shadow-[0_0_15px_rgba(188,19,254,0.8)]" />
        </motion.div>
      ))}
    </div>
  );
};
