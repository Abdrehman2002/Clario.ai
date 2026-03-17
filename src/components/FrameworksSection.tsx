"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, MessageSquare, Workflow, ArrowRight, Zap, Users, TrendingUp, Clock, Sparkles, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const frameworks = [
  {
    id: 1,
    icon: Brain,
    title: "AI Receptionist",
    tagline: "Your 24/7 Voice Intelligence",
    description: "Intelligent voice agents that engage, qualify, and convert in real time—never miss a lead again.",
    color: "#7B61FF",
    gradient: "from-[#7B61FF] via-[#6B4CFF] to-[#5B3CFF]",
    glowColor: "rgba(123, 97, 255, 0.4)",
    features: [
      { icon: Users, title: "Natural Conversations", desc: "Human-like voice responses that understand context and tone" },
      { icon: TrendingUp, title: "Smart Lead Routing", desc: "Automatically directs callers to the right team" },
      { icon: Zap, title: "Real-Time Insights", desc: "Logs every call, sentiment, and action instantly" },
      { icon: Clock, title: "Always Available", desc: "24/7 availability with zero downtime" }
    ],
    stats: { value: "99.9%", label: "Uptime", icon: Activity }
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "AI Chat Assistant",
    tagline: "Conversational AI That Converts",
    description: "Built to automate support and boost conversions across all your channels with intelligent responses.",
    color: "#8B5CF6",
    gradient: "from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]",
    glowColor: "rgba(139, 92, 246, 0.4)",
    features: [
      { icon: Users, title: "Human-Like Replies", desc: "Maintains your brand's tone across all channels" },
      { icon: Brain, title: "Smart Knowledge Base", desc: "Trained data for instant, accurate answers" },
      { icon: TrendingUp, title: "Context Retention", desc: "Remembers interactions for seamless experiences" },
      { icon: Zap, title: "Performance Tracking", desc: "Real-time chat analytics dashboard" }
    ],
    stats: { value: "3x", label: "Faster Response", icon: Zap }
  },
  {
    id: 3,
    icon: Workflow,
    title: "Workflow Automations",
    tagline: "Connected Systems, Zero Manual Work",
    description: "Eliminate repetitive tasks with intelligent automation that connects your entire tech stack seamlessly.",
    color: "#A78BFA",
    gradient: "from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED]",
    glowColor: "rgba(167, 139, 250, 0.4)",
    features: [
      { icon: Workflow, title: "Seamless Integrations", desc: "Connects CRMs, forms, and apps automatically" },
      { icon: Zap, title: "Custom Triggers", desc: "Executes actions based on data changes" },
      { icon: Clock, title: "Time Optimization", desc: "Replaces hours of manual work instantly" },
      { icon: TrendingUp, title: "Unified Dashboard", desc: "Monitor automation status and ROI" }
    ],
    stats: { value: "10x", label: "Productivity Boost", icon: TrendingUp }
  }
];

