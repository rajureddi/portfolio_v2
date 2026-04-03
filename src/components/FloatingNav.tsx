import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, FileText, ArrowRight } from 'lucide-react';

interface FloatingNavProps {
  visible: boolean;
  onContactClick: () => void;
}

const navItems = [
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'resume', label: 'Resume', icon: FileText },
];

export default function FloatingNav({ visible, onContactClick }: FloatingNavProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90]"
        >
          <div className="flex items-center gap-0.5 sm:gap-1 bg-black/80 backdrop-blur-2xl rounded-full px-1.5 py-1.5 sm:px-2 sm:py-2 shadow-2xl border border-white/10 w-max max-w-[95vw]">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 sm:p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-300 shrink-0"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </motion.button>

            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 relative group font-bold whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white rounded-full group-hover:w-1/2 transition-all duration-300" />
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onContactClick}
              className="ml-0.5 sm:ml-1 px-3 sm:px-5 py-2 sm:py-2.5 bg-white text-black text-[11px] sm:text-sm font-black rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 shadow-lg uppercase tracking-tight shrink-0 whitespace-nowrap"
            >
              Let's talk
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
