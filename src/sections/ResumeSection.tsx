import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';

export default function ResumeSection() {
    const resumeUrl = "/RAJU_BANDAM_RESUME__.pdf";

    return (
        <section id="resume" className="py-32 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl sm:text-6xl font-black tracking-tighter mb-4 text-gray-900">RE_SUME</h2>
                    <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-2">
                        <span className="w-8 h-[1px] bg-gray-300" />
                        Curriculum Vitae
                        <span className="w-8 h-[1px] bg-gray-300" />
                    </p>
                </motion.div>

                <div className="glass-card rounded-[3rem] p-8 md:p-12 shadow-xl shadow-black/5 flex flex-col gap-8">
                    {/* Action Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/60 rounded-2xl flex items-center justify-center text-gray-900 border border-white/80 shadow-sm">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-gray-900">RAJU_BANDAM.pdf</h3>
                                <p className="text-sm text-gray-500 font-medium">Software Engineer • AI/ML</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <a
                                href={resumeUrl}
                                download
                                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all active:scale-95 shadow-xl shadow-black/10 border border-gray-800"
                            >
                                <Download className="w-5 h-5" />
                                Download PDF
                            </a>
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/60 text-gray-600 hover:text-black hover:bg-white rounded-2xl transition-all active:scale-95 border border-white/80 shadow-sm"
                                title="Open Fullscreen"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* PDF Viewer */}
                    <div className="aspect-[1/1.4] w-full glass rounded-[2rem] overflow-hidden shadow-inner group relative">
                        <iframe
                            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                            className="w-full h-full"
                            title="Resume Preview"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 pointer-events-none border-[12px] border-white/40 rounded-[2rem]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
