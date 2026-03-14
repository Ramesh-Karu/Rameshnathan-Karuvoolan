import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, FileText, ExternalLink } from 'lucide-react';

export const PublicationsPage = () => {
  const publications = [
    {
      title: "AI in Community Health: A Case Study",
      journal: "Tech for Good Journal",
      year: "2024",
      link: "#"
    },
    {
      title: "Optimizing QR Systems for Rural Distribution",
      journal: "International Conference on Digital Systems",
      year: "2023",
      link: "#"
    },
    {
      title: "The Future of Student-Led Innovation",
      journal: "Educational Technology Review",
      year: "2023",
      link: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 md:pt-32 pb-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-black mb-12 uppercase tracking-tighter">
          Academic <span className="text-neon-cyan">Publications</span>
        </h1>
        
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-neon-cyan/30 transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-white/5 text-white/40 group-hover:text-neon-cyan transition-colors">
                  <FileText size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{pub.title}</h3>
                  <p className="text-white/40 text-sm font-space">
                    {pub.journal} &bull; {pub.year}
                  </p>
                </div>
              </div>
              <a 
                href={pub.link}
                className="flex items-center gap-2 text-neon-cyan font-bold uppercase text-xs tracking-widest hover:underline"
              >
                Read Paper <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
