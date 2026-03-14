import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Zap, Rocket, Globe } from 'lucide-react';

export const InnovationsPage = () => {
  const innovations = [
    {
      title: "Neural-Sync Interface",
      desc: "A prototype for low-latency data synchronization between edge devices and cloud AI models.",
      icon: Zap,
      status: "In Development"
    },
    {
      title: "Eco-Track AI",
      desc: "An AI system designed to optimize energy consumption in community buildings using real-time sensor data.",
      icon: Globe,
      status: "Prototype"
    },
    {
      title: "Quantum-Safe Auth",
      desc: "Researching and implementing post-quantum cryptographic algorithms for secure user authentication.",
      icon: Rocket,
      status: "Research"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 md:pt-32 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-black mb-12 uppercase tracking-tighter">
          Future <span className="text-neon-purple">Innovations</span>
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {innovations.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <item.icon size={80} />
              </div>
              <div className="relative z-10">
                <div className="mb-6 p-4 inline-block rounded-2xl bg-white/5 text-neon-cyan">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 mb-6 font-space">{item.desc}</p>
                <span className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-[10px] font-bold uppercase tracking-widest">
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
