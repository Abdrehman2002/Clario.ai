import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';

// Dynamic import to handle Spline loading (Desktop only)
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
      <div className="w-full h-full flex items-center justify-center spline-container">
        <div className="text-center text-muted-foreground">
          <div className="text-6xl mb-4">🤖</div>
          <p>3D Experience Loading...</p>
        </div>
      </div>
    );
  }

  if (!SplineLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center spline-container">
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
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Desktop version with redesigned structure
  if (!isMobile) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spline 3D Background - Desktop Only */}
        <div className="absolute inset-0 w-full h-full z-[15] spline-container pointer-events-none will-change-transform">
          <SplineComponent
            scene="https://prod.spline.design/0tU4673t03E7iQ85/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '100vh',
              maxHeight: '100vh',
              pointerEvents: 'none',
              willChange: 'transform'
            }}
          />
        </div>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 z-[16] pointer-events-none"
             style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)' }}>
        </div>

        {/* Content Container - Centered Layout */}
        <div ref={heroRef} className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-14 md:pb-16 hero-content text-center" style={{ pointerEvents: 'none' }}>

          {/* Tag Line */}
          <div className="mb-6 pointer-events-auto inline-block" style={{ animationDelay: '0.2s', opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/90 px-4 py-2 rounded-full border border-[#7B61FF]/30 backdrop-blur-xl"
                  style={{ background: 'rgba(123, 97, 255, 0.1)' }}>
              <span className="w-2 h-2 rounded-full bg-[#7B61FF] animate-pulse"></span>
              AI-Powered Business Automation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.2] px-4"
              style={{
                color: '#FFFFFF',
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out 0.3s forwards'
              }}>
            Transform your business
            <span className="block bg-gradient-to-r from-[#7B61FF] via-[#8B5CF6] to-[#A16BFF] bg-clip-text text-transparent pb-2">
              with AI Intelligence.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-7 md:mb-8 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4"
             style={{
               opacity: 0,
               animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
             }}>
            Deploy intelligent voice agents and chatbots that handle appointments,
            qualify leads, and close deals while you focus on growth.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 mb-6 sm:mb-7 md:mb-8 pointer-events-auto justify-center px-4"
               style={{
                 opacity: 0,
                 animation: 'fadeInUp 0.8s ease-out 0.5s forwards'
               }}>
            {['24/7 Availability', 'Instant Responses', 'Zero Missed Calls'].map((feature, i) => (
              <div key={i} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#7B61FF]" />
                <span className="text-xs sm:text-sm md:text-base text-white/90 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 md:gap-4 lg:gap-5 pointer-events-auto justify-center mb-10 sm:mb-11 md:mb-12 px-4"
               style={{
                 opacity: 0,
                 animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
               }}>
            <a href="https://calendly.com/abdurrehman1711/30min" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base md:text-lg text-white transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #7B61FF 0%, #6B4CFF 100%)',
                      boxShadow: '0 0 30px rgba(123, 97, 255, 0.5)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 40px rgba(123, 97, 255, 0.7)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(123, 97, 255, 0.5)';
                    }}>
              Get Started Free
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="/dashboard.png" target="_blank" className="group flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl lg:rounded-2xl font-semibold text-sm sm:text-base md:text-lg text-white transition-all duration-300 hover:bg-white/10"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                    }}>
              <Play className="w-4 h-4 md:w-5 md:h-5" />
              Watch Demo
            </a>
          </div>

          {/* Simple Stats - No Boxes */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-7 md:gap-8 lg:gap-10 pointer-events-auto px-4"
               style={{
                 opacity: 0,
                 animation: 'fadeInUp 0.8s ease-out 0.7s forwards'
               }}>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#7B61FF] to-[#8B5CF6] bg-clip-text text-transparent mb-1 sm:mb-1.5 md:mb-2">200+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">Active Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A16BFF] bg-clip-text text-transparent mb-1 sm:mb-1.5 md:mb-2">40%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-0.5 sm:gap-1 mb-1 sm:mb-1.5 md:mb-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-[#7B61FF] text-[#7B61FF]" />
                ))}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">4.9/5 Rating</div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce pointer-events-none">
          <div className="flex flex-col items-center gap-2 opacity-40">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-white text-xs font-medium tracking-wide">Scroll</span>
          </div>
        </div>
      </section>
    );
  }

  // Mobile version with improved responsiveness
  return (
    <section className="relative min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-10 sm:pb-12">
        <div className="text-center min-h-[80vh] flex flex-col justify-center">

          <div className="inline-flex items-center space-x-2 text-[#7B61FF] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-5 sm:mb-6 mx-auto border border-[#7B61FF]/30 bg-[#7B61FF]/10">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            <span>Trusted by 200+ businesses</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white leading-tight mb-5 sm:mb-6 px-2">
            Transform your business
            <span className="block bg-gradient-to-r from-[#7B61FF] to-[#A16BFF] bg-clip-text text-transparent pt-1">
              with AI agents
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-7 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto px-2 leading-relaxed">
            Deploy intelligent voice agents and chatbots that handle appointments, qualify leads, and close deals 24/7.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-12 px-2">
            <a
              href="https://calendly.com/abdurrehman1711/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#7B61FF] to-[#6B4CFF] hover:from-[#8A71FF] hover:to-[#7B61FF] text-white px-6 sm:px-8 py-4 sm:py-6 rounded-xl font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(123,97,255,0.5)] flex items-center justify-center transition-all duration-300"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </a>
            <a
              href="/dashboard.png"
              target="_blank"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-6 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center transition-all duration-300"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Watch Demo
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
