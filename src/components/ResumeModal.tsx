import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    const resumeUrl = "/RAJU_BANDAM_RESUME__.pdf";

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-[2.5rem] z-[101] overflow-hidden flex flex-col shadow-2xl shadow-black/20 border border-gray-100"
                    >
                        {/* Header */}
                        <div className="p-6 md:p-8 flex items-center justify-between bg-white">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 leading-none mb-1">RE_SUME</h3>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">RAJU_BANDAM.pdf</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-3 bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all border border-gray-100"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 px-6 md:px-8 pb-8 overflow-hidden flex flex-col gap-6">
                            {/* Prominent Download Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <a
                                    href={resumeUrl}
                                    download
                                    className="flex-1 flex items-center justify-center gap-3 py-5 bg-black text-white rounded-2xl font-bold text-lg hover:bg-gray-900 transition-all shadow-xl shadow-black/10 group active:scale-95"
                                >
                                    <Download className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
                                    Download Resume PDF
                                </a>
                                <a
                                    href={resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 flex items-center justify-center gap-2 bg-gray-50 text-gray-900 rounded-2xl font-bold hover:bg-gray-100 transition-all border border-gray-100 active:scale-95"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Open Fullscreen
                                </a>
                            </motion.div>

                            {/* PDF Preview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex-1 bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden relative group/preview shadow-inner"
                            >
                                <iframe
                                    src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                    className="w-full h-full"
                                    title="Resume Preview"
                                />
                                {/* Glass Overlay on hover */}
                                <div className="absolute inset-0 pointer-events-none border-[8px] border-white/50 rounded-3xl" />
                            </motion.div>
                        </div>

                        {/* Quick Hint */}
                        <div className="px-8 py-4 bg-gray-50/50 border-t border-gray-100 flex justify-center items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">
                                Click outside to dismiss • PDF Preview Mode
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
