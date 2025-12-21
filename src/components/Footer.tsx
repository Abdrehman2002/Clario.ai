import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import { TextHoverEffect } from '@/components/ui/hover-footer';
import { useState } from 'react';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const solutions = [
    { name: "Voice Agents", href: "/voice-agents" },
    { name: "AI Chatbots", href: "/ai-chatbots" },
    { name: "AutoCare AI", href: "/autocare-ai-receptionist" },
    { name: "GlamCare AI", href: "/glamcare-ai-agent" },
    { name: "MediCare AI", href: "/medicare-ai-receptionist" },
    { name: "DineMate AI", href: "/dinemate-ai-agent" }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <footer
      className="relative bg-gradient-to-b from-black via-[#0A0510] to-black border-t border-white/5 overflow-hidden"
      onMouseMove={handleMouseMove}
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
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(123, 97, 255, 0.15), transparent 60%)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-16 z-40 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.img
                src="/logo.svg (2).svg"
                alt="Clario AI"
                className="w-24 h-24"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="text-white text-3xl font-bold bg-gradient-to-r from-[#7B61FF] to-[#A16BFF] bg-clip-text text-transparent">
                Clario AI
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Building the AI infrastructure that powers tomorrow's businesses.
            </p>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-white font-semibold flex items-center gap-2">
              Solutions
              <motion.div
                className="h-px bg-gradient-to-r from-[#7B61FF] to-transparent flex-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformOrigin: 'left' }}
              />
            </h4>
            <ul className="space-y-2">
              {solutions.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                >
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-gray-400 hover:text-[#8B5CF6] transition-all duration-300"
                  >
                    <motion.span
                      className="inline-block mr-2 text-[#7B61FF]"
                      whileHover={{ x: 3 }}
                    >
                      →
                    </motion.span>
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-white font-semibold flex items-center gap-2">
              Get in Touch
              <motion.div
                className="h-px bg-gradient-to-r from-[#7B61FF] to-transparent flex-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformOrigin: 'left' }}
              />
            </h4>
            <motion.a
              href="mailto:George@clario.ai"
              className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#8B5CF6] transition-colors"
              whileHover={{ x: 5 }}
            >
              <Mail size={16} className="text-[#7B61FF]" />
              <span>George@clario.ai</span>
            </motion.a>

            {/* CTA Button */}
            <motion.a
              href="https://calendly.com/abdurrehman1711/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 mt-4 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #7B61FF 0%, #6B4CFF 100%)',
                boxShadow: '0px 0px 20px rgba(125, 76, 255, 0.4)',
                color: '#FFFFFF'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 30px rgba(139, 76, 255, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Divider with gradient */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#7B61FF]/30 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <motion.p variants={itemVariants} className="text-xs text-gray-500">
            © {new Date().getFullYear()} Clario AI. All rights reserved.
          </motion.p>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4">
            <motion.a
              href="https://www.linkedin.com/posts/clario-ai-automations_clarioai-aiforbusiness-automationagency-activity-7358650293904904192-1KN5?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#8B5CF6] hover:border-[#8B5CF6]/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>

            <motion.a
              href="https://twitter.com/clario_ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#8B5CF6] hover:border-[#8B5CF6]/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </motion.a>

            <motion.a
              href="mailto:George@clario.ai"
              aria-label="Email"
              className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#8B5CF6] hover:border-[#8B5CF6]/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Text Hover Effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="CLARIO" className="z-50" />
      </div>
    </footer>
  );
};

export default Footer;
