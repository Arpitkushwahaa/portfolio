import React from 'react';
import { Code, Database, Server, Layers, Cpu, Terminal, Palette, Zap, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      categoryIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      skills: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Frontend",
      categoryIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
        { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" }
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-r from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      title: "Backend",
      categoryIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "JWT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" },
        { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" }
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20"
    },
    {
      title: "Databases",
      categoryIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Mongoose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-r from-amber-500/10 to-orange-500/10",
      borderColor: "border-amber-500/20"
    },
    {
      title: "Tools & Platforms",
      categoryIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Render", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" }
      ],
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-500/20"
    },
    {
      title: "Architecture",
      categoryIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      skills: [
        { name: "MVC Pattern", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Microservices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "RESTful APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "SOLID Principles", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
      ],
      color: "from-rose-500 to-red-500",
      bgColor: "bg-gradient-to-r from-rose-500/10 to-red-500/10",
      borderColor: "border-rose-500/20"
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-32 relative overflow-hidden bg-deep-black"
      style={{
        background: `
          radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #09090b 50%, #000000 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-purple-500/10 rounded-3xl rotate-45 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border border-pink-500/10 rounded-2xl rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-purple-400/10 rounded-full animate-pulse"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6 glass-effect hover:bg-zinc-900/70 hover:border-purple-500/40 transition-all duration-300 group cursor-pointer">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse group-hover:animate-ping"></div>
            <span className="group-hover:text-purple-200 transition-colors duration-300">My Toolkit</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow group cursor-pointer">
            <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-300 hover:to-purple-500 transition-colors duration-300">Technical</span>{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-gradient">
                Skills
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 rounded-lg blur opacity-20 animate-pulse group-hover:opacity-30"></div>
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6 rounded-full group-hover:w-64 transition-all duration-500"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto group-hover:text-gray-300 transition-colors duration-300">
            A comprehensive overview of the technologies and tools I work with to create modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 hover:bg-zinc-900/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl card-hover glass-effect gradient-border animate-scale-in opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${category.bgColor} ${category.borderColor} border rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                    <img 
                      src={category.categoryIcon} 
                      alt={category.title} 
                      className="w-6 h-6 object-contain" 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="relative group/skill"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-pink-500/50 rounded-full blur-sm opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      <span 
                        className="relative px-4 py-2 bg-zinc-900/50 text-gray-300 rounded-full text-sm border border-zinc-800/30 hover:border-purple-500/30 transition-all duration-300 hover-lift flex items-center gap-2"
                        style={{ animationDelay: `${0.1 * skillIndex}s` }}
                      >
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-4 h-4 object-contain" 
                        />
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Decoration */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 animate-slide-up opacity-0" style={{ animationDelay: '0.7s' }}>
          <div className="bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 hover-lift glass-effect gradient-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-3 animate-glow">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                  alt="Continuous Learning" 
                  className="w-6 h-6 object-contain" 
                />
              </div>
              <h4 className="text-xl font-bold text-white">Continuous Learning</h4>
            </div>
            <p className="text-gray-400">Always expanding my knowledge and staying updated with the latest technologies and industry best practices</p>
          </div>
          
          <div className="bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 hover-lift glass-effect gradient-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-3 animate-glow">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" 
                  alt="Problem Solving" 
                  className="w-6 h-6 object-contain" 
                />
              </div>
              <h4 className="text-xl font-bold text-white">Problem Solving</h4>
            </div>
            <p className="text-gray-400">Applying analytical thinking and creative solutions to overcome complex technical challenges</p>
          </div>
          
          <div className="bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 hover-lift glass-effect gradient-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-3 animate-glow">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
                  alt="Adaptability" 
                  className="w-6 h-6 object-contain" 
                />
              </div>
              <h4 className="text-xl font-bold text-white">Adaptability</h4>
            </div>
            <p className="text-gray-400">Quickly learning and adapting to new technologies and frameworks to meet project requirements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;