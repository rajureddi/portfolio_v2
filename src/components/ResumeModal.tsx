import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeUrl = '/RAJU_BANDAM_RESUME__.pdf';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl z-10 transition-colors duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-200">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Curriculum Vitae</h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">RAJU_BANDAM_RESUME__.pdf</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Highlights Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
                <div className="text-zinc-500 text-[10px]">EDUCATION</div>
                <div className="font-bold text-zinc-900 dark:text-zinc-100">B.Tech AIML (8.7)</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Malla Reddy Univ</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
                <div className="text-zinc-500 text-[10px]">CORE STRENGTHS</div>
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Full-Stack &amp; ML</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400">React • Node • PyTorch</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
                <div className="text-zinc-500 text-[10px]">AVAILABILITY</div>
                <div className="font-bold text-emerald-600 dark:text-emerald-400">Immediate / 2026</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Full-Time / Intern</div>
              </div>
            </div>

            {/* Document Action Strip */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={resumeUrl}
                download="RAJU_BANDAM_RESUME__.pdf"
                className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Official PDF</span>
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 text-sm font-medium text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Tab</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
