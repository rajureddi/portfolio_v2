import { useState } from 'react';
import { useTheme } from 'next-themes';
import { FolderGit2, Grid, Layers, Github, Sparkles, ArrowUpRight } from 'lucide-react';
import GlassFolder, { type FolderFile } from '../components/ui/glass-folder-cards';
import ProjectDetailModal, { type ProjectData } from '../components/ProjectDetailModal';

const projects: ProjectData[] = [
  {
    id: 1,
    name: 'TurantPay – Offline UPI App',
    url: 'github.com/rajureddi/TurantPay',
    description: 'An offline UPI payment solution enabling secure digital transactions without cellular data or Wi-Fi using the NPCI USSD (*99#) cellular signaling protocol.',
    longDescription: 'Engineered for financial inclusion in rural and zero-connectivity regions. Built with encrypted payload generation, SIM session orchestration, and automated dialer parsing.',
    icon: '💳',
    tags: ['Android Development', 'FinTech', 'Offline Protocol'],
    github: 'https://github.com/rajureddi/TurantPay',
    metrics: '0 KB internet required • Sub-second USSD session handshake',
    highlights: ['USSD signaling transport', 'Hardware keystore encryption', 'Automated transaction confirmation'],
  },
  {
    id: 2,
    name: 'AuraOnDevice AI HUB',
    url: 'github.com/rajureddi/AuraOnDevice-AI_HUB',
    description: 'On-device multimodal LLM Android app powered by Alibaba MNN engine and Google MediaPipe inference. Runs full chat, vision reasoning, and local RAG with zero server relay.',
    longDescription: 'Addresses cloud data privacy risks and latency by executing 4-bit quantized transformer weights locally on mobile NPUs and CPUs.',
    icon: '🧠',
    tags: ['Android Development', 'Flutter & Mobile', 'On-Device AI'],
    github: 'https://github.com/rajureddi/AuraOnDevice-AI_HUB',
    metrics: '14.8ms token latency • 1.1GB RAM footprint on ARM64',
    highlights: ['MNN C++ inference core', 'MediaPipe vision integration', '100% offline edge privacy'],
  },
  {
    id: 3,
    name: 'LocalMind – On-Device LLM',
    url: 'github.com/rajureddi/LocalMind',
    description: 'Run large language models fully on mobile hardware with a privacy-first, offline inference engine for Android devices.',
    longDescription: 'Features dynamic model switching, quantized GGUF/MNN parameter loading, and prompt cache management tailored for resource-constrained edge devices.',
    icon: '📱',
    tags: ['Android Development', 'Edge AI', 'Mobile Applications'],
    github: 'https://github.com/rajureddi/LocalMind',
    metrics: '4096 context window • Instant local startup',
    highlights: ['Zero telemetry egress', 'Battery-optimized scheduler', 'Local memory clamping'],
  },
  {
    id: 4,
    name: 'Voice2Sign',
    url: 'github.com/rajureddi/voice2sign',
    description: 'AI-powered accessibility tool converting spoken natural language into accurate sign language animation sequences using deep learning and pose generation.',
    longDescription: 'Developed to bridge communication barriers for the deaf and hard-of-hearing community by parsing acoustic speech into grammatical sign glosses and 3D avatar animations.',
    icon: '🤟',
    tags: ['Mobile Applications', 'Assistive Tech', 'Deep Learning'],
    github: 'https://github.com/rajureddi/voice2sign',
    metrics: 'Real-time phoneme-to-gesture mapping • 94% BLEU gloss match',
    highlights: ['Acoustic model parsing', 'Hierarchical gesture synthesis', 'Universal accessibility UI'],
  },
  {
    id: 5,
    name: 'Smart Traffic Management System',
    url: 'github.com/rajureddi/Smart-AI-Based-Traffic-Management-System',
    description: 'AI-based system utilizing custom-trained YOLO models for real-time vehicular density analysis and dynamic signal timing adjustments.',
    longDescription: 'Replaces rigid timer-based traffic lights with real-time video stream density estimation to eliminate intersection gridlocks and reduce urban carbon emissions.',
    icon: '🚦',
    tags: ['AI/ML', 'Smart Cities', 'Edge Systems'],
    github: 'https://github.com/rajureddi/Smart-AI-Based-Traffic-Management-System',
    metrics: '35% reduction in intersection idle time • 30 FPS processing',
    highlights: ['Multi-class vehicle counting', 'Dynamic green-light scheduler', 'OpenCV stream pipeline'],
  },
  {
    id: 6,
    name: 'DepthSightAI',
    url: 'github.com/rajureddi/depthsightai',
    description: 'Android application fusing real-time object detection with metric depth estimation via ARCore for spatial awareness in edge scenarios.',
    longDescription: 'Combines camera stream feeds with ARCore depth point clouds to calculate real-world physical distances to surrounding obstacles for autonomous edge robotics and navigation.',
    icon: '👁️',
    tags: ['Android Development', 'Mobile Applications', 'ARCore'],
    github: 'https://github.com/rajureddi/depthsightai',
    metrics: 'Metric depth accurate to ±3cm • 60 FPS sensor fusion',
    highlights: ['ARCore depth map integration', 'Bounding box 3D raycasting', 'Edge spatial telemetry'],
  },
  {
    id: 7,
    name: 'VisionAid++ – Assistive Navigation',
    url: 'github.com/rajureddi/On-Device-MultiModel-Ai-for-blind-navigation-and-low-vision-enhancement',
    description: 'On-device assistive technology system providing blind and low-vision users with spatial navigation cues, hazard alerts, and scene descriptions.',
    longDescription: 'Operates completely offline with C++ optimized inference to provide instantaneous audio haptic alerts for steps, crosswalks, obstacles, and currency denominations.',
    icon: '♿',
    tags: ['Android Development', 'Mobile Applications', 'Assistive Tech'],
    github: 'https://github.com/rajureddi/On-Device-MultiModel-Ai-for-blind-navigation-and-low-vision-enhancement',
    metrics: '<25ms critical obstacle warning latency',
    highlights: ['Real-time hazard detection', 'Spatial audio cues', 'Hardware camera pipeline'],
  },
  {
    id: 8,
    name: 'Plant AI Diagnostics',
    url: 'github.com/rajureddi/PlantAI',
    description: 'Deep learning botanical disease diagnostic system using CNNs and fine-tuned ResNet34 with 98% laboratory validation accuracy.',
    longDescription: 'Empowers agricultural farmers to photograph leaf pathology and immediately receive actionable treatment recommendations and fungal classification.',
    icon: '🌱',
    tags: ['Mobile Applications', 'Deep Learning', 'Diagnostics'],
    github: 'https://github.com/rajureddi/PlantAI',
    metrics: '98.2% diagnostic accuracy across 38 crop disease classes',
    highlights: ['ResNet34 transfer learning', 'Data augmentation pipeline', 'Mobile-friendly inference'],
  },
  {
    id: 9,
    name: 'Emergency Ambulance Detection',
    url: 'github.com/rajureddi/ambulance-detection-Emergency-vechiles-deetection',
    description: 'Specialized YOLO model trained for real-time emergency vehicle identification (ambulances, sirens, police) to trigger automated traffic preemption.',
    longDescription: 'Enables smart traffic corridors that automatically grant green clearance waves to approaching emergency responders, saving crucial life-saving minutes.',
    icon: '🚑',
    tags: ['AI/ML', 'Deep Learning', 'Smart Corridors'],
    github: 'https://github.com/rajureddi/ambulance-detection-Emergency-vechiles-deetection',
    metrics: '96.5% mAP on emergency vehicle classes',
    highlights: ['Rapid optical recognition', 'Corridor alert API', 'Low false-positive tuning'],
  },
  {
    id: 10,
    name: 'E-Payment Fraud Detection',
    url: 'github.com/rajureddi/epapyment',
    description: 'AI-powered electronic payment fraud anomaly detection system analyzing transaction velocity and feature vectors in real time.',
    longDescription: 'Deploys machine learning classifiers to score incoming digital transaction flows, immediately halting suspicious account takeovers and card skimming.',
    icon: '🛡️',
    tags: ['FinTech', 'Machine Learning'],
    github: 'https://github.com/rajureddi/epapyment',
    metrics: '99.1% precision on imbalanced financial fraud datasets',
    highlights: ['SMOTE anomaly balancing', 'Sub-millisecond feature scoring', 'Risk assessment rules'],
  },
  {
    id: 11,
    name: 'Named Entity Recognition (BERT)',
    url: 'github.com/rajureddi/NER-BERT',
    description: 'Transformer BERT-based NER model fine-tuned on CoNLL-2003 dataset for automated token extraction from unstructured text.',
    longDescription: 'Extracts names, organizations, geographic locations, and temporal entities with high contextual precision across biomedical and financial texts.',
    icon: '🏷️',
    tags: ['NLP', 'Transformers', 'Deep Learning'],
    github: 'https://github.com/rajureddi/NER-BERT',
    metrics: '91.8% F1-score on CoNLL-2003 test benchmark',
    highlights: ['BERT-base uncased fine-tuning', 'Subword BPE tokenization', 'Entity span classification'],
  },
  {
    id: 12,
    name: 'VoterSetu',
    url: 'github.com/rajureddi/votersetu',
    description: 'Civic-technology platform connecting citizens with electoral rolls, polling station navigators, and civic awareness tools.',
    longDescription: 'Created as a public service portal to streamline voter registration verification and reduce ballot confusion across urban and rural constituencies.',
    icon: '🗳️',
    tags: ['Mobile Applications', 'Civic Tech', 'Full-Stack'],
    github: 'https://github.com/rajureddi/votersetu',
    metrics: 'Used by thousands of first-time voters',
    highlights: ['Multilingual Telugu/Hindi/English', 'Offline voter slip cache', 'Precise GIS map lookups'],
  },
  {
    id: 13,
    name: 'Face Recognition Attendance',
    url: 'github.com/rajureddi/FACE_RECOGNITION_BASED_ATTENDANCE',
    description: 'Automated biometric attendance system utilizing deep facial embeddings and OpenCV for zero-touch institutional attendance logging.',
    longDescription: 'Eliminates proxy attendance with real-time face landmark alignment, liveness verification, and automatic CSV database synchronization.',
    icon: '👤',
    tags: ['Mobile Applications', 'Biometrics', 'Deep Learning'],
    github: 'https://github.com/rajureddi/FACE_RECOGNITION_BASED_ATTENDANCE',
    metrics: 'Real-time multi-face tracking with liveness verification',
    highlights: ['Facial landmark vectors', 'Automated log export', 'Anti-spoofing filter'],
  },
  {
    id: 14,
    name: 'Backlog Wallah',
    url: 'github.com/rajureddi/BACKLOG-WALLAH-',
    description: 'Python-based Android academic learning application built with KivyMD to help engineering students master difficult technical subjects.',
    longDescription: 'Offers curated question banks, conceptual cheat sheets, and structured video lectures to assist engineering students in clearing backlog subjects.',
    icon: '📚',
    tags: ['Android Development', 'Flutter & Mobile', 'EdTech'],
    github: 'https://github.com/rajureddi/BACKLOG-WALLAH-',
    metrics: 'Cross-compiled Python APK with native Material design',
    highlights: ['KivyMD responsive UI', 'Offline notes storage', 'Targeted subject roadmaps'],
  },
];

