import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Send } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/rajureddi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rajureddie/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/naughtyeth', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/rajureddie__', label: 'Instagram' },
];

const marqueeText = "LET'S BUILD SOMETHING AMAZING TOGETHER • CONTACT ME TODAY • ";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Let's Talk Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-tight">
              LET'S <span className="text-blue-600">TALK.</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium max-w-md">
              Have a project in mind? Let's turn your ideas into reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 w-full max-w-sm"
          >
            <a
              href="mailto:rajubandam694@gmail.com"
              className="group relative flex items-center justify-between p-8 bg-black text-white rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02]"
            >
              <div className="relative z-10 flex flex-col">
                <span className="text-xs uppercase tracking-widest font-black opacity-50 mb-2">Send an Email</span>
                <span className="text-lg font-bold">rajubandam694@gmail.com</span>
              </div>
              <div className="relative z-10 p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                <Send className="w-6 h-6" />
              </div>
              {/* Animation Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
            </a>

            <div className="flex gap-4">
              {socialLinks.slice(0, 2).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center p-6 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-xl transition-all group"
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-transparent group-hover:text-blue-600 ml-1 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative mb-24 py-10 border-y border-gray-100 bg-gray-50/30">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-5xl font-black text-transparent stroke-gray-200 uppercase tracking-tighter mx-4" style={{ WebkitTextStroke: '1px #e5e7eb' }}>
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-gray-900 uppercase">Raju Reddy</span>
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-sm text-gray-400">© {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="text-sm font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
            >
              Back to top
            </button>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
