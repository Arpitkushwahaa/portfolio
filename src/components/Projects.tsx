import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard. Built with modern web technologies for optimal performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa",
      liveUrl: "#",
      icon: <Globe className="w-6 h-6" />,
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Prisma"],
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa",
      liveUrl: "#",
      icon: <Code className="w-6 h-6" />,
      category: "Web App"
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media management with data visualization, scheduling tools, and performance tracking across multiple platforms.",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "Redis"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa",
      liveUrl: "#",
      icon: <Database className="w-6 h-6" />,
      category: "Analytics"
    },
    {
      title: "Mobile Weather App",
      description: "A cross-platform mobile application providing detailed weather forecasts, location-based services, and customizable weather alerts.",
      technologies: ["React Native", "Expo", "OpenWeather API", "AsyncStorage"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa",
      liveUrl: "#",
      icon: <Smartphone className="w-6 h-6" />,
      category: "Mobile"
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, group chats, and end-to-end encryption for secure communication.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa",
      liveUrl: "#",
      icon: <Globe className="w-6 h-6" />,
      category: "Real-time"
    },
    {
      title: "API Gateway Service",
      description: "A microservices API gateway with authentication, rate limiting, request routing, and comprehensive monitoring and logging capabilities.",
      technologies: ["Node.js", "Express", "Docker", "Redis", "PostgreSQL"],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa",
      liveUrl: "#",
      icon: <Database className="w-6 h-6" />,
      category: "Backend"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-purple-600 p-2 rounded-full text-white">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Arpitkushwahaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;