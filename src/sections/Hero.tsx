import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, ArrowRight, Download, Mail } from 'lucide-react';
import HeroIdCard3D from '../components/3d/HeroIdCard3D';
import { TECH_LOGOS } from '../components/ui/tech-logos';

const greetings = ['Hello', 'नमस्ते', 'Bonjour', 'Hey there', 'Ciao'];

const socialLinks = [
  { icon: Github, href: 'https://github.com/rajureddi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rajureddie/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/naughtyeth', label: 'X (Twitter)' },
  { icon: Instagram, href: 'https://www.instagram.com/rajureddie__', label: 'Instagram' },
  { icon: Mail, href: 'mailto:rajubandam694@gmail.com', label: 'Email' },
];

interface HeroProps {
  onContactClick: () => void;
  onResumeClick: () => void;
}

function GreetingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-grid overflow-hidden align-bottom">
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {greetings[0]}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={greetings[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="col-start-1 row-start-1 inline-block whitespace-nowrap text-zinc-900 dark:text-zinc-100"
        >
          {greetings[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-8 border-y border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/60 dark:bg-zinc-950/40">
      {/* Side Fade Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-zinc-50 dark:from-[#09090b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-zinc-50 dark:from-[#09090b] to-transparent" />

      {/* Marquee Track */}
      <div className="flex w-max items-center gap-10 animate-marquee hover:[animation-play-state:paused]">
        {[...TECH_LOGOS, ...TECH_LOGOS].map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group shrink-0 shadow-xs"
            >
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
              </div>
              <span className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero({ onContactClick, onResumeClick }: HeroProps) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[100dvh] pt-32 pb-12 flex flex-col justify-between overflow-x-clip bg-zinc-50 dark:bg-[#09090b] transition-colors duration-300">
      {/* Subtle Ambient Mesh Grid */}
      <div className="absolute inset-0 bg-cyber-grid text-zinc-900/5 dark:text-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Developer Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/80 text-xs font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">Available for 2026 Roles</span>
            <span className="text-zinc-400 dark:text-zinc-600">•</span>
            <span className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px]">Hyderabad, IST ({timeString || 'IST'})</span>
          </div>

          {/* Heading (Shadcn Studio Hero 44 Format) */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.08]">
              <GreetingWord />, <br />
              I am <span className="text-zinc-950 dark:text-white">Raju Bandam</span> 👋
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-zinc-600 dark:text-zinc-300 pt-1">
              Full-Stack Developer &amp; AI/ML Engineer
            </p>
          </div>

          {/* Clean Fresher Description */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Computer Science &amp; Engineering (AIML) undergraduate at Malla Reddy University, Hyderabad.
            Passionate about building performant full-stack web applications, real-time computer vision systems,
            and intuitive user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* View Resume / Download CV */}
            <button
              onClick={onResumeClick}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-5 text-sm font-medium text-zinc-800 dark:text-zinc-100 transition-colors shadow-xs"
            >
              <Download className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <span>Download CV</span>
            </button>

            {/* Let's Connect */}
            <button
              onClick={onContactClick}
              className="group inline-flex h-11 items-center justify-center gap-2.5 rounded-full border border-transparent bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 px-5 text-sm font-semibold transition-all duration-300 shadow-xs"
            >
              <span>Let's talk</span>
              <span className="relative flex size-4 items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 text-white dark:text-zinc-950" />
              </span>
            </button>

            {/* Projects Jump Button */}
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 bg-transparent px-5 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-4 pt-3 border-t border-zinc-200 dark:border-zinc-800/80 w-full max-w-lg">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Social:</span>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors shadow-xs"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive Developer ID Badge */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroIdCard3D />
        </div>
      </div>

      {/* Tech Stack Logo Marquee (Continuous Scroll) */}
      <div className="w-full mt-8">
        <LogoMarquee />
      </div>
    </section>
  );
}
