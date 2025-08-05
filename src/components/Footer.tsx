import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Rocket,
  Shield,
  Zap,
  Brain,
  TrendingUp,
  Users,
  MessageSquare,
  Bot,
  Target,
  BarChart3,
  Workflow,
  Database,
  Cpu,
  Wifi,
  Activity,
  Smartphone,
  Headphones,
  Send,
  Eye,
  Filter,
  ChevronRight,
  Star,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", color: "#0066FF" },
    { icon: Rocket, value: "10x", label: "Faster Growth", color: "#25D366" },
    { icon: Shield, value: "99.9%", label: "Uptime", color: "#FF6B6B" },
    { icon: TrendingUp, value: "3x", label: "ROI Increase", color: "#8B5CF6" }
  ];

  const quickLinks = [
    { name: "AI Voice Agents", href: "/voice-agents", icon: MessageSquare },
    { name: "AI Chatbots", href: "/ai-chatbots", icon: Bot },
    { name: "Lead Generation", href: "/ai-lead-generation", icon: Target },
    { name: "Workflow Automation", href: "/workflow-automation", icon: Workflow },
    { name: "AI WhatsApp Agent", href: "/whatsapp-integration", icon: Smartphone },
    { name: "AI Website", href: "/ai-website", icon: BarChart3 }
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Mission", href: "#mission" },
    { name: "Case Studies", href: "#cases" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Press Kit", href: "#press" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "#help" },
    { name: "Documentation", href: "#docs" },
    { name: "API Reference", href: "#api" },
    { name: "Status Page", href: "#status" },
    { name: "Contact Support", href: "#support" },
    { name: "Community", href: "#community" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-card to-background text-white overflow-hidden">
      {/* Animated Background Elements - Mobile Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-r from-[#0066FF]/10 to-[#0033FF]/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gradient-to-r from-[#8B5CF6]/10 to-[#7C3AED]/10 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0066FF 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content - Mobile Responsive */}
        <div className="py-12 sm:py-16 md:py-20">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Company Info - Mobile Responsive */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#0066FF] to-[#0033FF] rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#0066FF] to-[#0033FF] bg-clip-text text-transparent">
                    Clario AI
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Future of AI Automation</p>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-sm">
                Transforming businesses through intelligent automation. We're not just building AI tools — we're architecting the intelligent infrastructure that powers tomorrow's businesses.
              </p>

              {/* Stats - Mobile Responsive */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-3 sm:p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center mb-1 sm:mb-2">
                      <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" style={{ color: stat.color }} />
                      <span className="text-sm sm:text-lg font-bold text-white">{stat.value}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Social Links - Mobile Responsive */}
              <div className="flex space-x-3 sm:space-x-4">
                <motion.a 
                  href="https://linkedin.com/company/clario-ai"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center hover:bg-[#0066FF]/20 hover:border-[#0066FF]/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://twitter.com/clario_ai"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center hover:bg-[#0066FF]/20 hover:border-[#0066FF]/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="mailto:George@clario.ai"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center hover:bg-[#0066FF]/20 hover:border-[#0066FF]/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links - Mobile Responsive */}
            <motion.div variants={itemVariants}>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 flex items-center">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#0066FF]" />
                Our Solutions
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={link.href}
                      className="flex items-center text-sm sm:text-base text-muted-foreground hover:text-white transition-colors duration-300 group"
                    >
                      <link.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-[#0066FF] group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links - Mobile Responsive */}
            <motion.div variants={itemVariants}>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 flex items-center">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#25D366]" />
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {companyLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={link.href}
                      className="flex items-center text-sm sm:text-base text-muted-foreground hover:text-white transition-colors duration-300 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links - Mobile Responsive */}
            <motion.div variants={itemVariants}>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 flex items-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#8B5CF6]" />
                Support
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {supportLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={link.href}
                      className="flex items-center text-sm sm:text-base text-muted-foreground hover:text-white transition-colors duration-300 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Mobile Responsive */}
        <motion.div 
          className="border-t border-border py-6 sm:py-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © 2024 Clario AI. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
                <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span>•</span>
                <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <span>•</span>
                <a href="#cookies" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#25D366]" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#0066FF]" />
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD700]" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;