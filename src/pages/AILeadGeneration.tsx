import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Brain, 
  Zap, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Globe,
  Shield,
  Sparkles,
  Rocket,
  BarChart3,
  Cpu,
  Wifi,
  Activity,
  Smartphone,
  Headphones,
  Send,
  Database,
  Eye,
  Filter,
  Search,
  Mail,
  Phone,
  Calendar,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AILeadGeneration = () => {
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    { icon: Brain, title: "AI-Powered Targeting", desc: "Intelligent lead scoring and qualification", color: "#EC4899" },
    { icon: Search, title: "Advanced Prospecting", desc: "Find high-quality leads automatically", color: "#8B5CF6" },
    { icon: Shield, title: "Data Privacy", desc: "GDPR compliant lead generation", color: "#06B6D4" },
    { icon: Users, title: "Multi-channel Outreach", desc: "Email, phone, and social media campaigns", color: "#10B981" },
    { icon: BarChart3, title: "Real-time Analytics", desc: "Track conversion rates and ROI", color: "#F59E0B" },
    { icon: Zap, title: "Automated Follow-ups", desc: "Never miss a follow-up opportunity", color: "#EF4444" }
  ];

  const leadTypes = [
    { icon: Mail, title: "Email Campaigns", desc: "Personalized email sequences", color: "#EC4899", gradient: "from-[#EC4899] to-[#BE185D]" },
    { icon: Phone, title: "Cold Calling", desc: "AI-powered call scripts", color: "#8B5CF6", gradient: "from-[#8B5CF6] to-[#7C3AED]" },
    { icon: Calendar, title: "Appointment Setting", desc: "Automated scheduling", color: "#06B6D4", gradient: "from-[#06B6D4] to-[#0891B2]" },
    { icon: FileText, title: "Lead Nurturing", desc: "Multi-touch campaigns", color: "#10B981", gradient: "from-[#10B981] to-[#059669]" }
  ];

  const testimonials = [
    { name: "Amanda Chen", role: "Sales Director", company: "LeadFlow", rating: 5, quote: "Our AI lead generation system increased qualified leads by 300% and reduced cost per lead by 60%.", avatar: "AC" },
    { name: "David Thompson", role: "Marketing Manager", company: "GrowthTech", rating: 5, quote: "The AI-powered targeting has transformed our sales pipeline with highly qualified prospects.", avatar: "DT" }
  ];

  const stats = [
    { icon: Target, value: "300%", label: "More Leads", color: "#EC4899" },
    { icon: TrendingUp, value: "60%", label: "Cost Reduction", color: "#8B5CF6" },
    { icon: Users, value: "5K+", label: "Leads Generated", color: "#06B6D4" },
    { icon: Clock, value: "24/7", label: "Automation", color: "#10B981" }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#EC4899]/10 to-[#8B5CF6]/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#FBCFE8]/15 to-[#C4B5FD]/15 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "1s" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#EC4899]/5 to-[#8B5CF6]/5 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #EC4899 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#EC4899]/10 to-[#8B5CF6]/10 border border-[#EC4899]/20 rounded-full px-6 py-3 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-5 h-5 text-[#EC4899]" />
                <span className="text-lg text-[#EC4899] font-semibold">AI Lead Generation</span>
                <Sparkles className="w-5 h-5 text-[#8B5CF6]" />
              </motion.div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                Generate More Leads
              </span>
              <br />
              <span className="text-[#1A1A1A]">With AI Intelligence</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl sm:text-3xl text-[#666666] mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Transform your sales pipeline with AI-powered lead generation that finds, qualifies, and nurtures prospects automatically, delivering high-quality leads at scale.
            </motion.p>

            {/* Stats Section */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 mr-2" style={{ color: stat.color }} />
                    <span className="text-3xl font-bold text-[#1A1A1A]">{stat.value}</span>
                  </div>
                  <p className="text-sm text-[#666666] font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] hover:from-[#BE185D] hover:to-[#7C3AED] text-white px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
                  size="lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Watch Live Demo
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  variant="outline"
                  className="border-3 border-[#EC4899]/30 hover:border-[#EC4899] text-[#1A1A1A] hover:text-[#EC4899] px-10 py-5 text-xl font-bold rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 group relative overflow-hidden"
                  size="lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Target className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Start Free Trial
                  <Rocket className="w-6 h-6 ml-3 group-hover:translate-y-[-2px] transition-transform duration-300" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-[#F8F8F8] to-[#FFFFFF] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #EC4899 25%, transparent 25%), linear-gradient(-45deg, #EC4899 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #EC4899 75%), linear-gradient(-45deg, transparent 75%, #EC4899 75%)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8"
            >
              Why Choose AI Lead Generation?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative bg-white border border-[#CCCCCC] rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 25px 50px -12px ${feature.color}20`
                  }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FBCFE8]/5 to-[#C4B5FD]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded-3xl flex items-center justify-center shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <feature.icon className="w-10 h-10 text-white relative z-10" />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-bold text-[#1A1A1A] text-2xl mb-4">{feature.title}</h3>
                    <p className="text-[#666666] leading-relaxed text-lg">{feature.desc}</p>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Types Section */}
      <section className="py-24 bg-[#FFFFFF] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8"
            >
              Multi-Channel Lead Generation
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadTypes.map((leadType, index) => (
                <motion.div
                  key={leadType.title}
                  className="group relative bg-white border border-[#CCCCCC] rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center overflow-hidden"
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 25px 50px -12px ${leadType.color}20`
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${leadType.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div 
                      className="w-20 h-20 mx-auto rounded-3xl flex items-center justify-center shadow-xl relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${leadType.color}, ${leadType.color}dd)` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <leadType.icon className="w-10 h-10 text-white relative z-10" />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-bold text-[#1A1A1A] text-xl mb-3">{leadType.title}</h3>
                    <p className="text-[#666666] text-base">{leadType.desc}</p>
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${leadType.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-[#F8F8F8] to-[#FFFFFF] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8"
            >
              What Our Clients Say
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="group relative bg-white border border-[#CCCCCC] rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.15)"
                  }}
                >
                  {/* Quote Icon */}
                  <motion.div 
                    className="absolute top-8 right-8 text-[#FBCFE8]"
                    whileHover={{ rotate: 360, scale: 1.3 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Target className="w-10 h-10" />
                  </motion.div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-[#FFD700] fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-[#1A1A1A] text-xl leading-relaxed mb-8 italic font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A1A] text-lg">{testimonial.name}</div>
                      <div className="text-sm text-[#666666]">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-[#FFFFFF] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#EC4899] rounded-3xl p-16 lg:p-20 text-white relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
                animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"
                animate={{ y: [10, -10, 10], rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <motion.h2 
                className="text-5xl lg:text-6xl font-bold mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Generate More Leads?
              </motion.h2>
              
              <motion.p 
                className="text-2xl mb-12 max-w-3xl mx-auto opacity-90 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join thousands of businesses already using AI-powered lead generation to scale their sales pipeline and drive growth.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-8 justify-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    className="bg-white text-[#EC4899] hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
                    size="lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Target className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                    Start Free Trial
                    <Rocket className="w-6 h-6 ml-3 group-hover:translate-y-[-2px] transition-transform duration-300 relative z-10" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    variant="outline"
                    className="border-3 border-white/30 text-white hover:bg-white hover:text-[#EC4899] px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm transition-all duration-300 group relative overflow-hidden"
                    size="lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    Watch Demo
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Additional CTA */}
              <motion.div 
                className="mt-12 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-lg opacity-80 mb-4">Or schedule a personalized demo</p>
                <Button 
                  variant="outline"
                  className="border-2 border-white/50 text-white hover:bg-white hover:text-[#EC4899] px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group"
                >
                  <Target className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Schedule Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AILeadGeneration; 