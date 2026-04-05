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
    <footer
      className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden z-10"
      style={{
        background: 'rgba(255,255,255,0.25)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.60)',
      }}
    >
      {/* Gradient top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), rgba(99,102,241,0.5), transparent)' }}
      />

      {/* Decorative orbs */}
      <div
        className="absolute top-10 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Let's Talk Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-tight text-gray-900">
              LET'S <span style={{
                background: 'linear-gradient(135deg, #6d28d9, #4f46e5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>TALK.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium max-w-md">
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
              className="group relative flex items-center justify-between p-8 rounded-3xl overflow-hidden transition-all hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255,255,255,0.85)',
                boxShadow: '0 8px 32px rgba(109,40,217,0.08), inset 0 1px 0 rgba(255,255,255,0.90)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 20px 50px rgba(109,40,217,0.16), inset 0 1px 0 rgba(255,255,255,0.90)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(109,40,217,0.08), inset 0 1px 0 rgba(255,255,255,0.90)';
              }}
            >
              <div className="relative z-10 flex flex-col">
                <span className="text-xs uppercase tracking-widest font-black opacity-50 mb-2 text-gray-500">Send an Email</span>
                <span className="text-lg font-bold text-gray-800">rajubandam694@gmail.com</span>
              </div>
              <div
                className="relative z-10 p-4 rounded-2xl transition-all group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(167,139,250,0.3), rgba(99,102,241,0.2))',
                  border: '1px solid rgba(167,139,250,0.4)',
                  color: '#6d28d9',
                }}
              >
                <Send className="w-6 h-6" />
              </div>
              {/* Animation orb */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
            </a>

            <div className="flex gap-4">
              {socialLinks.slice(0, 2).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center p-6 rounded-3xl transition-all group hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.55)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.80)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.90)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 30px rgba(109,40,217,0.12), inset 0 1px 0 rgba(255,255,255,0.90)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 15px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.90)';
                  }}
                >
                  <social.icon className="w-6 h-6 text-gray-500 group-hover:text-violet-600 transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-transparent group-hover:text-violet-400 ml-1 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div
          className="relative mb-24 py-10 rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.30)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255,255,255,0.60)',
            borderBottom: '1px solid rgba(255,255,255,0.60)',
          }}
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-5xl font-black uppercase tracking-tighter mx-4"
                style={{ WebkitTextStroke: '1px rgba(109,40,217,0.15)', color: 'transparent' }}
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-gray-800 uppercase">Raju Reddy</span>
            <div className="w-1 h-1 rounded-full bg-violet-400" />
            <span className="text-sm text-gray-500">© {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="text-sm font-black uppercase tracking-widest text-gray-500 hover:text-violet-600 transition-colors"
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
                  className="text-gray-400 hover:text-violet-600 transition-colors"
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
