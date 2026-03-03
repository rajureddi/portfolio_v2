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
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
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
            className="group flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:border-gray-300 transition-all duration-300"
          >
            <div className="p-4 bg-gray-100 rounded-xl group-hover:bg-black group-hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">Email Me</h3>
              <p className="text-sm text-gray-600">rajubandam694@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/rajureddie/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:border-gray-300 transition-all duration-300"
          >
            <div className="p-4 bg-gray-100 rounded-xl group-hover:bg-black group-hover:text-white transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-sm text-gray-600">Connect with me</p>
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
          <p className="text-gray-600 mb-6">Enjoying my work? Support my journey!</p>
          <a
            href="https://buymeacoffee.com/rajubandame"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FFDD00] text-black rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Coffee className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Buy me a coffee
          </a>
        </motion.div>
      </div>
    </section>
  );
}
