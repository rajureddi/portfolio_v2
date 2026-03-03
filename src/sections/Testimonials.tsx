import { motion } from 'framer-motion';
import { FileDown, Mail, Phone, Globe, Github, Linkedin, Twitter } from 'lucide-react';

const technicalSkills = {
  'Languages': ['Python', 'C/C++', 'Java', 'JavaScript'],
  'Frameworks': ['React', 'Flask', 'Node.js', 'FastAPI', 'KivyMD'],
  'ML/AI': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'HuggingFace', 'NLP', 'CV', 'Transformers'],
  'Tools': ['Git', 'Firebase', 'MongoDB', 'MySQL', 'AWS'],
};

const interests = ['ML Systems', 'Web Apps', 'Deployment', 'Computer Vision'];

export default function Testimonials() {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Resume</h2>
          <p className="mt-4 text-gray-600">My skills and expertise</p>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <a
            href="/RAJU_BANDAM_RESUME__.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            <FileDown className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 mb-8"
        >
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="tel:+919121455643" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
              <Phone className="w-5 h-5" />
              +91 9121455643
            </a>
            <a href="mailto:rajubandam694@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
              <Mail className="w-5 h-5" />
              rajubandam694@gmail.com
            </a>
            <a href="https://rajureddie.site" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
              <Globe className="w-5 h-5" />
              rajureddie.site
            </a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/rajureddi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/rajureddie" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/naughtyeth" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 mb-8"
        >
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white border border-gray-200 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span key={interest} className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
