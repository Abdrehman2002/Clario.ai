"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Calendar, ArrowRight, Send } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [sectionMousePosition, setSectionMousePosition] = useState({ x: 50, y: 50 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [result, setResult] = useState("")

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true
        }
      })

      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        ".contact-item",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15
        },
        "-=0.4"
      )
    })

    return () => ctx.revert()
  }, [])

  const handleSectionMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (rect) {
      setSectionMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formDataObj = new FormData(form)
    formDataObj.append("access_key", "753683eb-da67-456a-84a0-2aa30b674f86")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      })

      const data = await response.json()

      if (data.success) {
        setResult("Submitted")
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setResult(""), 5000) // Clear message after 5 seconds
      } else {
        setResult("Error")
        setTimeout(() => setResult(""), 5000)
      }
    } catch (error) {
      setResult("Error")
      setTimeout(() => setResult(""), 5000)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-black via-[#0A0510] to-black"
      onMouseMove={handleSectionMouseMove}
    >
      {/* Background matching other sections */}
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
              Contact Us
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2">
            Let's talk.
          </h2>
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 px-2">
            <span className="bg-gradient-to-r from-[#7B61FF] via-[#8B5CF6] to-[#A16BFF] bg-clip-text text-transparent">
              Transform your business today.
            </span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Ready to automate and scale? Get in touch and let's build<br className="hidden md:block" />
            intelligent AI solutions tailored to your business needs.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-2 sm:px-4">
          {/* Left Side - Contact Form */}
          <motion.div
            className="contact-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Send us a message</h3>

              {/* Name Input */}
              <div className="mb-4 md:mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[rgba(123,97,255,0.3)] transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4 md:mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[rgba(123,97,255,0.3)] transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone Input */}
              <div className="mb-4 md:mb-5">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[rgba(123,97,255,0.3)] transition-all duration-300"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-6 md:mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[rgba(123,97,255,0.3)] transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-base md:text-lg text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #7B61FF 0%, #6B4CFF 100%)',
                  boxShadow: '0 10px 40px rgba(123, 97, 255, 0.4)',
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 50px rgba(123, 97, 255, 0.6)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                {result === "Submitted" ? "Submitted!" : "Send Message"}
              </motion.button>

              {/* Success/Error Message */}
              {result && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 text-center font-semibold ${
                    result === "Submitted"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {result === "Submitted"
                    ? "✓ Message sent successfully!"
                    : "✗ Failed to send message. Please try again."}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right Side - Contact Options */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            {/* Email */}
            <motion.a
              href="mailto:william@vextriaai.com"
              className="contact-item group flex items-center justify-between p-4 md:p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-[#7B61FF]/30 transition-all duration-300"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 md:gap-4 min-w-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#7B61FF]/20 to-[#8B5CF6]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#7B61FF]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-0.5 md:mb-1">Email Us</h3>
                  <p className="text-xs md:text-sm text-gray-400 truncate">info@vextriaai.com</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-[#7B61FF] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
            </motion.a>

            {/* Schedule Meeting - Primary CTA */}
            <motion.a
              href="https://calendly.com/vextriaai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item group flex items-center justify-between p-4 md:p-6 rounded-2xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #7B61FF 0%, #6B4CFF 100%)',
                boxShadow: '0 0 30px rgba(123, 97, 255, 0.3)',
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 40px rgba(123, 97, 255, 0.5)',
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 md:gap-4 min-w-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-0.5 md:mb-1">Schedule a Meeting</h3>
                  <p className="text-xs md:text-sm text-white/80">Book a call with us</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
