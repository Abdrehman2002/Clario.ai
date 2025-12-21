"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Activity, DollarSign, Users, TrendingUp, BarChart3, Clock, Zap, CheckCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function FeaturesDetail() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      })

      tl.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          dashboardRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ".stat-card",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-black via-[#0A0510] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,97,255,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            The command center.
            <br />
            <span className="bg-gradient-to-r from-[#7B61FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Your business, made visible.
            </span>
          </h2>
          <p ref={subtitleRef} className="text-lg md:text-xl text-gray-300 leading-relaxed">
            A unified dashboard that gives you real-time visibility into calls, messages,
            automations, and performance, so every decision is data-driven.
          </p>
        </div>

        {/* Main Dashboard */}
        <div ref={dashboardRef} className="max-w-6xl mx-auto mb-16">
          <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl border-4 border-[#7B61FF] overflow-hidden"
               style={{ boxShadow: '0 0 60px rgba(123, 97, 255, 0.4), 0 0 100px rgba(123, 97, 255, 0.2)' }}>

            {/* Dashboard Image */}
            <img
              src="/dashboard.png"
              alt="AI Command Center Dashboard"
              className="w-full h-auto"
            />

            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#7B61FF]/10 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Bottom Features - Simplified */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Unified Intelligence */}
          <div className="stat-card text-center">
            <Zap className="w-8 h-8 text-[#7B61FF] mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-2">
              Unified Intelligence
            </h4>
            <p className="text-sm text-gray-400">
              See every AI agent, workflow, and data source in one seamless interface.
            </p>
          </div>

          {/* Real-Time Insights */}
          <div className="stat-card text-center">
            <Clock className="w-8 h-8 text-[#7B61FF] mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-2">
              Real-Time Insights
            </h4>
            <p className="text-sm text-gray-400">
              Get instant performance metrics, response rates, and automation impact updated live.
            </p>
          </div>

          {/* Total Control */}
          <div className="stat-card text-center">
            <CheckCircle className="w-8 h-8 text-[#7B61FF] mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-2">
              Total Control
            </h4>
            <p className="text-sm text-gray-400">
              Adjust, pause, or optimize automations instantly, all from your central dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
