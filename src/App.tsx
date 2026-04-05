import { useEffect, useState } from 'react';
import './App.css';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Stats from './sections/Stats';
import Features from './sections/Features';
import Experience from './sections/Experience';
import ResumeSection from './sections/ResumeSection';
import Support from './sections/Support';
import Footer from './sections/Footer';
import FloatingNav from './components/FloatingNav';
import ContactModal from './components/ContactModal';
import ClickBombEffect from './components/ClickBombEffect';

function App() {
  const [showNav, setShowNav] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen text-slate-900 dot-pattern relative overflow-hidden selection:bg-violet-200"
      style={{
        background: 'linear-gradient(135deg, #eef2ff 0%, #faf5ff 25%, #fce7f3 50%, #ecfeff 75%, #f0f9ff 100%)',
      }}
    >
      {/* ── Animated Mesh Gradient Orbs ── */}
      {/* Large BG orbs - slower, more diffuse */}
      <div className="fixed top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(167,139,250,0.35) 0%, transparent 70%)',
          animation: 'blob 12s infinite',
          filter: 'blur(60px)',
        }}
      />
      <div className="fixed top-[-5%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.30) 0%, transparent 70%)',
          animation: 'blob 15s infinite 3s',
          filter: 'blur(60px)',
        }}
      />
      <div className="fixed bottom-[-10%] left-[20%] w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(244,114,182,0.28) 0%, transparent 70%)',
          animation: 'blob 10s infinite 5s',
          filter: 'blur(60px)',
        }}
      />
      <div className="fixed top-[40%] left-[45%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(250,204,21,0.20) 0%, transparent 70%)',
          animation: 'blob 18s infinite 8s',
          filter: 'blur(80px)',
        }}
      />
      {/* Accent orb - teal */}
      <div className="fixed bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(52,211,153,0.22) 0%, transparent 70%)',
          animation: 'blob 14s infinite 2s',
          filter: 'blur(50px)',
        }}
      />

      <ClickBombEffect />
      <Hero onContactClick={() => setIsContactOpen(true)} />
      <Projects />
      <Stats />
      <Features />
      <Experience />
      <ResumeSection />
      <Support />
      <Footer />
      <FloatingNav
        visible={showNav}
        onContactClick={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
