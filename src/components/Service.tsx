import { useState, useEffect, type FC } from "react";
import { 
    Code, Globe, Database, Server, Smartphone, Palette, 
    Cloud, Cpu, Search, BarChart3,
    ArrowRight, CheckCircle, Star, Timer
} from "lucide-react";

// --- Type Definitions for TypeScript ---
// Define possible icon types used in this component
type LucideIcon = typeof Code | typeof Globe | typeof Database | typeof Server | typeof Smartphone | typeof Palette | typeof Search | typeof Cloud | typeof Cpu | typeof BarChart3 | typeof ArrowRight | typeof CheckCircle | typeof Star | typeof Timer;

interface Service {
    icon: LucideIcon;
    title: string;
    shortDesc: string;
    fullDesc: string;
    features: string[];
    technologies: string[];
    price: string;
    deliveryTime: string;
    color: string;
    bgColor: string;
}

interface ProcessStep {
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
}
// ----------------------------------------

const Services: FC = () => {
    // State variables with explicit types
    const [isVisible, setIsVisible] = useState<boolean>(false);
    // Removed activeService state as it was unused.
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById('services');
        if (section) observer.observe(section);

        // Cleanup function for the observer
        return () => {
            if (section) observer.unobserve(section);
            observer.disconnect();
        };
    }, []);

    // Services array with explicit Service[] type
    const services: Service[] = [
        {
            icon: Globe,
            title: "Full-Stack Web Development",
            shortDesc: "Complete web solutions from frontend to backend",
            fullDesc: "End-to-end web application development using modern technologies like React, Node.js, and cloud services. I create scalable, secure, and user-friendly applications.",
            features: [
                "React & Next.js Development",
                "RESTful API Design",
                "Database Architecture",
                "Cloud Deployment",
                "Performance Optimization"
            ],
            technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
            price: "Starting at $2,500",
            deliveryTime: "4-8 weeks",
            color: "from-blue-500 to-cyan-500",
            bgColor: "from-blue-500/10 to-cyan-500/10"
        },
        {
            icon: Code,
            title: "Custom Software Solutions",
            shortDesc: "Tailored applications for your specific business needs",
            fullDesc: "Custom desktop and web applications designed to solve your unique business challenges. From inventory management to customer relationship systems.",
            features: [
                "Business Process Automation",
                "Custom Dashboard Development",
                "System Integration",
                "Data Migration Services",
                "Technical Documentation"
            ],
            technologies: ["Java", "Spring Boot", "JavaFX", "MySQL", "Hibernate"],
            price: "Starting at $3,000",
            deliveryTime: "6-10 weeks",
            color: "from-purple-500 to-pink-500",
            bgColor: "from-purple-500/10 to-pink-500/10"
        },
        {
            icon: Database,
            title: "Database Design & Optimization",
            shortDesc: "Efficient data architecture and performance tuning",
            fullDesc: "Professional database design, optimization, and migration services. Ensuring your data is structured efficiently and performs at optimal speed.",
            features: [
                "Database Schema Design",
                "Query Optimization",
                "Data Migration",
                "Backup & Recovery Setup",
                "Performance Monitoring"
            ],
            technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
            price: "Starting at $1,200",
            deliveryTime: "2-4 weeks",
            color: "from-green-500 to-teal-500",
            bgColor: "from-green-500/10 to-teal-500/10"
        },
        {
            icon: Server,
            title: "API Development & Integration",
            shortDesc: "Robust APIs and third-party service integration",
            fullDesc: "Design and develop RESTful APIs, microservices, and integrate with third-party services. Ensuring seamless data flow between systems.",
            features: [
                "RESTful API Development",
                "Microservices Architecture",
                "Third-party Integrations",
                "API Documentation",
                "Rate Limiting & Security"
            ],
            technologies: ["Spring Boot", "Express.js", "Docker", "Kubernetes", "Postman"],
            price: "Starting at $1,800",
            deliveryTime: "3-6 weeks",
            color: "from-orange-500 to-red-500",
            bgColor: "from-orange-500/10 to-red-500/10"
        },
        {
            icon: Cloud,
            title: "Cloud Deployment & DevOps",
            shortDesc: "Scalable cloud infrastructure and automated deployments",
            fullDesc: "Deploy your applications to the cloud with proper CI/CD pipelines, monitoring, and scaling capabilities. Focus on AWS, Google Cloud, and Azure.",
            features: [
                "Cloud Architecture Setup",
                "CI/CD Pipeline Configuration",
                "Auto-scaling Implementation",
                "Monitoring & Logging",
                "Security Best Practices"
            ],
            technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
            price: "Starting at $2,000",
            deliveryTime: "3-5 weeks",
            color: "from-indigo-500 to-purple-500",
            bgColor: "from-indigo-500/10 to-purple-500/10"
        },
        {
            icon: Palette,
            title: "UI/UX Design & Development",
            shortDesc: "Beautiful, user-centered design and frontend development",
            fullDesc: "Create stunning user interfaces and exceptional user experiences. From wireframes to pixel-perfect implementations with modern design principles.",
            features: [
                "User Interface Design",
                "User Experience Research",
                "Responsive Design",
                "Design System Creation",
                "Accessibility Implementation"
            ],
            technologies: ["Figma", "React", "Tailwind CSS", "Framer Motion", "SCSS"],
            price: "Starting at $1,500",
            deliveryTime: "2-5 weeks",
            color: "from-pink-500 to-rose-500",
            bgColor: "from-pink-500/10 to-rose-500/10"
        }
    ];

    // Process steps array with explicit ProcessStep[] type
    const processSteps: ProcessStep[] = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "Understanding your requirements and creating a detailed project roadmap",
            icon: Search
        },
        {
            step: "02",
            title: "Design & Architecture",
            description: "Creating wireframes, system architecture, and technical specifications",
            icon: Palette
        },
        {
            step: "03",
            title: "Development & Testing",
            description: "Building your solution with regular updates and comprehensive testing",
            icon: Code
        },
        {
            step: "04",
            title: "Deployment & Support",
            description: "Launching your project and providing ongoing maintenance and support",
            icon: Cloud
        }
    ];

    return (
        <section
            id="services"
            className="relative min-h-screen py-20 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Floating Elements */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        My Services
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Comprehensive development solutions tailored to bring your ideas to life 
                        with cutting-edge technology and exceptional quality
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative transition-all duration-700 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            // Removed onMouseEnter={() => setActiveService(index)}
                        >
                            <div className={`relative p-8 h-full bg-gradient-to-br ${service.bgColor} backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-purple-500/20`}>
                                
                                {/* Service Icon */}
                                <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon size={32} className="text-white" />
                                </div>

                                {/* Service Content */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        {service.shortDesc}
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {service.fullDesc}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-white mb-3 border-b border-white/10 pb-2">What I Offer:</h4>
                                    <ul className="space-y-2">
                                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                                                <CheckCircle size={14} className="text-green-400 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-white mb-3">Tech Stack:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.technologies.slice(0, 3).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/15 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {service.technologies.length > 3 && (
                                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                                                +{service.technologies.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Pricing & Timeline */}
                                <div className="flex justify-between items-center mb-6 p-4 bg-white/5 rounded-xl">
                                    <div>
                                        <div className="text-lg font-bold text-white">{service.price}</div>
                                        <div className="text-xs text-gray-400">Starting price</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-purple-400 flex items-center gap-1 justify-end">
                                            <Timer size={14} />
                                            {service.deliveryTime}
                                        </div>
                                        <div className="text-xs text-gray-400">Estimated timeline</div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <a 
                                    href="#contact"
                                    className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 group/btn`}
                                >
                                    Get Started
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </a>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className={`mb-20 transition-all duration-1000 delay-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">My Development Process</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A systematic approach ensuring quality delivery and client satisfaction at every step
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="group relative text-center"
                                onMouseEnter={() => setHoveredFeature(index)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <div className="relative">
                                    {/* Step Number Circle */}
                                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                                        {step.step}
                                    </div>

                                    {/* Connector Line (hidden on last item, and only visible on desktop) */}
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 left-[calc(50%_+_2rem)] w-[calc(100%_-_4rem)] h-0.5 bg-gradient-to-r from-purple-500/50 to-pink-500/50 transform -translate-y-1/2 -translate-x-1/2"></div>
                                    )}
                                </div>

                                <div className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-xl border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-lg group-hover:shadow-purple-500/10">
                                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300 shadow-inner shadow-black/20">
                                        <step.icon size={24} className="text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                </div>

                                {hoveredFeature === index && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl animate-pulse-fast pointer-events-none"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20">
                    <div className={`text-center transition-all duration-1000 delay-1200 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="p-12 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/10">
                            <div className="max-w-3xl mx-auto">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Ready to Start Your Project?
                                </h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Let's discuss your requirements and create something amazing together. 
                                    I'm here to turn your ideas into reality with precision and creativity.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="#contact"
                                        className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 flex items-center justify-center gap-2"
                                    >
                                        Get Free Consultation
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                    
                                    <a
                                        href="#projects"
                                        className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 rounded-full font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        <Star size={20} />
                                        View My Work
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global CSS for animations used above */}
            <style>{`
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
                }
                .animate-pulse-fast {
                    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.3; }
                }
            `}</style>
        </section>
    );
}

export default Services;
