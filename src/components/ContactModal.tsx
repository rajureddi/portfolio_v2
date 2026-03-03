import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [copied, setCopied] = useState(false);
    const email = "rajubandam694@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-3xl z-[101] overflow-hidden shadow-2xl p-8 flex flex-col items-center text-center"
                    >
                        {/* Grab Handle Decor */}
                        <div className="w-12 h-1 bg-gray-100 rounded-full mb-8" />

                        <h2 className="text-2xl font-black text-gray-900 mb-4">Let's Talk</h2>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Please use emailing only regarding services, works, potential offers or professional talk. Kindly use other social media handles for other queries or chatting, Thanks!
                        </p>

                        <div className="flex flex-col gap-3 w-full">
                            <a
                                href={`mailto:${email}`}
                                className="w-full flex items-center justify-center gap-2 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all active:scale-[0.98]"
                            >
                                Yes, I'll send an email
                            </a>
                            <button
                                onClick={handleCopy}
                                className="w-full flex items-center justify-center gap-2 py-4 bg-white text-gray-900 border border-gray-100 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-[0.98]"
                            >
                                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                                {copied ? "Copied!" : "Let me copy the email"}
                            </button>
                        </div>

                        <p className="mt-8 text-sm text-gray-400 font-medium">
                            I also don't like mailto links but I had to use it here to avoid spam bots. Sorry!
                        </p>

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
