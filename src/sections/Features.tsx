import { motion } from 'framer-motion';
import { Crown, Zap, Rocket, Award, Shapes } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'AI & ML',
    description: 'Expertise in TensorFlow, PyTorch, OpenCV, and deep learning models for computer vision and NLP tasks.',
    glassColor: 'rgba(237,233,254,0.60)',
    glassBorder: 'rgba(167,139,250,0.45)',
    iconColor: '#7c3aed',
    iconBg: 'rgba(167,139,250,0.20)',
    glowColor: 'rgba(139,92,246,0.15)',
    size: 'large',
  },
  {
    icon: Zap,
    title: 'Full Stack Dev',
    description: 'Building end-to-end applications with React, Next.js, Flask, Node.js, and modern JavaScript frameworks.',
    glassColor: 'rgba(219,234,254,0.60)',
    glassBorder: 'rgba(147,197,253,0.45)',
    iconColor: '#1d4ed8',
    iconBg: 'rgba(147,197,253,0.25)',
    glowColor: 'rgba(59,130,246,0.12)',
    size: 'medium',
  },
  {
    icon: Shapes,
    title: 'Problem Solving',
    description: 'Strong foundation in data structures, algorithms, and competitive programming with Java and Python.',
    glassColor: 'rgba(252,231,243,0.60)',
    glassBorder: 'rgba(249,168,212,0.45)',
    iconColor: '#be185d',
    iconBg: 'rgba(249,168,212,0.25)',
    glowColor: 'rgba(236,72,153,0.12)',
    size: 'tall',
  },
  {
    icon: Rocket,
    title: 'Cloud & DevOps',
    description: 'Experience with AWS deployment, Git workflows, and building scalable cloud-native applications.',
    glassColor: 'rgba(204,251,241,0.60)',
    glassBorder: 'rgba(94,234,212,0.45)',
    iconColor: '#0f766e',
    iconBg: 'rgba(94,234,212,0.25)',
    glowColor: 'rgba(20,184,166,0.12)',
    size: 'medium',
  },
  {
    icon: Award,
    title: 'Mobile Development',
    description: 'Creating Android applications with Kotlin and cross-platform solutions for real-world impact.',
    glassColor: 'rgba(254,243,199,0.60)',
    glassBorder: 'rgba(252,211,77,0.45)',
    iconColor: '#92400e',
    iconBg: 'rgba(252,211,77,0.25)',
    glowColor: 'rgba(245,158,11,0.12)',
    size: 'large',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Expertise</h2>
          <p className="mt-4 text-gray-500 font-medium">Technologies I work with</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`
                rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative
                transition-all duration-500 cursor-pointer
                ${feature.size === 'large' ? 'md:col-span-2' : ''}
                ${feature.size === 'tall' ? 'md:row-span-2' : ''}
              `}
              style={{
                background: feature.glassColor,
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
                border: `1px solid ${feature.glassBorder}`,
                boxShadow: `0 8px 30px ${feature.glowColor}, 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.85)`,
              }}
            >
              {/* Inner glow orb */}
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${feature.glassBorder} 0%, transparent 70%)`,
                  filter: 'blur(15px)',
                }}
              />

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center relative z-10"
                style={{ background: feature.iconBg, border: `1px solid ${feature.glassBorder}` }}
              >
                <feature.icon
                  className="w-6 h-6"
                  strokeWidth={1.5}
                  style={{ color: feature.iconColor }}
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className={`text-sm text-gray-600 ${feature.size === 'tall' ? 'max-w-[200px]' : ''}`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
