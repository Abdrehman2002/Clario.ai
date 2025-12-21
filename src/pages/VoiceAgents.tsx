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
  Activity,
  AlertTriangle,
  DollarSign,
  Calendar,
  Mail,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VoiceAgents = () => {
  // Case Study Data
  const caseStudy = {
    company: "HealthFirst Clinic",
    industry: "Healthcare",
    problem: "Missing appointments and losing patients due to limited phone hours",
    solution: "AI voice agent handling 24/7 appointment booking",
    results: {
      appointments: "+40% more bookings",
      noShows: "60% reduction",
      revenue: "+35% increase",
      efficiency: "85% faster"
    }
  };

  const painPoints = [
    { icon: AlertTriangle, title: "Missing Calls After Hours", desc: "Losing 40% of potential customers when closed", color: "#EF4444" },
    { icon: DollarSign, title: "High No-Show Rates", desc: "30% of appointments are no-shows", color: "#F59E0B" },
    { icon: Clock, title: "Limited Phone Hours", desc: "Can't take calls 24/7 like competitors", color: "#8B5CF6" },
    { icon: Users, title: "Staff Overwhelmed", desc: "Receptionists can't handle call volume", color: "#06B6D4" }
  ];

  const solutions = [
    { icon: Brain, title: "24/7 Appointment Booking", desc: "Never miss a potential customer call", color: "#8B5CF6" },
    { icon: Clock, title: "60% Fewer No-Shows", desc: "Smart reminders and confirmations", color: "#06B6D4" },
    { icon: Zap, title: "85% Faster Response", desc: "Instant call handling vs waiting", color: "#10B981" },
    { icon: DollarSign, title: "40% More Bookings", desc: "Capture calls even when closed", color: "#F59E0B" },
    { icon: Globe, title: "50+ Languages", desc: "Handle calls in multiple languages", color: "#8B5CF6" },
    { icon: Users, title: "Multi-Call Handling", desc: "Process multiple calls simultaneously", color: "#06B6D4" },
    { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with encryption", color: "#10B981" },
    { icon: BarChart3, title: "Call Analytics", desc: "Track performance and optimize", color: "#F59E0B" }
  ];

  const features = [
    { icon: Shield, title: "Multi-Language Support", desc: "Handle calls in 50+ languages", color: "#8B5CF6" },
    { icon: BarChart3, title: "Real-time Analytics", desc: "Track call performance and conversions", color: "#06B6D4" },
    { icon: Users, title: "Handle Multiple Calls", desc: "Process multiple bookings simultaneously", color: "#10B981" },
    { icon: Clock, title: "Automated Follow-ups", desc: "Never miss a follow-up opportunity", color: "#F59E0B" },
    { icon: Brain, title: "Natural Language Processing", desc: "Understands complex customer requests", color: "#8B5CF6" },
    { icon: Phone, title: "Call Recording", desc: "Record and analyze all conversations", color: "#06B6D4" },
    { icon: Calendar, title: "Calendar Integration", desc: "Sync with Google Calendar, Outlook", color: "#10B981" },
    { icon: Mail, title: "Email Confirmations", desc: "Automatic email confirmations and reminders", color: "#F59E0B" },
    { icon: Database, title: "CRM Integration", desc: "Seamless integration with your CRM", color: "#8B5CF6" },
    { icon: TrendingUp, title: "Performance Optimization", desc: "AI continuously improves responses", color: "#06B6D4" },
    { icon: Globe, title: "Global Availability", desc: "Works in 180+ countries worldwide", color: "#10B981" },
    { icon: Activity, title: "Call Routing", desc: "Smart routing to appropriate departments", color: "#F59E0B" }
  ];

  const testimonials = [
    { 
      name: "Dr. Sarah Chen", 
      role: "Practice Manager", 
      company: "HealthFirst Clinic", 
      rating: 5, 
      quote: "Our AI voice agent books appointments 24/7 and reduced no-shows by 60%. We never miss a patient call.", 
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      results: "60% fewer no-shows"
    },
    { 
      name: "Mike Johnson", 
      role: "Restaurant Owner", 
      company: "Fresh Bites", 
      rating: 5, 
      quote: "The AI takes orders and reservations even when we're closed. Our revenue increased by 40% after hours.", 
      avatar: "MJ",
      results: "+40% after-hours revenue"
    }
  ];

  const stats = [
    { icon: Users, value: "10M+", label: "Calls Handled", color: "#8B5CF6" },
    { icon: TrendingUp, value: "85%", label: "Faster Response", color: "#06B6D4" },
    { icon: Globe, value: "50+", label: "Languages", color: "#10B981" },
    { icon: Clock, value: "24/7", label: "Availability", color: "#F59E0B" }
  ];

  const fomoElements = [
    { icon: Users, text: "3,000+ businesses using Clario AI", color: "#8B5CF6" },
    { icon: TrendingUp, text: "Average 40% increase in bookings", color: "#06B6D4" },
    { icon: Clock, text: "Get results in 30 days or less", color: "#10B981" },
    { icon: DollarSign, text: "60% reduction in no-shows", color: "#F59E0B" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Problem Focused */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#8B5CF6]/10 to-[#06B6D4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#C4B5FD]/15 to-[#A5F3FC]/15 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Problem Statement */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="text-lg text-red-500 font-semibold">The Problem</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-foreground">Missing Calls</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                After Hours?
              </span>
              <br />
              <span className="text-foreground">Losing Customers?</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              While your competitors miss calls when closed, HealthFirst Clinic increased bookings by <span className="font-bold text-green-600">40%</span> and reduced no-shows by <span className="font-bold text-blue-600">60%</span> with AI voice agents that work 24/7.
            </p>

            {/* FOMO Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {fomoElements.map((element, index) => (
                <div
                  key={index}
                  className="text-center bg-card rounded-xl p-4 border border-border"
                >
                  <div className="flex items-center justify-center mb-2">
                    <element.icon className="w-5 h-5 mr-2" style={{ color: element.color }} />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{element.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] hover:from-[#7C3AED] hover:to-[#0891B2] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                See How HealthFirst Did It
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Voice Agent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Case Study Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#8B5CF6]/10 to-[#06B6D4]/10 border border-[#8B5CF6]/20 rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-[#8B5CF6]" />
                <span className="text-lg text-[#8B5CF6] font-semibold">Success Story</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  HealthFirst Clinic
                </span>
                <br />
                <span className="text-foreground">Case Study</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                How a healthcare clinic transformed patient booking with AI voice agents
              </p>
            </div>

            {/* Problem vs Solution Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Problem Side */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center">
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
                      <p className="text-muted-foreground">Missing 40% of potential patient calls after hours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">30% no-show rate costing revenue</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Limited phone hours (9-5 only)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Receptionists overwhelmed with calls</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Side */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-600">The Solution</h3>
                      <p className="text-green-600/80">How Clario AI helped</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">AI voice agent handling calls 24/7</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Smart appointment booking and reminders</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Multi-language support for diverse patients</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Instant confirmation and follow-ups</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl p-6 text-center border border-green-200 dark:border-green-800">
                <div className="text-3xl font-bold text-green-600 mb-2">+40%</div>
                <div className="text-muted-foreground font-medium">More Bookings</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-6 text-center border border-blue-200 dark:border-blue-800">
                <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-muted-foreground font-medium">Fewer No-Shows</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-6 text-center border border-purple-200 dark:border-purple-800">
                <div className="text-3xl font-bold text-purple-600 mb-2">+35%</div>
                <div className="text-muted-foreground font-medium">Revenue Increase</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl p-6 text-center border border-orange-200 dark:border-orange-800">
                <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                <div className="text-muted-foreground font-medium">Faster Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Common Business</span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Problems We Solve
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${point.color}20` }}>
                      <point.icon className="w-6 h-6" style={{ color: point.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
                      <p className="text-muted-foreground">{point.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">How Our AI</span>
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  Solves These Problems
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${solution.color}20` }}>
                      <solution.icon className="w-6 h-6" style={{ color: solution.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Powerful Features</span>
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  Built for Results
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${feature.color}20` }}>
                      <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">What Our</span>
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  Customers Say
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg"
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
                      <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                      <p className="text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="font-bold text-green-600">{testimonial.results}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOMO CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Don't Let Your Competitors
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Get Ahead
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              While you're reading this, your competitors are using AI voice agents to capture calls 24/7 and never miss a customer. 
              <span className="font-bold"> Start your voice agent today.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">3,000+</div>
                <div className="text-white/80">Businesses using Clario</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-white/80">Average increase in bookings</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">30 days</div>
                <div className="text-white/80">To see results</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#8B5CF6] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Voice Agent Now
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VoiceAgents;