import React, { useRef, useEffect } from 'react';
import { Code, Server, Database, Smartphone, Zap, Sparkles, Globe, Brain } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!aboutRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      
      aboutRef.current.style.setProperty('--mouse-x', `${xPos}%`);
      aboutRef.current.style.setProperty('--mouse-y', `${yPos}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Mastery",
      description: "Creating stunning, responsive interfaces with React, TypeScript, and modern CSS frameworks",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=300&auto=format&fit=crop"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Excellence",
      description: "Building scalable APIs and microservices with Node.js, Python, and cloud technologies",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=300&auto=format&fit=crop"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Architecting efficient data solutions with SQL, NoSQL, and modern database technologies",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=300&auto=format&fit=crop"
    }
  ];

  const achievements = [
    { number: "10+", label: "Projects Built", icon: <Sparkles className="w-5 h-5" /> },
    { number: "1+", label: "Years Learning", icon: <Zap className="w-5 h-5" /> },
    { number: "10+", label: "Technologies", icon: <Globe className="w-5 h-5" /> },
    { number: "100%", label: "Enthusiasm", icon: <Brain className="w-5 h-5" /> }
  ];

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6, 182, 212, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 left-16 w-24 h-24 border border-cyan-500/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-48 right-24 w-32 h-32 border border-purple-500/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-32 w-20 h-20 border border-pink-500/20 rounded-3xl rotate-45 animate-float-slow"></div>
        <div className="absolute bottom-24 right-16 w-28 h-28 border border-blue-500/20 rounded-2xl animate-pulse"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            Get to know me
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
                Me
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-20 animate-pulse"></div>
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* 3D Profile Section */}
          <div className="relative">
            {/* Main Profile Card */}
            <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 shadow-2xl">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50"></div>
              
              <div className="relative z-10">
                {/* 3D Avatar */}
                <div className="relative mx-auto w-40 h-40 mb-8">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-600 to-purple-600 flex items-center justify-center shadow-2xl overflow-hidden">
                          <img 
                            src="C:\Users\kushw\Downloads\project-portfolio\project\src\components\WhatsApp Image 2025-05-20 at 15.39.03_2ef9de44.jpg" 
                            alt="Arpit Kushwaha" 
                            className="w-full h-full object-cover brightness-110 contrast-110"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 p-2 rounded-full shadow-lg">
                          <Code className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute -top-4 -left-4 bg-blue-600 p-2 rounded-xl shadow-lg animate-float">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-green-600 p-2 rounded-xl shadow-lg animate-float-delayed">
                    <Server className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 p-2 rounded-xl shadow-lg animate-float-slow">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Arpit Kushwaha</h3>
                  <p className="text-cyan-400 font-semibold mb-4">Aspiring Developer</p>
                  
                  {/* Achievement Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-4 border border-slate-600/30">
                        <div className="flex items-center justify-center mb-2 text-cyan-400">
                          {achievement.icon}
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
                        <div className="text-gray-400 text-sm">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl rotate-12 animate-float opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float-delayed opacity-20"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Aspiring Developer &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Eager Learner
                </span>
              </h3>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm an aspiring developer with a passion for creating web solutions that make a real impact. 
                  I'm building my skills across both frontend and backend technologies, and I enjoy tackling new challenges and 
                  transforming creative ideas into functional applications.
                </p>
                
                <p>
                  My journey in software development is driven by curiosity and a commitment to continuous learning. 
                  I'm focused on writing clean code, following industry best practices, and staying updated with 
                  emerging technologies to improve my skills.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new frameworks, participating in coding communities, or working on 
                  personal projects to enhance my abilities.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Let's Connect
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border-2 border-cyan-400/50 text-cyan-300 font-semibold rounded-2xl backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 hover:border-cyan-400"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>

        {/* Skills Highlights */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/30 backdrop-blur-xl border ${highlight.borderColor} rounded-3xl p-6 hover:bg-slate-800/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl`}
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`${highlight.bgColor} ${highlight.borderColor} border rounded-2xl p-4 w-24 h-24 mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden flex items-center justify-center`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${highlight.color} relative z-10`}>
                    {highlight.icon}
                  </div>
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-300 brightness-125 contrast-125 filter"
                  />
                </div>
                
                <h4 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {highlight.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {highlight.description}
                </p>
              </div>

              {/* Floating Decoration */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;