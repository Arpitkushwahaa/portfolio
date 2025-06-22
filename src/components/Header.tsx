import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-slate-900/20' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative h-10 w-10 mr-3">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 animate-spin-slow animate-glow"></div>
              <div className="absolute inset-0.5 rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold text-lg">AK</span>
              </div>
            </div>
            <div className="text-white font-bold text-xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Arpit</span> Kushwaha
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Arpitkushwahaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2 hover:bg-purple-500/10 rounded-full"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arpit-kushwaha-b3a75b2a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 hover:bg-cyan-500/10 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kushwahaarpit360@gmail.com"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 p-2 hover:bg-pink-500/10 rounded-full"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            
            <a
              href="#contact"
              className="ml-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 animate-glow"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-40 transition-all duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow">
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-6 mt-12">
            <a
              href="https://github.com/Arpitkushwahaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2 hover:bg-purple-500/10 rounded-full"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/arpit-kushwaha-b3a75b2a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 hover:bg-cyan-500/10 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:kushwahaarpit360@gmail.com"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 p-2 hover:bg-pink-500/10 rounded-full"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 animate-glow"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;