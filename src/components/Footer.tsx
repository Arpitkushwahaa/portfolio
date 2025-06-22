import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-purple-400">A</span>rpit Kushwaha
            </div>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating innovative web solutions and bringing ideas to life through clean, efficient code.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/Arpitkushwahaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/arpitkushwaha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:arpitkushwaha@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block w-full text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>arpitkushwaha@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Available for Remote Work</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Arpit Kushwaha © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;