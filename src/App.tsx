import { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import FloatingDockNav from './components/21st/FloatingDockNav';
import Hero from './sections/Hero';
import BentoOverview from './sections/BentoOverview';
import Projects from './sections/Projects';
import TerminalSection from './sections/TerminalSection';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import ContactModal from './components/ContactModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 relative overflow-x-hidden font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-300">
      {/* Fixed Top Header with Theme Toggle & Navigation */}
      <HeaderNav
        onContactClick={() => setIsContactOpen(true)}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Floating Bottom Dock Navigation */}
      <FloatingDockNav
        onContactClick={() => setIsContactOpen(true)}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero: Shadcn Studio Hero Section 44 Style with Rotating Greetings & 3D Interactive Badge */}
        <Hero
          onContactClick={() => setIsContactOpen(true)}
          onResumeClick={() => setIsResumeOpen(true)}
        />

        {/* 2. 21st.dev Glass Folder Cards: 14 Selected Works Organized in Interactive Tactile Folders */}
        <Projects />

        {/* 3. Competencies & Architectural Bento Grid with 3D Globe & Tech Sphere */}
        <BentoOverview />

        {/* 4. Developer Interactive Terminal Shell */}
        <TerminalSection />

        {/* 5. Education, Milestones & Verified Certifications */}
        <Experience />
      </main>

      {/* 6. High-End Clean Footer */}
      <Footer
        onContactClick={() => setIsContactOpen(true)}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
