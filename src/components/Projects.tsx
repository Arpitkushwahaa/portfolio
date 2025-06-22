import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database, Video, Activity, Briefcase, ShoppingBag, Brain, Link, CalendarClock, Pizza, VideoIcon, Film, Receipt, BookOpen } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Doctors Appointment App",
      description: "A full-stack doctor appointment platform with Vonage-based video calls, enabling users to schedule, manage, and attend appointments. Features responsive UI, role-based authentication, and real-time alerts.",
      technologies: ["React 19", "Next.js 15", "Tailwind CSS", "NeonDB", "Prisma", "Clerk", "Vonage", "Shadcn UI"],
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/doctors-appointment",
      liveUrl: "https://doctors-appointment-demo.vercel.app",
      icon: <Video className="w-6 h-6" />,
      category: "Full Stack"
    },
    {
      title: "AI Finance Platform",
      description: "An AI-driven finance dashboard to track spending, visualize data, and generate insights. Features Supabase backend, Clerk authentication, background jobs with Inngest, and enhanced security with Arcjet.",
      technologies: ["React 19", "Next.js 15", "Tailwind CSS", "Supabase", "Prisma", "Clerk", "Inngest", "Arcjet", "Shadcn UI"],
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/ai-finance-platform",
      liveUrl: "https://ai-finance-platform-demo.vercel.app",
      icon: <Activity className="w-6 h-6" />,
      category: "AI Platform"
    },
    {
      title: "Full-Stack Job Portal",
      description: "A hiring platform with job posting, applicant tracking, and role-based dashboards. Features real-time job applications, resume uploads, and application status tracking with secure authentication.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "Multer", "Shadcn UI"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/job-portal",
      liveUrl: "https://job-portal-demo.vercel.app",
      icon: <Briefcase className="w-6 h-6" />,
      category: "Web App"
    },
    {
      title: "E-Commerce Web Application",
      description: "A full-featured e-commerce platform with user and admin views, featuring authentication, product management, and complete order flow. Includes admin dashboard, shopping experience, and Stripe payments.",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "Clerk", "Stripe", "Shadcn UI"],
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/ecommerce-app",
      liveUrl: "https://ecommerce-demo.vercel.app",
      icon: <ShoppingBag className="w-6 h-6" />,
      category: "E-Commerce"
    },
    {
      title: "AI Career Coach Platform",
      description: "An AI-powered career platform with mock interviews, resume builder, and industry insights. Features Gemini AI APIs, custom onboarding, and automated weekly insights for tracking career progress.",
      technologies: ["Next.js", "Shadcn UI", "Clerk", "Prisma", "Inngest", "Gemini API"],
      image: "https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/ai-career-coach",
      liveUrl: "https://ai-career-coach-demo.vercel.app",
      icon: <Brain className="w-6 h-6" />,
      category: "AI Platform"
    },
    {
      title: "URL Shortener Web App",
      description: "A full-stack URL shortener platform allowing users to create, manage, and share shortened links. Features user authentication, link analytics, and custom short URLs with validation and error handling.",
      technologies: ["React", "Next.js", "MongoDB", "Express.js", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/url-shortener",
      liveUrl: "https://url-shortener-demo.vercel.app",
      icon: <Link className="w-6 h-6" />,
      category: "Full Stack"
    },
    {
      title: "Food Delivery Website",
      description: "A production-ready restaurant platform with authentication, restaurant browsing, dynamic cart & checkout system with Stripe integration, and role-based dashboards for admins and users.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Stripe", "Zustand", "Zod"],
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/food-delivery",
      liveUrl: "https://food-delivery-demo.vercel.app",
      icon: <Pizza className="w-6 h-6" />,
      category: "Full Stack"
    },
    {
      title: "Calendar Scheduling Platform",
      description: "A Calendly-like scheduling platform with event management, time-slot configuration, third-party calendar integrations, and auto time zone detection. Built with a scalable architecture and responsive design.",
      technologies: ["React", "Next.js", "Node.js", "TypeORM", "Supabase", "Tailwind CSS", "Shadcn UI", "Google Calendar API"],
      image: "https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/calendar-scheduling",
      liveUrl: "https://calendar-scheduling-demo.vercel.app",
      icon: <CalendarClock className="w-6 h-6" />,
      category: "Web App"
    },
    {
      title: "Video Conferencing App",
      description: "A Zoom-like video conferencing platform with real-time video/audio calls, screen sharing, meeting recording, scheduled meetings, and dynamic meeting rooms with custom URLs.",
      technologies: ["Next.js 15", "TypeScript", "Clerk", "TailwindCSS", "Shadcn UI", "Stream"],
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/video-conferencing",
      liveUrl: "https://video-conferencing-demo.vercel.app",
      icon: <VideoIcon className="w-6 h-6" />,
      category: "Real-time"
    },
    {
      title: "CineFlix - Movie Platform",
      description: "A responsive movie and trailer discovery platform with personalized watchlists, real-time data from TMDB API, and interactive UI featuring trending movies, genres, cast details, and trailers.",
      technologies: ["Next.js", "Clerk", "TailwindCSS", "Shadcn UI", "TMDB API"],
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/cineflix",
      liveUrl: "https://cineflix-demo.vercel.app",
      icon: <Film className="w-6 h-6" />,
      category: "Entertainment"
    },
    {
      title: "Splitr - Expense Splitting App",
      description: "An AI-powered expense splitting platform for managing group transactions with intelligent debt settlement, real-time assistance, and automated reconciliation. Features clean data visualization and expense tracking.",
      technologies: ["React 19", "Next.js 15", "Tailwind CSS", "Convex", "Prisma", "Clerk", "Inngest", "Shadcn UI"],
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/splitr",
      liveUrl: "https://splitr-demo.vercel.app",
      icon: <Receipt className="w-6 h-6" />,
      category: "AI Platform"
    },
    {
      title: "AI Journal & Mood Tracker",
      description: "A full-featured journaling platform with secure entry management, daily prompts, mood analytics visualization, and collections. Features real-time draft saving and custom organization tools.",
      technologies: ["React.js", "Next.js 15", "Tailwind CSS", "Supabase", "Prisma", "Clerk", "Arcjet", "Shadcn UI"],
      image: "https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/Arpitkushwahaa/ai-journal",
      liveUrl: "https://ai-journal-demo.vercel.app",
      icon: <BookOpen className="w-6 h-6" />,
      category: "AI Platform"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            Recent Projects
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
            My <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-gradient">
                Projects
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 rounded-lg blur opacity-20 animate-pulse"></div>
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden card-hover animate-scale-in opacity-0 gradient-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                <div className="absolute top-4 right-4 animate-float-slow">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-2 rounded-full text-white shadow-lg shadow-purple-600/20">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg shadow-cyan-900/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 5).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-800 text-gray-300 px-2 py-1 rounded text-xs border border-slate-700/50 hover:border-purple-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="bg-slate-800 text-gray-300 px-2 py-1 rounded text-xs border border-slate-700/50 hover:border-purple-500/30 transition-colors duration-300">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-full"
                      title="View Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-full"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-sm font-medium transition-colors duration-300 flex items-center gap-1 group"
                  >
                    View Demo <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://github.com/Arpitkushwahaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 animate-glow"
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