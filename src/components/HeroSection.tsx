import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

// Dynamic import to handle Spline loading
const SplineComponent = ({ scene, style }: { scene: string; style: any }) => {
  const [SplineLoaded, setSplineLoaded] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSpline = async () => {
      try {
        const Spline = await import('@splinetool/react-spline');
        setSplineLoaded(() => Spline.default);
      } catch (err) {
        console.error('Failed to load Spline:', err);
        setError('Failed to load 3D component');
      }
    };
    
    loadSpline();
  }, []);

  if (error) {
    return (
      <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="text-6xl mb-4">🤖</div>
          <p>3D Experience Loading...</p>
        </div>
      </div>
    );
  }

  if (!SplineLoaded) {
    return (
      <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading 3D Experience...</p>
        </div>
      </div>
    );
  }

  return <SplineLoaded scene={scene} style={style} />;
};

const HeroSection = () => {
  console.log('HeroSection component rendering...');
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations will be added here
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add('animate-fade-in-up');
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <SplineComponent
          scene="https://prod.spline.design/Ttmiwl9zJYrljQ8W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      {/* Content Overlay */}
      <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto mt-48 sm:mt-56 md:mt-64">
        <h1 className="animate-on-load text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
          Automate with
          <br />
          <span className="text-foreground">Intelligence</span>
        </h1>
        
        <p className="animate-on-load text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          At Clario AI, we fuse automation and intelligence to supercharge your business operations. 
          From voice agents to custom workflows — we build AI that works for you, 24/7.
        </p>
        
        <div className="animate-on-load flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Button variant="glow" size="xl" className="w-full sm:w-auto">
            Start Your AI Journey
          </Button>
          <Button variant="glass" size="xl" className="w-full sm:w-auto">
            Watch Demo
          </Button>
        </div>
        
        {/* Tech Stack Icons */}
        <div className="animate-on-load mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-60 px-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
            OpenAI
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-violet-red rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
            WhatsApp Cloud API
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-electric-blue rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
            Node.js
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
            n8n
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-violet-red rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
            Vercel
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;