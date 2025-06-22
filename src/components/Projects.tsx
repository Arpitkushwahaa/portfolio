import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database, Video, Activity, Briefcase, ShoppingBag, Brain, Link, CalendarClock, Pizza, VideoIcon } from 'lucide-react';

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
                  {project.technologies.slice(0, 5).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      title="View Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
                  >
                    View Demo →
                  </a>
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