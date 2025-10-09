// src/components/Hero.tsx

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, Eye, ArrowDown } from "lucide-react";
import heroImage from "../assets/hero_anjana.jpg";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const titles = [
    "Full Stack Developer",
    "Software Engineer", 
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    // Start visibility transition
    setIsVisible(true);
    
    // Interval for title rotation
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Change title every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-purple-500/10 via-transparent to-pink-500/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 px-6 max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center md:text-left">
            {/* Greeting */}
            <div className="mb-8">
              <span className="inline-block text-lg md:text-xl text-gray-400 mb-4 animate-fade-in">
                👋 Hello, I'm
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  Anjana Heshan
                </span>
              </h1>

              {/* Dynamic Title */}
              <div className="h-16 flex items-center justify-center md:justify-start">
                <h2 className="text-xl md:text-3xl text-gray-300 font-medium">
                  {/* key forces re-render/re-animation on text change */}
                  <span className="inline-block min-w-0 animate-slide-up" key={textIndex}> 
                    {titles[textIndex]}
                  </span>
                  <span className="inline-block w-0.5 h-8 bg-purple-400 ml-2 animate-blink"></span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto md:mx-0 mb-10 leading-relaxed animate-fade-in-up animation-delay-600">
              Passionate about creating <span className="text-purple-400 font-semibold">modern</span>, 
              <span className="text-pink-400 font-semibold"> user-friendly</span> web applications 
              that solve real-world problems and deliver exceptional experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center mb-12 animate-fade-in-up animation-delay-800">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Eye size={20} />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <button className="group px-8 py-4 border-2 border-purple-500/50 text-purple-400 rounded-full font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Download CV
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 absolute bottom-2 left-1/2 transform -translate-x-1/2"></div>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 mb-16 md:mb-0 animate-fade-in-up animation-delay-1000">
              {[
                { Icon: Github, href: "https://github.com/Anjana-Hesh", color: "hover:text-white hover:bg-gray-800" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/anjana-heshan-79334b260/", color: "hover:text-white hover:bg-blue-600" },
                { Icon: Mail, href: "mailto:anjanaheshan676@gmail.com", color: "hover:text-white hover:bg-red-500" }
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-14 h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center ${color} transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <Icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in animation-delay-400">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <img
                  src={heroImage}
                  alt="Anjana Heshan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-ping" style={{animationDuration: '3s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
            <span className="text-sm mb-2 rotate-90 whitespace-nowrap">Scroll Down</span>
            <ArrowDown size={24} />
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
        }
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}