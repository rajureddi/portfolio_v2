import { motion } from 'framer-motion';
import { Terminal, CheckCircle2 } from 'lucide-react';
import InteractiveTerminal from '../components/21st/InteractiveTerminal';

export default function TerminalSection() {
  return (
    <section id="terminal" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 bg-zinc-50 dark:bg-[#09090b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>DEVELOPER CLI ENVIRONMENT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
              Interactive Terminal Experience.
            </h2>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Explore my background, competencies, and system implementations interactively.
              Run quick commands, inspect repository highlights, or query academic milestones
              directly through this developer shell.
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs">
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Responsive CLI shell with quick execution chips</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Inspect full-stack architecture &amp; ML specifications</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Instant session copying and keyboard navigation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Terminal REPL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <InteractiveTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
