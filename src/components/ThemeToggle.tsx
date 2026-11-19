import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 animate-pulse ${className}`} />
    );
  }

  const isDark = (resolvedTheme || theme) === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative p-2 rounded-full border transition-all duration-300 flex items-center justify-center 
        bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-800 
        dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 dark:border-zinc-700 dark:text-zinc-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        {/* Sun Icon (Visible in dark mode to switch to light, or vice versa) */}
        <Sun
          className={`w-4 h-4 text-amber-500 absolute transition-all duration-300 ${
            isDark
              ? 'scale-100 rotate-0 opacity-100'
              : 'scale-0 -rotate-90 opacity-0'
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`w-4 h-4 text-zinc-700 dark:text-zinc-300 absolute transition-all duration-300 ${
            isDark
              ? 'scale-0 rotate-90 opacity-0'
              : 'scale-100 rotate-0 opacity-100'
          }`}
        />
      </div>
    </button>
  );
}
