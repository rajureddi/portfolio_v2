import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, MapPin, Sparkles, GraduationCap } from 'lucide-react';

interface HeroIdCard3DProps {
  className?: string;
}

export default function HeroIdCard3D({ className = '' }: HeroIdCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates relative to card center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 24 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 24 });

  // 3D rotations
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-18deg', '18deg']);
  
  // Holographic glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={`relative select-none perspective-1000 flex flex-col items-center justify-center ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* Lanyard Top Strap & Metal Clasp */}
      <div className="flex flex-col items-center -mb-3 z-20 pointer-events-none">
        {/* Lanyard strap */}
        <div className="w-8 h-12 bg-gradient-to-b from-zinc-300 to-zinc-400 dark:from-zinc-800 dark:to-zinc-900 border-x border-zinc-300 dark:border-zinc-700/80 rounded-t-sm shadow-inner relative flex justify-center">
          <div className="w-1 h-full bg-emerald-500/40" />
        </div>
        {/* Metal Clip */}
        <div className="w-12 h-4 rounded-sm bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-400 dark:from-zinc-500 dark:via-zinc-200 dark:to-zinc-600 shadow-md border border-zinc-300 dark:border-zinc-400 flex items-center justify-center">
          <div className="w-3 h-1.5 rounded-full bg-zinc-800/80 dark:bg-zinc-900/80" />
        </div>
        {/* Swivel ring */}
        <div className="w-5 h-5 rounded-full border-2 border-zinc-400 -mt-1 shadow-xs flex items-center justify-center">
          <div className="w-3 h-3 rounded-full border border-zinc-400 dark:border-zinc-500" />
        </div>
      </div>

      {/* 3D Dangling Card Body */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.15 }}
        className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[1/1.44] rounded-2xl p-6 
          bg-gradient-to-b from-white/95 via-zinc-50/95 to-zinc-100/98 border border-zinc-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.04)]
          dark:from-zinc-900/95 dark:via-[#111116]/95 dark:to-zinc-950/98 dark:border-zinc-700/60 dark:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)] 
          backdrop-blur-xl overflow-hidden cursor-grab active:cursor-grabbing transition-colors duration-300"
      >
        {/* Holographic Specular Glare (Moves with Cursor) */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: `radial-gradient(circle 260px at ${glareX} ${glareY}, rgba(255,255,255,0.3), transparent 80%)`,
          }}
        />

        {/* Card Header Strip */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800/80 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono font-medium tracking-wider text-zinc-600 dark:text-zinc-300 uppercase">
              STUDENT / DEVELOPER
            </span>
          </div>
          <div className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-[10px] font-mono text-zinc-600 dark:text-zinc-300">
            CLASS OF 2026
          </div>
        </div>

        {/* Profile Avatar & Primary Identification */}
        <div className="mt-5 flex items-start gap-4 relative z-10">
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-700/80 bg-zinc-100 dark:bg-zinc-800 shadow-md">
              <img
                src="/profile.png"
                alt="Raju Bandam"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://avatars.githubusercontent.com/u/69119292?v=4';
                }}
              />
            </div>
            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950 flex items-center justify-center text-white dark:text-zinc-950 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="space-y-1 min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight truncate">
              Raju Bandam
            </h2>
            <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Full-Stack &amp; AI/ML Engineer
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono pt-0.5">
              <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
              <span>Hyderabad, India (IST)</span>
            </div>
          </div>
        </div>

        {/* Institution & Degree Badge */}
        <div className="mt-5 p-3 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 space-y-1 relative z-10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-800 dark:text-zinc-300 font-medium flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              Malla Reddy University
            </span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
              CGPA 8.7
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono leading-tight">
            B.Tech in Computer Science &amp; Engineering (AIML)
          </p>
        </div>

        {/* Key Competencies Chips */}
        <div className="mt-4 flex flex-wrap gap-1.5 relative z-10">
          {['React', 'Next.js', 'Node.js', 'Python', 'Java', 'OpenCV', 'PyTorch'].map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50 text-[10px] font-mono text-zinc-700 dark:text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Barcode & Security Hologram Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between relative z-10">
          {/* Simulated Barcode */}
          <div className="space-y-1">
            <div className="flex items-center gap-[2.5px] h-6 opacity-75">
              {[2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 3, 1, 2, 4, 1, 2, 3, 1, 2].map(
                (w, i) => (
                  <div
                    key={i}
                    className="bg-zinc-800 dark:bg-zinc-300 h-full"
                    style={{ width: `${w}px` }}
                  />
                )
              )}
            </div>
            <div className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 tracking-wider">
              ID: RAJU-AIML-2026 • rajureddie.in
            </div>
          </div>

          {/* Hologram Emblem */}
          <div className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-600/60 bg-gradient-to-tr from-zinc-200 via-zinc-400 to-zinc-300 dark:from-zinc-700 dark:via-zinc-400 dark:to-zinc-600 p-[1px] shadow-inner">
            <div className="w-full h-full rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
              <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
