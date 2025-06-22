import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative pt-20 pb-10 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-t from-purple-600/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-t from-cyan-600/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="relative h-12 w-12 mr-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 animate-spin-slow animate-glow"></div>
                <div className="absolute inset-0.5 rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold text-xl">AK</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Arpit Kushwaha</h3>
                <p className="text-gray-400 text-sm">Aspiring Developer</p>
              </div>
            </div>
            
            <p className="text-gray-400">
              Building modern web experiences with cutting-edge technologies and a passion for clean code.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Arpitkushwahaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-purple-600/20 hover:border-purple-500/30 border border-slate-700/50 transition-all duration-300 group hover-lift"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/arpit-kushwaha-b3a75b2a3/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-600/20 hover:border-cyan-500/30 border border-slate-700/50 transition-all duration-300 group hover-lift"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a 
                href="mailto:kushwahaarpit360@gmail.com"
                className="bg-slate-800 p-3 rounded-full hover:bg-pink-600/20 hover:border-pink-500/30 border border-slate-700/50 transition-all duration-300 group hover-lift"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates about my latest projects and tech articles
            </p>
            
            <form className="space-y-4">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-slate-800/50 border border-slate-700/50 text-gray-300 rounded-xl px-5 py-3 outline-none focus:border-purple-500/50 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-xl border border-purple-500/0 group-focus-within:border-purple-500/50 group-focus-within:shadow-[0_0_10px_rgba(139,92,246,0.2)] pointer-events-none transition-all duration-300"></div>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-5 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 animate-glow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Arpit Kushwaha. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-gray-500 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> using React & Tailwind CSS
            </p>
            
            <button 
              onClick={scrollToTop}
              className="ml-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 p-3 rounded-full border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover-lift animate-glow"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-purple-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;