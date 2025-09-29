import { useState, useEffect, type FC } from "react";
import {
    Mail,
    Phone,
    Linkedin,
    Github,
    Facebook,
    Instagram,
    Youtube,
    Send,
    MapPin,
    MessageSquare
} from "lucide-react";

interface FormDataState {
    name: string;
    email: string;
    message: string;
}

type LucideIcon = typeof Mail | typeof Phone | typeof Linkedin | typeof Github | typeof Facebook | typeof Instagram | typeof Youtube | typeof MapPin;

interface SocialLink {
    Icon: LucideIcon;
    href: string;
    color: string;
    hoverColor: string;
    name: string;
}

interface ContactInfoItem {
    icon: LucideIcon;
    title: string;
    content: string;
    description: string;
    color: string;
}

const MessageToast: FC <{ message: string; onClose: () => void }> = ({ message, onClose }) => {
    useEffect(() => {
       
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-5 pr-12 rounded-xl shadow-2xl shadow-green-700/50 flex items-center gap-3 animate-pulse-once">
                <Send size={20} />
                <p className="font-medium text-lg">{message}</p>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white/80 hover:text-white p-1 rounded-full transition-colors"
                    aria-label="Close message"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};


const Contact: FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const [formData, setFormData] = useState<FormDataState>({
        name: "",
        email: "",
        message: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
    
    const [toastMessage, setToastMessage] = useState<string | null>(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById("contact");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
            observer.disconnect();
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: "", email: "", message: "" });
            
            setToastMessage("Message sent successfully! 🎉 I'll be in touch soon.");

        }, 2000);
    };

    const socialLinks: SocialLink[] = [
        { Icon: Linkedin, href: "https://www.linkedin.com/in/anjana-heshan-79334b260/", color: "from-blue-600 to-blue-700", hoverColor: "hover:shadow-blue-500/50", name: "LinkedIn" },
        { Icon: Github, href: "https://github.com/Anjana-Hesh", color: "from-gray-700 to-gray-800", hoverColor: "hover:shadow-gray-500/50", name: "GitHub" },
        { Icon: Facebook, href: "https://facebook.com", color: "from-blue-500 to-blue-600", hoverColor: "hover:shadow-blue-400/50", name: "Facebook" },
        { Icon: Instagram, href: "https://instagram.com", color: "from-pink-500 to-rose-600", hoverColor: "hover:shadow-pink-500/50", name: "Instagram" },
        { Icon: Youtube, href: "https://www.youtube.com/@anjanaheshan3994", color: "from-red-500 to-red-600", hoverColor: "hover:shadow-red-500/50", name: "YouTube" }
    ];

    const contactInfo: ContactInfoItem[] = [
        { icon: Phone, title: "Phone", content: "+94 764 810 851", description: "Available Mon-Fri, 9AM-6PM", color: "from-green-500 to-green-600" },
        { icon: Mail, title: "Email", content: "anjanaheshan676@gmail.com", description: "I'll respond within 24 hours", color: "from-purple-500 to-purple-600" },
        { icon: MapPin, title: "Location", content: "Sri Lanka", description: "Available for remote work", color: "from-blue-500 to-blue-600" }
    ];

    return (
        <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
          
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
         
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing! 🚀
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
               
                    <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {contactInfo.map((info, index) => (
                            <div key={index} className="group p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20">
                                <div className="flex items-start space-x-4">
                                    <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl group-hover:scale-105 transition-transform duration-300`}>
                                        <info.icon size={24} className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                                        <p className="text-gray-300 font-medium mb-1">{info.content}</p>
                                        <p className="text-gray-400 text-sm">{info.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <MessageSquare className="text-purple-400" />
                                Find Me Online
                            </h3>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {socialLinks.map(({ Icon, href, color, hoverColor, name }, index) => (
                                    <a
                                        key={index}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative p-4 bg-gradient-to-r ${color} rounded-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-xl ${hoverColor} flex flex-col items-center space-y-2`}
                                        onMouseEnter={() => setHoveredSocial(index)}
                                        onMouseLeave={() => setHoveredSocial(null)}
                                    >
                                        <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                                        <span className="text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">{name}</span>
                                        {hoveredSocial === index && (
                                            <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse-fast"></div>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Send className="text-purple-400" />
                                Send Me a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 focus:bg-white/10 transition-all duration-300"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 focus:bg-white/10 transition-all duration-300"
                                />

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your Message"
                                    rows={6}
                                    required
                                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                                />

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`group relative w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${isSubmitting ? 'animate-pulse' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center gap-3">
                                            <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                                            Send Message
                                        </div>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {toastMessage && (
                <MessageToast message={toastMessage} onClose={() => setToastMessage(null)} />
            )}
        </section>
    );
}

export default Contact;