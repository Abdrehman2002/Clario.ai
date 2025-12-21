import {
  Sparkles,
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
  Heart,
  Crown,
  Gem,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useVapi } from '@/contexts/VapiContext';

const GlamCareAIAgent = () => {
  const { startCall } = useVapi();
  const assistantId = '6282c5c1-f2d2-453b-a033-569b4c45f6b2';

  const handleTryFree = () => {
    startCall(assistantId);
  };

  const caseStudy = {
    company: "Luxe Beauty Spa",
    industry: "Beauty & Wellness",
    problem: "Missing appointments and losing clients due to limited phone coverage",
    solution: "AI concierge handling 24/7 luxury appointment booking and service recommendations",
    results: {
      appointments: "+55% more bookings",
      noShows: "70% reduction",
      revenue: "+45% increase",
      efficiency: "90% faster response"
    }
  };

  const painPoints = [
    { icon: AlertTriangle, title: "Missing Luxury Appointments", desc: "Losing 45% of potential clients when salon is closed", color: "#EF4444" },
    { icon: DollarSign, title: "Empty Appointment Slots", desc: "Premium slots sitting empty due to missed calls", color: "#F59E0B" },
    { icon: Clock, title: "Limited Reception Hours", desc: "Can't take bookings 24/7 like competitors", color: "#8B5CF6" },
    { icon: Users, title: "Staff Too Busy for Calls", desc: "Stylists can't answer phones during treatments", color: "#06B6D4" }
  ];

  const solutions = [
    { icon: Brain, title: "24/7 Luxury Booking", desc: "Never miss a premium appointment", color: "#8B5CF6" },
    { icon: Clock, title: "70% Fewer No-Shows", desc: "Elegant reminders and confirmations", color: "#06B6D4" },
    { icon: Crown, title: "Beauty-Trained AI", desc: "Knows treatments, products, and luxury services", color: "#10B981" },
    { icon: DollarSign, title: "55% More Bookings", desc: "Capture calls even when closed", color: "#F59E0B" },
    { icon: Gem, title: "Package Upselling", desc: "Recommend premium treatments and packages", color: "#8B5CF6" },
    { icon: Users, title: "Multi-Client Handling", desc: "Handle multiple bookings simultaneously", color: "#06B6D4" },
    { icon: Heart, title: "Personalized Service", desc: "Remember client preferences and history", color: "#10B981" },
    { icon: Award, title: "Membership Management", desc: "Track loyalty programs and reward points", color: "#F59E0B" }
  ];

  const features = [
    { icon: Shield, title: "Privacy & Discretion", desc: "Secure client information and preferences", color: "#8B5CF6" },
    { icon: BarChart3, title: "Appointment Analytics", desc: "Track booking patterns and popular services", color: "#06B6D4" },
    { icon: Users, title: "Multi-Service Booking", desc: "Coordinate complex treatment schedules", color: "#10B981" },
    { icon: Clock, title: "Elegant Reminders", desc: "Sophisticated SMS and call reminders", color: "#F59E0B" },
    { icon: Brain, title: "Beauty Expertise", desc: "Trained on treatments, products, and trends", color: "#8B5CF6" },
    { icon: Phone, title: "VIP Priority", desc: "Special routing for premium clients", color: "#06B6D4" },
    { icon: Calendar, title: "Salon Software Integration", desc: "Sync with Vagaro, Booker, and others", color: "#10B981" },
    { icon: Mail, title: "Luxury Communications", desc: "Elegant confirmations and special offers", color: "#F59E0B" },
    { icon: Database, title: "Client Preferences", desc: "Remember favorite treatments and stylists", color: "#8B5CF6" },
    { icon: TrendingUp, title: "Package Optimization", desc: "AI learns what packages clients love", color: "#06B6D4" },
    { icon: Activity, title: "Treatment Sequencing", desc: "Optimize appointments for best results", color: "#10B981" },
    { icon: Wifi, title: "Digital Integration", desc: "Connect with social media and review platforms", color: "#F59E0B" }
  ];

  const testimonials = [
    {
      name: "Isabella Martinez",
      role: "Salon Owner",
      company: "Luxe Beauty Spa",
      rating: 5,
      quote: "GlamCare AI provides the luxury experience our clients expect 24/7. We've increased bookings by 55% and our clients love the personalized service.",
      avatar: "IM",
      results: "55% more bookings"
    },
    {
      name: "Victoria Chen",
      role: "Spa Director",
      company: "Elite Wellness Center",
      rating: 5,
      quote: "The AI understands our premium services perfectly and upsells packages naturally. Our revenue per client has increased dramatically.",
      avatar: "VC",
      results: "+40% revenue per client"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Clients Served", color: "#8B5CF6" },
    { icon: TrendingUp, value: "90%", label: "Faster Response", color: "#06B6D4" },
    { icon: Sparkles, value: "500+", label: "Salons & Spas Trust Us", color: "#10B981" },
    { icon: Clock, value: "24/7", label: "Luxury Service", color: "#F59E0B" }
  ];

  const fomoElements = [
    { icon: Users, text: "500+ salons & spas using GlamCare AI", color: "#8B5CF6" },
    { icon: TrendingUp, text: "Average 55% increase in bookings", color: "#06B6D4" },
    { icon: Clock, text: "See results in first 3 days", color: "#10B981" },
    { icon: DollarSign, text: "70% reduction in no-shows", color: "#F59E0B" }
  ];

  const prosAndCons = {
    pros: [
      "Never miss a luxury appointment - 24/7 elegance",
      "Reduce no-shows by 70% with sophisticated reminders",
      "Automatically upsell premium packages and treatments",
      "Handles VIP clients with special care",
      "Manages complex treatment schedules perfectly",
      "Integrates with existing salon management systems",
      "Sophisticated, luxury-focused client interactions",
      "Reduces front desk workload significantly"
    ],
    cons: [
      "Initial setup requires detailed service menu input",
      "Highly customized treatments may need staff consultation",
      "Requires integration with salon booking system"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#8B5CF6]/10 to-[#7C3AED]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#C4B5FD]/15 to-[#A5F3FC]/15 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="text-lg text-red-500 font-semibold">Luxury Experience Crisis</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-foreground">Your Clients Expect</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Luxury Service.
              </span>
              <br />
              <span className="text-foreground">Deliver It 24/7.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              While other salons miss appointments after hours, Luxe Beauty Spa increased bookings by <span className="font-bold text-green-600">55%</span> and reduced no-shows by <span className="font-bold text-blue-600">70%</span> with GlamCare AI that provides luxury service 24/7.
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
                className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
                onClick={handleTryFree}
              >
                <Play className="w-5 h-5 mr-2" />
                Try GlamCare AI Free
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl"
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
                <span className="text-foreground">Beauty Business Challenges</span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  We Solve Elegantly
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
                <span className="text-foreground">How GlamCare AI</span>
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent">
                  Elevates Client Experience
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
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent">
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
                    <p className="text-green-600/80">Why salons & spas choose GlamCare AI</p>
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
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#8B5CF6]/10 to-[#7C3AED]/10 border border-[#8B5CF6]/20 rounded-full px-6 py-3 mb-6">
                <Users className="w-5 h-5 text-[#8B5CF6]" />
                <span className="text-lg text-[#8B5CF6] font-semibold">Beauty Businesses Like Yours</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Already Elevating Client Experience with</span>
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent">
                  GlamCare AI
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center text-white font-bold">
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
      <section className="py-20 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Elevate Your Client Experience
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Try GlamCare AI
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Try GlamCare AI free today and see how it can provide luxury service 24/7.
              <span className="font-bold"> Your next call could be your next VIP client.</span>
            </p>

            <div className="mb-12">
              <div
                id="vapi-widget-container"
                className="flex justify-center"
              >
                <Button
                  size="lg"
                  className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                  onClick={() => {
                    // Create and load VAPI widget
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/vapi-sdk@latest/dist/index.umd.js';
                    script.onload = () => {
                      const vapiWidget = document.createElement('vapi-widget');
                      vapiWidget.setAttribute('assistant-id', '6282c5c1-f2d2-453b-a033-569b4c45f6b2');
                      vapiWidget.setAttribute('public-key', '858b87e2-6fe0-4fca-9eff-d7e8ecf436ab');
                      document.body.appendChild(vapiWidget);
                      vapiWidget.click();
                    };
                    document.head.appendChild(script);
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to GlamCare AI Now
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Salons & spas trust us</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">70%</div>
                <div className="text-white/80">Reduction in no-shows</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">3 days</div>
                <div className="text-white/80">To see results</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#8B5CF6] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
                onClick={handleTryFree}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Try GlamCare AI Free
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

export default GlamCareAIAgent;