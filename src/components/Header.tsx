import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  Bot,
  Workflow,
  MessageSquare,
  BarChart3,
  Target
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

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
        top: elementPosition,
        behavior: 'smooth'
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
        { name: 'AI Voice Agents', href: '/voice-agents', icon: Bot },
        { name: 'AI Chatbots', href: '/ai-chatbots', icon: MessageSquare },
        { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target },
        { name: 'Workflow Automation', href: '/workflow-automation', icon: Workflow },
        { name: 'AI WhatsApp Agent', href: '/whatsapp-integration', icon: MessageSquare },
        { name: 'AI Website', href: '/ai-website', icon: BarChart3 }
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

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Mobile Responsive */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-1 sm:space-x-2 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-1">
                {/* CLARIO Text with Gradient */}
                <div className="flex items-center">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#0066FF] bg-clip-text text-transparent">
                    CLARI
                  </span>
                  
                  {/* Circular Logo Icon */}
                  <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-1">
                    <div className="w-full h-full bg-[#0066FF] rounded-full flex items-center justify-center shadow-lg">
                      <motion.div
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Globe className="w-full h-full" />
                      </motion.div>
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[#0066FF]/20 rounded-full blur-md"></div>
                  </div>
                  
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#0066FF]">
                    AI
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation - Mobile Responsive */}
          <nav className="hidden lg:flex items-center space-x-6 md:space-x-8">
            {navigationItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                variants={itemVariants}
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <div className={`flex items-center space-x-1 transition-colors duration-300 font-medium group cursor-pointer ${
                    isScrolled ? 'text-white hover:text-[#0066FF]' : 'text-[#0066FF] hover:text-[#0052CC]'
                  }`}>
                    <span className="text-sm md:text-base">{item.name}</span>
                    <ChevronDown className="w-3 h-3 md:w-4 md:h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </div>
                ) : (
                  <button
                    onClick={item.action}
                    className={`flex items-center space-x-1 transition-colors duration-300 font-medium group ${
                      isScrolled ? 'text-white hover:text-[#0066FF]' : 'text-[#0066FF] hover:text-[#0052CC]'
                    }`}
                  >
                    <span className="text-sm md:text-base">{item.name}</span>
                  </button>
                )}
                
                {/* Dropdown Menu - Mobile Responsive */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-56 md:w-64 bg-card border border-border rounded-2xl shadow-xl py-2"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-muted hover:text-[#0066FF] transition-colors duration-200"
                      >
                        <dropdownItem.icon className="w-4 h-4 text-[#0066FF]" />
                        <span className="text-sm font-medium">{dropdownItem.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>
          
          {/* Desktop CTA Button - Mobile Responsive */}
          <motion.div 
            className="hidden lg:block"
            variants={itemVariants}
          >
            <Button 
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-4 md:px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group text-sm md:text-base"
              size="lg"
            >
              <span>Get a Demo</span>
              <motion.div
                className="ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </Button>
          </motion.div>
          
          {/* Mobile menu button - Mobile Responsive */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`w-5 h-5 sm:w-6 sm:h-6 ${isScrolled ? 'text-white' : 'text-[#0066FF]'}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`w-5 h-5 sm:w-6 sm:h-6 ${isScrolled ? 'text-white' : 'text-[#0066FF]'}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced Mobile Responsive */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-card border-t border-border shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <nav className="space-y-3 sm:space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className={`block transition-colors duration-200 font-medium py-2 cursor-pointer text-base sm:text-lg ${
                        isScrolled ? 'text-white hover:text-[#0066FF]' : 'text-[#0066FF] hover:text-[#0052CC]'
                      }`}>
                        {item.name}
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          item.action();
                          setIsMobileMenuOpen(false);
                        }}
                        className={`block transition-colors duration-200 font-medium py-2 text-base sm:text-lg ${
                          isScrolled ? 'text-white hover:text-[#0066FF]' : 'text-[#0066FF] hover:text-[#0052CC]'
                        }`}
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
                            className="flex items-center space-x-3 text-sm sm:text-base text-muted-foreground hover:text-[#0066FF] transition-colors duration-200 py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <dropdownItem.icon className="w-4 h-4 text-[#0066FF]" />
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Button - Enhanced */}
                <div className="pt-4 border-t border-border">
                  <Button 
                    className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 text-base sm:text-lg"
                    size="lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get a Demo
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;