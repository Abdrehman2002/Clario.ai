import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Clock, Zap, ArrowRight, Sparkles, Award, CheckCircle, Shield } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    name: "Andrew William",
    title: "VP of Marketing at XYZ Inc.",
    quote: "Our conversion rates increased by 35% in the first month. The AI chatbot handles customer inquiries 24/7 and never misses a sale opportunity.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "35% conversion increase",
    category: "Marketing",
    company: "XYZ Inc.",
    industry: "E-commerce"
  },
  {
    name: "Sarah Chen",
    title: "Operations Lead at TechFlow",
    quote: "We reduced our support costs by 60% while improving customer satisfaction. The AI handles 70% of inquiries automatically.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "60% cost reduction",
    category: "Operations",
    company: "TechFlow",
    industry: "SaaS"
  },
  {
    name: "Nate Jacobs",
    title: "Head of Product at InnovateCorp",
    quote: "Our lead generation increased 3x with AI-powered qualification. We're closing deals faster than ever before.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "3x more leads",
    category: "Product",
    company: "InnovateCorp",
    industry: "Fintech"
  },
  {
    name: "Sophie Mark",
    title: "VP of Customer Success at GrowthAI",
    quote: "The AI voice agent runs our customer support 24/7. We've never lost a customer due to wait times since implementing Clario.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "24/7 support",
    category: "Customer Success",
    company: "GrowthAI",
    industry: "AI/ML"
  },
  {
    name: "Andy Marker",
    title: "Tech Director at FutureTech",
    quote: "ROI increased 3x in the first quarter. The workflow automation saved us 20+ hours per week per team member.",
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
    quote: "We scaled our operations 10x without hiring additional staff. The AI automation handles everything seamlessly.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "10x scale",
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
            Real Results from
            <br />
            <span className="bg-gradient-to-r from-[#B8C2FF] to-[#CCE0FF] bg-clip-text text-transparent">
              Real Clients
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#666666] max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            See how our clients are achieving 10x growth, 60% cost reduction, and 24/7 customer support with our AI solutions.
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="group relative bg-[#FFFFFF] border border-[#CCCCCC] rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                rotateY: 3,
                boxShadow: "0 25px 50px -12px rgba(0, 102, 255, 0.2), 0 10px 20px -5px rgba(0, 102, 255, 0.1)"
              }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#CCE0FF]/8 to-[#B8C2FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Quote Icon */}
              <motion.div 
                className="absolute top-6 right-6 text-[#B8C2FF]"
                whileHover={{ rotate: 360, scale: 1.3 }}
                transition={{ duration: 0.8 }}
              >
                <Quote className="w-10 h-10" />
              </motion.div>
              
              {/* Category Badge */}
              <motion.div 
                className="absolute top-6 left-6"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold text-[#0066FF] bg-[#CCE0FF]/40 px-4 py-2 rounded-full border border-[#CCE0FF]/60 backdrop-blur-sm">
                  {testimonial.category}
                </span>
              </motion.div>
              
              {/* Profile Section */}
              <div className="flex items-start space-x-5 mb-8 mt-12">
                <motion.div className="relative">
                  <motion.img
                  src={testimonial.image} 
                  alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover border-3 border-[#CCE0FF] flex-shrink-0 shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div 
                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#0066FF] rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Star className="w-3 h-3 text-white fill-current" />
                  </motion.div>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[#1A1A1A] text-xl mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-[#666666] mb-2">{testimonial.title}</p>
                  <p className="text-sm text-[#0066FF] font-semibold">{testimonial.company}</p>
                  <div className="flex items-center space-x-1 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-4 h-4 text-[#FFD700] fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Testimonial Quote */}
              <motion.blockquote 
                className="text-[#1A1A1A] text-lg leading-relaxed mb-8 italic font-medium relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-[#0066FF] to-[#B8C2FF] rounded-full opacity-30"></div>
                "{testimonial.quote}"
              </motion.blockquote>

              {/* Impact & Industry Section */}
              <motion.div 
                className="flex items-center justify-between pt-6 border-t border-[#CCCCCC]/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-r from-[#0066FF] to-[#0033FF] rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TrendingUp className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-[#0066FF] font-bold">{testimonial.impact}</div>
                    <div className="text-xs text-[#666666]">Performance boost</div>
                  </div>
            </div>
                <motion.div 
                  className="text-xs text-[#666666] bg-[#F8F8F8] px-3 py-2 rounded-full border border-[#CCCCCC]/50 font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonial.industry}
                </motion.div>
              </motion.div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/5 via-transparent to-[#0033FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;