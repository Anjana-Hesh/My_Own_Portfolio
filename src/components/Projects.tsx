// src/components/Projects.tsx

import { useState, useEffect } from "react";
import { Github, ExternalLink, Code, Database , Server, Eye, Star } from "lucide-react";

// --- Type Definitions for Project Data ---
interface ProjectStats {
    stars: number;
    forks: number;
    commits: number;
}

interface Project {
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
    category: string;
    color: string;
    stats: ProjectStats;
}
// ----------------------------------------

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    // FIX: Removed unused state: const [activeProject, setActiveProject] = useState<number>(0); 

    useEffect(() => {
        const section = document.getElementById('projects');
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it becomes visible
                }
            },
            { threshold: 0.2 }
        );

        if (section) observer.observe(section);

        // Proper cleanup: disconnect the observer
        return () => observer.disconnect();
    }, []);

    const projects: Project[] = [
        {
            title: "Modern POS System",
            description: "A comprehensive Point of Sale system built with React, TypeScript, and Spring Boot. Features real-time inventory management, customer tracking, and detailed analytics dashboard.",
            longDescription: "This advanced POS system revolutionizes retail operations with its intuitive interface and powerful backend. Built with modern technologies, it offers seamless transaction processing, comprehensive reporting, and multi-user support.",
            image: "/project1.png",
            technologies: ["React", "TypeScript", "Spring Boot", "MySQL", "REST API"],
            github: "https://github.com/your-username/pos-system",
            live: "https://your-live-demo-link.com",
            category: "Full Stack",
            color: "from-blue-500 to-cyan-500",
            stats: { stars: 42, forks: 18, commits: 156 }
        },
        {
            title: "Therapy Management Platform",
            description: "A comprehensive healthcare management system using JavaFX and Hibernate. Streamlines patient management, appointment scheduling, and therapy session tracking.",
            longDescription: "An all-in-one healthcare solution that digitizes therapy practice management. Features patient records, treatment plans, appointment scheduling, and detailed progress tracking with beautiful visualizations.",
            image: "/project2.png",
            technologies: ["JavaFX", "Hibernate", "MySQL", "Java", "JasperReports"],
            github: "https://github.com/your-username/therapy-management",
            live: "https://your-live-demo-link.com",
            category: "Desktop App",
            color: "from-purple-500 to-pink-500",
            stats: { stars: 28, forks: 12, commits: 89 }
        },
        {
            title: "Smart Portfolio Website",
            description: "A modern, responsive portfolio website showcasing advanced animations, dark mode, and interactive elements. Built with React and modern CSS techniques.",
            longDescription: "This cutting-edge portfolio demonstrates modern web development skills with stunning animations, responsive design, and optimal performance. Features dynamic content, smooth transitions, and engaging user interactions.",
            image: "/project3.png",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            github: "https://github.com/your-username/portfolio",
            live: "https://your-portfolio-link.com",
            category: "Frontend",
            color: "from-green-500 to-teal-500",
            stats: { stars: 35, forks: 24, commits: 78 }
        }
    ];

    return (
        <section
            id="projects"
            className="relative min-h-screen py-20 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Showcasing my passion for creating innovative solutions that solve real-world problems
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                            }`}>
                                
                                {/* Project Image */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 group-hover:border-purple-500/50 transition-all duration-500">
                                        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                            <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                                <Code size={48} className="text-white" />
                                            </div>
                                        </div>
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                            <div className="flex space-x-4">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                                >
                                                    <Github size={24} className="text-white" />
                                                </a>
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                                >
                                                    <ExternalLink size={24} className="text-white" />
                                                </a>
                                            </div>
                                        </div>

                                        {/* Project Stats (Top Right) */}
                                        <div className="absolute top-4 right-4 flex space-x-2">
                                            <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white flex items-center gap-1">
                                                <Star size={12} />
                                                {project.stats.stars}
                                            </div>
                                            <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                                                {project.category}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                    <div>
                                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white mb-4`}>
                                            {project.category}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-xl border border-white/10 group-hover:border-purple-500/30 transition-all duration-500">
                                        <p className="text-gray-300 leading-relaxed mb-4">
                                            {project.description}
                                        </p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {project.longDescription}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                        >
                                            <Github size={20} />
                                            View Code
                                            <div className="w-0 group-hover/btn:w-4 h-0.5 bg-white transition-all duration-300"></div>
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50`}
                                        >
                                            <Eye size={20} />
                                            Live Demo
                                            <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </a>
                                    </div>

                                    {/* Project Stats (Bottom Left) */}
                                    <div className="flex items-center gap-6 text-sm text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <Star size={16} />
                                            <span>{project.stats.stars} stars</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Database size={16} />
                                            <span>{project.stats.forks} forks</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Server size={16} />
                                            <span>{project.stats.commits} commits</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Projects Button */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="https://github.com/Anjana-Hesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
                    >
                        <Github size={20} />
                        View More Projects
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;