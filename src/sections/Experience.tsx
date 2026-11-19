import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';
import SpotlightCard from '../components/21st/SpotlightCard';

const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science and Engineering (AIML)',
    institution: 'Malla Reddy University, Hyderabad',
    tenure: '2022 – 2026',
    grade: 'CGPA: 8.7 / 10.0',
    highlight: 'Specialization in Artificial Intelligence, Deep Learning & Applied Software Engineering',
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: 'Intermediate (Class XII) – MPC',
    institution: 'SR Junior College',
    tenure: '2020 – 2022',
    grade: 'Score: 90.1%',
    highlight: 'Advanced Mathematics, Physics, and Chemistry foundation',
    icon: BookOpen,
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (Class X)',
    institution: 'ZPSS T/EM Chennur',
    tenure: '2020',
    grade: 'CGPA: 10.0 / 10.0',
    highlight: 'Perfect academic score with distinction across all subjects',
    icon: Award,
  },
];

const certifications = [
  { name: 'NPTEL Certification — Java Programming', issuer: 'IIT Kharagpur / SWAYAM', status: 'Elite Certified' },
  { name: 'Google Crash Course on Python', issuer: 'Google', status: 'Verified' },
  { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services', status: 'Coursework Completed' },
];

const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming (Java/Python)',
  'Deep Learning & Neural Networks',
  'Computer Vision (CNN, YOLOv8)',
  'Natural Language Processing (Transformers)',
  'Database Management Systems (SQL/NoSQL)',
  'Full-Stack Web Architecture',
  'Operating Systems & Networking',
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 bg-zinc-50 dark:bg-[#09090b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200 dark:border-zinc-800/80">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold tracking-widest uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC RECORD &amp; CERTIFICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Education &amp; Milestones.
            </h2>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md font-mono">
            A consistent academic foundation combined with practical full-stack and machine learning implementations.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {education.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SpotlightCard
                  className="h-full bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800/80 shadow-xs"
                  spotlightColor="rgba(0, 0, 0, 0.05)"
                >
                  <div className="flex flex-col h-full justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shadow-inner">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                          <Calendar className="w-3 h-3 text-zinc-500" />
                          <span>{item.tenure}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                          {item.degree}
                        </h3>
                        <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                          {item.institution}
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                          {item.highlight}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-500">Academic Score:</span>
                      <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                        {item.grade}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications & Coursework Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          {/* Industry Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-4 shadow-xs"
                >
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 truncate">
                      {cert.name}
                    </div>
                    <div className="text-xs text-zinc-500 font-mono">
                      {cert.issuer}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 shrink-0">
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Coursework Tags */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <span>Core Academic Coursework</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-300 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
