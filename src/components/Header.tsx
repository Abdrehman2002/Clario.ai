import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 animate-slide-down ${
        isScrolled 
          ? 'glass border-b border-glass-border backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold gradient-text">
            Clario AI
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#about" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors neon-underline">
              About
            </a>
            <a href="#products" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors neon-underline">
              Products
            </a>
            <a href="#testimonials" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors neon-underline">
              Testimonials
            </a>
            <a href="#contact" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors neon-underline">
              Contact
            </a>
          </nav>
          
          {/* CTA Button */}
          <Button variant="demo" size="lg" className="hidden md:inline-flex">
            Get a Demo
          </Button>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;