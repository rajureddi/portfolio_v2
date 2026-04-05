import { motion } from 'framer-motion';
import { ChevronRight, GraduationCap, Award, BookOpen, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science and Engineering (AIML)',
    institution: 'Malla Reddy University, Hyderabad',
    tenure: '2022 - 2026',
    grade: 'CGPA: 8.6',
    icon: GraduationCap,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    degree: 'Intermediate - MPC',
    institution: 'SR Junior College',
    tenure: '2020 - 2022',
    grade: '90.1%',
    icon: BookOpen,
    color: 'bg-indigo-500',
  },
  {
    id: 3,
    degree: 'SSC',
    institution: 'ZPSS T/EM Chennur',
    tenure: '2020',
    grade: 'CGPA: 10',
    icon: Award,
    color: 'bg-purple-500',
  },
];

const certifications = [
  'NPTEL Certification — Java Programming',
  'Google Crash Course on Python (2024)',
  'AWS Academy Cloud Foundations (In Progress)',
];

const coursework = [
  'DSA', 'Algorithms', 'DBMS', 'AI/ML', 'Deep Learning', 'NLP', 'CV', 'Full-Stack Development', 'Data Analytics'
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">Education</h2>
            <p className="mt-4 text-gray-600 font-medium">My academic journey and milestones.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-3 text-gray-600 glass px-6 py-3 rounded-full"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Scroll this way</span>
            <div className="flex">
              <ChevronRight className="w-5 h-5 animate-pulse text-blue-500" />
              <ChevronRight className="w-5 h-5 animate-pulse text-blue-500 -ml-3" />
            </div>
          </motion.div>
        </div>

        {/* Horizontal Education Scroll */}
        <div className="relative group">
          <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar gap-8 px-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[85vw] sm:w-[450px] snap-center"
              >
                <div
                  className="h-full rounded-[2.5rem] p-8 transition-all duration-500 relative overflow-hidden group/card"
                  style={{
                    background: 'rgba(255,255,255,0.58)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    border: '1px solid rgba(255,255,255,0.82)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.90)',
                  }}
                >
                  {/* Card Background Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${edu.color} opacity-[0.03] rounded-bl-full group-hover/card:opacity-[0.08] transition-opacity duration-500`} />

                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`p-4 ${edu.color} bg-opacity-10 rounded-2xl`}>
                        <edu.icon className={`w-8 h-8 ${edu.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="px-5 py-2 glass rounded-full text-sm font-bold text-gray-900">
                          {edu.tenure}
                        </span>
                        <span className="mt-2 text-blue-600 font-black text-xl">
                          {edu.grade}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover/card:text-blue-600 transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-gray-600 font-medium">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>Full-time Program</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 px-4">
          {/* Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] p-10"
            style={{
              background: 'rgba(237,233,254,0.45)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1px solid rgba(167,139,250,0.40)',
              boxShadow: '0 8px 30px rgba(109,40,217,0.07), inset 0 1px 0 rgba(255,255,255,0.85)',
            }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <BookOpen className="w-6 h-6 text-blue-500" />
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span key={course} className="px-5 py-2.5 bg-white/40 hover:bg-white/80 hover:text-blue-600 rounded-full text-sm font-bold text-gray-700 border border-white/50 transition-all cursor-default shadow-sm">
                  {course}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] p-10"
            style={{
              background: 'rgba(254,243,199,0.45)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1px solid rgba(252,211,77,0.40)',
              boxShadow: '0 8px 30px rgba(245,158,11,0.07), inset 0 1px 0 rgba(255,255,255,0.85)',
            }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <Award className="w-6 h-6 text-yellow-500" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 hover:bg-white/50 rounded-2xl transition-all border border-transparent hover:border-white/50 group shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-yellow-500 group-hover:scale-150 transition-transform" />
                  <span className="text-gray-800 font-semibold">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
