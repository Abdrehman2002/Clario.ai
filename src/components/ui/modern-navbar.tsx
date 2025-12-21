"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItem {
  title: string
  url: string
}

interface ModernNavbarProps {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  menu?: NavItem[]
  auth?: {
    login: {
      text: string
      url: string
    }
    signup: {
      text: string
      url: string
    }
  }
}

export function ModernNavbar({
  logo = {
    url: "/",
    src: "/favicon.svg",
    alt: "Clario AI",
    title: "Clario AI",
  },
  menu = [
    { title: "Home", url: "#hero" },
    { title: "Services", url: "#products" },
    { title: "Process", url: "#about" },
    { title: "Testimonials", url: "#testimonials" },
    { title: "Contact", url: "#contact" },
  ],
  auth = {
    login: { text: "", url: "#" },
    signup: { text: "Let's Talk", url: "#contact" },
  },
}: ModernNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (url: string, title: string) => {
    setActiveSection(title)
    setIsMobileMenuOpen(false)

    if (url.startsWith("#")) {
      const element = document.querySelector(url)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300`}
      style={{
        backdropFilter: 'blur(12px)',
        background: isScrolled ? 'rgba(15, 15, 30, 0.65)' : 'rgba(15, 15, 30, 0.4)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2 group">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-16 h-16 transition-transform group-hover:scale-110 mt-2"
            />
            <span className="text-2xl font-bold text-white tracking-tight">
              {logo.title}
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menu.map((item) => (
              <a
                key={item.title}
                href={item.url}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.url, item.title)
                }}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {item.title}
                <span
                  className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7B61FF] to-[#A16BFF] transition-all duration-300 group-hover:w-full"
                  style={{ transformOrigin: 'left' }}
                />
                {activeSection === item.title && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7B61FF] to-[#A16BFF]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {auth.login.text && (
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white hover:bg-white/10"
                asChild
              >
                <a href={auth.login.url}>{auth.login.text}</a>
              </Button>
            )}
            <Button
              size="sm"
              className="bg-gradient-to-br from-[#7B61FF] to-[#6B4CFF] hover:from-[#8A71FF] hover:to-[#7B61FF] text-white rounded-lg px-6 font-bold shadow-[0_0_20px_rgba(123,97,255,0.6)] hover:shadow-[0_0_30px_rgba(161,107,255,0.8)] transition-all"
              asChild
            >
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-6 space-y-1">
              {menu.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.url, item.title)
                  }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.title
                      ? "bg-[#7B61FF]/20 text-[#7B61FF]"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.title}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                {auth.login.text && (
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-white hover:bg-gray-800"
                    asChild
                  >
                    <a href={auth.login.url}>{auth.login.text}</a>
                  </Button>
                )}
                <Button
                  className="w-full bg-gradient-to-br from-[#7B61FF] to-[#6B4CFF] text-white font-bold shadow-[0_0_20px_rgba(123,97,255,0.6)]"
                  asChild
                >
                  <a href={auth.signup.url}>{auth.signup.text}</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
