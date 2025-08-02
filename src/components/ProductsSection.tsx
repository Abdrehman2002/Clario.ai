import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Brain, MessageCircle, BarChart3, Palette, Settings, Bot, Target } from 'lucide-react';

const products = [
  {
    title: "AI Voice Agents",
    description: "Handles 24/7 customer calls with intelligent routing and natural conversation.",
    benefits: ["Never miss a lead", "Natural voice interactions", "Intelligent call routing", "24/7 availability"],
    icon: MessageCircle,
    gradient: "from-[#0066FF] to-[#0033FF]",
    color: "#0066FF",
    category: "Voice AI",
    href: "/voice-agents"
  },
  {
    title: "AI Chatbots",
    description: "Intelligent chatbots that understand context and provide instant customer support.",
    benefits: ["24/7 availability", "Multi-channel support", "Instant responses", "Context awareness"],
    icon: Bot,
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    color: "#8B5CF6",
    category: "Chat AI",
    href: "/ai-chatbots"
  },
  {
    title: "AI Lead Generation",
    description: "Automated lead generation with AI-powered targeting and qualification.",
    benefits: ["Smart targeting", "Automated outreach", "Lead scoring", "Multi-channel campaigns"],
    icon: Target,
    gradient: "from-[#EC4899] to-[#BE185D]",
    color: "#EC4899",
    category: "Sales AI",
    href: "/ai-lead-generation"
  },
  {
    title: "WhatsApp Integration",
    description: "Smart voice capabilities integrated directly into WhatsApp messaging.",
    benefits: ["Voice message processing", "Multi-language support", "Instant responses", "Seamless integration"],
    icon: MessageCircle,
    gradient: "from-[#25D366] to-[#128C7E]",
    color: "#25D366",
    category: "Messaging",
    href: "/whatsapp-integration"
  },
  {
    title: "Workflow Automation",
    description: "Eliminate manual processes with intelligent workflow automation.",
    benefits: ["Process automation", "Task scheduling", "Data synchronization", "Error reduction"],
    icon: Zap,
    gradient: "from-[#FFA726] to-[#FF9800]",
    color: "#FFA726",
    category: "Automation",
    href: "/workflow-automation"
  },
  {
    title: "Analytics Dashboard",
    description: "AI-powered scheduling, reporting, and management dashboards.",
    benefits: ["Smart scheduling", "Automated reports", "Resource optimization", "Performance analytics"],
    icon: BarChart3,
    gradient: "from-[#4CAF50] to-[#2E7D32]",
    color: "#4CAF50",
    category: "Analytics",
    href: "/analytics-dashboard"
  }
];

const ProductsSection = () => {
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
            <motion.a 
              key={product.title}
              href={product.href}
              className="group relative bg-[#FFFFFF] border border-[#CCCCCC] rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden block cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                boxShadow: `0 20px 25px -5px ${product.color}20, 0 10px 10px -5px ${product.color}10`
              }}
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
                
                {/* Benefits List */}
                <ul className="space-y-3 mb-6">
                  {product.benefits.map((benefit, benefitIndex) => (
                    <motion.li 
                      key={benefitIndex} 
                      className="flex items-center text-sm text-[#1A1A1A]"
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
                
                {/* CTA Button */}
                <motion.button 
                  className="w-full bg-[#F8F8F8] text-[#1A1A1A] border border-[#CCCCCC] px-4 py-3 rounded-lg font-medium hover:bg-[#FFFFFF] hover:border-[#0066FF]/30 hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Demo</span>
                  <motion.div
                    className="text-[#0066FF]"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;