// src/components/About.tsx

import { useState, useEffect } from "react"; // Added FC for better type definition
import { Code, Database, Globe, Server, Zap, type LucideIcon } from "lucide-react"; // Added LucideIcon type

// Define the type for skill objects for better type safety
interface Skill {
    name: string;
    level: number;
    icon: LucideIcon;
    color: string;
}

// Define the type for experience objects
interface Experience {
    title: string;
    description: string;
    icon: LucideIcon;
}

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    // FIX: Set type to number | null, as it will hold the index (number) or null
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null); 

    useEffect(() => {
        // Find the section element by its ID
        const section = document.getElementById('about');
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger visibility only once when it intersects
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Disconnect after triggering to optimize performance
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (section) {
            observer.observe(section);
        }

        // Cleanup function
        return () => {
            if (section) observer.unobserve(section); // Ensure observer is cleaned up
            observer.disconnect();
        };
    }, []);

    const skills: Skill[] = [
        { name: "React", level: 90, icon: Code, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 85, icon: Code, color: "from-blue-400 to-indigo-600" },
        { name: "Java", level: 88, icon: Code, color: "from-orange-400 to-red-600" },
        { name: "Spring Boot", level: 82, icon: Server, color: "from-green-400 to-green-600" },
        { name: "Hibernate", level: 80, icon: Database, color: "from-yellow-400 to-orange-600" },
        { name: "MySQL", level: 85, icon: Database, color: "from-blue-400 to-blue-600" },
        { name: "HTML & CSS", level: 92, icon: Globe, color: "from-pink-400 to-rose-600" },
        { name: "JavaScript", level: 89, icon: Zap, color: "from-yellow-400 to-yellow-600" }
    ];

    const experiences: Experience[] = [
        {
            title: "Full Stack Development",
            description: "Building end-to-end web applications with modern technologies",
            icon: Globe
        },
        {
            title: "Database Design",
            description: "Designing efficient and scalable database architectures",
            icon: Database
        },
        {
            title: "API Development",
            description: "Creating robust RESTful APIs and microservices",
            icon: Server
        }
    ];

    return (
        <section
            id="about"
            className="relative min-h-screen py-20 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Passionate software engineer with a love for creating innovative solutions 
                        and turning complex problems into elegant, user-friendly applications.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Bio */}
                    <div className={`space-y-8 transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}>
                        <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Hi, I'm <span className="text-purple-400 font-semibold">U. Anjana Heshan</span>, 
                                    a dedicated software engineer who thrives on building modern, efficient, and 
                                    user-centric web applications.
                                </p>
                                <p>
                                    My passion lies in solving complex problems through clean code and innovative 
                                    thinking. I constantly explore new technologies and best practices to stay at 
                                    the forefront of software development.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me learning about emerging technologies, 
                                    contributing to open-source projects, or sharing knowledge with the developer community.
                                </p>
                            </div>
                        </div>

                        {/* Experience Cards */}
                        <div className="space-y-4">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="group p-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20"
                                >
                                    <div className="flex items-start space-x-4">
                                        {/* Use exp.icon as Component */}
                                        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                            <exp.icon size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">{exp.title}</h4>
                                            <p className="text-gray-400">{exp.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Skills */}
                    <div className={`transition-all duration-1000 delay-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}>
                        <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Zap className="text-purple-400" />
                                Technical Skills
                            </h3>
                            
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="group cursor-pointer"
                                        onMouseEnter={() => setHoveredSkill(index)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-3">
                                                <skill.icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                                                <span className="text-white font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-gray-400 text-sm">{skill.level}%</span>
                                        </div>
                                        
                                        <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                                            <div
                                                className={`absolute left-0 top-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                                style={{
                                                    width: isVisible ? `${skill.level}%` : '0%',
                                                    transitionDelay: `${index * 100}ms`
                                                }}
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                            </div>
                                            
                                            {hoveredSkill === index && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-400 mb-1">2+</div>
                                    <div className="text-sm text-gray-400">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-pink-400 mb-1">15+</div>
                                    <div className="text-sm text-gray-400">Projects Done</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-cyan-400 mb-1">8+</div>
                                    <div className="text-sm text-gray-400">Technologies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;