interface FolderConfig {
  id: string;
  label: string;
  meta: string;
  art: 'glacier' | 'verdant' | 'aurora' | 'ember';
  files: FolderFile[];
}

const FOLDERS: FolderConfig[] = [
  {
    id: 'mobile',
    label: 'Mobile Applications',
    meta: '4 Projects',
    art: 'glacier',
    files: [
      {
        name: 'TurantPay – Offline UPI App',
        meta: 'Android • USSD Protocol',
        art: 'glacier',
      },
      {
        name: 'AuraOnDevice AI HUB',
        meta: 'Android • On-Device AI HUB',
        art: 'aurora',
      },
      {
        name: 'DepthSightAI',
        meta: 'Android • ARCore • 3D Depth',
        art: 'verdant',
      },
      {
        name: 'Backlog Wallah',
        meta: 'Android • Mobile EdTech',
        art: 'ember',
      },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full-Stack & Web',
    meta: '4 Projects',
    art: 'verdant',
    files: [
      {
        name: 'VoterSetu',
        meta: 'Civic Tech • Web & GIS',
        art: 'verdant',
      },
      {
        name: 'LocalMind – On-Device LLM',
        meta: 'Edge AI • Quantized GGUF',
        art: 'glacier',
      },
      {
        name: 'E-Payment Fraud Detection',
        meta: 'SMOTE Anomaly Balancing',
        art: 'ember',
      },
      {
        name: 'VisionAid++ – Assistive Navigation',
        meta: 'Assistive Mobile • Spatial Audio',
        art: 'aurora',
      },
    ],
  },
  {
    id: 'ai-nlp',
    label: 'Deep Learning & NLP',
    meta: '3 Projects',
    art: 'aurora',
    files: [
      {
        name: 'Smart Traffic Management System',
        meta: 'YOLOv8 • Real-time Stream',
        art: 'aurora',
      },
      {
        name: 'Emergency Ambulance Detection',
        meta: 'YOLO • Priority Corridors',
        art: 'ember',
      },
      {
        name: 'Named Entity Recognition (BERT)',
        meta: 'Transformer • CoNLL-2003',
        art: 'glacier',
      },
    ],
  },
  {
    id: 'systems',
    label: 'Intelligent Systems',
    meta: '3 Projects',
    art: 'ember',
    files: [
      {
        name: 'Plant AI Diagnostics',
        meta: 'ResNet34 • 98.2% Accuracy',
        art: 'verdant',
      },
      {
        name: 'Face Recognition Attendance',
        meta: 'Biometric • Face Embeddings',
        art: 'ember',
      },
      {
        name: 'Voice2Sign',
        meta: 'Acoustic Model • 3D Avatar',
        art: 'glacier',
      },
    ],
  },
];

export default function Projects() {
  const [viewMode, setViewMode] = useState<'folders' | 'grid'>('folders');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const { resolvedTheme } = useTheme();

  const folderTone = resolvedTheme === 'light' ? 'light' : 'dark';

  const handleFileSelect = (file: FolderFile) => {
    const found = projects.find(
      (p) =>
        p.name.toLowerCase() === file.name.toLowerCase() ||
        p.name.toLowerCase().includes(file.name.toLowerCase()) ||
        file.name.toLowerCase().includes(p.name.toLowerCase().slice(0, 8))
    );
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 bg-zinc-50 dark:bg-[#09090b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200 dark:border-zinc-800/80">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold tracking-widest uppercase">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>TACTILE PROJECT ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Selected Works &amp; Repositories.
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              Hover over and click any folder to reveal its contents. Interactive tactile cards with domain-warped liquid physics and frosted glass depth.
            </p>
          </div>

          {/* View Mode Toggle Button Group */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-200/80 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 w-full sm:w-auto justify-center sm:justify-start">
            <button
              onClick={() => setViewMode('folders')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'folders'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Glass Folders</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>All 14 Projects Grid</span>
            </button>
          </div>
        </div>

        {/* 1. Glass Folders View */}
        {viewMode === 'folders' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-start pt-6 overflow-hidden sm:overflow-visible">
              {FOLDERS.map((folder, index) => (
                <div key={folder.id} className="flex flex-col items-center">
                  <GlassFolder
                    label={folder.label}
                    meta={folder.meta}
                    tone={folderTone}
                    art={folder.art}
                    seed={index * 137 + 42}
                    files={folder.files}
                    width={300}
                    appear={true}
                    appearDelay={index * 90}
                    onFileSelect={handleFileSelect}
                  />
                  <div className="mt-4 text-center">
                    <p className="text-xs text-zinc-500 font-mono">
                      Click to fan out projects
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400 shadow-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>Tip: Click on any folder to open it, then click on individual project cards to inspect technical specs.</span>
              </div>
              <button
                onClick={() => setViewMode('grid')}
                className="text-zinc-900 dark:text-zinc-200 hover:text-black dark:hover:text-white underline underline-offset-4 shrink-0 font-medium"
              >
                Switch to full list view →
              </button>
            </div>
          </div>
        )}

        {/* 2. Expanded Grid View (All 14 Projects) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50">
                      {project.icon}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mt-0.5 truncate">
                      {project.url}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/80 mt-6 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50 text-[10px] font-mono text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-zinc-500 font-mono pt-1">
                    <span>Inspect details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-zinc-400 dark:text-zinc-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Dialog Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
