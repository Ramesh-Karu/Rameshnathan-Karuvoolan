import React from 'react';
import { motion } from 'motion/react';
import { Book, Bookmark, Library, BookOpen } from 'lucide-react';

export const BooksPage = () => {
  const books = [
    {
      title: "The Digital Frontier",
      desc: "An exploration of how AI and community technology are reshaping our social landscape.",
      year: "2025",
      type: "Hardcover / E-Book",
      icon: BookOpen
    },
    {
      title: "Code for Community",
      desc: "A guide for student developers looking to make a real-world impact through open source.",
      year: "2024",
      type: "Digital Edition",
      icon: Library
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
          Book <span className="text-neon-cyan">Releases</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {books.map((book, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <book.icon size={120} />
              </div>
              <div className="relative z-10">
                <div className="mb-6 p-4 inline-block rounded-2xl bg-white/5 text-neon-cyan">
                  <book.icon size={32} />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold">{book.title}</h3>
                  <span className="text-neon-cyan font-mono text-xs">{book.year}</span>
                </div>
                <p className="text-white/60 mb-8 font-space leading-relaxed">{book.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/30">{book.type}</span>
                  <button className="px-6 py-2 rounded-full glass-panel border-white/10 text-xs font-bold hover:bg-white hover:text-black transition-all">
                    Pre-order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
