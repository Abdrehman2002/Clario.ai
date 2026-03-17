"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Settings, Zap, TrendingUp, Target, Link2, MessageSquare, Layers, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sectionMousePosition, setSectionMousePosition] = useState({ x: 50, y: 50 });

  const processSteps = [
    {
      id: 1,
      icon: Search,
      title: "Analyze Operations",
      description: "We identify inefficiencies and uncover automation opportunities instantly.",
      color: "#7B61FF",
      gradient: "from-[#7B61FF] via-[#6B4CFF] to-[#5B3CFF]",
      glowColor: "rgba(123, 97, 255, 0.5)",
      details: [
        "Deep-dive operational audit",
        "Identify bottlenecks & inefficiencies",
        "Map automation opportunities",
        "ROI impact analysis"
      ]
    },
    {
      id: 2,
      icon: Settings,
      title: "Design Frameworks",
      description: "We create intelligent structures precisely tailored for operational excellence.",
      color: "#8B5CF6",
      gradient: "from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]",
      glowColor: "rgba(139, 92, 246, 0.5)",
      details: [
        "Custom automation blueprints",
        "System integration mapping",
        "Workflow optimization design",
        "Scalability architecture"
      ]
    },
    {
      id: 3,
      icon: Zap,
      title: "Optimize Performance",
      description: "We launch, monitor, and continuously optimize for measurable growth.",
      color: "#A16BFF",
      gradient: "from-[#A16BFF] via-[#8B5CF6] to-[#7B61FF]",
      glowColor: "rgba(161, 107, 255, 0.5)",
      details: [
        "Seamless deployment & launch",
        "Real-time performance monitoring",
        "Continuous optimization cycles",
        "Data-driven improvements"
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks to save hours and streamline daily operations effortlessly.",
      color: "#7B61FF"
    },
    {
      icon: Target,
      title: "Smarter Decisions",
      description: "Gain real-time insights and make data-backed choices with confidence.",
      color: "#8B5CF6"
    },
    {
      icon: Link2,
      title: "Seamless Integration",
      description: "Connect every system you use from CRM to communication in one automated flow.",
      color: "#A16BFF"
    },
    {
      icon: MessageSquare,
      title: "Consistent Communication",
      description: "Ensure every message, response, and client interaction stays fast and accurate.",
      color: "#7B61FF"
    },
    {
      icon: Layers,
      title: "Scalable Growth",
      description: "Systems that evolve with your business, no limits, just continuous improvements.",
      color: "#8B5CF6"
    },
    {
      icon: Zap,
      title: "Cost Reduction",
      description: "Reduce manual labor and eliminate inefficiencies that drain time and budget.",
      color: "#A16BFF"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true
        }
      });

      // Heading animation
      tl.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      // Process cards animation - single batch
      tl.fromTo(
        ".process-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15
        },
        "-=0.4"
      );

      // Benefits animation - single batch
      gsap.fromTo(
        ".benefit-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".benefit-card",
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, stepId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleSectionMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setSectionMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-black via-[#0A0510] to-black"
      onMouseMove={handleSectionMouseMove}
    >
      {/* Background matching FrameworksSection */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,97,255,0.08),transparent_50%)]"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(to right, #7B61FF 1px, transparent 1px),
          linear-gradient(to bottom, #7B61FF 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Radial gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${sectionMousePosition.x}% ${sectionMousePosition.y}%, rgba(123, 97, 255, 0.15), transparent 60%)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4 md:mb-6">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#A16BFF] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full border border-[#7B61FF]/30 backdrop-blur-sm"
              style={{ background: 'rgba(123, 97, 255, 0.1)' }}>
              Process
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2">
            The blueprint.
          </h2>
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 px-2">
            <span className="bg-gradient-to-r from-[#7B61FF] via-[#8B5CF6] to-[#A16BFF] bg-clip-text text-transparent">
              Behind every system.
            </span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            A clear three-step process that moves every project from discovery<br className="hidden md:block" />
            to seamless automation and measurable business growth.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-24 lg:mb-32 px-2 sm:px-0">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="process-card relative group"
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
              onMouseMove={(e) => handleMouseMove(e, step.id)}
            >
              <div className="relative h-full p-6 md:p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/20"
                style={{
                  boxShadow: activeStep === step.id ? `0 20px 60px ${step.glowColor}` : 'none',
                  transform: activeStep === step.id ? 'translateY(-10px) scale(1.02)' : 'none'
                }}>

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${step.glowColor}, transparent 50%)`
                  }}
                />

                {/* Step number background */}
                <div className="absolute top-6 right-6 text-[120px] font-bold leading-none opacity-[0.03]"
                  style={{ color: step.color }}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-6 md:mb-8">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    style={{ boxShadow: `0 10px 40px ${step.glowColor}` }}>
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
                    {step.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: step.color }} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow indicator */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-[#7B61FF] opacity-50" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 mt-16 sm:mt-24 md:mt-32 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-300 mb-4 sm:mb-5 md:mb-6">
            Every benefit.
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 sm:mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-[#7B61FF] via-[#8B5CF6] to-[#A16BFF] bg-clip-text text-transparent">
              Backed by design.
            </span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            We align strategy, automation, and measurable outcomes, ensuring<br className="hidden md:block" />
            every build drives long-term business performance and scalability.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="benefit-card text-center p-4 sm:p-5"
            >
              <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#7B61FF] mx-auto mb-2 sm:mb-2.5 md:mb-3" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
