import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Mail } from 'lucide-react';
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
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100]"
                        style={{
                            background: 'rgba(109, 40, 217, 0.08)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                        }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.88, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 30 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md z-[101] overflow-hidden rounded-3xl"
                        style={{
                            background: 'rgba(255,255,255,0.82)',
                            backdropFilter: 'blur(48px) saturate(200%)',
                            WebkitBackdropFilter: 'blur(48px) saturate(200%)',
                            border: '1px solid rgba(255,255,255,0.90)',
                            boxShadow: '0 24px 80px rgba(109,40,217,0.18), 0 8px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,1)',
                        }}
                    >
                        {/* Decorative gradient stripe at top */}
                        <div
                            className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                            style={{ background: 'linear-gradient(90deg, #a78bfa, #818cf8, #67e8f9)' }}
                        />

                        {/* Floating orb */}
                        <div
                            className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)',
                                filter: 'blur(20px)',
                            }}
                        />

                        <div className="p-8 flex flex-col items-center text-center relative z-10">
                            {/* Grab handle */}
                            <div
                                className="w-10 h-1 rounded-full mb-8"
                                style={{ background: 'rgba(139,92,246,0.3)' }}
                            />

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(167,139,250,0.3), rgba(99,102,241,0.2))',
                                    border: '1px solid rgba(167,139,250,0.4)',
                                    backdropFilter: 'blur(10px)',
                                }}
                            >
                                <Mail className="w-7 h-7 text-violet-600" />
                            </div>

                            <h2 className="text-2xl font-black text-gray-900 mb-3">Let's Talk</h2>
                            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                                Please use emailing only regarding services, works, potential offers or professional talk. Kindly use other social media handles for other queries or chatting, Thanks!
                            </p>

                            <div className="flex flex-col gap-3 w-full">
                                <a
                                    href={`mailto:${email}`}
                                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white transition-all active:scale-[0.98] hover:opacity-90"
                                    style={{
                                        background: 'linear-gradient(135deg, #6d28d9, #4f46e5)',
                                        boxShadow: '0 4px 20px rgba(109,40,217,0.35)',
                                    }}
                                >
                                    Yes, I'll send an email
                                </a>
                                <button
                                    onClick={handleCopy}
                                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-gray-700 transition-all active:scale-[0.98]"
                                    style={{
                                        background: 'rgba(255,255,255,0.75)',
                                        border: '1px solid rgba(255,255,255,0.9)',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.95)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.75)';
                                    }}
                                >
                                    {copied
                                        ? <Check className="w-5 h-5 text-green-500" />
                                        : <Copy className="w-5 h-5" />
                                    }
                                    {copied ? "Copied!" : "Let me copy the email"}
                                </button>
                            </div>

                            <p className="mt-7 text-xs text-gray-400 font-medium">
                                I also don't like mailto links but I had to use it here to avoid spam bots. Sorry!
                            </p>
                        </div>

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 p-2 rounded-full transition-all"
                            style={{ background: 'rgba(255,255,255,0.60)', border: '1px solid rgba(255,255,255,0.8)' }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.90)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.60)';
                            }}
                        >
                            <X className="w-4 h-4 text-gray-500" />
                        </button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
