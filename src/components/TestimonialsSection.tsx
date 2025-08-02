import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Clock, Zap, ArrowRight, Sparkles, Award, CheckCircle, Shield } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    name: "Andrew William",
    title: "VP of Marketing at XYZ Inc.",
    quote: "I can't thank them enough for their professionalism and results. They went above and beyond to deliver exceptional value.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "60% cost reduction",
    category: "Marketing",
    company: "XYZ Inc.",
    industry: "Technology"
  },
  {
    name: "Sarah Chen",
    title: "Operations Lead at TechFlow",
    quote: "Incredible support and automation expertise. Clario AI helped us scale workflows in days, not months.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "10x faster processing",
    category: "Operations",
    company: "TechFlow",
    industry: "SaaS"
  },
  {
    name: "Nate Jacobs",
    title: "Head of Product at InnovateCorp",
    quote: "Reliable, intelligent systems that actually work. Their voice agent cut our support load by 60% overnight.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "24/7 availability",
    category: "Product",
    company: "InnovateCorp",
    industry: "Fintech"
  },
  {
    name: "Sophie Mark",
    title: "VP of Customer Success at GrowthAI",
    quote: "A team of builders who just get it. The AI receptionist runs 24/7 and never misses a beat.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "99.9% uptime",
    category: "Customer Success",
    company: "GrowthAI",
    industry: "AI/ML"
  },
  {
    name: "Andy Marker",
    title: "Tech Director at FutureTech",
    quote: "I'd work with Clario again in a heartbeat. Great design, real results, fast turnaround.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "3x ROI increase",
    category: "Technology",
    company: "FutureTech",
    industry: "Healthcare"
  },
  {
    name: "Rosaline James",
    title: "COO at ScaleUp Ventures",
    quote: "From day one, their team made our process smoother and smarter. Highly recommended!",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "50% time savings",
    category: "Operations",
    company: "ScaleUp Ventures",
    industry: "E-commerce"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients", color: "from-[#0066FF] to-[#0033FF]", delay: 0 },
  { icon: TrendingUp, value: "95%", label: "Success Rate", color: "from-[#25D366] to-[#128C7E]", delay: 0.2 },
  { icon: Clock, value: "24/7", label: "AI Availability", color: "from-[#FF6B6B] to-[#FF5252]", delay: 0.4 },
  { icon: Zap, value: "10x", label: "Faster Processing", color: "from-[#9C27B0] to-[#673AB7]", delay: 0.6 }
];

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="testimonials" ref={containerRef} className="relative py-20 lg:py-32 bg-[#FFFFFF] overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Gradient Mesh */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#0066FF]/10 to-[#0033FF]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#B8C2FF]/8 to-[#CCE0FF]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#0066FF]/5 to-[#B8C2FF]/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#0066FF] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Client Success Stories</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-[#0066FF] via-[#0033FF] to-[#0066FF] bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            What Our Clients
            <br />
            <span className="bg-gradient-to-r from-[#B8C2FF] to-[#CCE0FF] bg-clip-text text-transparent">
              Love About Us
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#666666] max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We're honoured by the feedback, and it fuels our commitment to keep delivering excellent services.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="group relative bg-[#FFFFFF] border border-[#CCCCCC] rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 102, 255, 0.25)"
              }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-[#1A1A1A] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-[#666666] font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Column - Trust & Stats */}
          <motion.div 
            className="space-y-8 order-2 lg:order-1"
            variants={cardVariants}
          >
            {/* Header Section */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-6 h-6 text-[#FFD700] fill-current" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-lg font-semibold text-[#1A1A1A]">4.9/5 average rating</span>
              </motion.div>

              <motion.h3 
                className="text-3xl font-bold text-[#1A1A1A]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Trusted by Industry Leaders
              </motion.h3>

              <motion.p 
                className="text-lg text-[#666666] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Join 500+ companies that trust Clario AI to power their intelligent automation and scale their operations.
              </motion.p>
            </div>

            {/* Trust Badges */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Award, text: "ISO 27001 Certified", color: "#25D366" },
                { icon: CheckCircle, text: "GDPR Compliant", color: "#0066FF" },
                { icon: Shield, text: "SOC 2 Type II", color: "#FF6B6B" },
                { icon: Zap, text: "99.9% Uptime SLA", color: "#9C27B0" }
              ].map((badge, index) => (
                <motion.div 
                  key={badge.text}
                  className="flex items-center space-x-3 p-4 bg-[#F8F8F8] border border-[#CCCCCC] rounded-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-8 h-8 bg-[${badge.color}] rounded-lg flex items-center justify-center`}>
                    <badge.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#1A1A1A]">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Testimonials Grid */}
          <motion.div 
            className="grid grid-cols-1 gap-6 auto-rows-fr order-1 lg:order-2"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="group relative bg-[#FFFFFF] border border-[#CCCCCC] rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 20px 25px -5px rgba(0, 102, 255, 0.15), 0 10px 10px -5px rgba(0, 102, 255, 0.1)"
                }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CCE0FF]/5 to-[#B8C2FF]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Quote Icon */}
                <motion.div 
                  className="absolute top-4 right-4 text-[#B8C2FF]"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="w-8 h-8" />
                </motion.div>
                
                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs font-medium text-[#0066FF] bg-[#CCE0FF]/30 px-3 py-1 rounded-full border border-[#CCE0FF]/50">
                    {testimonial.category}
                  </span>
                </motion.div>
                
                {/* Profile Section */}
                <div className="flex items-start space-x-4 mb-6 mt-8">
                  <motion.img
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#CCE0FF] flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1A1A1A] text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-[#666666]">{testimonial.title}</p>
                    <p className="text-xs text-[#0066FF] font-medium">{testimonial.company}</p>
                    <div className="flex items-center space-x-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-3 h-3 text-[#FFD700] fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial Quote */}
                <motion.blockquote 
                  className="text-[#1A1A1A] text-base leading-relaxed mb-6 italic flex-grow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.quote}"
                </motion.blockquote>

                {/* Impact Metric */}
                <motion.div 
                  className="flex items-center justify-between mt-auto pt-4 border-t border-[#CCCCCC]/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2 text-sm text-[#0066FF] font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span>{testimonial.impact}</span>
                  </div>
                  <span className="text-xs text-[#666666] bg-[#F8F8F8] px-2 py-1 rounded-full">
                    {testimonial.industry}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;