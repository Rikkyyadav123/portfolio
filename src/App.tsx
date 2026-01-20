import React , { useState, useEffect } from 'react';
import myImage from './assets/portfolio-image2.jpg';
import project3image from "./assets/cricket-score-app-image.jpg";
import projecthealfitimage from  "./assets/healfitimage.png"

import { 
  ChevronDown, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Database,
  Calendar,
  MapPin,
  Send,
  Languages

} from 'lucide-react';
function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects',  'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, TypeScript, Next.js, Tailwind CSS' },
    { name: 'Backend Development', icon: Database, description: 'Node.js, Python, PostgreSQL, MongoDB' },
    { name: 'languages' , icon:Languages, description: 'c,c++,Javascript,HTML,CSS'}
  ];

  const projects = [
    {
      title: 'Heal fit',
      description: 'AI-driven fitness app providing personalized workout plans based on user preferences and goals.',
      image: projecthealfitimage,
      tech: ['Typscript', 'Tailwind'],
      github: 'https://github.com/Rikkyyadav123/Healfit',
      live: 'https://healfit1.netlify.app/'
    },
    {
      title: 'Car price prediction',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['python', 'Prisma'],
      github: '#',
      live: '#'
    },
    {
      title: 'Cricket score app',
      description: "Developed a full-stack MERN application for real-time cricket match scoring, enabling users to manage innings, track batter/bowler performance, and update scores seamlessly. Built RESTful APIs with Node.js, Express.js, and MongoDB, implementing secure JWT authentication to ensure authorized access to match data.  ",
      image: project3image,
      tech: ['React', 'MongoDB', 'RestfulAPI', 'Expressjs','NodeJs'],
      github: 'https://github.com/Rikkyyadav123/cricket-score-app',
      live: 'https://cricketscorecardapp-website.onrender.com/' 
    }
  ];


  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                  </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Rikky Yadav
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Full Stack Developer  crafting beautiful, functional digital experiences
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="https://github.com/Rikkyyadav123" className="text-gray-400 hover:text-blue-400 transition-colors" title="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rikky-yadav-519055269/" className="text-gray-400 hover:text-blue-400 transition-colors" title="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="rikky.22b0151019@abes.ac.in" className="text-gray-400 hover:text-blue-400 transition-colors" title="Email">
                <Mail size={24} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Explore My Work
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate developer with creating innovative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-slate-800 rounded-2xl p-8 shadow-xl">
                <img
                  src={myImage}
                  alt="Profile"
                  className="w-64 h-64 rounded-full mx-auto mb-6 object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. I love creating 
                user-centered digital experiences that solve real-world problems and deliver exceptional value.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community through blog posts and mentoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin size={16} />
                  <span>India, Noida</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar size={16} />
                  <span>Available for freelance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 text-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <skill.icon size={48} className="mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to start your next project? Let's create something amazing together.
            </p>
          </div>
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-400 mb-4">
            © 2025 Rikky Yadav. Crafted with ❤️ and React.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Rikkyyadav123" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rikky-yadav-519055269/" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="rikkyyadav636@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
