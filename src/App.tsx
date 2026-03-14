import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Scene } from './components/Scene';
import { Navbar } from './components/Sections';
import { FloatingNavIcon } from './components/FloatingNavIcon';
import { IntroAnimation } from './components/IntroAnimation';
import { BinaryBackground } from './components/BinaryBackground';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { InnovationsPage } from './pages/InnovationsPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { ContactPage } from './pages/ContactPage';
import { BooksPage } from './pages/BooksPage';
import { SpaceTechPage } from './pages/SpaceTechPage';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { ProtectedRoute } from './components/ProtectedRoute';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (showIntro) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [showIntro]);

  return (
    <Router>
      <ScrollToTop />
      <main className="relative min-h-screen font-sans selection:bg-neon-cyan selection:text-black">
        <div className="fixed inset-0 bg-[#050505] -z-20" />
        <BinaryBackground />
        <AnimatePresence mode="wait">
          {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} key="intro" />}
        </AnimatePresence>

        <Scene />
        <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <FloatingNavIcon isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/innovations" element={<InnovationsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/space-tech" element={<SpaceTechPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login-secret" element={<Login />} />
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          </Routes>
        </AnimatePresence>
        
        <footer className="py-12 px-6 border-t border-white/5 text-center relative z-10">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">
            &copy; 2026 Rameshnathan Karuvoolan &bull; Built for the Future
          </p>
        </footer>
        
        {/* Decorative elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </main>
    </Router>
  );
}
