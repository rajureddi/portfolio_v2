import { motion } from 'framer-motion';
import { Coffee, Mail, MessageCircle } from 'lucide-react';

export default function Support() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-bold text-violet-600 uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Let's Work Together</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <a
            href="mailto:rajubandam694@gmail.com"
            className="group flex items-center gap-4 p-6 rounded-2xl shadow-sm transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.80)',
              boxShadow: '0 4px 20px rgba(109,40,217,0.06), inset 0 1px 0 rgba(255,255,255,0.90)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 40px rgba(109,40,217,0.15), inset 0 1px 0 rgba(255,255,255,0.90)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(109,40,217,0.06), inset 0 1px 0 rgba(255,255,255,0.90)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            <div
              className="p-4 rounded-xl transition-all group-hover:scale-110"
              style={{
                background: 'rgba(237,233,254,0.70)',
                border: '1px solid rgba(167,139,250,0.40)',
                color: '#7c3aed',
              }}
            >
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Email Me</h3>
              <p className="text-sm text-gray-500">rajubandam694@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/rajureddie/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.80)',
              boxShadow: '0 4px 20px rgba(59,130,246,0.06), inset 0 1px 0 rgba(255,255,255,0.90)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 40px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.90)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(59,130,246,0.06), inset 0 1px 0 rgba(255,255,255,0.90)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            <div
              className="p-4 rounded-xl transition-all group-hover:scale-110"
              style={{
                background: 'rgba(219,234,254,0.70)',
                border: '1px solid rgba(147,197,253,0.40)',
                color: '#1d4ed8',
              }}
            >
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">LinkedIn</h3>
              <p className="text-sm text-gray-500">Connect with me</p>
            </div>
          </a>
        </motion.div>

        {/* Buy Me a Coffee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-6">Enjoying my work? Support my journey!</p>
          <a
            href="https://buymeacoffee.com/rajubandame"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #FFDD00, #FFAA00)',
              color: '#1a0a00',
              boxShadow: '0 6px 25px rgba(255,200,0,0.35)',
            }}
          >
            <Coffee className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Buy me a coffee
          </a>
        </motion.div>
      </div>
    </section>
  );
}
