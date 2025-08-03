import { motion } from 'framer-motion';
import { 
  Bot, 
  MessageSquare, 
  Phone, 
  Headphones, 
  Zap, 
  Clock, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Globe,
  Shield,
  Brain,
  Sparkles,
  Rocket,
  Target,
  BarChart3,
  Cpu,
  Wifi,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VoiceAgents = () => {
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

  const features = [
    { icon: Brain, title: "Book Appointments 24/7", desc: "Automatically schedule appointments even when closed", color: "#0066FF" },
    { icon: Clock, title: "Process Orders Instantly", desc: "Take orders and process payments automatically", color: "#25D366" },
    { icon: Users, title: "Reduce No-Shows by 60%", desc: "Smart reminders and confirmations", color: "#FF6B6B" },
    { icon: Shield, title: "Increase Booking Rates by 40%", desc: "Never miss a potential customer", color: "#9C27B0" },
    { icon: TrendingUp, title: "Handle Multiple Calls", desc: "Process multiple bookings simultaneously", color: "#FF9800" },
    { icon: Zap, title: "Instant Confirmation", desc: "Send confirmations and reminders automatically", color: "#4CAF50" }
  ];

  const useCases = [
    { icon: Phone, title: "Healthcare", desc: "Book appointments and reduce no-shows by 60%", color: "#0066FF", gradient: "from-[#0066FF] to-[#0033FF]" },
    { icon: MessageSquare, title: "Restaurants", desc: "Take orders and reservations 24/7", color: "#25D366", gradient: "from-[#25D366] to-[#128C7E]" },
    { icon: Headphones, title: "Salons & Spas", desc: "Schedule appointments and manage bookings", color: "#FF6B6B", gradient: "from-[#FF6B6B] to-[#FF5252]" },
    { icon: Bot, title: "E-commerce", desc: "Process orders and handle customer service", color: "#9C27B0", gradient: "from-[#9C27B0] to-[#7B1FA2]" }
  ];

  const testimonials = [
    { name: "Dr. Sarah Chen", role: "Practice Manager", company: "HealthFirst Clinic", rating: 5, quote: "Our AI voice agent books appointments 24/7 and reduced no-shows by 60%. We never miss a patient call.", avatar: "SC" },
    { name: "Mike Johnson", role: "Restaurant Owner", company: "Fresh Bites", rating: 5, quote: "The AI takes orders and reservations even when we're closed. Our revenue increased by 40% after hours.", avatar: "MJ" }
  ];

  const stats = [
    { icon: Users, value: "10M+", label: "Calls Handled", color: "#0066FF" },
    { icon: TrendingUp, value: "85%", label: "Faster Response", color: "#25D366" },
    { icon: Globe, value: "50+", label: "Languages", color: "#FF6B6B" },
    { icon: Clock, value: "24/7", label: "Availability", color: "#9C27B0" }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Header />
      
      {/* Hero Section - Mobile Responsive */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        {/* Futuristic Background Elements - Mobile Responsive */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 sm:top-20 left-5 sm:left-20 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-r from-[#0066FF]/10 to-[#0033FF]/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-r from-[#B8C2FF]/15 to-[#CCE0FF]/15 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "1s" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gradient-to-r from-[#0066FF]/5 to-[#25D366]/5 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0066FF 1px, transparent 0)`,
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
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <motion.div
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-[#0066FF]/10 to-[#25D366]/10 border border-[#0066FF]/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF]" />
                <span className="text-sm sm:text-lg text-[#0066FF] font-semibold">AI Voice Agents</span>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366]" />
              </motion.div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-4"
            >
              <span className="bg-gradient-to-r from-[#0066FF] via-[#25D366] to-[#0066FF] bg-clip-text text-transparent">
              No Receptionist? No Problem.
              </span>
              <br />
              <span className="text-[#1A1A1A]">AI's Got It Covered 24/7.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#666666] mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-4"
            >
              Transform your phone system into a 24/7 appointment booking and order processing powerhouse. Our AI voice agents handle bookings and orders automatically, even when you're closed.
            </motion.p>

            {/* Stats Section - Mobile Responsive */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
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
                    <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2" style={{ color: stat.color }} />
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1A1A]">{stat.value}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#666666] font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  className="bg-gradient-to-r from-[#0066FF] to-[#25D366] hover:from-[#0052CC] hover:to-[#128C7E] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
                  size="lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Play className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Watch Live Demo
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  variant="outline"
                  className="border-3 border-[#0066FF]/30 hover:border-[#0066FF] text-[#1A1A1A] hover:text-[#0066FF] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
                  size="lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/5 to-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Bot className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Start Free Trial
                  <Rocket className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-y-[-2px] transition-transform duration-300" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Mobile Responsive */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#F8F8F8] to-[#FFFFFF] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #0066FF 25%, transparent 25%), linear-gradient(-45deg, #0066FF 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #0066FF 75%), linear-gradient(-45deg, transparent 75%, #0066FF 75%)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16 md:mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 sm:mb-8"
            >
              The Problems We Solve
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative bg-white border border-[#CCCCCC] rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CCE0FF]/5 to-[#B8C2FF]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative mb-4 sm:mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#0066FF] to-[#25D366] rounded-3xl flex items-center justify-center shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-bold text-[#1A1A1A] text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">{feature.title}</h3>
                    <p className="text-[#666666] leading-relaxed text-sm sm:text-base md:text-lg">{feature.desc}</p>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/5 to-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section - Mobile Responsive */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#FFFFFF] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16 md:mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 sm:mb-8"
            >
              Industries We Transform
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  className="group relative bg-white border border-[#CCCCCC] rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center overflow-hidden"
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 25px 50px -12px ${useCase.color}20`
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative mb-4 sm:mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div 
                      className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl flex items-center justify-center shadow-xl relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${useCase.color}, ${useCase.color}dd)` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <useCase.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-bold text-[#1A1A1A] text-base sm:text-lg md:text-xl mb-2 sm:mb-3">{useCase.title}</h3>
                    <p className="text-[#666666] text-sm sm:text-base">{useCase.desc}</p>
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Mobile Responsive */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#F8F8F8] to-[#FFFFFF] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16 md:mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 sm:mb-8"
            >
              What Our Clients Say
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="group relative bg-white border border-[#CCCCCC] rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 102, 255, 0.15)"
                  }}
                >
                  {/* Quote Icon */}
                  <motion.div 
                    className="absolute top-6 sm:top-8 right-6 sm:right-8 text-[#B8C2FF]"
                    whileHover={{ rotate: 360, scale: 1.3 }}
                    transition={{ duration: 0.8 }}
                  >
                    <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10" />
                  </motion.div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 text-[#FFD700] fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-[#1A1A1A] text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 italic font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#0066FF] to-[#25D366] rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm sm:text-xl">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A1A] text-sm sm:text-base md:text-lg">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-[#666666]">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/5 to-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section - Mobile Responsive */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#FFFFFF] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-[#0066FF] via-[#25D366] to-[#0066FF] rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 text-white relative overflow-hidden"
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
                className="absolute top-6 sm:top-10 left-6 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 rounded-full"
                animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/10 rounded-full"
                animate={{ y: [10, -10, 10], rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Never Miss a Booking Again?
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                While your competitors lose bookings after hours, you'll be capturing appointments and orders 24/7 with AI voice agents.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center relative z-10"
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
                    className="bg-white text-[#0066FF] hover:bg-gray-100 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
                    size="lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/5 to-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Bot className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                    Start Free Trial
                    <Rocket className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-y-[-2px] transition-transform duration-300 relative z-10" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    variant="outline"
                    className="border-3 border-white/30 text-white hover:bg-white hover:text-[#0066FF] px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-bold rounded-2xl backdrop-blur-sm transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
                    size="lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Play className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    Watch Demo
                    <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Additional CTA */}
              <motion.div 
                className="mt-8 sm:mt-12 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-sm sm:text-base md:text-lg opacity-80 mb-3 sm:mb-4">Or schedule a personalized demo</p>
                <Button 
                  variant="outline"
                  className="border-2 border-white/50 text-white hover:bg-white hover:text-[#0066FF] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group"
                >
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
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

export default VoiceAgents; 