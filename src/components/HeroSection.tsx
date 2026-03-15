import { useEffect, useRef, useState } from 'react';
import { Play, CheckCircle, Mic, Loader2, PhoneOff } from 'lucide-react';
import { RetellWebClient } from 'retell-client-js-sdk';

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
  const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'connected' | 'ended'>('idle');
  const [retellClient, setRetellClient] = useState<RetellWebClient | null>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Voice call functionality
  const AGENT_ID = 'agent_9cef40d41106ca13e58d6a38f6';
  const API_KEY = 'key_52cf8f696d64009de42d4196e27c';

  const startCall = async () => {
    try {
      setCallStatus('connecting');

      const response = await fetch('https://api.retellai.com/v2/create-web-call', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent_id: AGENT_ID,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Retell API error:', data);
        throw new Error(data.message || 'Failed to create web call');
      }

      const client = new RetellWebClient();

      client.on('call_started', () => {
        console.log('Call started');
        setCallStatus('connected');
      });

      client.on('call_ended', () => {
        console.log('Call ended');
        setCallStatus('ended');
        setTimeout(() => {
          setCallStatus('idle');
          setRetellClient(null);
        }, 2000);
      });

      client.on('error', (error) => {
        console.error('Call error:', error);
        setCallStatus('idle');
        alert('Call failed. Please check microphone permissions and try again.');
      });

      await client.startCall({
        accessToken: data.access_token,
      });

      setRetellClient(client);
    } catch (err: any) {
      console.error('Error starting call:', err);
      alert('Error starting call: ' + (err.message || err));
      setCallStatus('idle');
    }
  };

  const endCall = () => {
    if (!retellClient) return;

    try {
      retellClient.stopCall();
      setCallStatus('ended');

      setTimeout(() => {
        setCallStatus('idle');
        setRetellClient(null);
      }, 2000);
    } catch (err: any) {
      console.error('Error ending call:', err);
      setCallStatus('idle');
      setRetellClient(null);
    }
  };

  // Desktop version with redesigned structure
  if (!isMobile) {
    return (
      <section className="relative min-h-[100dvh] max-h-[100dvh] h-[100dvh] flex items-center justify-center overflow-hidden" style={{ boxSizing: 'border-box', maxWidth: '100vw', width: '100%' }}>
        {/* Spline 3D Background - Desktop Only */}
        <div className="absolute inset-0 w-full h-full z-[15] spline-container pointer-events-auto" style={{ maxWidth: '100vw', width: '100%', overflow: 'hidden' }}>
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

        {/* Content Container - Max 1100px constrained */}
        <div ref={heroRef} className="relative z-20 w-full max-w-[1100px] mx-auto px-6 md:px-8 lg:px-12 py-8 hero-content text-center" style={{ pointerEvents: 'none', boxSizing: 'border-box' }}>

          {/* Live Demo Badge */}
          <div className="mb-3 pointer-events-auto inline-block" style={{ animationDelay: '0.2s', opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/90 px-4 py-2 rounded-full border border-[#7B61FF]/30 backdrop-blur-xl"
                  style={{ background: 'rgba(123, 97, 255, 0.1)' }}>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Live AI Voice Demo Available
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-bold mb-3 leading-[1.15] max-w-[900px] mx-auto px-4"
              style={{
                color: '#FFFFFF',
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out 0.3s forwards',
                fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)',
                fontWeight: 700,
                textAlign: 'center'
              }}>
            AI{' '}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
              Voice Agents
            </span>
            {' '}That
            <span className="block mt-1">
              Answer Every Call
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-300 mb-4 max-w-[700px] mx-auto leading-relaxed px-4"
             style={{
               opacity: 0,
               animation: 'fadeInUp 0.8s ease-out 0.4s forwards',
               fontSize: 'clamp(1rem, 1.4vw, 1.3rem)'
             }}>
            Capture leads, schedule appointments, and assist customers automatically — 24/7.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 mb-6 pointer-events-auto justify-center"
               style={{
                 opacity: 0,
                 animation: 'fadeInUp 0.8s ease-out 0.5s forwards'
               }}>
            {['Answers Every Call Instantly', 'Books Appointments Automatically', 'Captures & Qualifies Leads', '24/7 Customer Assistance'].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <CheckCircle className="w-4 h-4 text-[#7B61FF] flex-shrink-0" />
                <span className="text-sm text-white/90 font-medium whitespace-nowrap">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pointer-events-auto justify-center mb-5"
               style={{
                 opacity: 0,
                 animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
               }}>
            <button
              onClick={callStatus === 'connected' ? endCall : startCall}
              disabled={callStatus === 'connecting' || callStatus === 'ended'}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: callStatus === 'connected'
                  ? 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
                  : 'linear-gradient(135deg, #7B61FF 0%, #6B4CFF 100%)',
                boxShadow: callStatus === 'connected'
                  ? '0 0 30px rgba(239, 68, 68, 0.5)'
                  : '0 0 30px rgba(123, 97, 255, 0.5)',
              }}
              onMouseEnter={(e) => {
                if (callStatus === 'connected') {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(239, 68, 68, 0.7)';
                } else {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(123, 97, 255, 0.7)';
                }
              }}
              onMouseLeave={(e) => {
                if (callStatus === 'connected') {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(239, 68, 68, 0.5)';
                } else {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(123, 97, 255, 0.5)';
                }
              }}>
              {callStatus === 'connecting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Connecting...
                </>
              ) : callStatus === 'connected' ? (
                <>
                  <PhoneOff className="w-5 h-5" />
                  End Call
                </>
              ) : callStatus === 'ended' ? (
                <>Call Ended</>
              ) : (
                <>
                  <Mic className="w-5 h-5" />
                  Call the AI Agent
                </>
              )}
            </button>

            <a href="#try-agent" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white transition-all duration-300 hover:bg-white/10 whitespace-nowrap"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                    }}>
              <Play className="w-5 h-5" />
              Watch Demo Video
            </a>
          </div>

          {/* Trust Line */}
          <p className="text-gray-500 text-sm max-w-2xl mx-auto px-4"
             style={{
               opacity: 0,
               animation: 'fadeInUp 0.8s ease-out 0.65s forwards'
             }}>
            Powering AI voice automation for modern businesses
          </p>

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
    <section className="relative min-h-screen bg-gradient-to-b from-black via-[#0A0510] to-black overflow-hidden" style={{ boxSizing: 'border-box' }}>
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

      <div className="max-w-[480px] mx-auto px-5 py-8 relative z-10 min-h-screen flex items-center" style={{ boxSizing: 'border-box' }}>
        <div className="text-center w-full" style={{ boxSizing: 'border-box' }}>

          {/* Live Demo Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-white/90 px-4 py-2 rounded-full border border-[#7B61FF]/30 backdrop-blur-xl"
                  style={{ background: 'rgba(123, 97, 255, 0.1)' }}>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Live AI Voice Demo
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-bold text-white leading-[1.2] mb-4 px-2 max-w-full mx-auto"
              style={{
                fontSize: 'clamp(2rem, 8vw, 2.75rem)',
                fontWeight: 700,
                textAlign: 'center'
              }}>
            AI{' '}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
              Voice Agents
            </span>
            {' '}That
            <span className="block mt-1">
              Answer Every Call
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-300 mb-5 max-w-md mx-auto px-2 leading-relaxed"
             style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.05rem)' }}>
            Capture leads, schedule appointments, and assist customers automatically — 24/7.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center px-2">
            {['Answers Every Call', 'Books Appointments', 'Captures Leads', '24/7 Assistance'].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <CheckCircle className="w-3.5 h-3.5 text-[#7B61FF] flex-shrink-0" />
                <span className="text-[11px] text-white/90 font-medium whitespace-nowrap">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 mb-5 px-2">
            <button
              onClick={callStatus === 'connected' ? endCall : startCall}
              disabled={callStatus === 'connecting' || callStatus === 'ended'}
              className="active:scale-95 text-white px-6 py-4 rounded-xl font-bold text-base flex items-center justify-center transition-all duration-200 min-h-[52px] touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: callStatus === 'connected'
                  ? 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
                  : 'linear-gradient(to right, #7B61FF, #6B4CFF)',
                boxShadow: callStatus === 'connected'
                  ? '0 0 30px rgba(239, 68, 68, 0.5)'
                  : '0 0 30px rgba(123, 97, 255, 0.5)'
              }}
            >
              {callStatus === 'connecting' ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Connecting...
                </>
              ) : callStatus === 'connected' ? (
                <>
                  <PhoneOff className="w-5 h-5 mr-2" />
                  End Call
                </>
              ) : callStatus === 'ended' ? (
                <>Call Ended</>
              ) : (
                <>
                  <Mic className="w-5 h-5 mr-2" />
                  Call the AI Agent
                </>
              )}
            </button>
            <a
              href="#try-agent"
              className="text-white active:scale-95 px-6 py-4 rounded-xl font-semibold text-base flex items-center justify-center transition-all duration-200 min-h-[52px] touch-manipulation"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo Video
            </a>
          </div>

          {/* Trust Line */}
          <p className="text-gray-500 text-xs max-w-md mx-auto px-2 text-center">
            Powering AI voice automation for modern businesses
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
