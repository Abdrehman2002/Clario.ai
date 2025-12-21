import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { useTheme } from '@/contexts/ThemeContext';
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Bot,
  Workflow,
  MessageSquare,
  BarChart3,
  Target,
  Sun,
  Moon,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
  Sparkles,
  Home,
  Info,
  Package,
  MessageCircle
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition
      });
    }
  };

  // Handle navigation based on current location
  const handleNavigation = (sectionName: string) => {
    if (location.pathname === '/') {
      // If we're on the home page, scroll to section
      scrollToSection(sectionName.toLowerCase());
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection(sectionName.toLowerCase());
      }, 100);
    }
  };

  const navigationItems = [
    {
      name: 'About',
      href: '/',
      action: () => handleNavigation('about')
    },
    {
      name: 'Products',
      href: '/',
      action: () => handleNavigation('products'),
      dropdown: [
        { name: 'MediCare AI Receptionist', href: '/medicare-ai-receptionist', icon: Stethoscope },
        { name: 'DineMate AI Agent', href: '/dinemate-ai-agent', icon: UtensilsCrossed },
        { name: 'AutoCare AI Receptionist', href: '/autocare-ai-receptionist', icon: Wrench },
        { name: 'GlamCare AI Agent', href: '/glamcare-ai-agent', icon: Sparkles }
      ]
    },
    {
      name: 'Testimonials',
      href: '/',
      action: () => handleNavigation('testimonials')
    },
    {
      name: 'Contact',
      href: '/',
      action: () => handleNavigation('contact')
    }
  ];

  // Tubelight navbar items - Main Services
  const navbarItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Voice Agents', url: '/voice-agents', icon: Bot },
    { name: 'AI Chatbots', url: '/ai-chatbots', icon: MessageSquare },
    { name: 'Automation', url: '/workflow-automation', icon: Workflow },
    { name: 'WhatsApp', url: '/whatsapp-integration', icon: MessageCircle },
    { name: 'Lead Gen', url: '/ai-lead-generation', icon: Target }
  ];

  return (
    <div>
      {/* Tubelight Navbar */}
      <NavBar items={navbarItems} />

      <header
        className={`fixed top-0 w-full z-40 ${
          isScrolled
            ? 'bg-transparent backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between h-12">
            {/* Logo - Top Left */}
            <Link to="/" className="flex items-center">
              <div className="flex items-center space-x-1">
                {/* CLARIO Text with Gradient */}
                <div className="flex items-center">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-glow-aqua">
                    CLARI
                  </span>

                  {/* Circular Logo Icon */}
                  <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-1">
                    <div className="w-full h-full bg-neon-aqua rounded-full flex items-center justify-center shadow-lg glow-primary">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white">
                        <Globe className="w-full h-full" />
                      </div>
                    </div>
                  </div>

                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-neon-aqua">
                    AI
                  </span>
                </div>
              </div>
            </Link>

          {/* CTA Button - Right Side */}
          <div className="hidden sm:flex items-center space-x-4">
            <Button
              className="btn-neon-aqua px-4 md:px-6 py-2 rounded-lg font-semibold text-sm md:text-base"
              size="lg"
            >
              Get a Demo
            </Button>
          </div>
          
          {/* Mobile menu button - Mobile Responsive */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced Mobile Responsive */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-700 shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <nav className="space-y-3 sm:space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="block font-medium py-2 cursor-pointer text-base sm:text-lg text-gray-300 hover:text-blue-400">
                      {item.name}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        item.action();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block font-medium py-2 text-base sm:text-lg text-gray-300 hover:text-blue-400"
                    >
                      {item.name}
                    </button>
                  )}
                  
                  {/* Mobile Dropdown - Enhanced */}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center space-x-3 text-sm sm:text-base text-gray-400 hover:text-blue-400 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <dropdownItem.icon className="w-4 h-4 text-blue-400" />
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Theme Toggle and CTA Button */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg hover:bg-gray-800 text-gray-300"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-5 h-5 text-yellow-500" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 text-gray-600" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
                
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg text-base sm:text-lg"
                  size="lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Demo
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
    </div>
  );
};

export default Header;