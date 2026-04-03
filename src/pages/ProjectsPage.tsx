import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Projects from '../sections/Projects';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-white dot-pattern flex flex-col pt-4 sm:pt-8 overflow-x-hidden">
            <div className="w-full flex-1 flex flex-col relative z-10">
                {/* Header Navigation */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 mb-4"
                >
                    <a href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black font-semibold transition-colors group bg-white/80 p-3 rounded-full shadow-sm border border-gray-100 backdrop-blur-md">
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Back to Portfolio
                    </a>
                </motion.div>

                {/* Main Projects Section */}
                <div className="flex-1 w-full bg-white rounded-t-[3rem] shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)] pt-8">
                    <Projects />
                </div>
                
                {/* Footer simple mark */}
                <div className="text-center bg-white text-gray-400 text-xs font-semibold tracking-widest uppercase py-8">
                    © {new Date().getFullYear()} Raju Bandam
                </div>
            </div>
        </div>
    );
}
