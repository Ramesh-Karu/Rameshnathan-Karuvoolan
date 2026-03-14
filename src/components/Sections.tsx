import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Trophy, Heart, Code, Cpu, BarChart3, Layout, Lightbulb, Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Logo } from './Logo';
import { Profile3D } from './Profile3D';
import { AnimatePresence } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-2 pb-4 overflow-hidden">
      <div className="relative z-0 mt-24 mb-4 shrink-0 flex items-center justify-center">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <Profile3D imageUrl="https://image2url.com/r2/default/images/1773422220521-700211c6-8f69-434c-8846-9be22c586198.jpg" />
          
          {/* Buttons */}
          <div className="absolute inset-0 flex flex-col justify-between p-0 items-center">
            <div className="flex justify-between">
              <motion.a href="https://github.com/Rameshnathan" target="_blank" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="p-3 rounded-full glass-panel text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all">
                <Github size={20} />
              </motion.a>
              <motion.a href="mailto:rameshnathankaruvoolan10@gmail.com" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="p-3 rounded-full glass-panel text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all">
                <Mail size={20} />
              </motion.a>
            </div>
            <div className="flex justify-between">
              <motion.a href="https://linkedin.com/in/Rameshnathan" target="_blank" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }} className="p-3 rounded-full glass-panel text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all">
                <Linkedin size={20} />
              </motion.a>
              <motion.a href="https://wa.me/919360877546" target="_blank" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }} className="p-3 rounded-full glass-panel text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all">
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 flex-grow flex flex-col justify-center"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full glass-panel text-neon-cyan text-sm font-medium tracking-wider uppercase border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,242,255,0.2)]"
        >
          <span className="animate-pulse">●</span> GDG Hackathon Winner 2024
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tighter leading-tight">
          <span className="block bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent neon-text-glow uppercase">
            Rameshnathan
          </span>
          <span className="block text-white uppercase relative group">
            Karuvoolan
            <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,242,255,0.2)_50%,transparent_100%)] bg-[length:100%_10px] animate-scan" />
            </div>
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/60 font-space font-light mb-8 leading-relaxed tracking-wide">
          Student Developer | Tech Visionary | Open Source Contributor
        </p>
        
        <div className="flex flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mt-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 242, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-neon-cyan text-black font-bold rounded-full flex items-center justify-center gap-2 transition-all group"
          >
            Explore <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(0, 242, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-bold rounded-full border border-white/20 transition-all"
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-black mb-8 uppercase tracking-tighter">
              The <span className="text-neon-purple">Vision</span> Behind The Code
            </h2>
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-neon-cyan/30 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-purple" />
              <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xl text-white/80 font-space leading-relaxed mb-6 relative z-10">
                A passionate student developer focused on building AI-driven digital systems that solve real-world problems in education, health, and community technology.
              </p>
              <p className="text-white/60 font-space leading-relaxed relative z-10">
                As a GDG Hackathon winner, I bridge the gap between community leadership and technical innovation. My journey is driven by the desire to create tools that empower communities.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="relative z-10 w-full h-full glass-panel rounded-3xl border border-white/10 flex items-center justify-center p-12 overflow-hidden">
              <div className="absolute inset-0 bg-neon-cyan/5 opacity-20" />
              <div className="grid grid-cols-2 gap-6 w-full relative z-10">
                {[
                  { label: "Innovation", icon: Lightbulb, color: "text-neon-cyan" },
                  { label: "Leadership", icon: Heart, color: "text-red-500" },
                  { label: "Development", icon: Code, color: "text-neon-purple" },
                  { label: "Community", icon: Trophy, color: "text-yellow-500" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-6 glass-panel rounded-2xl border border-white/5 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all group">
                    <item.icon className={cn("w-10 h-10 transition-transform group-hover:scale-110", item.color)} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors font-mono">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Health Guard",
      desc: "AI-powered student health monitoring platform featuring BMI tracking, growth analysis, and QR digital health passbooks.",
      tags: ["AI", "React", "Firebase", "QR Tech"],
      icon: Heart,
      color: "from-red-500/20 to-red-900/20",
      borderColor: "border-red-500/30"
    },
    {
      title: "Fuel Pass System",
      desc: "QR-based fuel distribution platform with real-time analytics dashboards for efficient resource management.",
      tags: ["Analytics", "Node.js", "QR Code"],
      icon: Cpu,
      color: "from-neon-cyan/20 to-neon-blue/20",
      borderColor: "border-neon-cyan/30"
    },
    {
      title: "Hackathon Innovations",
      desc: "A collection of rapid prototypes developed during GDG hackathons, focusing on community impact and AI integration.",
      tags: ["Hackathon", "Innovation", "Rapid Prototyping"],
      icon: Trophy,
      color: "from-neon-purple/20 to-indigo-900/20",
      borderColor: "border-neon-purple/30"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-black mb-4 uppercase tracking-tighter">Featured <span className="text-neon-cyan">Projects</span></h2>
            <p className="text-white/40 font-space max-w-md">Exploring the intersection of technology and human needs through digital systems.</p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/50 to-transparent hidden md:block mb-6 mx-8" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={cn(
                "group relative p-8 rounded-3xl glass-panel border overflow-hidden transition-all",
                project.borderColor
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", project.color)} />
              
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity animate-scan" />

              <div className="relative z-10">
                <div className="mb-6 p-4 inline-block rounded-2xl glass-panel border-white/10 group-hover:border-white/30 transition-all">
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                <p className="text-white/60 mb-8 line-clamp-3 font-space">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full glass-panel border-white/5 text-white/40 group-hover:text-white/80 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 py-3 rounded-xl glass-panel border-white/10 text-sm font-bold hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    View Demo
                  </button>
                  <button className="p-3 rounded-xl glass-panel border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all">
                    <Github size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Skills = () => {
  const skills = [
    { name: "Web Development", icon: Layout },
    { name: "AI Systems", icon: Cpu },
    { name: "Data Analytics", icon: BarChart3 },
    { name: "System Architecture", icon: Code },
    { name: "UI / UX Design", icon: Layout },
    { name: "Digital Innovation", icon: Lightbulb }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-black mb-6 uppercase tracking-tighter">Technical <span className="text-neon-purple">Arsenal</span></h2>
          <p className="text-white/40 font-space max-w-xl mx-auto">Mastering the tools of the future to build the systems of today.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, borderColor: "rgba(0, 242, 255, 0.4)", boxShadow: "0 0 20px rgba(0, 242, 255, 0.1)" }}
              className="flex flex-col items-center gap-4 p-8 glass-panel rounded-3xl border border-white/5 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-neon-cyan/20 transition-all relative z-10">
                <skill.icon className="w-8 h-8 text-white/60 group-hover:text-neon-cyan transition-colors" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-center text-white/40 group-hover:text-white transition-colors relative z-10 font-mono">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Achievements = () => {
  const stats = [
    { icon: Trophy, label: "GDG Hackathon", value: "Winner", color: "text-neon-cyan" },
    { icon: Heart, label: "Community", value: "Leader", color: "text-red-500" },
    { icon: Code, label: "Projects", value: "25+", color: "text-neon-purple" }
  ];

  return (
    <section className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 group"
            >
              <div className="p-5 rounded-2xl glass-panel border border-white/5 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <stat.icon className={cn("w-8 h-8 relative z-10", stat.color)} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-1 font-mono">{stat.label}</p>
                <p className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-neon-cyan transition-colors">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-6 md:p-12 rounded-[32px] md:rounded-[40px] border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-black mb-4 md:mb-6 uppercase tracking-tighter">Let's <span className="text-neon-cyan">Connect</span></h2>
              <p className="text-white/60 font-space mb-8 md:mb-10 text-sm md:text-base">
                Interested in collaboration or have a visionary project in mind? Reach out and let's build something extraordinary.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@rameshnathan.dev" },
                  { icon: Linkedin, label: "LinkedIn", value: "rameshnathan-k" },
                  { icon: Github, label: "GitHub", value: "rameshnathan-dev" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4 group cursor-pointer">
                    <div className="p-2 md:p-3 rounded-xl glass-panel border-white/5 group-hover:border-neon-cyan/30 transition-all">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-neon-cyan transition-colors" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.label}</p>
                      <p className="text-white text-xs md:text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <form className="space-y-3 md:space-y-4">
              <div className="space-y-1 md:space-y-2">
                <label className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2 font-mono">NAME_INPUT</label>
                <input 
                   type="text" 
                   className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl glass-panel border border-white/5 focus:border-neon-cyan/50 focus:shadow-[0_0_15px_rgba(0,242,255,0.1)] outline-none transition-all text-white font-space text-sm"
                   placeholder="John Doe"
                />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2 font-mono">EMAIL_INPUT</label>
                <input 
                   type="email" 
                   className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl glass-panel border border-white/5 focus:border-neon-cyan/50 focus:shadow-[0_0_15px_rgba(0,242,255,0.1)] outline-none transition-all text-white font-space text-sm"
                   placeholder="john@example.com"
                />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2 font-mono">MESSAGE_INPUT</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl glass-panel border border-white/5 focus:border-neon-cyan/50 focus:shadow-[0_0_15px_rgba(0,242,255,0.1)] outline-none transition-all text-white resize-none font-space text-sm"
                  placeholder="Your visionary idea..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#00f2ff", color: "#000" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 md:py-4 bg-white text-black font-bold rounded-xl md:rounded-2xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] text-sm"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Navbar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Innovations', path: '/innovations' },
    { name: 'Space & Tech', path: '/space-tech' },
    { name: 'Books', path: '/books' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 md:px-6 py-2 md:py-2.5 glass-panel rounded-full border border-white/10 flex items-center gap-4 md:gap-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden"
      >
        <Link to="/" className="relative group flex items-center shrink-0 pl-2">
          <Logo className="text-lg md:text-xl" />
          <div className="absolute -inset-2 bg-neon-cyan/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
        
        <div className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-[9px] uppercase tracking-[0.2em] font-bold transition-colors relative group",
                location.pathname === item.path ? "text-neon-cyan" : "text-white/60 hover:text-neon-cyan"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-px bg-neon-cyan transition-all",
                location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[45] bg-[#050505]/95 backdrop-blur-2xl lg:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-8 items-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-display font-black uppercase tracking-tighter transition-colors",
                      location.pathname === item.path ? "text-neon-cyan" : "text-white/40 hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
