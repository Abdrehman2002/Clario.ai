import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Brain, 
  Cpu, 
  MessageSquare, 
  Workflow, 
  Database, 
  BarChart3,
  ChevronRight,
  Sparkles,
  Target,
  Globe,
  Rocket,
  Shield,
  Clock,
  TrendingUp
} from 'lucide-react';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
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

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const capabilities = [
    { icon: Bot, title: "AI Voice Agents", subtitle: "Natural conversations", color: "#FF6B6B" },
    { icon: Workflow, title: "Workflow Automation", subtitle: "Seamless operations", color: "#FFA726" },
    { icon: Database, title: "System Integration", subtitle: "Connected ecosystem", color: "#9E9E9E" },
    { icon: BarChart3, title: "Real-time Analytics", subtitle: "Data-driven insights", color: "#4CAF50" }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield, color: "#0066FF" },
    { number: "60%", label: "Cost Reduction", icon: TrendingUp, color: "#25D366" },
    { number: "24/7", label: "AI Availability", icon: Clock, color: "#FF6B6B" },
    { number: "10x", label: "Faster Processing", icon: Zap, color: "#9C27B0" }
  ];

  const techStack = [
    { name: "OpenAI GPT-4", category: "AI Core", color: "#10A37F" },
    { name: "WhatsApp API", category: "Communication", color: "#25D366" },
    { name: "Node.js", category: "Runtime", color: "#339933" },
    { name: "n8n Workflows", category: "Automation", color: "#FF6B6B" },
    { name: "Vercel Edge", category: "Infrastructure", color: "#000000" },
    { name: "WebRTC", category: "Real-time", color: "#4CAF50" }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#FFFFFF]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#0066FF]/8 to-[#0033FF]/8 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-[#B8C2FF]/10 to-[#CCE0FF]/10 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#0066FF]/5 to-[#B8C2FF]/5 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0066FF 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
              </div>
            </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              className="flex items-center justify-center space-x-2 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-6 h-6 text-[#0066FF]" />
              <span className="text-lg text-[#666666] font-medium">About Clario AI</span>
              <Sparkles className="w-6 h-6 text-[#0066FF]" />
            </motion.div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-[#0066FF] via-[#0033FF] to-[#0066FF] bg-clip-text text-transparent">
              AI that Talks, Books, and Follows Up
            </span>
            <br />
            <span className="text-[#1A1A1A]">— So You Don't Have To.</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-[#666666] max-w-4xl mx-auto leading-relaxed font-light"
          >
            While your competitors struggle with manual processes and poor customer experiences, we help you automate everything and scale your business 10x faster with AI that actually works.
          </motion.p>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left: Mission */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h3 
                className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Mission & Vision
              </motion.h3>
              
              <motion.p 
                className="text-lg text-[#666666] leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
              At Clario AI, we fuse automation and intelligence to supercharge your business operations. 
              From voice agents to custom workflows — we build AI that works for you, 24/7.
              </motion.p>
              
              <motion.p 
                className="text-base text-[#666666] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
              Our cutting-edge solutions transform how businesses interact with customers, 
              streamline operations, and scale efficiently. We're not just building AI; 
              we're crafting the future of intelligent automation.
              </motion.p>
            </div>

            {/* Vision Statement */}
            <motion.div 
              className="bg-gradient-to-r from-[#F8F8F8] to-[#FFFFFF] border border-[#CCCCCC] rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <Target className="w-8 h-8 text-[#0066FF] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg mb-2">Our Vision</h4>
                  <p className="text-[#666666] italic">
                    "To democratize AI automation and make intelligent systems accessible to every business, 
                    regardless of size or technical expertise."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Core Capabilities */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h4 
              className="text-2xl font-bold text-[#1A1A1A] mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Core Capabilities
            </motion.h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  className="group relative bg-white border border-[#CCCCCC] rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(0, 102, 255, 0.15)"
                  }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CCE0FF]/5 to-[#B8C2FF]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: capability.color }}
                    >
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h5 className="font-bold text-[#1A1A1A] text-lg mb-2">{capability.title}</h5>
                    <p className="text-sm text-[#666666]">{capability.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            className="bg-white border border-[#CCCCCC] rounded-3xl p-8 lg:p-12 shadow-lg"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-3xl font-bold text-center text-[#1A1A1A] mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              By the Numbers
            </motion.h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: stat.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className={`text-4xl lg:text-5xl font-bold mb-2`} style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#666666] uppercase tracking-wider font-medium">
                    {stat.label}
                </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div 
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-[#1A1A1A] mb-12"
          >
            Powered By Advanced Technology
          </motion.h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative bg-white border border-[#CCCCCC] rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 102, 255, 0.15)"
                }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CCE0FF]/5 to-[#B8C2FF]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Tech Indicator */}
                <motion.div 
                  className="relative mb-4"
                  variants={pulseVariants}
                  animate="animate"
                >
                  <div 
                    className="w-4 h-4 rounded-full mx-auto"
                    style={{ backgroundColor: tech.color }}
                  />
                </motion.div>
                
                {/* Content */}
                <div className="relative">
                  <h5 className="font-semibold text-[#1A1A1A] text-sm mb-1">{tech.name}</h5>
                  <p className="text-xs text-[#666666]">{tech.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default AboutSection;