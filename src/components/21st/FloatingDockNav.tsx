import { Home, Layers, Code, Terminal, GraduationCap, Send, FileText } from 'lucide-react';
import { Dock, DockIcon } from '../ui/dock';
import ThemeToggle from '../ThemeToggle';

interface FloatingDockNavProps {
  onContactClick: () => void;
  onResumeClick: () => void;
}

export default function FloatingDockNav({ onContactClick, onResumeClick }: FloatingDockNavProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-16px)] sm:max-w-none transition-all duration-500">
      <Dock magnification={56} distance={90} className="px-2 sm:px-3 py-1.5 sm:py-2 gap-1 sm:gap-3 h-13 sm:h-16 max-w-full overflow-x-auto no-scrollbar bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-2xl backdrop-blur-xl">
        <DockIcon onClick={() => scrollTo('home')} title="Home" className="w-8 h-8 sm:w-10 sm:h-10">
          <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <DockIcon onClick={() => scrollTo('projects')} title="Glass Folders & Projects" className="w-8 h-8 sm:w-10 sm:h-10">
          <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <DockIcon onClick={() => scrollTo('architecture')} title="Competencies & Architecture" className="w-8 h-8 sm:w-10 sm:h-10">
          <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <DockIcon onClick={() => scrollTo('terminal')} title="Developer Shell" className="w-8 h-8 sm:w-10 sm:h-10">
          <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <DockIcon onClick={() => scrollTo('experience')} title="Education & Milestones" className="w-8 h-8 sm:w-10 sm:h-10">
          <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <div className="w-[1px] h-5 sm:h-6 bg-zinc-200 dark:bg-zinc-800 mx-0.5 sm:mx-1 self-center" />

        <DockIcon onClick={onResumeClick} title="Download CV / Resume" className="w-8 h-8 sm:w-10 sm:h-10">
          <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <DockIcon onClick={onContactClick} title="Get in Touch" className="w-8 h-8 sm:w-10 sm:h-10">
          <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <div className="w-[1px] h-5 sm:h-6 bg-zinc-200 dark:bg-zinc-800 mx-0.5 sm:mx-1 self-center" />

        <div className="flex items-center justify-center p-0.5 sm:p-1 scale-90 sm:scale-100">
          <ThemeToggle />
        </div>
      </Dock>
    </div>
  );
}
