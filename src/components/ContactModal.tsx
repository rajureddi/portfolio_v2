import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Mail, Send, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const email = 'rajubandam694@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
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
            className="relative w-full max-w-md rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6 shadow-2xl z-10 transition-colors duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Let's Connect</h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Open for 2026 Roles</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Email Card with Copy */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                Direct Email
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-mono text-zinc-900 dark:text-zinc-200 font-semibold truncate">
                  {email}
                </span>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded-md bg-zinc-200/80 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Send Mail Action */}
            <a
              href={`mailto:${email}?subject=Opportunity%20Inquiry%20-%20Raju%20Bandam`}
              className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Compose Email in Default Client</span>
            </a>

            {/* Social Links */}
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-around text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <a
                href="https://www.linkedin.com/in/rajureddie/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <a
                href="https://github.com/rajureddi"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <a
                href="https://twitter.com/naughtyeth"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>X / Twitter</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
