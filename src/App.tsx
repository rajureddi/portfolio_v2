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
    <div className="min-h-screen bg-white dot-pattern">
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
