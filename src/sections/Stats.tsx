import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 6, suffix: '+', label: 'Projects Built', icon: '🚀', color: 'rgba(167,139,250,0.25)', border: 'rgba(167,139,250,0.4)' },
  { value: 15, suffix: '+', label: 'Technologies', icon: '⚡', color: 'rgba(99,102,241,0.20)', border: 'rgba(99,102,241,0.35)' },
  { value: 3, suffix: '+', label: 'Years Experience', icon: '🏆', color: 'rgba(56,189,248,0.20)', border: 'rgba(56,189,248,0.35)' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="text-center relative px-8 py-7 rounded-3xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${stat.color}, rgba(255,255,255,0.40))`,
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: `1px solid ${stat.border}`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)`,
                minWidth: '160px',
              }}
            >
              {/* Orb accent */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${stat.border} 0%, transparent 70%)`,
                  filter: 'blur(8px)',
                }}
              />
              <div className="text-3xl mb-2 relative z-10">{stat.icon}</div>
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-black relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #1e1b4b, #6d28d9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-gray-600 text-sm sm:text-base font-semibold relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
