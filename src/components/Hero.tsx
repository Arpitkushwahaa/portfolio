import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, Github, ExternalLink, Code, Sparkles, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      
      heroRef.current.style.setProperty('--mouse-x', `${xPos}%`);
      heroRef.current.style.setProperty('--mouse-y', `${yPos}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 pt-20"
      style={{
        background: `
          radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-purple-500/20 rounded-3xl rotate-45 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border border-pink-500/20 rounded-2xl rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-purple-400/20 rounded-full animate-pulse"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/30 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-600/20 to-transparent rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* 3D Avatar/Logo */}
          <div className="mb-16 relative mt-8 animate-float">
            <div className="relative mx-auto w-48 h-48 mb-8">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 p-1 animate-spin-slow animate-glow">
                <div className="w-full h-full rounded-full bg-slate-950"></div>
              </div>
              
              {/* Inner Avatar */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500 overflow-hidden">
                <div className="relative w-full h-full">
                  <img 
                    src="/src/components/WhatsApp Image 2025-05-20 at 15.39.03_2ef9de44.jpg" 
                    alt="Arpit Kushwaha" 
                    className="w-full h-full object-cover brightness-110 contrast-110"
                  />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-purple-600 to-purple-800 p-3 rounded-2xl shadow-lg animate-float shadow-purple-600/30">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-600 to-cyan-800 p-3 rounded-2xl shadow-lg animate-float-delayed shadow-cyan-600/30">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-pink-600 to-pink-800 p-3 rounded-2xl shadow-lg animate-float-slow shadow-pink-600/30">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 pb-20">
            {/* Greeting */}
            <div className="space-y-4 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium glass-effect">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for new opportunities
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight text-shadow">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-gradient">
                    Arpit
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 rounded-lg blur opacity-20 animate-pulse"></div>
                </span>
              </h1>
            </div>

            {/* Role */}
            <div className="space-y-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-200">
                Full Stack{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Developer
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-shimmer"></div>
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Crafting digital experiences with{' '}
                <span className="text-purple-400 font-semibold">modern technologies</span> and{' '}
                <span className="text-cyan-400 font-semibold">innovative solutions</span>.
                <br />
                Turning ideas into reality through clean, efficient code.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 py-8 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
              <div className="text-center bg-slate-800/30 px-6 py-4 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover-lift">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1">1+</div>
                <div className="text-gray-400 text-sm">Years Learning</div>
              </div>
              <div className="text-center bg-slate-800/30 px-6 py-4 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover-lift">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1">10+</div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
              <div className="text-center bg-slate-800/30 px-6 py-4 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover-lift">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1">10+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={scrollToAbout}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 animate-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Explore My Work
                </span>
              </button>
              
              <a
                href="https://github.com/Arpitkushwahaa"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 border-2 border-purple-400/50 text-purple-300 font-semibold rounded-2xl backdrop-blur-sm hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-105 hover:border-purple-400 glass-effect"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  View GitHub
                </span>
              </a>
            </div>

            {/* Tech Stack Preview */}
            <div className="pt-8 mb-12 animate-slide-up opacity-0" style={{ animationDelay: '1s' }}>
              <p className="text-gray-500 text-sm mb-4">Built with modern technologies</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Three.js'].map((tech, index) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-full text-gray-300 text-sm hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 cursor-default hover-lift"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 text-purple-300 hover:text-white hover:bg-purple-600/20 transition-all duration-300 glass-effect"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;