import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/naughtyeth', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/rajureddi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rajureddie/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/rajureddie__', label: 'Instagram' },
];

const skills = [
  'Python', 'Java', 'JavaScript', 'React.js', 'Next.js', 'Flask', 'Node.js',
  'TensorFlow', 'PyTorch', 'OpenCV', 'YOLO', 'BERT', 'AWS', 'Git', "Android Dev."
];

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="min-h-screen relative flex flex-col px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Header */}
      <header className="pt-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsClicked(true)}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <span className="text-4xl sm:text-5xl animate-wave">👋</span>
          <span className="text-2xl sm:text-3xl font-black text-[#FFCC00] transition-transform duration-300 group-hover:scale-110">
            {isClicked ? "Hello!" : isHovered ? "Helloooooo!" : "Hello!"}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4"
        >
          <div className="hidden sm:flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-full transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-xl">{formatTime(currentTime)}</span>
            <span className="text-gray-500 text-xs">{formatDate(currentTime)}</span>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative py-20">
        {/* Bright Wavy Skills - Meeting in Center without Overlap */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden h-full">
          <div className="relative w-full h-full flex items-center justify-center">
            <svg
              className="absolute w-full h-[400px] overflow-visible"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Tighter wave path with shorter wavelength */}
                <path id="skillWave" d="M 0,100 Q 125,40 250,100 T 500,100 T 750,100 T 1000,100" />
              </defs>

              {/* Text from Left - Ends near center (48%) */}
              <motion.text
                className="fill-gray-300 font-black uppercase tracking-[0.3em] text-[9px]"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                textAnchor="end"
              >
                <textPath href="#skillWave" startOffset="48%">
                  {skills.slice(0, 7).join(' - ')} -
                </textPath>
              </motion.text>

              {/* Text from Right - Starts near center (52%) */}
              <motion.text
                className="fill-gray-300 font-black uppercase tracking-[0.3em] text-[9px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                textAnchor="start"
              >
                <textPath href="#skillWave" startOffset="52%">
                  - {skills.slice(7).join(' - ')}
                </textPath>
              </motion.text>
            </svg>
          </div>
        </div>

        {/* Name Entrance: Meet and Stay with Wave */}
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="overflow-hidden py-4">
            <motion.h1
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                y: [0, -20, 10, -5, 0] // Wavy bounce on arrival
              }}
              transition={{
                x: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.8 },
                y: { duration: 1.2, times: [0, 0.4, 0.6, 0.8, 1], delay: 0.5 }
              }}
              className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.8] cursor-default group relative"
            >
              RAJU
              <span className="absolute -inset-8 bg-blue-600/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.h1>
          </div>

          <div className="overflow-hidden py-4">
            <motion.h1
              initial={{ x: '100vw', opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                y: [0, 20, -10, 5, 0] // Wavy bounce on arrival
              }}
              transition={{
                x: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.8 },
                y: { duration: 1.2, times: [0, 0.4, 0.6, 0.8, 1], delay: 0.5 }
              }}
              className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200 cursor-default"
            >
              BANDAM
            </motion.h1>
          </div>
        </div>

        {/* Description & Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center max-w-2xl px-4"
        >
          <p className="text-xl sm:text-2xl text-gray-400 font-medium italic mb-10">
            "Turning complex problems into elegant solutions"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {['AI/ML', 'Full Stack', 'Web3'].map((role, i) => (
                <span
                  key={role}
                  className="px-6 py-2 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-black/10"
                >
                  {role}
                </span>
              ))}
            </div>

            <button
              onClick={onContactClick}
              className="px-8 py-3 bg-white text-black border border-gray-100 rounded-full text-xs font-black uppercase tracking-widest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Let's Talk
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
        onClick={() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 to-transparent" />
      </motion.div>

    </section>
  );
}
