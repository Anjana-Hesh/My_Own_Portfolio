import { useState, useEffect } from "react";
import { Github, ExternalLink , Database, Server, Eye, Star, Search, Filter, Calendar, ArrowLeft } from "lucide-react";
import image_1 from "../assets/image_1.png";
import image from "../assets/mental_health_care.png";
import license from "../assets/license.png";
import e_commerce from "../assets/e-commerce.png";
import portfolio from "../assets/image.png"
import cms from "../assets/cms.png"
import chat from "../assets/chat.png"
import hightway from "../assets/hight_way_bus.png"
import construsction from "../assets/construsction.png"
import hotel_it from "../assets/hotel_it.png"
import recipe_it from "../assets/recipe_it.png"
import car_game_it from "../assets/car_game_it.png"
import tik_tak_toe_game from "../assets/tik_tak_toe_game.png"
import carhub from "../assets/carehub.png";
import fluttercalculator from "../assets/fluttercal.png";
import seatBookingReact from "../assets/seetbookingreact.png";

interface ProjectStats {
    stars: number;
    forks: number;
    commits: number;
    lastUpdated: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
    category: string;
    color: string;
    stats: ProjectStats;
    featured: boolean;
    year: number;
}

interface AllProjectsProps {
    onBackToProjects?: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ onBackToProjects }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedYear, setSelectedYear] = useState("All");
    const [sortBy, setSortBy] = useState("newest");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Handle back navigation
    const handleBackClick = () => {
        if (onBackToProjects) {
            onBackToProjects();
        } else {
            // Fallback: scroll to projects section if no prop provided
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start' 
                });
            }
        }
    };

    // Extended projects array with 30+ projects
    const allProjects: Project[] = [
        {
            id: 1,
            title: "Modern POS System",
            description: "A comprehensive Point of Sale system built with JSP, Jakarta EE, and Hibernate. Features real-time inventory management, customer tracking, and detailed analytics.",
            image: image_1,
            technologies: ["JSP", "Jakarta EE", "Hibernate", "JavaScript", "CSS"],
            github: "https://github.com/Anjana-Hesh/Point-Of-Sales-System-JSP-.git",
            live: "#",
            category: "Full Stack",
            color: "from-blue-500 to-cyan-500",
            stats: { stars: 42, forks: 18, commits: 156, lastUpdated: "2025-06-15" },
            featured: true,
            year: 2025
        },
        {
            id: 2,
            title: "Mental Health Care System",
            description: "A comprehensive healthcare management system using JavaFX and Hibernate. Streamlines patient management, appointment scheduling, and therapy session tracking.",
            image: image,
            technologies: ["JavaFX", "Hibernate", "MySQL", "Java", "JasperReports"],
            github: "https://github.com/Anjana-Hesh/ORM-Course-Work-Final.git",
            live: "#",
            category: "Desktop App",
            color: "from-purple-500 to-pink-500",
            stats: { stars: 28, forks: 12, commits: 89, lastUpdated: "2025-05-20" },
            featured: true,
            year: 2025
        },
        {
            id: 3,
            title: "Smart Reg Web Application",
            description: "A modern, responsive license management system showcasing advanced animations, dark mode, and interactive elements. Built with Spring Boot.",
            image: license,
            technologies: ["HTML", "JavaScript", "Bootstrap", "Spring Boot", "Hibernate", "Spring Security"],
            github: "https://github.com/Anjana-Hesh/SmartReg.git",
            live: "https://youtu.be/nmYbd46a9ho?si=65lsLzk2dE7ngbwU",
            category: "Full Stack",
            color: "from-green-500 to-teal-500",
            stats: { stars: 35, forks: 24, commits: 78, lastUpdated: "2025-09-21" },
            featured: true,
            year: 2025
        },
        {
            id: 4,
            title: "E-Commerce Platform",
            description: "Full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment integration.",
            image: e_commerce,
            technologies: ["HTML", "CSS", "JS"],
            github: "https://github.com/Anjana-Hesh/E-Commerce-Site.git",
            live: "#",
            category: "FrontEnd",
            color: "from-orange-500 to-red-500",
            stats: { stars: 67, forks: 34, commits: 234, lastUpdated: "2025-03-05" },
            featured: false,
            year: 2025
        },
        {
            id: 5,
            title: "High-Way Bus seat booking (Quick Seat)",
            description: "Collaborative booking , team collaboration features, and project tracking. and high-way bus seat booking platform with many features like , visibility of seats , payment plans (Monthly , Weekly , daily) , discounts , e-mail updates , real time traking but location .....",
            image: hightway,
            technologies: ["React-Native"],
            github: "https://github.com/Anjana-Hesh/Quick_Seats_Front-End.git",
            live: "#",
            category: "Mobile App Front End",
            color: "from-indigo-500 to-purple-500",
            stats: { stars: 23, forks: 11, commits: 123, lastUpdated: "2025-08-18" },
            featured: false,
            year: 2025
        },
        {
            id: 6,
            title: "Constructor Management System (Layered)",
            description: "A building construction management system , Add a project with ingreadiant like soil , sement , swips , ... and the components like shovel , Hoe , Pans ... and more features",
            image: construsction,
            technologies: ["Java fx", "java", "Layered Architecture", "Hibernate"],
            github: "https://github.com/Anjana-Hesh/Apex-Building-solution.git",
            live: "#",
            category: "Desktop Application",
            color: "from-blue-400 to-blue-600",
            stats: { stars: 19, forks: 8, commits: 67, lastUpdated: "2024-10-22" },
            featured: false,
            year: 2024
        },
        {
            id: 7,
            title: "Constructor Management System (MVC)",
            description: "A building construction management system , Add a project with ingreadiant like soil , sement , swips , ... and the components like shovel , Hoe , Pans ... and more features",
            image: construsction,
            technologies: ["Java fx", "java", "MVC Architecture", "My-SQL"],
            github: "https://github.com/Anjana-Hesh/Apex-Solution.git",
            live: "#",
            category: "Desktop App",
            color: "from-gray-500 to-gray-700",
            stats: { stars: 31, forks: 15, commits: 145, lastUpdated: "2024-07-30" },
            featured: false,
            year: 2024
        },
        {
            id: 8,
            title: "Complaint Management System (CMS)",
            description: "Modern CMS platform with markdown support with re-mark, complaint add , edit , delete with simple crud, and staff managing to the addmin and the employees can send a complaint and addmin can resolve it with a re-mark.",
            image: cms,
            technologies: ["JSP", "Jakarta EE", "Hibernate", "JavaScript", "CSS"],
            github: "https://github.com/Anjana-Hesh/CMS-----Java-EE-Assignment.git",
            live: "#",
            category: "Full Stack",
            color: "from-teal-500 to-green-500",
            stats: { stars: 45, forks: 22, commits: 189, lastUpdated: "2025-07-08" },
            featured: false,
            year: 2025
        },
        {
            id: 9,
            title: "Chat Application",
            description: "Real-time chat application with multiple rooms, file sharing, and emoji support using WebSocket technology.",
            image: chat,
            technologies: ["Socket.io", "Java", "Java FX"],
            github: "https://github.com/Anjana-Hesh/Complete-Chat-Application.git",
            live: "#",
            category: "Web App",
            color: "from-pink-500 to-rose-500",
            stats: { stars: 38, forks: 19, commits: 112, lastUpdated: "2025-03-15" },
            featured: false,
            year: 2025
        },
        {
            id: 10,
            title: "Portfolio Website",
            description: "Personal portfolio website with interactive animations, project showcase, and contact form with Singal page Application.",
            image: portfolio,
            technologies: ["React", "Framer Motion", "Tailwind CSS", "EmailJS"],
            github: "https://github.com/Anjana-Hesh/My_Own_Portfolio.git",
            live: "#",
            category: "Web Site",
            color: "from-violet-500 to-purple-500",
            stats: { stars: 26, forks: 13, commits: 89, lastUpdated: "2025-10-20" },
            featured: false,
            year: 2025
        },
        {
            id: 11,
            title: "Hotel Website",
            description: "A hotel web site created to enhance my html , bootstrap css framwork knowledge .",
            image: hotel_it,
            technologies: ["HTML", "Bootstrap css", "Java Script"],
            github: "https://github.com/Anjana-Hesh/Assignment--10-Part-02-.git",
            live: "https://www.linkedin.com/feed/update/urn:li:activity:7324745946460807168/",
            category: "Web Site",
            color: "from-violet-500 to-purple-500",
            stats: { stars: 36, forks: 13, commits: 89, lastUpdated: "2025-02-12" },
            featured: false,
            year: 2025
        },
        {
            id: 12,
            title: "Recipe Website",
            description: "A Recipe web site created to enhance my html , plain css knowledge .",
            image: recipe_it,
            technologies: ["HTML", "plain css", "Java Script"],
            github: "https://github.com/Anjana-Hesh/Assignment--10-Part-01-.git",
            live: "#",
            category: "Web Site",
            color: "from-red-500 to-purple-500",
            stats: { stars: 36, forks: 13, commits: 89, lastUpdated: "2025-01-12" },
            featured: false,
            year: 2025
        },
        {
            id: 13,
            title: "Simple Car Game",
            description: "A Simple Car Game created to Using html css and Java Script .",
            image: car_game_it,
            technologies: ["HTML", "css", "Java Script"],
            github: "https://github.com/Anjana-Hesh/Assignment--09.git",
            live: "#",
            category: "Game",
            color: "from-blue-500 to-purple-500",
            stats: { stars: 36, forks: 13, commits: 89, lastUpdated: "2025-04-12" },
            featured: false,
            year: 2025
        },
        {
            id: 14,
            title: "Simple Tik_Tak_Toe Game",
            description: "A Simple Tik Tak Toe Game created to Using Java css and JavaFX with OOP Consepts in java as final oop project .",
            image: tik_tak_toe_game,
            technologies: ["Style sheet", "Java FX", "Java"],
            github: "https://github.com/Anjana-Hesh/tic-tac-toe.git",
            live: "#",
            category: "Game",
            color: "from-blue-500 to-purple-500",
            stats: { stars: 36, forks: 13, commits: 89, lastUpdated: "2025-04-12" },
            featured: false,
            year: 2025
        },
        {
            id: 15,
            title: "Care Hub Med",
            description: "Patient management and appointment scheduling system built with React, Node.js, Express js and MongoDB for efficient healthcare services. and admin panel for managing doctors, patients, and appointments.and also doctor panel for managing their appointments and patient records. including thire profiles management.",
            image: carhub,
            technologies: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS" , "JWT Authentication" , "Multer" , "cloudinary" , "email" , "vercel deployment"],
            github: "https://github.com/Anjana-Hesh/CareHub-Med-Backend.git",
            live: "https://care-hub-med.vercel.app/",
            category: "Full Stack",
            color: "from-blue-500 to-purple-500",
            stats: { stars: 36, forks: 13, commits: 89, lastUpdated: "2026-01-04" },
            featured: true,
            year: 2026
        },
        {
            id: 16,
            title: "Flutter Calculator",
            description: "A Flutter-based calculator application with a modern UI and smooth animations.",
            image: fluttercalculator,
            technologies: ["Flutter", "Dart"],
            github: "https://github.com/Anjana-Hesh/Flutter_Calculator.git",
            live: "#",
            category: "Frontend",
            color: "from-blue-500 to-purple-500",
            stats: { stars: 36, forks: 13, commits: 2, lastUpdated: "2025-12-31" },
            featured: false,
            year: 2026
        },
        {
            id: 17,
            title: "Seat Booking React",
            description: "A React-based seat booking application with a modern UI and smooth animations.",
            image: seatBookingReact,
            technologies: ["React", "JavaScript"],
            github: "https://github.com/Anjana-Hesh/Bus-Booking-web.git",
            live: "#",
            category: "Frontend",
            color: "from-blue-500 to-purple-500",
            stats: { stars: 36, forks: 13, commits: 26, lastUpdated: "2025-11-15" },
            featured: true,
            year: 2025
        }
        
    ];

    const categories = ["All", "Full Stack", "Web App", "Desktop App", "Mobile App"];
    const years = ["All", "2026", "2025" ,"2024"];

    const filteredProjects = allProjects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
        const matchesYear = selectedYear === "All" || project.year.toString() === selectedYear;
        
        return matchesSearch && matchesCategory && matchesYear;
    });

    const sortedProjects = [...filteredProjects].sort((a, b) => {
        switch (sortBy) {
            case "stars":
                return b.stats.stars - a.stats.stars;
            case "newest":
                return new Date(b.stats.lastUpdated).getTime() - new Date(a.stats.lastUpdated).getTime();
            case "oldest":
                return new Date(a.stats.lastUpdated).getTime() - new Date(b.stats.lastUpdated).getTime();
            case "name":
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
         
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-3/4 w-72 h-72 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          
                <div className={`mb-12 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <button 
                        onClick={handleBackClick}
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Portfolio</span>
                    </button>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                        All Projects
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mb-6"></div>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Explore my complete collection of {allProjects.length}+ projects spanning multiple technologies and domains.
                    </p>
                </div>

                <div className={`mb-12 space-y-6 transition-all duration-1000 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
            
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-all"
                        />
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <Filter size={16} className="text-gray-400" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category} className="bg-gray-800">
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-gray-400" />
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                            >
                                {years.map(year => (
                                    <option key={year} value={year} className="bg-gray-800">
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                        >
                            <option value="newest" className="bg-gray-800">Newest First</option>
                            <option value="oldest" className="bg-gray-800">Oldest First</option>
                            <option value="stars" className="bg-gray-800">Most Stars</option>
                            <option value="name" className="bg-gray-800">Alphabetical</option>
                        </select>
                    </div>

                    <div className="text-gray-400">
                        Showing {sortedProjects.length} of {allProjects.length} projects
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group transition-all duration-700 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                            style={{ transitionDelay: `${Math.min(index * 100, 1000)}ms` }}
                        >
                            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
                           
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-semibold rounded-full">
                                        FEATURED
                                    </div>
                                )}
            
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    
                                    {/* Category Badge on Image */}
                                    <div className="absolute bottom-3 left-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white backdrop-blur-sm`}>
                                            {project.category}
                                        </span>
                                    </div>
                                    
                                    {/* Stars Badge on Image */}
                                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                                        <Star size={12} />
                                        {project.stats.stars}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1">
                                                <Database size={12} />
                                                <span>{project.stats.forks}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Server size={12} />
                                                <span>{project.stats.commits}</span>
                                            </div>
                                        </div>
                                        <span className="text-xs">{project.year}</span>
                                    </div>

                                    <div className="flex gap-3 mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300`}
                                        >
                                            <Eye size={16} />
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {sortedProjects.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 opacity-50">
                            <Search size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">No projects found</h3>
                        <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
                    </div>
                )}

                <div className="text-center mt-20 pt-12 border-t border-white/10">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Want to collaborate?</h3>
                        <p className="text-gray-400 mb-6">I'm always open to discussing new opportunities and interesting projects.</p>
                        <div className="flex gap-4 justify-center">
                            <a
                                href="https://github.com/Anjana-Hesh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                            >
                                <Github size={20} />
                                Follow on GitHub
                            </a>
                            <a
                                href="mailto:anjanaheshan676@gmail.com"
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                            >
                                Get in Touch
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                    
                    <div className="text-gray-500 text-sm">
                        <p>© 2024 Anjana Hesh. All rights reserved.</p>
                        <p className="mt-2">Built with React, TypeScript, and lots of ☕</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;