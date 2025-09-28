import { useEffect, useState, useRef, type FC } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Allprojects from './components/AllProjects';

const App: FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('home');
     const [showAllProjects, setShowAllProjects] = useState(false);
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);
    
    // Components and IDs list
    const sections = [Hero, About, Projects, Service, Contact ];
    const sectionIds = ["home", "about", "projects", "services" , "contact" ];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        const timer = setTimeout(() => setIsLoading(false), 1500); // Shorter loading time

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        
        const animationObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in"); 
                    }
                });
            },
            { threshold: 0.2 } 
        );

        const navObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Ensure only valid section IDs are set
                        if (sectionIds.includes(entry.target.id)) {
                             setActiveSection(entry.target.id);
                        }
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );


        const currentSections = sectionsRef.current.filter((el): el is HTMLElement => el !== null);
        
        currentSections.forEach((section) => {
            animationObserver.observe(section);
            navObserver.observe(section);
        });

        return () => {
            currentSections.forEach((section) => {
                animationObserver.unobserve(section);
                navObserver.unobserve(section);
            });
            animationObserver.disconnect();
            navObserver.disconnect();
        };
    }, [sectionIds]);

        const handleShowAllProjects = () => {
            setShowAllProjects(true);
        };

    // Function to go back to main portfolio
    const handleBackToProjects = () => {
        setShowAllProjects(false);
        setActiveSection('projects');
    };

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-20 h-20 border-4 border-pink-500/30 border-b-pink-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                </div>
            </div>
        );
    }

     if (showAllProjects) {
        return <Allprojects onBackToProjects={handleBackToProjects} />;
    }

    return (
        <div className="bg-black text-white min-h-screen font-inter">
        
            {/* <div 
                className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out hidden md:block"
                style={{
                    left: `${mousePosition.x - 12}px`,
                    top: `${mousePosition.y - 12}px`,
                }}
            /> */}

            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative bg-black text-white overflow-hidden">
                <Navbar activeSection={activeSection} />
                
                <main>
                    {sections.map((Component, i) => (
                        <section
                            key={i}
                            id={sectionIds[i]}
                            ref={(el) => {
                                sectionsRef.current[i] = el;
                            }}
                            className="scroll-section min-h-screen flex items-center justify-center bg-gray-950" 
                        >
                            {Component === Projects ? (
                                <Component onViewAllProjects={handleShowAllProjects} />
                            ) : (
                                <Component />
                            )}
                        </section>
                    ))}
                </main>

                <Footer />
            </div>

            <style>{`
                /* Font import for 'Inter' and base styles */
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
                
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                
                /* Custom Blob Animation */
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                /* Scroll-in animation */
                .scroll-section {
                    opacity: 0;
                    transform: translateY(50px);
                    transition: all 0.8s ease-out;
                }
                .scroll-section.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
            
        </div>
    );
}

export default App;
