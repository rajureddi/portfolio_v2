import { ArrowUp, Github, Linkedin, Twitter, Instagram, Send, FileText, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/rajureddi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rajureddie/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/naughtyeth', label: 'X (Twitter)' },
  { icon: Instagram, href: 'https://www.instagram.com/rajureddie__', label: 'Instagram' },
  { icon: Mail, href: 'mailto:rajubandam694@gmail.com', label: 'Email' },
];

interface FooterProps {
  onContactClick: () => void;
  onResumeClick: () => void;
}

export default function Footer({ onContactClick, onResumeClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 sm:pt-24 pb-28 sm:pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-zinc-200 dark:border-zinc-800/80 overflow-hidden bg-zinc-100 dark:bg-[#09090b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Main CTA Block */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-16 border-b border-zinc-200 dark:border-zinc-800/80">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold uppercase tracking-widest">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
              Ready to collaborate? <br />
              <span className="text-zinc-950 dark:text-white">Let's build together.</span>
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Undergraduate student in CSE AIML graduating in 2026. Available for software engineering,
              full-stack development, and AI/ML engineer roles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 font-semibold text-sm transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-white dark:text-zinc-950" />
              <span>Get in touch</span>
            </button>

            <button
              onClick={onResumeClick}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700/80 text-sm font-medium text-zinc-800 dark:text-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <FileText className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-4">
            <span>© 2026 Raju Bandam. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <a
              href="https://rajureddie.in"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              rajureddie.in
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors shadow-xs"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors ml-2 shadow-xs"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
