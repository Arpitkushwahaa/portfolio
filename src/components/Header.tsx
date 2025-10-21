import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveItem(currentSection);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-zinc-950/80 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-zinc-800' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <div className="relative h-10 w-10 mr-3 transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 animate-spin-slow animate-glow"></div>
              <div className="absolute inset-0.5 rounded-full bg-zinc-900 flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold text-lg">AK</span>
              </div>
            </div>
            <div className="text-white font-bold text-xl transition-colors duration-300 group-hover:opacity-90">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Arpit</span> Kushwaha
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg overflow-hidden group ${activeItem === item.id ? 'text-white' : ''}`}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Gradient background that slides in */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-lg"></span>
                
                {/* Border glow effect */}
                <span className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 rounded-lg transition-colors duration-300"></span>
                
                {/* Bottom gradient line */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 w-0 group-hover:w-full transition-all duration-500 ${activeItem === item.id ? 'w-full' : ''}`}></span>
                
                {/* Glow dot */}
                <span className="absolute bottom-0 left-0 w-1 h-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-ping"></span>
              </a>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Arpitkushwahaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 p-2 hover:bg-purple-500/10 rounded-full transform hover:scale-110 hover:shadow-md hover:shadow-purple-500/20"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arpit-kushwaha-b3a75b2a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 p-2 hover:bg-cyan-500/10 rounded-full transform hover:scale-110 hover:shadow-md hover:shadow-cyan-500/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kushwahaarpit360@gmail.com"
              className="text-gray-400 hover:text-pink-400 transition-all duration-300 p-2 hover:bg-pink-500/10 rounded-full transform hover:scale-110 hover:shadow-md hover:shadow-pink-500/20"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            
            <a
              href="#contact"
              className="ml-2 px-5 py-2 relative overflow-hidden group bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 animate-glow"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 group-hover:animate-pulse"></span>
              <span className="absolute -inset-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-transparent"></span>
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
        className={`fixed inset-0 bg-zinc-950/95 backdrop-blur-xl z-40 transition-all duration-300 transform ${
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
                className={`text-xl text-gray-300 hover:text-white transition-all duration-300 relative group px-8 py-3 rounded-lg overflow-hidden ${activeItem === item.id ? 'text-white' : ''}`}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Gradient background that fades in */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                
                {/* Border glow effect */}
                <span className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 rounded-lg transition-colors duration-300"></span>
                
                {/* Bottom gradient line */}
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 w-0 group-hover:w-4/5 transition-all duration-500 ${activeItem === item.id ? 'w-4/5' : ''}`}></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-6 mt-12">
            <a
              href="https://github.com/Arpitkushwahaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 p-2 hover:bg-purple-500/10 rounded-full transform hover:scale-110 hover:shadow-md hover:shadow-purple-500/20"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/arpit-kushwaha-b3a75b2a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 p-2 hover:bg-cyan-500/10 rounded-full transform hover:scale-110 hover:shadow-md hover:shadow-cyan-500/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:kushwahaarpit360@gmail.com"
              className="text-gray-400 hover:text-pink-400 transition-all duration-300 p-2 hover:bg-pink-500/10 rounded-full transform hover:scale-110 hover:shadow-md hover:shadow-pink-500/20"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 px-8 py-3 relative overflow-hidden group bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 animate-glow"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 group-hover:animate-pulse"></span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;