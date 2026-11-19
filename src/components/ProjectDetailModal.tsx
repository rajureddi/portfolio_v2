import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2 } from 'lucide-react';

export interface ProjectData {
  id: number;
  name: string;
  url: string;
  description: string;
  longDescription?: string;
  icon: string;
  tags: string[];
  github: string;
  metrics?: string;
  highlights?: string[];
}

interface ProjectDetailModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6 shadow-2xl z-10 transition-colors duration-300"
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-3xl shadow-inner">
                {project.icon}
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  PROJECT SPECIFICATION
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {project.name}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tags Strip */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Technical Details */}
          <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p className="font-medium text-zinc-900 dark:text-zinc-200">
              {project.description}
            </p>
            {project.longDescription && (
              <p className="text-zinc-600 dark:text-zinc-400">
                {project.longDescription}
              </p>
            )}
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Architectural Highlights:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 text-xs font-mono text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benchmark Metrics Strip */}
          {project.metrics && (
            <div className="p-3.5 rounded-xl bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px]">
                TELEMETRY:
              </span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">{project.metrics}</span>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-500 truncate">
              {project.url}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 font-semibold text-xs transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
