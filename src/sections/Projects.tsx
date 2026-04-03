import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Code2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'TurantPay – Offline UPI App',
    url: 'github.com/rajureddi/TurantPay',
    description: 'An offline UPI payment solution enabling secure transactions without internet access using USSD (*99#).',
    icon: '💳',
    color: 'from-blue-500/20 to-blue-600/20',
    tags: ['FinTech', 'Android'],
    github: 'https://github.com/rajureddi/TurantPay',
  },
  {
    id: 2,
    name: 'Voice2Sign',
    url: 'github.com/rajureddi/voice2sign',
    description: 'AI-powered accessibility tool converting spoken language to sign language animations using deep learning.',
    icon: '🤟',
    color: 'from-purple-500/20 to-purple-600/20',
    tags: ['AI / Deep Learning', 'Computer Vision'],
    github: 'https://github.com/rajureddi/voice2sign',
  },
  {
    id: 3,
    name: 'Smart Traffic Management System',
    url: 'github.com/rajureddi/Smart-AI-Based-Traffic-Management-System',
    description: 'AI-based system using YOLO for real-time density analysis and dynamic signal control.',
    icon: '🚦',
    color: 'from-green-500/20 to-green-600/20',
    tags: ['AI / Deep Learning', 'Computer Vision'],
    github: 'https://github.com/rajureddi/Smart-AI-Based-Traffic-Management-System',
  },
  {
    id: 4,
    name: 'Backlog Wallah',
    url: 'github.com/rajureddi/BACKLOG-WALLAH-',
    description: 'Python-based Android learning application built with KivyMD to help students clear academic backlogs.',
    icon: '📚',
    color: 'from-orange-500/20 to-orange-600/20',
    tags: ['Android'],
    github: 'https://github.com/rajureddi/BACKLOG-WALLAH-',
  },
  {
    id: 5,
    name: 'Named Entity Recognition (BERT)',
    url: 'github.com/rajureddi/NER-BERT',
    description: 'BERT-based NER system trained on CoNLL-2003 dataset for entity extraction from unstructured text.',
    icon: '🏷️',
    color: 'from-pink-500/20 to-pink-600/20',
    tags: ['AI / Deep Learning'],
    github: 'https://github.com/rajureddi/NER-BERT',
  },
  {
    id: 6,
    name: 'Plant AI',
    url: 'github.com/rajureddi/PlantAI',
    description: 'Deep learning plant disease detection using CNNs and ResNet34 with 98% accuracy.',
    icon: '🌱',
    color: 'from-emerald-500/20 to-emerald-600/20',
    tags: ['AI / Deep Learning', 'Computer Vision'],
    github: 'https://github.com/rajureddi/PlantAI',
  },
  // ── AI Android Apps ──────────────────────────────────────────────
  {
    id: 7,
    name: 'AuraOnDevice AI HUB',
    url: 'github.com/rajureddi/AuraOnDevice-AI_HUB',
    description: 'On-device multimodal LLM Android app powered by MNN & MediaPipe inference engine — supports offline chat, vision, RAG and more without any cloud dependency.',
    icon: '🧠',
    color: 'from-violet-500/20 to-purple-600/20',
    tags: ['AI / Deep Learning', 'On-Device AI', 'Android'],
    github: 'https://github.com/rajureddi/AuraOnDevice-AI_HUB',
  },
  {
    id: 8,
    name: 'LocalMind – On-Device LLM',
    url: 'github.com/rajureddi/LocalMind',
    description: 'Run large language models fully on mobile hardware — privacy-first, offline inference engine for Android.',
    icon: '📱',
    color: 'from-blue-500/20 to-cyan-500/20',
    tags: ['AI / Deep Learning', 'On-Device AI', 'Android'],
    github: 'https://github.com/rajureddi/LocalMind',
  },
  {
    id: 9,
    name: 'DepthSightAI',
    url: 'github.com/rajureddi/depthsightai',
    description: 'Android application combining real-time object detection with depth estimation using ARCore — lightweight, on-device spatial awareness for edge scenarios.',
    icon: '👁️',
    color: 'from-teal-500/20 to-green-600/20',
    tags: ['AI / Deep Learning', 'On-Device AI', 'Android', 'Computer Vision'],
    github: 'https://github.com/rajureddi/depthsightai',
  },
  {
    id: 10,
    name: 'VisionAid++ – On-Device Multimodal AI',
    url: 'github.com/rajureddi/On-Device-MultiModel-Ai-for-blind-navigation-and-low-vision-enhancement',
    description: 'On-device multimodal AI system for blind navigation and low-vision enhancement — offline, privacy-preserving assistive technology powered by C++ inference.',
    icon: '♿',
    color: 'from-amber-500/20 to-orange-500/20',
    tags: ['AI / Deep Learning', 'On-Device AI', 'Android', 'Computer Vision', 'Freelancing'],
    github: 'https://github.com/rajureddi/On-Device-MultiModel-Ai-for-blind-navigation-and-low-vision-enhancement',
  },
  // ── Security / Detection ─────────────────────────────────────────
  {
    id: 11,
    name: 'E-Payment Fraud Detection',
    url: 'github.com/rajureddi/epapyment',
    description: 'AI-powered e-payment fraud detection system that analyzes transaction patterns in real time to flag suspicious activity and protect digital payments.',
    icon: '🛡️',
    color: 'from-blue-700/20 to-blue-800/20',
    tags: ['AI / Deep Learning', 'FinTech'],
    github: 'https://github.com/rajureddi/epapyment',
  },
  {
    id: 12,
    name: 'Emergency Ambulance Detection',
    url: 'github.com/rajureddi/ambulance-detection-Emergency-vechiles-deetection',
    description: 'Fine-tuned YOLO model for real-time emergency vehicle detection (ambulances, fire engines, police cars) — enabling smart traffic priority systems.',
    icon: '🚑',
    color: 'from-red-500/20 to-rose-600/20',
    tags: ['AI / Deep Learning', 'Computer Vision'],
    github: 'https://github.com/rajureddi/ambulance-detection-Emergency-vechiles-deetection',
  },
  // ── Freelancing ──────────────────────────────────────────────────
  {
    id: 13,
    name: 'VoterSetu',
    url: 'github.com/rajureddi/votersetu',
    description: 'Civic-tech platform bridging voters and electoral services — simplifying voter registration, information lookup and electoral awareness.',
    icon: '🗳️',
    color: 'from-indigo-500/20 to-blue-500/20',
    tags: ['Freelancing', 'Android'],
    github: 'https://github.com/rajureddi/votersetu',
  },
  // ── Face Recognition ─────────────────────────────────────────────
  {
    id: 14,
    name: 'Face Recognition Attendance System',
    url: 'github.com/rajureddi/FACE_RECOGNITION_BASED_ATTENDANCE',
    description: 'Python-based automated attendance system using face recognition — detects and identifies faces in real time to log attendance with zero manual effort.',
    icon: '👤',
    color: 'from-indigo-500/20 to-indigo-600/20',
    tags: ['AI / Deep Learning', 'Computer Vision'],
    github: 'https://github.com/rajureddi/FACE_RECOGNITION_BASED_ATTENDANCE',
  },
];

const allCategories = ['All', 'FinTech', 'Android', 'AI / Deep Learning', 'Computer Vision', 'On-Device AI', 'Freelancing'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(selectedCategory));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold tracking-widest uppercase text-[10px]">
              <Code2 className="w-4 h-4" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter">
              PORT<span className="text-gray-300">FOLIO.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 md:justify-end max-w-xl"
          >
            {allCategories.slice(0, 12).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${selectedCategory === category
                  ? 'bg-black text-white border-black shadow-lg shadow-black/10'
                  : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300 hover:text-black'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid - Medium sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-white/50 group-hover:scale-110 transition-transform duration-500`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all border border-gray-100"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 font-medium mb-8">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-gray-50 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-gray-50 text-[10px] font-black text-gray-400 rounded-full border border-gray-100 uppercase tracking-tighter group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
