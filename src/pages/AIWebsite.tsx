import { motion } from 'framer-motion';
import { 
  Palette, 
  Globe, 
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
  Smartphone,
  Target,
  Rocket,
  Activity,
  Wifi,
  Cpu,
  Eye,
  Search,
  Smartphone as Mobile,
  Monitor,
  Code,
  AlertTriangle,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  Database,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AIWebsite = () => {
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
    problem: "Losing customers due to outdated website and poor mobile experience",
    solution: "AI-generated website with 40% higher conversion rate",
    results: {
      revenue: "+300% online orders",
      conversionRate: "40% increase",
      buildTime: "15 minutes",
      costSavings: "90%"
    }
  };

  const painPoints = [
    { icon: AlertTriangle, title: "Outdated Website Losing Customers", desc: "Poor mobile experience causing 60% bounce rate", color: "#EF4444" },
    { icon: DollarSign, title: "Missing Online Revenue", desc: "No online ordering = lost sales opportunities", color: "#F59E0B" },
    { icon: Clock, title: "Months of Development Time", desc: "Traditional websites take 3-6 months to build", color: "#8B5CF6" },
    { icon: Users, title: "Poor Conversion Rates", desc: "Generic templates don't convert visitors", color: "#06B6D4" }
  ];

  const solutions = [
    { icon: Zap, title: "15-Minute Website Creation", desc: "From idea to live website in under an hour", color: "#8B5CF6" },
    { icon: Eye, title: "40% Higher Conversions", desc: "AI-optimized for maximum visitor conversion", color: "#06B6D4" },
    { icon: Mobile, title: "Mobile-First Design", desc: "Responsive design that works on all devices", color: "#10B981" },
    { icon: DollarSign, title: "90% Cost Savings", desc: "No developers, no agencies, no delays", color: "#F59E0B" },
    { icon: Search, title: "Built-in SEO Optimization", desc: "Automatically optimized for search engines", color: "#8B5CF6" },
    { icon: Shield, title: "Enterprise Security", desc: "SSL certificates and security built-in", color: "#06B6D4" },
    { icon: TrendingUp, title: "Real-time Analytics", desc: "Track performance and optimize continuously", color: "#10B981" },
    { icon: Globe, title: "Global CDN", desc: "Lightning-fast loading worldwide", color: "#F59E0B" }
  ];

  const features = [
    { icon: Brain, title: "AI-Powered Design", desc: "Automatically creates conversion-optimized layouts", color: "#8B5CF6" },
    { icon: Search, title: "Built-in SEO", desc: "Optimized for search engines from day one", color: "#06B6D4" },
    { icon: Shield, title: "Enterprise Security", desc: "SSL certificates and security built-in", color: "#10B981" },
    { icon: TrendingUp, title: "Analytics Dashboard", desc: "Track performance and optimize continuously", color: "#F59E0B" },
    { icon: Palette, title: "Custom Branding", desc: "Match your brand colors and fonts perfectly", color: "#8B5CF6" },
    { icon: Database, title: "Content Management", desc: "Easy-to-use CMS for non-technical users", color: "#06B6D4" },
    { icon: Wifi, title: "Automatic Backups", desc: "Daily backups and version control included", color: "#10B981" },
    { icon: Cpu, title: "AI Content Generation", desc: "Automatically generate compelling copy", color: "#F59E0B" },
    { icon: Smartphone, title: "Mobile App Ready", desc: "PWA capabilities for app-like experience", color: "#8B5CF6" },
    { icon: BarChart3, title: "A/B Testing Tools", desc: "Test different layouts and optimize conversions", color: "#06B6D4" },
    { icon: Mail, title: "Email Integration", desc: "Built-in contact forms and email marketing", color: "#10B981" },
    { icon: Calendar, title: "Booking Integration", desc: "Appointment scheduling and calendar sync", color: "#F59E0B" }
  ];

  const testimonials = [
    { 
      name: "Sarah Chen", 
      role: "Restaurant Owner", 
      company: "Fresh Bites", 
      rating: 5, 
      quote: "Our website was built in 15 minutes and increased our online orders by 300%. The AI knew exactly what we needed.", 
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      results: "+300% online orders"
    },
    { 
      name: "Mike Rodriguez", 
      role: "Startup Founder", 
      company: "TechFlow", 
      rating: 5, 
      quote: "We went from idea to live website in under an hour. The conversion rate is 40% higher than our old site.", 
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      results: "40% higher conversions"
    }
  ];

  const stats = [
    { icon: Clock, value: "15min", label: "Build Time", color: "#8B5CF6" },
    { icon: TrendingUp, value: "40%", label: "Conversion Boost", color: "#06B6D4" },
    { icon: Users, value: "90%", label: "Cost Savings", color: "#10B981" },
    { icon: Eye, value: "24/7", label: "Live Website", color: "#F59E0B" }
  ];

  const fomoElements = [
    { icon: Users, text: "1,000+ websites built with Vextria AI", color: "#8B5CF6" },
    { icon: TrendingUp, text: "Average 40% increase in conversions", color: "#06B6D4" },
    { icon: Clock, text: "Get your website live in 15 minutes", color: "#10B981" },
    { icon: DollarSign, text: "90% savings vs traditional development", color: "#F59E0B" }
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
              <span className="text-[#1A1A1A]">Your Website is</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Losing Customers
              </span>
              <br />
              <span className="text-[#1A1A1A]">Every Day</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl text-[#666666] mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              While your competitors build conversion-optimized websites in minutes, you're still waiting months for developers. Fresh Bites increased online orders by <span className="font-bold text-green-600">300%</span> with an AI website built in <span className="font-bold text-blue-600">15 minutes</span>.
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
                  Build Your Website Now
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
                How a local restaurant went from outdated website to 300% increase in online orders
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
                      <p className="text-[#666666]">Outdated website with 60% bounce rate</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">No mobile ordering system</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">Losing customers to competitors with better websites</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">No online revenue stream</p>
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
                      <p className="text-[#666666]">AI-generated website built in 15 minutes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">Mobile-first design with online ordering</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">Conversion-optimized layout and content</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#666666]">Built-in SEO and analytics</p>
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
                <div className="text-3xl font-bold text-green-600 mb-2">+300%</div>
                <div className="text-[#666666] font-medium">Online Orders</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-[#666666] font-medium">Higher Conversions</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">15min</div>
                <div className="text-[#666666] font-medium">Build Time</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">90%</div>
                <div className="text-[#666666] font-medium">Cost Savings</div>
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
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                      {testimonial.avatar.startsWith('http') ? (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                      )}
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
              While you're reading this, your competitors are building AI-powered websites and capturing your customers. 
              <span className="font-bold"> Start building your website today.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">1,000+</div>
                <div className="text-white/80">Websites built with Vextria</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-white/80">Average conversion increase</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">15 min</div>
                <div className="text-white/80">To build your website</div>
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
                  Build Your Website Now
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

export default AIWebsite; 