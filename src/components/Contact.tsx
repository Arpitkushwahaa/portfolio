import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #0f172a 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/10 rounded-3xl rotate-45 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-500/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border border-pink-500/10 rounded-2xl rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-cyan-400/10 rounded-full animate-pulse"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-6 glass-effect">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            Get in Touch
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow">
            Let's{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
                Connect
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-20 animate-pulse"></div>
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through any of the channels below
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover-lift glass-effect gradient-border">
              <h3 className="text-2xl font-bold text-white mb-6 text-shadow">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-500/20 border border-cyan-500/30 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 animate-glow">
                    <Mail className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:kushwahaarpit360@gmail.com" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      kushwahaarpit360@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/20 border border-purple-500/30 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 animate-glow">
                    <Phone className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-1">Phone</h4>
                    <a 
                      href="tel:+919580271088" 
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      +91 9580271088
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-r from-pink-500/10 to-pink-500/20 border border-pink-500/30 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 animate-glow">
                    <Linkedin className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-300" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/arpit-kushwaha-b3a75b2a3/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/20 border border-blue-500/30 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 animate-glow">
                    <Github className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/Arpitkushwahaa" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      View GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Availability Card */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-cyan-800/30 backdrop-blur-xl border border-cyan-700/30 rounded-3xl p-6 hover-lift glass-effect animate-glow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="text-cyan-300 font-semibold">Currently Available</h4>
              </div>
              <p className="text-gray-300">
                I'm open to freelance projects, full-time positions, and collaborative opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-scale-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover-lift glass-effect gradient-border">
              <h3 className="text-2xl font-bold text-white mb-6 text-shadow">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800/50 border border-slate-700/50 text-gray-300 rounded-xl px-5 py-4 outline-none focus:border-cyan-500/50 transition-all duration-300 peer"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                    >
                      Your Name
                    </label>
                    <div className="absolute inset-0 rounded-xl border border-cyan-500/0 group-focus-within:border-cyan-500/50 group-focus-within:shadow-[0_0_10px_rgba(6,182,212,0.2)] pointer-events-none transition-all duration-300"></div>
                  </div>
                  
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800/50 border border-slate-700/50 text-gray-300 rounded-xl px-5 py-4 outline-none focus:border-cyan-500/50 transition-all duration-300 peer"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                    >
                      Your Email
                    </label>
                    <div className="absolute inset-0 rounded-xl border border-cyan-500/0 group-focus-within:border-cyan-500/50 group-focus-within:shadow-[0_0_10px_rgba(6,182,212,0.2)] pointer-events-none transition-all duration-300"></div>
                  </div>
                </div>
                
                <div className="relative group">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-slate-800/50 border border-slate-700/50 text-gray-300 rounded-xl px-5 py-4 outline-none focus:border-cyan-500/50 transition-all duration-300 resize-none peer"
                    placeholder=" "
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                  >
                    Your Message
                  </label>
                  <div className="absolute inset-0 rounded-xl border border-cyan-500/0 group-focus-within:border-cyan-500/50 group-focus-within:shadow-[0_0_10px_rgba(6,182,212,0.2)] pointer-events-none transition-all duration-300"></div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      formStatus === 'submitting' 
                        ? 'bg-slate-700 text-gray-400 cursor-wait' 
                        : formStatus === 'success'
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 animate-glow'
                        : formStatus === 'error'
                        ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-700 hover:to-rose-700'
                        : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 animate-glow'
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : formStatus === 'error' ? (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        Error Sending
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;