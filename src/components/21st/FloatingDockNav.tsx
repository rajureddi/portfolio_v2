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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500">
      <Dock magnification={60} distance={100} className="px-3 py-2 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-2xl backdrop-blur-xl">
        <DockIcon onClick={() => scrollTo('home')} title="Home">
          <Home className="w-4 h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <DockIcon onClick={() => scrollTo('projects')} title="Glass Folders & Projects">
          <Code className="w-4 h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <DockIcon onClick={() => scrollTo('architecture')} title="Competencies & Architecture">
          <Layers className="w-4 h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <DockIcon onClick={() => scrollTo('terminal')} title="Developer Shell">
          <Terminal className="w-4 h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <DockIcon onClick={() => scrollTo('experience')} title="Education & Milestones">
          <GraduationCap className="w-4 h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-800 mx-1 self-center" />

        <DockIcon onClick={onResumeClick} title="Download CV / Resume">
          <FileText className="w-4 h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <DockIcon onClick={onContactClick} title="Get in Touch">
          <Send className="w-4 h-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors" />
        </DockIcon>

        <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-800 mx-1 self-center" />

        <div className="flex items-center justify-center p-1">
          <ThemeToggle />
        </div>
      </Dock>
    </div>
  );
}
