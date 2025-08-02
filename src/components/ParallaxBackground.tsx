import { useEffect, useRef } from 'react';

const ParallaxBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      const particleCount = 50;
      particlesRef.current.innerHTML = '';
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <>
      {/* Digital particles */}
      <div ref={particlesRef} className="particles" />
      
      {/* Floating orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="orb w-32 h-32 bg-primary/10 top-1/4 left-1/4 animate-drift"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="orb w-24 h-24 bg-violet-red/10 top-3/4 right-1/4 animate-drift"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="orb w-20 h-20 bg-electric-blue/10 top-1/2 right-1/3 animate-drift"
          style={{ animationDelay: '4s' }}
        />
      </div>
      
      {/* Hero gradient overlay */}
      <div className="fixed inset-0 bg-gradient-hero pointer-events-none z-0" />
    </>
  );
};

export default ParallaxBackground;