export function FrameworksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified heading animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      });

      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      // Simplified card animations - single batch
      tl.fromTo(
        ".framework-card",
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
    });

    return () => ctx.revert();
  }, []);

  // Mouse move effect for cards
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-16 md:pb-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-black via-[#0A0510] to-black"
      onMouseMove={handleMouseMove}
    >
      {/* Background matching TryAgentNew */}
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
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(123, 97, 255, 0.15), transparent 60%)`
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header with Glow Effect */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-20 lg:mb-24">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 mb-3 sm:mb-4 md:mb-6 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-xl border border-[#7B61FF]/30 bg-[#7B61FF]/5">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#7B61FF]" />
            <span className="text-xs sm:text-sm font-semibold text-[#A78BFA] uppercase tracking-wider">
              AI Infrastructure
            </span>
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#7B61FF]" />
          </div>

          <h2
            ref={headingRef}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-2 sm:px-4"
            style={{
              lineHeight: '1.1',
              textShadow: '0 0 80px rgba(123, 97, 255, 0.3)'
            }}
          >
            Built to automate.{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#7B61FF] via-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                Designed to perform.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF] via-[#8B5CF6] to-[#A78BFA] blur-2xl opacity-30"></div>
            </span>
          </h2>
          <p
            ref={subheadingRef}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
          >
            Each framework is a building block of your AI infrastructure—crafted to automate,
            connect, and scale your operations with precision.
          </p>
        </div>

        {/* Framework Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-2 sm:px-0">
          {frameworks.map((framework, index) => (
            <FrameworkCard
              key={framework.id}
              framework={framework}
              index={index}
              isActive={activeCard === framework.id}
              onHover={() => setActiveCard(framework.id)}
              onLeave={() => setActiveCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FrameworkCardProps {
  framework: typeof frameworks[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function FrameworkCard({ framework, index, isActive, onHover, onLeave }: FrameworkCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });
  const Icon = framework.icon;
  const StatsIcon = framework.stats.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setCardRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
    onLeave();
  };

  return (
    <div
      ref={cardRef}
      className="framework-card group relative perspective-1000"
      onMouseEnter={onHover}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Card Container with Glass Effect */}
      <div className="relative h-full bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-white/30"
           style={{
             boxShadow: isActive ? `0 20px 80px -10px ${framework.glowColor}, 0 0 40px -10px ${framework.glowColor}` : '0 10px 40px -10px rgba(0,0,0,0.5)'
           }}>

        {/* Animated Border Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${framework.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-700`}></div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon & Stats */}
          <div className="flex items-start justify-between mb-5 md:mb-6">
            <div className="relative">
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${framework.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
                style={{
                  boxShadow: `0 10px 40px -5px ${framework.glowColor}`,
                }}
              >
                {/* Icon glow pulse */}
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 animate-pulse"></div>
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10" />
              </div>
              {/* Orbiting ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
            </div>

            {/* Stats Badge with Icon */}
            <div className="text-right backdrop-blur-xl bg-white/5 px-3 md:px-4 py-1.5 md:py-2 rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-500">
              <div className="flex items-center justify-end space-x-1.5 md:space-x-2 mb-0.5 md:mb-1">
                <StatsIcon className="w-3 h-3 md:w-4 md:h-4" style={{ color: framework.color }} />
                <div className="text-2xl md:text-3xl font-bold" style={{ color: framework.color }}>
                  {framework.stats.value}
                </div>
              </div>
              <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-semibold">
                {framework.stats.label}
              </div>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="mb-4 md:mb-5">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
                style={{
                  backgroundImage: isActive ? `linear-gradient(135deg, ${framework.color}, #fff)` : 'none',
                  textShadow: isActive ? `0 0 20px ${framework.glowColor}` : 'none'
                }}
            >
              {framework.title}
            </h3>
            <p className="text-xs md:text-sm font-semibold italic flex items-center space-x-2" style={{ color: framework.color }}>
              <Sparkles className="w-3 h-3" />
              <span>{framework.tagline}</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-5 md:mb-6 text-xs md:text-sm">
            {framework.description}
          </p>

          {/* Features Grid with Enhanced Icons */}
          <div className="space-y-2.5 md:space-y-3">
            {framework.features.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={idx} className="flex items-start space-x-2.5 md:space-x-3 group/item">
                  <div
                    className="w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 relative overflow-hidden"
                    style={{
                      backgroundColor: `${framework.color}20`,
                      border: `1px solid ${framework.color}40`,
                      boxShadow: `0 0 15px ${framework.color}30`
                    }}
                  >
                    {/* Icon background pulse */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    <FeatureIcon className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10" style={{ color: framework.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-xs md:text-sm mb-0.5 md:mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Learn More Link with Arrow */}
          <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-white/10">
            <button className="flex items-center space-x-2 text-xs md:text-sm font-bold group/link relative">
              <span className="relative z-10" style={{ color: framework.color }}>
                Explore {framework.title}
              </span>
              <ArrowRight
                className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/link:translate-x-2 transition-transform duration-300"
                style={{ color: framework.color }}
              />
              {/* Underline animation */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover/link:w-full transition-all duration-300"
                style={{ backgroundColor: framework.color }}
              ></div>
            </button>
          </div>
        </div>

        {/* Corner Accent with Animation */}
        <div
          className="absolute top-0 right-0 w-40 h-40 opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-150"
          style={{
            background: `radial-gradient(circle at top right, ${framework.color}, transparent 60%)`,
          }}
        ></div>

        {/* Bottom Corner Accent */}
        <div
          className="absolute bottom-0 left-0 w-32 h-32 opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-150"
          style={{
            background: `radial-gradient(circle at bottom left, ${framework.color}, transparent 60%)`,
          }}
        ></div>
      </div>
    </div>
  );
}
