import { motion } from 'framer-motion';
import { 
  Workflow, 
  Zap, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Star, 
  Sparkles,
  Settings,
  Database,
  BarChart3,
  Users,
  Shield,
  Brain,
  Cpu,
  MessageSquare,
  Calendar,
  FileText,
  Target,
  Rocket,
  Activity,
  Wifi,
  Globe,
  AlertTriangle,
  DollarSign,
  Phone,
  Mail,
  Timer,
  BarChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WorkflowAutomation = () => {
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
    company: "DataFlow Inc.",
    industry: "Manufacturing",
    problem: "Losing $200K/month due to manual processes and human errors",
    solution: "AI-powered workflow automation reducing manual tasks by 80%",
    results: {
      timeSaved: "80%",
      costReduction: "$200K/month",
      accuracy: "99.9%",
      productivity: "300%"
    }
  };

  const painPoints = [
    { icon: AlertTriangle, title: "Manual Processes Eating Profits", desc: "Employees spending 20+ hours/week on repetitive tasks", color: "#EF4444" },
    { icon: DollarSign, title: "Losing $200K Monthly to Errors", desc: "Human errors causing costly mistakes and delays", color: "#F59E0B" },
    { icon: Timer, title: "Slow Response Times", desc: "Manual approvals taking days instead of minutes", color: "#8B5CF6" },
    { icon: Users, title: "Team Burnout & Turnover", desc: "Employees quitting due to repetitive, boring work", color: "#06B6D4" }
  ];

  const solutions = [
    { icon: Zap, title: "Lightning Fast Execution", desc: "Complex workflows completed in milliseconds", color: "#FF9800" },
    { icon: Brain, title: "AI-Powered Decisions", desc: "Intelligent automation with human-like reasoning", color: "#0066FF" },
    { icon: Shield, title: "99.9% Accuracy", desc: "Eliminate human errors completely", color: "#25D366" },
    { icon: TrendingUp, title: "300% Productivity Boost", desc: "Scale operations without adding headcount", color: "#FF6B6B" },
    { icon: Settings, title: "500+ Integrations", desc: "Connect with any tool in your stack", color: "#8B5CF6" },
    { icon: BarChart3, title: "Real-time Analytics", desc: "Monitor and optimize performance live", color: "#06B6D4" },
    { icon: Users, title: "Team Collaboration", desc: "Multi-user workflow management", color: "#10B981" },
    { icon: Database, title: "Data Processing", desc: "Handle millions of records automatically", color: "#F59E0B" }
  ];

  const features = [
    { icon: Settings, title: "500+ Integrations", desc: "Connect with any tool in your stack", color: "#8B5CF6" },
    { icon: BarChart3, title: "Real-time Analytics", desc: "Monitor and optimize performance live", color: "#06B6D4" },
    { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption", color: "#10B981" },
    { icon: Users, title: "Team Collaboration", desc: "Multi-user workflow management", color: "#F59E0B" },
    { icon: Brain, title: "AI Decision Making", desc: "Intelligent automation with machine learning", color: "#8B5CF6" },
    { icon: Database, title: "Data Processing", desc: "Handle millions of records automatically", color: "#06B6D4" },
    { icon: Calendar, title: "Scheduling Automation", desc: "Automated task scheduling and reminders", color: "#10B981" },
    { icon: Mail, title: "Email Automation", desc: "Automated email workflows and responses", color: "#F59E0B" },
    { icon: FileText, title: "Document Processing", desc: "Automated document creation and management", color: "#8B5CF6" },
    { icon: Activity, title: "Process Monitoring", desc: "Real-time workflow monitoring and alerts", color: "#06B6D4" },
    { icon: Globe, title: "Multi-Platform Support", desc: "Works across web, mobile, and desktop", color: "#10B981" },
    { icon: Timer, title: "Time Tracking", desc: "Automated time tracking and reporting", color: "#F59E0B" }
  ];

  const testimonials = [
    { 
      name: "Alex Rodriguez", 
      role: "Operations Manager", 
      company: "DataFlow Inc.", 
      rating: 5, 
      quote: "We were losing $200K/month due to manual processes. After implementing Vextria's workflow automation, we saved 80% of our time and eliminated costly errors. The ROI was immediate.", 
      avatar: "AR",
      results: "80% time savings, $200K/month saved"
    },
    { 
      name: "Emma Wilson", 
      role: "Process Engineer", 
      company: "AutoTech", 
      rating: 5, 
      quote: "Our team was drowning in repetitive tasks. Now they focus on high-value work while AI handles the rest. Productivity increased 300% in just 60 days.", 
      avatar: "EW",
      results: "300% productivity increase"
    }
  ];

  const stats = [
    { icon: Zap, value: "80%", label: "Time Saved", color: "#FF9800" },
    { icon: TrendingUp, value: "500+", label: "Integrations", color: "#0066FF" },
    { icon: Clock, value: "24/7", label: "Automation", color: "#25D366" },
    { icon: Users, value: "10K+", label: "Workflows", color: "#9C27B0" }
  ];

  const fomoElements = [
    { icon: Users, text: "1000+ companies automated with Vextria", color: "#8B5CF6" },
    { icon: TrendingUp, text: "Average 80% time savings", color: "#06B6D4" },
    { icon: Clock, text: "See results in 30 days", color: "#10B981" },
    { icon: DollarSign, text: "ROI within first quarter", color: "#F59E0B" }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Header />
      
      {/* Hero Section - Problem Focused */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#FF9800]/10 to-[#0066FF]/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#FFB74D]/15 to-[#42A5F5]/15 rounded-full blur-2xl"
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
                $200K Monthly
              </span>
              <br />
              <span className="text-[#1A1A1A]">to Manual Processes?</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl text-[#666666] mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              While your competitors automate and scale, DataFlow Inc. saved <span className="font-bold text-green-600">$200K/month</span> and increased productivity by <span className="font-bold text-blue-600">300%</span> with AI-powered workflow automation.
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
                  className="bg-gradient-to-r from-[#FF9800] to-[#0066FF] hover:from-[#F57C00] hover:to-[#1976D2] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  See How DataFlow Did It
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
                  className="border-2 border-[#FF9800] text-[#FF9800] hover:bg-[#FF9800] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
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
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#FF9800]/10 to-[#0066FF]/10 border border-[#FF9800]/20 rounded-full px-6 py-3 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Star className="w-5 h-5 text-[#FF9800]" />
                <span className="text-lg text-[#FF9800] font-semibold">Success Story</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-[#FF9800] to-[#0066FF] bg-clip-text text-transparent">
                  DataFlow Inc.
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
                How a manufacturing company eliminated manual processes and scaled operations 10x
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
                      <h4 className="text-xl font-semibold mb-2">Manual Processes Killing Profits</h4>
                      <p className="text-[#666666]">DataFlow employees spent 20+ hours per week on repetitive tasks, costing the company $200K monthly in lost productivity.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Costly Human Errors</h4>
                      <p className="text-[#666666]">Manual data entry and processing led to expensive mistakes, delays, and customer dissatisfaction.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Timer className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Slow Response Times</h4>
                      <p className="text-[#666666]">Manual approvals took days instead of minutes, causing bottlenecks and missed opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                <h4 className="text-2xl font-bold mb-4 text-red-600">The Impact</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Monthly Revenue Loss</span>
                    <span className="text-2xl font-bold text-red-600">$200,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Manual Task Hours</span>
                    <span className="text-2xl font-bold text-red-600">20+ hours/week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Error Rate</span>
                    <span className="text-2xl font-bold text-red-600">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Employee Turnover</span>
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
                    <span className="text-[#666666]">Time Saved</span>
                    <span className="text-2xl font-bold text-green-600">80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Cost Reduction</span>
                    <span className="text-2xl font-bold text-green-600">$200K/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Accuracy Rate</span>
                    <span className="text-2xl font-bold text-green-600">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666666]">Productivity Increase</span>
                    <span className="text-2xl font-bold text-green-600">300%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-6 text-green-600">The Solution</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">AI-Powered Automation</h4>
                      <p className="text-[#666666]">Implemented Vextria's workflow automation that handles complex processes in milliseconds with 99.9% accuracy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Intelligent Decision Making</h4>
                      <p className="text-[#666666]">AI algorithms make complex decisions automatically, eliminating bottlenecks and human errors.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Scalable Operations</h4>
                      <p className="text-[#666666]">Scale operations 10x without adding headcount or infrastructure costs.</p>
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
              These are the exact problems our workflow automation solves for businesses like yours
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
              <span className="bg-gradient-to-r from-[#FF9800] to-[#0066FF] bg-clip-text text-transparent">
                How We Solve It
              </span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              The same technology that transformed DataFlow's operations is available for yours
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
              <span className="bg-gradient-to-r from-[#FF9800] to-[#0066FF] bg-clip-text text-transparent">
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
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF9800] to-[#0066FF] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.avatar}
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
      <section className="py-20 bg-gradient-to-br from-[#FF9800] to-[#0066FF]">
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
                Automate First
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              While you're reading this, your competitors are implementing workflow automation and capturing your market share. 
              <span className="font-bold"> Start your case study today.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-white/80">Companies automated with Vextria</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">80%</div>
                <div className="text-white/80">Average time savings</div>
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
                  className="bg-white text-[#FF9800] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
                  className="border-2 border-white text-white hover:bg-white hover:text-[#FF9800] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
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

export default WorkflowAutomation; 