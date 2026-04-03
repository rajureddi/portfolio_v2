import { Download, ExternalLink, ArrowLeft, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResumePage() {
    const resumeUrl = "/RAJU_BANDAM_RESUME__.pdf";

    return (
        <div className="min-h-screen bg-white dot-pattern flex flex-col p-4 sm:p-8">
            <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
                {/* Header Navigation */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-center mb-12 mt-4"
                >
                    <a href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black font-semibold transition-colors group">
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Back to Portfolio
                    </a>
                </motion.div>

                {/* Standalone Resume Container */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex-1 bg-white rounded-[3rem] p-6 md:p-10 shadow-2xl shadow-black/[0.05] border border-gray-100 flex flex-col gap-6"
                >
                    {/* Action Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white shadow-xl shadow-black/20">
                                <FileText className="w-7 h-7" />
                            </div>
                            <div className="text-left">
                                <h1 className="text-2xl font-black text-gray-900 tracking-tight">RAJU_BANDAM.pdf</h1>
                                <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mt-1">Official Resume</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <a
                                href={resumeUrl}
                                download
                                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-900 transition-all active:scale-95 shadow-xl shadow-black/10"
                            >
                                <Download className="w-5 h-5" />
                                Download PDF
                            </a>
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200 rounded-2xl transition-all active:scale-95"
                                title="Open Fullscreen"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* PDF Viewer - Taking remaining height */}
                    <div className="flex-1 min-h-[600px] w-full bg-gray-50 rounded-[2rem] border border-gray-100 overflow-hidden shadow-inner relative group">
                        <iframe
                            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                            className="w-full h-full absolute inset-0"
                            title="Resume Preview"
                        />
                        {/* Subtle Overlay to make edges look flush */}
                        <div className="absolute inset-0 pointer-events-none border-[12px] border-white rounded-[2rem]" />
                    </div>
                </motion.div>
                
                {/* Footer simple mark */}
                <div className="text-center mt-8 text-gray-400 text-xs font-semibold tracking-widest uppercase pb-4">
                    © {new Date().getFullYear()} Raju Bandam
                </div>
            </div>
        </div>
    );
}
