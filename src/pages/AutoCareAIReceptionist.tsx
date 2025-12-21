import {
  Wrench,
  Phone,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Shield,
  Brain,
  Sparkles,
  Rocket,
  Target,
  BarChart3,
  Calendar,
  Mail,
  Database,
  AlertTriangle,
  DollarSign,
  Activity,
  Wifi,
  Car,
  Settings,
  Gauge,
  Wrench as Tool
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useVapi } from '@/contexts/VapiContext';

const AutoCareAIReceptionist = () => {
  const { startCall } = useVapi();
  const assistantId = 'ded7d2ea-64e5-4798-a84b-d2c9c584f24d';

  const handleTryFree = () => {
    startCall(assistantId);
  };

  const caseStudy = {
    company: "QuickFix Auto Repair",
    industry: "Automotive",
    problem: "Missing service requests and empty bays due to limited phone coverage",
    solution: "AI receptionist handling 24/7 service scheduling and quotes",
    results: {
      appointments: "+50% more bookings",
      noShows: "65% reduction",
      revenue: "+40% increase",
      efficiency: "85% faster response"
    }
  };

  const painPoints = [
    { icon: AlertTriangle, title: "Missing Service Calls After Hours", desc: "Losing 40% of potential customers when shop is closed", color: "#EF4444" },
    { icon: DollarSign, title: "Empty Service Bays", desc: "Bays sitting empty due to missed calls", color: "#F59E0B" },
    { icon: Clock, title: "Limited Phone Coverage", desc: "Can't take service calls 24/7", color: "#8B5CF6" },
    { icon: Users, title: "Mechanics Too Busy", desc: "Technicians can't answer phones during repairs", color: "#06B6D4" }
  ];

  const solutions = [
    { icon: Brain, title: "24/7 Service Scheduling", desc: "Never miss a repair request", color: "#FFA726" },
    { icon: Clock, title: "65% Fewer No-Shows", desc: "Smart appointment reminders and confirmations", color: "#06B6D4" },
    { icon: Car, title: "Automotive-Trained AI", desc: "Knows services, parts, and repair procedures", color: "#10B981" },
    { icon: DollarSign, title: "50% More Bookings", desc: "Capture calls even when closed", color: "#F59E0B" },
    { icon: Tool, title: "Instant Quotes", desc: "Provide immediate pricing for common services", color: "#FFA726" },
    { icon: Users, title: "Multi-Call Handling", desc: "Handle multiple service requests simultaneously", color: "#06B6D4" },
    { icon: Settings, title: "Service History Access", desc: "Reference previous repairs and maintenance", color: "#10B981" },
    { icon: Gauge, title: "Emergency Prioritization", desc: "Route urgent repairs appropriately", color: "#F59E0B" }
  ];

  const features = [
    { icon: Shield, title: "Secure Customer Data", desc: "Protected customer and vehicle information", color: "#FFA726" },
    { icon: BarChart3, title: "Service Analytics", desc: "Track booking patterns and popular services", color: "#06B6D4" },
    { icon: Users, title: "Multi-Service Handling", desc: "Handle multiple service types simultaneously", color: "#10B981" },
    { icon: Clock, title: "Automated Reminders", desc: "SMS and call reminders to reduce no-shows", color: "#F59E0B" },
    { icon: Brain, title: "Automotive Knowledge", desc: "Trained on common repairs and maintenance", color: "#FFA726" },
    { icon: Phone, title: "Emergency Routing", desc: "Smart routing for breakdown emergencies", color: "#06B6D4" },
    { icon: Calendar, title: "Shop Management Integration", desc: "Sync with AutoShop Pro, Mitchell1, and others", color: "#10B981" },
    { icon: Mail, title: "Customer Communications", desc: "Automated estimates and service updates", color: "#F59E0B" },
    { icon: Database, title: "Vehicle History", desc: "Access previous service records instantly", color: "#FFA726" },
    { icon: TrendingUp, title: "Upselling Optimization", desc: "Suggest relevant maintenance services", color: "#06B6D4" },
    { icon: Activity, title: "Bay Optimization", desc: "Schedule services for maximum efficiency", color: "#10B981" },
    { icon: Wifi, title: "Digital Integration", desc: "Connect with customer portals and apps", color: "#F59E0B" }
  ];

  const testimonials = [
    {
      name: "Mike Rodriguez",
      role: "Shop Owner",
      company: "QuickFix Auto Repair",
      rating: 5,
      quote: "AutoCare AI handles our service calls professionally 24/7 and provides instant quotes. We've increased bookings by 50% and our bays are always full.",
      avatar: "MR",
      results: "50% more bookings"
    },
    {
      name: "Sarah Johnson",
      role: "Service Manager",
      company: "Elite Auto Services",
      rating: 5,
      quote: "The AI knows our services better than some of our staff! It handles everything from oil changes to transmission work scheduling perfectly.",
      avatar: "SJ",
      results: "+35% bay utilization"
    }
  ];

  const stats = [
    { icon: Users, value: "25K+", label: "Vehicles Serviced", color: "#FFA726" },
    { icon: TrendingUp, value: "85%", label: "Faster Response", color: "#06B6D4" },
    { icon: Wrench, value: "300+", label: "Auto Shops Trust Us", color: "#10B981" },
    { icon: Clock, value: "24/7", label: "Availability", color: "#F59E0B" }
  ];

  const fomoElements = [
    { icon: Users, text: "300+ auto shops using AutoCare AI", color: "#FFA726" },
    { icon: TrendingUp, text: "Average 50% increase in bookings", color: "#06B6D4" },
    { icon: Clock, text: "See results in first week", color: "#10B981" },
    { icon: DollarSign, text: "65% reduction in no-shows", color: "#F59E0B" }
  ];

  const prosAndCons = {
    pros: [
      "Never miss a service call - 24/7 availability",
      "Reduce no-shows by 65% with smart reminders",
      "Provide instant quotes for common services",
      "Handles emergency breakdowns appropriately",
      "Manages bay scheduling and timing",
      "Integrates with existing shop management systems",
      "Professional, knowledgeable customer service",
      "Reduces front desk workload significantly"
    ],
    cons: [
      "Initial setup requires service menu configuration",
      "Complex custom work may need human consultation",
      "Requires integration with shop management system"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#FFA726]/10 to-[#FF9800]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#C4B5FD]/15 to-[#A5F3FC]/15 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="text-lg text-red-500 font-semibold">Auto Shop Crisis</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-foreground">Never Miss a Service</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Request Again.
              </span>
              <br />
              <span className="text-foreground">Keep Bays Full.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              While other shops miss service requests after hours, QuickFix Auto increased bookings by <span className="font-bold text-green-600">50%</span> and reduced no-shows by <span className="font-bold text-blue-600">65%</span> with AutoCare AI that works 24/7.
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
                className="bg-gradient-to-r from-[#FFA726] to-[#FF9800] hover:from-[#FF9800] hover:to-[#F57C00] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
                onClick={handleTryFree}
              >
                <Play className="w-5 h-5 mr-2" />
                Try AutoCare AI Free
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#FFA726] text-[#FFA726] hover:bg-[#FFA726] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
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
                <span className="text-foreground">Auto Shop Challenges</span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  We Solve Daily
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
                <span className="text-foreground">How AutoCare AI</span>
                <br />
                <span className="bg-gradient-to-r from-[#FFA726] to-[#FF9800] bg-clip-text text-transparent">
                  Keeps Your Bays Full
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

      {/* Pros and Cons Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Honest Assessment:</span>
                <br />
                <span className="bg-gradient-to-r from-[#FFA726] to-[#FF9800] bg-clip-text text-transparent">
                  Pros & Considerations
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Pros */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-600">Advantages</h3>
                    <p className="text-green-600/80">Why auto shops choose AutoCare AI</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {prosAndCons.pros.map((pro, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{pro}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cons */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600">Considerations</h3>
                    <p className="text-orange-600/80">What to keep in mind</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {prosAndCons.cons.map((con, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{con}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#FFA726]/10 to-[#FF9800]/10 border border-[#FFA726]/20 rounded-full px-6 py-3 mb-6">
                <Users className="w-5 h-5 text-[#FFA726]" />
                <span className="text-lg text-[#FFA726] font-semibold">Auto Shops Like Yours</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Already Boosting Revenue with</span>
                <br />
                <span className="bg-gradient-to-r from-[#FFA726] to-[#FF9800] bg-clip-text text-transparent">
                  AutoCare AI
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFA726] to-[#FF9800] flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
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

      {/* VAPI Widget Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFA726] to-[#FF9800]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Keep Your Workshop Full
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Try AutoCare AI
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Try AutoCare AI free today and see how it can keep your bays booked 24/7.
              <span className="font-bold"> Your next call could be your next full schedule.</span>
            </p>

            <div className="mb-12">
              <div
                id="vapi-widget-container"
                className="flex justify-center"
              >
                <Button
                  size="lg"
                  className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-[#FFA726] px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                  onClick={() => {
                    // Create and load VAPI widget
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/vapi-sdk@latest/dist/index.umd.js';
                    script.onload = () => {
                      const vapiWidget = document.createElement('vapi-widget');
                      vapiWidget.setAttribute('assistant-id', 'ded7d2ea-64e5-4798-a84b-d2c9c584f24d');
                      vapiWidget.setAttribute('public-key', '858b87e2-6fe0-4fca-9eff-d7e8ecf436ab');
                      document.body.appendChild(vapiWidget);
                      vapiWidget.click();
                    };
                    document.head.appendChild(script);
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to AutoCare AI Now
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">300+</div>
                <div className="text-white/80">Auto shops trust us</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">65%</div>
                <div className="text-white/80">Reduction in no-shows</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">1 week</div>
                <div className="text-white/80">To see results</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#FFA726] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
                onClick={handleTryFree}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Try AutoCare AI Free
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#FFA726] px-8 py-4 text-lg font-semibold rounded-xl"
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

export default AutoCareAIReceptionist;