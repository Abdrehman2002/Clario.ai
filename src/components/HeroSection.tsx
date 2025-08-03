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
      <div className="w-full h-full bg-gradient-hero flex items-center justify-center spline-container">
        <div className="text-center text-muted-foreground">
          <div className="text-6xl mb-4">🤖</div>
          <p>3D Experience Loading...</p>
        </div>
      </div>
    );
  }

  if (!SplineLoaded) {
    return (
      <div className="w-full h-full bg-gradient-hero flex items-center justify-center spline-container">
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
      {/* Spline 3D Background - Mobile Responsive */}
      <div className="absolute inset-0 w-full h-full z-0 spline-container">
        <SplineComponent
          scene="https://prod.spline.design/Ttmiwl9zJYrljQ8W/scene.splinecode"
          style={{ 
            width: '100%', 
            height: '100%',
            // Ensure 3D content scales properly on mobile
            minHeight: '100vh',
            maxHeight: '100vh'
          }}
        />
      </div>
      
      {/* Content Overlay - Fully Mobile Responsive */}
      <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-32 sm:mt-40 md:mt-48 lg:mt-56 xl:mt-64 hero-content">
        <h1 className="animate-on-load mobile-large-heading-responsive sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 gradient-text leading-tight px-2 sm:px-4">
          Automate Appointments
          <br className="hidden sm:block" />
          <span className="text-foreground block sm:inline"> Maximize Revenue.</span>
        </h1>
        
        <p className="animate-on-load mobile-text-responsive sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
          While your competitors struggle with manual processes and poor customer experiences, we help you automate everything and scale your business 10x faster with AI that actually works.
        </p>
        
        <div className="animate-on-load flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4">
          <Button variant="glow" size="xl" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            Start Free Trial
          </Button>
          <Button variant="glass" size="xl" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            See How It Works
          </Button>
        </div>
        
        {/* Tech Stack Icons - Mobile Responsive */}
        <div className="animate-on-load mt-8 sm:mt-12 lg:mt-16 flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 opacity-60 px-2 sm:px-4">
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
            <span className="hidden xs:inline">OpenAI</span>
            <span className="xs:hidden">OpenAI</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-violet-red rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span className="hidden xs:inline">WhatsApp Cloud API</span>
            <span className="xs:hidden">WhatsApp</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-electric-blue rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
            <span className="hidden xs:inline">Node.js</span>
            <span className="xs:hidden">Node.js</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
            <span className="hidden xs:inline">n8n</span>
            <span className="xs:hidden">n8n</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-violet-red rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
            <span className="hidden xs:inline">Vercel</span>
            <span className="xs:hidden">Vercel</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Mobile Responsive */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;