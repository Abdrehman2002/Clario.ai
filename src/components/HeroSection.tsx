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
      <section className="relative h-screen max-h-[900px] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Spline 3D Background - Desktop Only */}
        <div className="absolute inset-0 w-full h-full z-[15] spline-container pointer-events-auto will-change-transform">
          <SplineComponent
            scene="https://prod.spline.design/0tU4673t03E7iQ85/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '100%',
              maxHeight: '100%',
              pointerEvents: 'auto',
              willChange: 'transform'
            }}
          />
        </div>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 z-[16] pointer-events-none"
             style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)' }}>
        </div>

        {/* Content Container - Max 1200px constrained */}
        <div ref={heroRef} className="relative z-20 w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-20 hero-content text-center" style={{ pointerEvents: 'none' }}>

          {/* Tag Line */}
          <div className="mb-6 pointer-events-auto inline-block" style={{ animationDelay: '0.2s', opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/90 px-4 py-2 rounded-full border border-[#7B61FF]/30 backdrop-blur-xl"
                  style={{ background: 'rgba(123, 97, 255, 0.1)' }}>
              <span className="w-2 h-2 rounded-full bg-[#7B61FF] animate-pulse"></span>
              AI-Powered Business Automation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-bold mb-5 leading-[1.15] max-w-4xl mx-auto"
              style={{
                color: '#FFFFFF',
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out 0.3s forwards',
                fontSize: 'clamp(2rem, 4vw + 1rem, 4rem)'
              }}>
            Transform your business
            <span className="block bg-gradient-to-r from-[#7B61FF] via-[#8B5CF6] to-[#A16BFF] bg-clip-text text-transparent mt-2">
              with AI Intelligence.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
             style={{
               opacity: 0,
               animation: 'fadeInUp 0.8s ease-out 0.4s forwards',
               fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)'
             }}>
            Deploy intelligent voice agents and chatbots that handle appointments,
            qualify leads, and close deals while you focus on growth.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2.5 mb-8 pointer-events-auto justify-center"
               style={{
                 opacity: 0,
                 animation: 'fadeInUp 0.8s ease-out 0.5s forwards'
               }}>
            {['24/7 Availability', 'Instant Responses', 'Zero Missed Calls'].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <CheckCircle className="w-4 h-4 text-[#7B61FF] flex-shrink-0" />
                <span className="text-sm text-white/90 font-medium whitespace-nowrap">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto justify-center mb-10"
               style={{
                 opacity: 0,
                 animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
               }}>
            <a href="https://calendly.com/abdurrehman1711/30min" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 hover:scale-105 whitespace-nowrap"
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
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="/dashboard.png" target="_blank" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white transition-all duration-300 hover:bg-white/10 whitespace-nowrap"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                    }}>
              <Play className="w-5 h-5" />
              Watch Demo
            </a>
          </div>

          {/* Simple Stats - No Boxes */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pointer-events-auto"
               style={{
                 opacity: 0,
                 animation: 'fadeInUp 0.8s ease-out 0.7s forwards'
               }}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#7B61FF] to-[#8B5CF6] bg-clip-text text-transparent mb-1.5">200+</div>
              <div className="text-sm text-gray-400 whitespace-nowrap">Active Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A16BFF] bg-clip-text text-transparent mb-1.5">40%</div>
              <div className="text-sm text-gray-400 whitespace-nowrap">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1 mb-1.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#7B61FF] text-[#7B61FF]" />
                ))}
              </div>
              <div className="text-sm text-gray-400 whitespace-nowrap">4.9/5 Rating</div>
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

  // Mobile version with modern purple gradient theme
  return (
    <section className="relative min-h-[100dvh] bg-gradient-to-b from-black via-[#0A0510] to-black overflow-hidden safe-top safe-bottom">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,97,255,0.08),transparent_50%)]"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(to right, #7B61FF 1px, transparent 1px),
          linear-gradient(to bottom, #7B61FF 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-[480px] mx-auto px-4 pt-24 pb-8 relative z-10">
        <div className="text-center min-h-[calc(100dvh-128px)] flex flex-col justify-center py-8">

          {/* Tag Line */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-white/90 px-3 py-1.5 rounded-full border border-[#7B61FF]/30 backdrop-blur-xl"
                  style={{ background: 'rgba(123, 97, 255, 0.1)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF] animate-pulse"></span>
              AI-Powered Business Automation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-bold text-white leading-[1.2] mb-4 px-2"
              style={{ fontSize: 'clamp(1.75rem, 8vw, 2.5rem)' }}>
            Transform your business
            <span className="block bg-gradient-to-r from-[#7B61FF] via-[#8B5CF6] to-[#A16BFF] bg-clip-text text-transparent mt-1">
              with AI Intelligence.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-300 mb-5 max-w-md mx-auto px-2 leading-relaxed"
             style={{ fontSize: 'clamp(0.9375rem, 4vw, 1.0625rem)' }}>
            Deploy intelligent voice agents and chatbots that handle appointments, qualify leads, and close deals while you focus on growth.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 mb-5 justify-center px-2">
            {['24/7 Availability', 'Instant Responses', 'Zero Missed Calls'].map((feature, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <CheckCircle className="w-3 h-3 text-[#7B61FF] flex-shrink-0" />
                <span className="text-[11px] text-white/90 font-medium whitespace-nowrap">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 mb-6 px-2">
            <a
              href="https://calendly.com/abdurrehman1711/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#7B61FF] to-[#6B4CFF] active:scale-95 text-white px-6 py-4 rounded-xl font-bold text-base flex items-center justify-center transition-all duration-200 min-h-[52px] touch-manipulation"
              style={{ boxShadow: '0 0 30px rgba(123, 97, 255, 0.5)' }}
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="/dashboard.png"
              target="_blank"
              className="text-white active:scale-95 px-6 py-4 rounded-xl font-semibold text-base flex items-center justify-center transition-all duration-200 min-h-[52px] touch-manipulation"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </a>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap items-center justify-center gap-5 px-2">
            <div className="text-center min-w-[80px]">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#7B61FF] to-[#8B5CF6] bg-clip-text text-transparent mb-0.5">200+</div>
              <div className="text-[10px] text-gray-400 leading-tight">Active<br/>Businesses</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A16BFF] bg-clip-text text-transparent mb-0.5">40%</div>
              <div className="text-[10px] text-gray-400 leading-tight">Revenue<br/>Increase</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="flex items-center gap-0.5 mb-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#7B61FF] text-[#7B61FF]" />
                ))}
              </div>
              <div className="text-[10px] text-gray-400 leading-tight">4.9/5<br/>Rating</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
