import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Satellite, Telescope, Cpu } from 'lucide-react';

export const SpaceTechPage = () => {
  const initiatives = [
    {
      title: "Mars Colony OS",
      desc: "Developing a decentralized operating system for future Martian settlements, focusing on resource management and low-latency communication.",
      icon: Rocket,
      tag: "Deep Space"
    },
    {
      title: "Orbital Mesh Network",
      desc: "A constellation of micro-satellites designed to provide high-speed internet to remote regions using quantum-safe encryption.",
      icon: Satellite,
      tag: "Connectivity"
    },
    {
      title: "Deep Space Analytics",
      desc: "Using AI to process petabytes of data from deep space telescopes to identify potentially habitable exoplanets.",
      icon: Telescope,
      tag: "Research"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 md:pt-32 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-black mb-12 uppercase tracking-tighter">
          Space & <span className="text-neon-purple">Tech</span>
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-6 p-4 inline-block rounded-2xl bg-white/5 text-neon-purple">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 mb-8 font-space leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full glass-panel border-white/10 flex items-center justify-center group-hover:border-neon-purple/50 transition-all">
                    <Rocket size={18} className="text-white/40 group-hover:text-neon-purple transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
