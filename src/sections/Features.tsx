import { motion } from 'framer-motion';
import { Crown, Zap, Rocket, Award, Shapes } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'AI & ML',
    description: 'Expertise in TensorFlow, PyTorch, OpenCV, and deep learning models for computer vision and NLP tasks.',
    color: 'bg-sky-200',
    textColor: 'text-sky-900',
    size: 'large',
  },
  {
    icon: Zap,
    title: 'Full Stack Dev',
    description: 'Building end-to-end applications with React, Next.js, Flask, Node.js, and modern JavaScript frameworks.',
    color: 'bg-violet-200',
    textColor: 'text-violet-900',
    size: 'medium',
  },
  {
    icon: Shapes,
    title: 'Problem Solving',
    description: 'Strong foundation in data structures, algorithms, and competitive programming with Java and Python.',
    color: 'bg-emerald-200',
    textColor: 'text-emerald-900',
    size: 'tall',
  },
  {
    icon: Rocket,
    title: 'Cloud & DevOps',
    description: 'Experience with AWS deployment, Git workflows, and building scalable cloud-native applications.',
    color: 'bg-yellow-200',
    textColor: 'text-yellow-900',
    size: 'medium',
  },
  {
    icon: Award,
    title: 'Mobile Development',
    description: 'Creating Android applications with Kotlin and cross-platform solutions for real-world impact.',
    color: 'bg-rose-200',
    textColor: 'text-rose-900',
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
          <h2 className="text-4xl sm:text-5xl font-bold">Expertise</h2>
          <p className="mt-4 text-gray-600">Technologies I work with</p>
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
              whileHover={{ y: -4, scale: 1.02 }}
              className={`
                ${feature.color} ${feature.textColor}
                rounded-3xl p-6 flex flex-col justify-between
                transition-all duration-300 cursor-pointer
                ${feature.size === 'large' ? 'md:col-span-2' : ''}
                ${feature.size === 'tall' ? 'md:row-span-2' : ''}
              `}
            >
              <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className={`text-sm opacity-80 ${feature.size === 'tall' ? 'max-w-[200px]' : ''}`}>
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
