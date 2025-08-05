import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, MessageCircle, BarChart3, Palette, Settings, Bot, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    title: "AI Voice Agents",
    description: "Transform your phone system into a 24/7 appointment booking and order processing powerhouse. Never miss a booking or sale again.",
    benefits: ["Book appointments 24/7 automatically", "Process orders without human intervention", "Reduce no-shows by 60%", "Increase booking rates by 40%"],
    painPoints: ["Missed appointment bookings", "Lost sales after hours", "High no-show rates", "Manual order processing"],
    icon: MessageCircle,
    gradient: "from-[#0066FF] to-[#0033FF]",
    color: "#0066FF",
    category: "Voice AI",
    href: "/voice-agents"
  },
  {
    title: "AI Chatbots",
    description: "Transform customer support from a cost center to a revenue generator. Intelligent chatbots that actually solve problems and drive sales.",
    benefits: ["Handle 70% of inquiries automatically", "Increase conversion rates by 35%", "Reduce support costs by 50%", "Provide instant 24/7 support"],
    painPoints: ["Overwhelmed support teams", "Slow response times", "Lost sales opportunities", "High support costs"],
    icon: Bot,
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    color: "#8B5CF6",
    category: "Chat AI",
    href: "/ai-chatbots"
  },
  {
    title: "AI Lead Generation",
    description: "Stop guessing and start converting. AI-powered lead generation that finds your ideal customers and qualifies them automatically.",
    benefits: ["Generate 3x more qualified leads", "Reduce lead cost by 40%", "Increase conversion rates by 25%", "Automate follow-up sequences"],
    painPoints: ["Low quality leads", "High customer acquisition costs", "Manual follow-up processes", "Poor conversion rates"],
    icon: Target,
    gradient: "from-[#EC4899] to-[#BE185D]",
    color: "#EC4899",
    category: "Sales AI",
    href: "/ai-lead-generation"
  },
  {
    title: "AI WhatsApp Agent",
          description: "AI WhatsApp Agent that understands voice notes and makes bookings & orders automatically. Turn WhatsApp into your 24/7 intelligent assistant.",
          benefits: ["Understands voice notes perfectly", "Makes bookings and orders automatically", "Reduce booking friction by 70%", "Increase order completion by 45%"],
          painPoints: ["Manual appointment scheduling", "Lost orders after hours", "Complex booking processes", "Voice notes not understood"],
    icon: MessageCircle,
    gradient: "from-[#25D366] to-[#128C7E]",
    color: "#25D366",
    category: "Messaging",
    href: "/whatsapp-integration"
  },
  {
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks and focus on what matters. Intelligent automation that scales your business without increasing your team or your work hours.",
    benefits: ["Save 20+ hours per week", "Reduce errors by 95%", "Scale operations 10x", "Improve team productivity"],
    painPoints: ["Time-consuming manual processes", "Human errors and inconsistencies", "Difficulty scaling operations", "Team burnout from repetitive tasks"],
    icon: Zap,
    gradient: "from-[#FFA726] to-[#FF9800]",
    color: "#FFA726",
    category: "Automation",
    href: "/workflow-automation"
  },
  {
    title: "AI Website",
    description: "Create stunning, high-converting websites in minutes with AI. No coding required - just describe your business and watch your website come to life.",
    benefits: ["Build websites in minutes, not months", "AI-optimized for conversions", "Mobile-first responsive design", "SEO-ready out of the box"],
    painPoints: ["Expensive web development costs", "Long development timelines", "Poor conversion rates", "Outdated website designs"],
    icon: Palette,
    gradient: "from-[#FF6B6B] to-[#FF5252]",
    color: "#FF6B6B",
    category: "Web AI",
    href: "/ai-website"
  }
];

const ProductsSection = () => {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleCardClick = (href: string) => {
    navigate(href);
  };

  return (
    <section id="products" className="relative py-16 lg:py-24 bg-[#FFFFFF] overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CCE0FF]/5 to-[#B8C2FF]/3"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0066FF]/3 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#B8C2FF]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Solutions
          </motion.div>
          
          <motion.h2 
            className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight bg-gradient-to-r from-[#0066FF] to-[#0033FF] bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            What We Build
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Cutting-edge AI solutions designed to transform your business operations and scale intelligently
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, index) => (
            <motion.div 
              key={product.title}
              className="group relative bg-[#FFFFFF] border border-[#CCCCCC] rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                boxShadow: `0 20px 25px -5px ${product.color}20, 0 10px 10px -5px ${product.color}10`
              }}
              onClick={() => handleCardClick(product.href)}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium text-[#666666] bg-[#F8F8F8] px-2 py-1 rounded-full border border-[#CCCCCC]">
                  {product.category}
                </span>
              </div>

              {/* Icon Container */}
              <motion.div 
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                whileHover={{ rotate: 5 }}
              >
                <product.icon className="w-8 h-8" />
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#0066FF] transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-[#666666] mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Pain Points */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#FF4444] mb-2 uppercase tracking-wide">Problems We Solve:</h4>
                  <ul className="space-y-2 mb-4">
                    {product.painPoints.map((painPoint, painIndex) => (
                      <motion.li 
                        key={painIndex} 
                        className="flex items-center text-xs text-[#666666]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: painIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-[#FF4444] rounded-full mr-2 flex-shrink-0"></div>
                        <span>{painPoint}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#00AA44] mb-2 uppercase tracking-wide">Your Results:</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <motion.li 
                        key={benefitIndex} 
                        className="flex items-center text-sm text-[#1A1A1A] font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: benefitIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Click Indicator */}
                <div className="flex items-center justify-center text-[#0066FF] font-semibold text-sm group-hover:text-[#0052CC] transition-colors duration-300">
                  <span>Click to learn more</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;