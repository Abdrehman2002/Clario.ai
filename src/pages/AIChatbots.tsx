import { motion } from 'framer-motion';
import { 
  Bot, 
  MessageSquare, 
  Brain, 
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
  Sparkles,
  Rocket,
  Target,
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
  AlertTriangle,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  Timer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AIChatbots = () => {
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

  // Case Study Data
  const caseStudy = {
    company: "TechFlow Solutions",
    industry: "SaaS",
    problem: "Losing $50K/month in missed sales due to slow customer support",
    solution: "AI Chatbot handling 70% of inquiries automatically",
    results: {
      revenue: "+$150K/month",
      responseTime: "2.3 seconds",
      satisfaction: "94%",
      costReduction: "60%"
    }
  };

  const painPoints = [
    { icon: AlertTriangle, title: "Customers Abandoning Due to Wait Times", desc: "Average 15-minute wait times causing 40% drop-off", color: "#EF4444" },
    { icon: DollarSign, title: "Losing $50K Monthly in Missed Sales", desc: "Slow responses = lost opportunities", color: "#F59E0B" },
    { icon: Users, title: "Support Team Overwhelmed", desc: "80% of inquiries are repetitive questions", color: "#8B5CF6" },
    { icon: Clock, title: "24/7 Support Impossible", desc: "Human teams can't provide round-the-clock service", color: "#06B6D4" }
  ];

  const solutions = [
    { icon: Brain, title: "Instant Response System", desc: "2.3-second response time vs 15-minute human wait", color: "#8B5CF6" },
    { icon: Clock, title: "24/7 Availability", desc: "Never lose a customer due to time zones", color: "#06B6D4" },
    { icon: TrendingUp, title: "35% Conversion Increase", desc: "Turn visitors into customers instantly", color: "#10B981" },
    { icon: Shield, title: "60% Cost Reduction", desc: "Automate repetitive tasks and scale efficiently", color: "#F59E0B" },
    { icon: Globe, title: "Multi-Language Support", desc: "Handle customers in 50+ languages", color: "#8B5CF6" },
    { icon: Users, title: "Human Handoff", desc: "Seamlessly transfer to human agents when needed", color: "#06B6D4" },
    { icon: BarChart3, title: "Conversation Analytics", desc: "Track and optimize every interaction", color: "#10B981" },
    { icon: Database, title: "Knowledge Base Integration", desc: "Access to your complete product database", color: "#F59E0B" }
  ];

  const features = [
    { icon: MessageSquare, title: "Multi-Channel Support", desc: "WhatsApp, Website, Email, Phone", color: "#8B5CF6" },
    { icon: Brain, title: "AI-Powered Responses", desc: "Understands context and provides accurate answers", color: "#06B6D4" },
    { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption", color: "#10B981" },
    { icon: BarChart3, title: "Real-time Analytics", desc: "Track performance and optimize continuously", color: "#F59E0B" },
    { icon: Globe, title: "Multi-Language Support", desc: "Handle customers in 50+ languages", color: "#8B5CF6" },
    { icon: Users, title: "Human Handoff", desc: "Seamlessly transfer to human agents when needed", color: "#06B6D4" },
    { icon: Database, title: "Knowledge Base Integration", desc: "Access to your complete product database", color: "#10B981" },
    { icon: Calendar, title: "Appointment Booking", desc: "Automated scheduling and calendar integration", color: "#F59E0B" },
    { icon: Mail, title: "Email Integration", desc: "Send follow-up emails and confirmations", color: "#8B5CF6" },
    { icon: TrendingUp, title: "Sentiment Analysis", desc: "Understand customer mood and satisfaction", color: "#06B6D4" },
    { icon: Activity, title: "Conversation Flow", desc: "Design complex conversation paths", color: "#10B981" },
    { icon: Timer, title: "Response Time Optimization", desc: "Continuously improve response speeds", color: "#F59E0B" }
  ];

  const testimonials = [
    { 
      name: "Sarah Chen", 
      role: "CEO", 
      company: "TechFlow Solutions", 
      rating: 5, 
      quote: "We were losing $50K/month in missed sales. After implementing Clario's AI chatbot, we now generate $150K/month in additional revenue. The ROI was immediate.", 
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      results: "+300% ROI in 3 months"
    },
    { 
      name: "Marcus Rodriguez", 
      role: "Customer Success Director", 
      company: "ShopSmart", 
      rating: 5, 
      quote: "Our conversion rate jumped from 2.1% to 3.4% in just 30 days. The chatbot handles 70% of inquiries, letting our team focus on high-value customers.", 
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      results: "62% increase in conversions"
    }
  ];

  const stats = [
    { icon: MessageSquare, value: "1M+", label: "Conversations", color: "#8B5CF6" },
    { icon: TrendingUp, value: "70%", label: "Auto Resolution", color: "#06B6D4" },
    { icon: Globe, value: "24/7", label: "Availability", color: "#10B981" },
    { icon: Clock, value: "2.3s", label: "Response Time", color: "#F59E0B" }
  ];

  const fomoElements = [
    { icon: Users, text: "500+ companies already using Clario AI", color: "#8B5CF6" },
    { icon: TrendingUp, text: "Average 35% increase in conversions", color: "#06B6D4" },
    { icon: Clock, text: "Get results in 30 days or less", color: "#10B981" },
    { icon: DollarSign, text: "ROI within first month", color: "#F59E0B" }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Header />
      
      {/* Hero Section - Problem Focused */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#8B5CF6]/10 to-[#06B6D4]/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#C4B5FD]/15 to-[#A5F3FC]/15 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Problem Statement */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="text-lg text-red-500 font-semibold">The Problem</span>
              </motion.div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="text-[#1A1A1A]">Losing</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                $50K Monthly
              </span>
              <br />
              <span className="text-[#1A1A1A]">in Missed Sales?</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl text-[#666666] mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              While your competitors lose customers to slow responses, TechFlow Solutions increased revenue by <span className="font-bold text-green-600">$150K/month</span> with AI chatbots that respond in <span className="font-bold text-blue-600">2.3 seconds</span>.
            </motion.p>

            {/* FOMO Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {fomoElements.map((element, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <element.icon className="w-5 h-5 mr-2" style={{ color: element.color }} />
                  </div>
                  <p className="text-sm text-[#666666] font-medium">{element.text}</p>
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
                  size="lg" 
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] hover:from-[#7C3AED] hover:to-[#0891B2] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  See How TechFlow Did It
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Your Case Study
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Case Study Header */}
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#8B5CF6]/10 to-[#06B6D4]/10 border border-[#8B5CF6]/20 rounded-full px-6 py-3 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Star className="w-5 h-5 text-[#8B5CF6]" />
                <span className="text-lg text-[#8B5CF6] font-semibold">Success Story</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  TechFlow Solutions
                </span>
                <br />
                <span className="text-[#1A1A1A]">Case Study</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-[#666666] max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                How a SaaS company turned customer support from a cost center into a revenue generator
              </motion.p>
            </div>

            {/* Problem Section */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-3xl font-bold mb-6 text-red-600">The Problem</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Losing Revenue Daily</h4>
                      <p className="text-[#666666]">TechFlow was losing $50K monthly due to slow customer support responses. Customers were abandoning purchases after 15-minute wait times.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Support Team Overwhelmed</h4>
                      <p className="text-[#666666]">80% of inquiries were repetitive questions, wasting valuable human resources on low-value tasks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">24/7 Support Impossible</h4>
                      <p className="text-[#666666]">Human teams couldn't provide round-the-clock service, losing customers in different time zones.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                <h4 className="text-2xl font-bold mb-4 text-red-600">The Impact</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Monthly Revenue Loss</span>
                    <span className="text-2xl font-bold text-red-600">$50,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Customer Drop-off Rate</span>
                    <span className="text-2xl font-bold text-red-600">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Average Response Time</span>
                    <span className="text-2xl font-bold text-red-600">15 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Support Team Burnout</span>
                    <span className="text-2xl font-bold text-red-600">High</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solution Section */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                <h4 className="text-2xl font-bold mb-4 text-green-600">The Results</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Additional Monthly Revenue</span>
                    <span className="text-2xl font-bold text-green-600">$150,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Response Time</span>
                    <span className="text-2xl font-bold text-green-600">2.3 seconds</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-green-600">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Support Cost Reduction</span>
                    <span className="text-2xl font-bold text-green-600">60%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-6 text-green-600">The Solution</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">AI-Powered Chatbot</h4>
                      <p className="text-[#666666]">Implemented Clario's AI chatbot that handles 70% of inquiries automatically with human-like responses.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">24/7 Availability</h4>
                      <p className="text-[#666666]">Never lose a customer due to time zones or after-hours inquiries.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Conversion Optimization</h4>
                      <p className="text-[#666666]">Turn visitors into customers instantly with intelligent lead qualification and product recommendations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#1A1A1A]">Sound Familiar?</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              These are the exact problems our AI chatbots solve for businesses like yours
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${point.color}20` }}>
                  <point.icon className="w-6 h-6" style={{ color: point.color }} />
                </div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-[#666666]">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                How We Solve It
              </span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              The same technology that transformed TechFlow's business is available for yours
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${solution.color}20` }}>
                  <solution.icon className="w-6 h-6" style={{ color: solution.color }} />
                </div>
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-[#666666]">{solution.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials with Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#1A1A1A]">Real Results,</span>
              <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                Real Companies
              </span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
                    {testimonial.avatar.startsWith('http') ? (
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.avatar}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-[#666666]">{testimonial.role} at {testimonial.company}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-lg text-[#666666] mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-green-600">{testimonial.results}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOMO CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Don't Let Your Competitors
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Get Ahead
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              While you're reading this, your competitors are implementing AI chatbots and capturing your customers. 
              <span className="font-bold"> Start your case study today.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Companies already using Clario</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">35%</div>
                <div className="text-white/80">Average conversion increase</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">30 days</div>
                <div className="text-white/80">To see results</div>
              </div>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
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
                  size="lg" 
                  className="bg-white text-[#8B5CF6] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Your Case Study Now
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book a Demo
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

export default AIChatbots; 