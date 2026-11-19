import { motion } from 'framer-motion';
import { Code2, Cpu, Eye, ShieldCheck, GraduationCap, Globe2 } from 'lucide-react';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { InteractiveIconCloud } from '../components/ui/interactive-icon-cloud';
import InteractiveGlobe from '../components/3d/InteractiveGlobe';

export default function BentoOverview() {
  return (
    <section id="architecture" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 bg-zinc-50 dark:bg-[#09090b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200 dark:border-zinc-800/80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold tracking-widest uppercase">
              <Code2 className="w-3.5 h-3.5" />
              <span>SKILLS &amp; ARCHITECTURAL STRENGTHS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Core Technical Competencies.
            </h2>
          </motion.div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md font-mono">
            Bridging responsive modern web engineering, robust backend services, and practical computer vision systems.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="max-w-7xl mx-auto">
          {/* Tile 1: Global Footprint / Interactive 3D Globe */}
          <BentoGridItem
            className="md:col-span-2 md:row-span-2 flex flex-col justify-between"
            title="Full-Stack Web Engineering"
            description="Developing responsive, scalable web applications with React, Next.js, Node.js, and TypeScript. Focused on high-performance rendering, accessible UI, and clean component systems."
            header={
              <div className="w-full h-[320px] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800/80">
                <InteractiveGlobe />
              </div>
            }
            icon={<Globe2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />}
          />

          {/* Tile 2: 3D Interactive Tech Icon Cloud */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-2 flex flex-col justify-between"
            title="Interactive Tech Stack"
            description="Explore my primary development technologies. Drag to spin the 3D sphere to inspect competencies across Frontend, Backend, Machine Learning, and Core CS."
            header={
              <div className="w-full h-[320px] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-center">
                <InteractiveIconCloud />
              </div>
            }
            icon={<Cpu className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />}
          />

          {/* Tile 3: Offline FinTech & TurantPay */}
          <BentoGridItem
            className="md:col-span-1"
            title="Offline FinTech Protocols"
            description="Engineered TurantPay to conduct digital UPI transactions in zero-connectivity rural zones via NPCI USSD (*99#) signaling without internet."
            header={
              <div className="h-28 rounded-xl bg-zinc-100/90 dark:bg-zinc-950/80 p-4 border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase">NPCI USSD *99#</span>
                  <span className="text-[10px] text-zinc-500">0 KB Internet</span>
                </div>
                <div className="text-zinc-900 dark:text-zinc-100 text-sm font-semibold truncate">TurantPay Gateway</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Offline Protocol Handshake</div>
              </div>
            }
            icon={<ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />}
          />

          {/* Tile 4: Computer Vision & Deep Learning */}
          <BentoGridItem
            className="md:col-span-1"
            title="Computer Vision & Deep Learning"
            description="Trained YOLOv8 and ResNet architectures for real-time vehicular traffic density regulation, emergency responder corridors, and botanical disease detection."
            header={
              <div className="h-28 rounded-xl bg-zinc-100/90 dark:bg-zinc-950/80 p-4 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-around font-mono">
                <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">98.2%</div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Diagnostic Accuracy</div>
                </div>
                <div className="h-10 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">&lt;20ms</div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Real-Time FPS</div>
                </div>
              </div>
            }
            icon={<Eye className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />}
          />

          {/* Tile 5: Academic Foundation & Problem Solving */}
          <BentoGridItem
            className="md:col-span-1"
            title="CS Fundamentals & DSA"
            description="Strong foundation in Data Structures, Algorithms, Object-Oriented Programming (Java/Python), Database Management, and Operating Systems with 8.7 CGPA."
            header={
              <div className="h-28 rounded-xl bg-zinc-100/90 dark:bg-zinc-950/80 p-4 border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-bold uppercase">Malla Reddy Univ</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">8.7 CGPA</span>
                </div>
                <div className="text-zinc-900 dark:text-zinc-100 text-sm font-semibold">B.Tech CSE (AIML)</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Class of 2026 • Hyderabad</div>
              </div>
            }
            icon={<GraduationCap className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />}
          />
        </BentoGrid>
      </div>
    </section>
  );
}
