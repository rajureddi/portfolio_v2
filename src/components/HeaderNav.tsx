import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderNavProps {
  onContactClick: () => void;
  onResumeClick: () => void;
}

export default function HeaderNav({ onContactClick, onResumeClick }: HeaderNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name / Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100 group transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-sm shadow-sm">
            RB
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight leading-none group-hover:text-emerald-500 transition-colors">
              Raju Bandam
            </span>
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 leading-tight">
              Full-Stack &amp; AI/ML
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-600 dark:text-zinc-400">
          <a href="#hero" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            // Home
          </a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            // Projects
          </a>
          <a href="#architecture" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            // Architecture
          </a>
          <a href="#terminal" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            // Terminal
          </a>
          <a href="#experience" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            // Journey
          </a>
        </nav>

        {/* Right Action Bar: Theme Toggle + Contact CTA */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Download Resume Link */}
          <button
            onClick={onResumeClick}
            className="hidden sm:inline-flex text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white px-3 py-1.5 rounded-lg transition-colors"
          >
            Resume
          </button>

          {/* Quick Contact CTA */}
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium 
              bg-zinc-900 hover:bg-zinc-800 text-white 
              dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 
              transition-all duration-200 shadow-sm"
          >
            <span>Let's talk</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </header>
  );
}
