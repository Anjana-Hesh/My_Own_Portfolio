import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";

export type NavbarProps = {
  activeSection: string;
};

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(activeSection);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "projects", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 2.5; // Adjusted slightly for better mid-section detection
      
      for (const id of sections) {
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.offsetTop;
          const bottom = top + elem.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(id);
            break;
          }
        }
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "home", label: "Home", icon: Home },
    { name: "about", label: "About", icon: User },
    { name: "projects", label: "Projects", icon: Briefcase },
    { name: "contact", label: "Contact", icon: Mail }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-2xl border-b border-purple-500/20 py-3' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="relative group">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              U. Anjana Heshan
            </h1>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {links.map(({ name, label, icon: Icon }) => (
              <li key={name}>
                <a
                  href={`#${name}`}
                  className={`relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 group ${
                    active === name 
                      ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{label}</span>
                  {active !== name && (
                    <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} size={24} />
              <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} size={24} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-6 bg-black/95 backdrop-blur-2xl border-t border-purple-500/20">
            <ul className="space-y-4">
              {links.map(({ name, label, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={`#${name}`}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      active === name 
                        ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg transform scale-105' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={toggleMenu}
                  >
                    <Icon size={20} />
                    <span className="font-medium text-lg">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}