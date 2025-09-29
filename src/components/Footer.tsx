import { useState, useEffect } from "react";
import { Linkedin, Github, Facebook, Instagram, Youtube, Heart, ArrowUp, Mail, Phone } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { 
      Icon: Linkedin, 
      href: "https://www.linkedin.com/in/anjana-heshan-79334b260/", 
      color: "hover:bg-blue-600",
      name: "LinkedIn"
    },
    { 
      Icon: Github, 
      href: "https://github.com/Anjana-Hesh", 
      color: "hover:bg-gray-700",
      name: "GitHub"
    },
    { 
      Icon: Facebook, 
      href: "https://facebook.com", 
      color: "hover:bg-blue-500",
      name: "Facebook"
    },
    { 
      Icon: Instagram, 
      href: "https://instagram.com", 
      color: "hover:bg-pink-500",
      name: "Instagram"
    },
    { 
      Icon: Youtube, 
      href: "https://www.youtube.com/@anjanaheshan3994", 
      color: "hover:bg-red-600",
      name: "YouTube"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  U. Anjana Heshan
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Passionate software engineer creating innovative solutions and building 
                  the future, one line of code at a time. Let's turn your ideas into reality!
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <Mail size={18} />
                  <span>anjanaheshan676@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <Phone size={18} />
                  <span>+94 764 810 851</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map(({ Icon, href, color, name }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center ${color} hover:scale-110 hover:shadow-xl transition-all duration-300`}
                      title={name}
                    >
                      <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Java', 'Spring Boot', 'MySQL'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-400 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} U. Anjana Heshan. Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>in Sri Lanka</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50"></div>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        title="Scroll to top"
      >
        <ArrowUp size={20} className="mx-auto" />
      </button>
    </>
  );
}