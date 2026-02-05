import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Phone, 
  Zap, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Star, 
  Sparkles,
  Users,
  Shield,
  Brain,
  Globe,
  BarChart3,
  Send,
  Bot,
  Smartphone,
  Headphones,
  Target,
  Rocket,
  Activity,
  Wifi,
  Cpu,
  AlertTriangle,
  DollarSign,
  Calendar,
  Mail,
  Database,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WhatsAppIntegration = () => {
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
    company: "Fresh Bites Restaurant",
    industry: "Food & Beverage",
    problem: "Missing orders after hours and losing customers to competitors",
    solution: "AI WhatsApp Agent with voice note understanding and automated ordering",
    results: {
      orders: "+45% after-hours orders",
      bookings: "70% faster booking",
      revenue: "+35% increase",
      efficiency: "24/7 availability"
    }
  };

  const painPoints = [
    { icon: AlertTriangle, title: "Missing Orders After Hours", desc: "Losing 40% of potential sales when closed", color: "#EF4444" },
    { icon: DollarSign, title: "High Booking Friction", desc: "Complex booking process loses customers", color: "#F59E0B" },
    { icon: Clock, title: "Slow Response Times", desc: "Customers wait hours for responses", color: "#8B5CF6" },
    { icon: Users, title: "Poor Customer Experience", desc: "Fragmented communication channels", color: "#06B6D4" }
  ];

  const solutions = [
    { icon: Headphones, title: "Voice Note Understanding", desc: "AI understands and responds to voice messages", color: "#8B5CF6" },
    { icon: Calendar, title: "Automated Booking & Orders", desc: "Makes bookings and processes orders automatically", color: "#06B6D4" },
    { icon: MessageSquare, title: "24/7 Order Processing", desc: "Never miss a customer order", color: "#10B981" },
    { icon: Brain, title: "70% Faster Booking", desc: "Simplified WhatsApp booking process", color: "#F59E0B" },
    { icon: Zap, title: "Instant Responses", desc: "AI-powered instant customer service", color: "#8B5CF6" },
    { icon: DollarSign, title: "45% More Orders", desc: "Capture sales even when closed", color: "#06B6D4" },
    { icon: Globe, title: "180+ Countries", desc: "Works worldwide with local compliance", color: "#10B981" },
    { icon: Users, title: "Multi-Channel Support", desc: "Email, phone, and social media integration", color: "#F59E0B" },
    { icon: Shield, title: "Enterprise Security", desc: "End-to-end encryption and GDPR compliant", color: "#8B5CF6" },
    { icon: BarChart3, title: "Real-time Analytics", desc: "Track conversions and optimize performance", color: "#06B6D4" }
  ];

  const features = [
    { icon: Headphones, title: "Voice Note Understanding", desc: "AI understands and responds to voice messages", color: "#8B5CF6" },
    { icon: Calendar, title: "Automated Booking & Orders", desc: "Makes bookings and processes orders automatically", color: "#06B6D4" },
    { icon: Shield, title: "Multi-Language Support", desc: "Works in 180+ countries worldwide", color: "#10B981" },
    { icon: BarChart3, title: "Real-time Analytics", desc: "Track orders, bookings, and customer behavior", color: "#F59E0B" },
    { icon: Users, title: "Automated Responses", desc: "Handle customer inquiries instantly", color: "#8B5CF6" },
    { icon: Clock, title: "Smart Reminders", desc: "Automatic appointment and order confirmations", color: "#06B6D4" },
    { icon: Brain, title: "AI Chatbot", desc: "Intelligent responses to customer queries", color: "#10B981" },
    { icon: Database, title: "CRM Integration", desc: "Seamless integration with Salesforce, HubSpot", color: "#F59E0B" },
    { icon: Calendar, title: "Appointment Scheduling", desc: "Automated booking and calendar sync", color: "#8B5CF6" },
    { icon: Mail, title: "Email Marketing", desc: "Automated follow-ups and campaigns", color: "#06B6D4" },
    { icon: CreditCard, title: "Payment Processing", desc: "Secure payment collection via WhatsApp", color: "#10B981" },
    { icon: TrendingUp, title: "Campaign Management", desc: "Create and track marketing campaigns", color: "#F59E0B" },
    { icon: Globe, title: "Global Compliance", desc: "GDPR, CCPA, and local data protection", color: "#8B5CF6" },
    { icon: Activity, title: "Workflow Automation", desc: "Automate repetitive customer interactions", color: "#06B6D4" }
  ];

  const testimonials = [
    { 
      name: "Maria Garcia", 
      role: "Restaurant Owner", 
      company: "Fresh Bites", 
      rating: 5, 
      quote: "The AI WhatsApp Agent understands voice notes perfectly and processes orders automatically. Our orders increased by 45% after hours.", 
      avatar: "MG",
      results: "+45% after-hours orders"
    },
    { 
      name: "David Kim", 
      role: "Dental Practice Manager", 
      company: "SmileCare", 
      rating: 5, 
      quote: "Patients send voice notes and the AI makes bookings automatically. No-shows reduced by 60%.", 
      avatar: "DK",
      results: "60% fewer no-shows"
    }
  ];

  const stats = [
    { icon: MessageSquare, value: "2B+", label: "Messages Sent", color: "#8B5CF6" },
    { icon: TrendingUp, value: "300%", label: "Engagement Boost", color: "#06B6D4" },
    { icon: Globe, value: "180+", label: "Countries", color: "#10B981" },
    { icon: Clock, value: "24/7", label: "Availability", color: "#F59E0B" }
  ];

  const fomoElements = [
    { icon: Users, text: "4,000+ businesses using Vextria AI", color: "#8B5CF6" },
    { icon: Headphones, text: "AI understands voice notes perfectly", color: "#06B6D4" },
    { icon: Clock, text: "Get results in 30 days or less", color: "#10B981" },
    { icon: Calendar, text: "Automated booking and orders", color: "#F59E0B" }
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
              <span className="text-[#1A1A1A]">AI WhatsApp Agent</span>
              <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                Understands Voice Notes
              </span>
              <br />
              <span className="text-[#1A1A1A]">Makes Bookings & Orders</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl text-[#666666] mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              While your competitors miss orders when closed, Fresh Bites increased after-hours orders by <span className="font-bold text-green-600">45%</span> and reduced booking friction by <span className="font-bold text-blue-600">70%</span> with AI WhatsApp Agent.
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
                  See How Fresh Bites Did It
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
                  Start Your AI WhatsApp Agent
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
                  Fresh Bites Restaurant
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
                How a restaurant transformed customer ordering with AI WhatsApp Agent
              </motion.p>
            </div>

            {/* Problem vs Solution Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Problem Side */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-600">The Problem</h3>
                      <p className="text-red-600/80">What was holding them back</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">Missing 40% of potential orders after hours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">Complex booking process losing customers</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">Slow response times to customer inquiries</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">Fragmented communication channels</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Solution Side */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-600">The Solution</h3>
                      <p className="text-green-600/80">How Vextria AI helped</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">WhatsApp integration for 24/7 ordering</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">Simplified booking process via chat</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">AI-powered instant customer service</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">Unified communication platform</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Results Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-center border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">+45%</div>
                <div className="text-[#666666] font-medium">After-Hours Orders</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                <div className="text-[#666666] font-medium">Faster Booking</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">+35%</div>
                <div className="text-[#666666] font-medium">Revenue Increase</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-[#666666] font-medium">Availability</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-[#1A1A1A]">Common Business</span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Problems We Solve
                </span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${point.color}20` }}>
                      <point.icon className="w-6 h-6" style={{ color: point.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{point.title}</h3>
                      <p className="text-[#666666]">{point.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-[#1A1A1A]">How Our AI</span>
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  Solves These Problems
                </span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${solution.color}20` }}>
                      <solution.icon className="w-6 h-6" style={{ color: solution.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{solution.title}</h3>
                      <p className="text-[#666666]">{solution.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-[#1A1A1A]">Powerful Features</span>
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  Built for Results
                </span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${feature.color}20` }}>
                      <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{feature.title}</h3>
                      <p className="text-[#666666]">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-[#1A1A1A]">What Our</span>
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  Customers Say
                </span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1A1A]">{testimonial.name}</h3>
                      <p className="text-[#666666]">{testimonial.role}, {testimonial.company}</p>
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
            </div>
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
              While you're reading this, your competitors are using AI WhatsApp Agents to capture orders 24/7 and never miss a customer. 
              <span className="font-bold"> Start your AI WhatsApp Agent today.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">4,000+</div>
                <div className="text-white/80">Businesses using Vextria</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">45%</div>
                <div className="text-white/80">Average increase in orders</div>
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
                  Start AI WhatsApp Agent Now
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

export default WhatsAppIntegration; 