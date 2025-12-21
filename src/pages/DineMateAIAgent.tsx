import {
  UtensilsCrossed,
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
  ChefHat,
  Utensils,
  Coffee,
  Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useVapi } from '@/contexts/VapiContext';

const DineMateAIAgent = () => {
  const { startCall } = useVapi();
  const assistantId = '3a292793-41ce-46e2-9bf3-e2e020ca9b5e';

  const handleTryFree = () => {
    startCall(assistantId);
  };

  const caseStudy = {
    company: "Fresh Bites Restaurant",
    industry: "Restaurant",
    problem: "Missing reservations and losing customers due to limited phone coverage",
    solution: "AI agent handling 24/7 reservations and upselling specials",
    results: {
      reservations: "+45% more bookings",
      noShows: "60% reduction",
      revenue: "+40% increase",
      efficiency: "95% faster response"
    }
  };

  const painPoints = [
    { icon: AlertTriangle, title: "Missing Reservations After Hours", desc: "Losing 35% of potential diners when restaurant is closed", color: "#EF4444" },
    { icon: DollarSign, title: "Empty Tables During Peak", desc: "Tables sitting empty due to missed calls", color: "#F59E0B" },
    { icon: Clock, title: "Limited Reservation Hours", desc: "Can't take bookings 24/7 like competitors", color: "#8B5CF6" },
    { icon: Users, title: "Staff Too Busy to Answer", desc: "Kitchen staff can't handle calls during rush", color: "#06B6D4" }
  ];

  const solutions = [
    { icon: Brain, title: "24/7 Reservation Handling", desc: "Never miss a potential diner call", color: "#25D366" },
    { icon: Clock, title: "Phone Order Taking", desc: "Handle takeout and delivery orders seamlessly", color: "#06B6D4" },
    { icon: ChefHat, title: "Menu-Trained AI", desc: "Knows your menu, specials, and dietary options", color: "#10B981" },
    { icon: DollarSign, title: "45% More Reservations", desc: "Capture calls even when closed", color: "#F59E0B" },
    { icon: Utensils, title: "Upsell Specials", desc: "Automatically suggest appetizers and drinks", color: "#25D366" },
    { icon: Users, title: "Multi-Call Handling", desc: "Handle multiple reservations simultaneously", color: "#06B6D4" },
    { icon: Coffee, title: "Dietary Accommodations", desc: "Handle allergies and dietary restrictions", color: "#10B981" },
    { icon: Gift, title: "Special Occasions", desc: "Book tables for birthdays and anniversaries", color: "#F59E0B" }
  ];

  const features = [
    { icon: Shield, title: "PCI Compliance", desc: "Secure payment processing for deposits", color: "#25D366" },
    { icon: BarChart3, title: "Reservation Analytics", desc: "Track booking patterns and peak times", color: "#06B6D4" },
    { icon: Users, title: "Multi-Table Management", desc: "Optimize table assignments and timing", color: "#10B981" },
    { icon: Clock, title: "Automated Reminders", desc: "SMS and call reminders to reduce no-shows", color: "#F59E0B" },
    { icon: Brain, title: "Menu Knowledge", desc: "Trained on your full menu and specials", color: "#25D366" },
    { icon: Phone, title: "Waitlist Management", desc: "Smart waitlist and callback system", color: "#06B6D4" },
    { icon: Calendar, title: "POS Integration", desc: "Sync with Square, Toast, and other systems", color: "#10B981" },
    { icon: Mail, title: "Guest Communications", desc: "Automated confirmations and special offers", color: "#F59E0B" },
    { icon: Database, title: "Customer Preferences", desc: "Remember guest preferences and allergies", color: "#25D366" },
    { icon: TrendingUp, title: "Upselling Optimization", desc: "AI learns what upsells work best", color: "#06B6D4" },
    { icon: Activity, title: "Table Turnover", desc: "Optimize reservations for maximum revenue", color: "#10B981" },
    { icon: Wifi, title: "Online Integration", desc: "Sync with OpenTable and Resy", color: "#F59E0B" }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Restaurant Owner",
      company: "Fresh Bites",
      rating: 5,
      quote: "DineMate AI takes reservations professionally 24/7 and upsells our specials. We've increased bookings by 45% and never miss a reservation.",
      avatar: "MS",
      results: "45% more reservations"
    },
    {
      name: "Chef Antonio",
      role: "Head Chef",
      company: "Bella Vista Italian",
      rating: 5,
      quote: "The AI knows our menu better than some of our servers! It handles dietary restrictions perfectly and our tables are always full now.",
      avatar: "CA",
      results: "+30% table turnover"
    }
  ];

  const stats = [
    { icon: Users, value: "100K+", label: "Diners Served", color: "#25D366" },
    { icon: TrendingUp, value: "95%", label: "Faster Response", color: "#06B6D4" },
    { icon: UtensilsCrossed, value: "1000+", label: "Restaurants Trust Us", color: "#10B981" },
    { icon: Clock, value: "24/7", label: "Availability", color: "#F59E0B" }
  ];

  const fomoElements = [
    { icon: Users, text: "1000+ restaurants using DineMate AI", color: "#25D366" },
    { icon: TrendingUp, text: "Average 45% increase in reservations", color: "#06B6D4" },
    { icon: Clock, text: "See results in first 3 days", color: "#10B981" },
    { icon: DollarSign, text: "60% reduction in no-shows", color: "#F59E0B" }
  ];

  const prosAndCons = {
    pros: [
      "Never miss a reservation - 24/7 availability",
      "Reduce no-shows by 60% with smart reminders",
      "Automatically upsell appetizers and drinks",
      "Handles dietary restrictions and allergies perfectly",
      "Manages table assignments and timing",
      "Integrates with existing POS systems",
      "Professional, welcoming guest interactions",
      "Reduces front-of-house staff workload"
    ],
    cons: [
      "Initial menu training requires detailed input",
      "Complex special requests may need staff escalation",
      "Requires integration with reservation system"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#C4B5FD]/15 to-[#A5F3FC]/15 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="text-lg text-red-500 font-semibold">Restaurant Crisis</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-foreground">An Unanswered Call</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Is an Empty Table.
              </span>
              <br />
              <span className="text-foreground">Fill Every Seat.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              While other restaurants miss reservations after hours, Fresh Bites increased bookings by <span className="font-bold text-green-600">45%</span> and reduced no-shows by <span className="font-bold text-blue-600">60%</span> with DineMate AI that works 24/7.
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
                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20C55E] hover:to-[#0F7A6B] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
                onClick={handleTryFree}
              >
                <Play className="w-5 h-5 mr-2" />
                Try DineMate AI Free
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl"
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
                <span className="text-foreground">Restaurant Challenges</span>
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
                <span className="text-foreground">How DineMate AI</span>
                <br />
                <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                  Fills Your Tables
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
                <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
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
                    <p className="text-green-600/80">Why restaurants choose DineMate AI</p>
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
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/20 rounded-full px-6 py-3 mb-6">
                <Users className="w-5 h-5 text-[#25D366]" />
                <span className="text-lg text-[#25D366] font-semibold">Restaurants Like Yours</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Already Boosting Revenue with</span>
                <br />
                <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                  DineMate AI
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center text-white font-bold">
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
      <section className="py-20 bg-gradient-to-br from-[#25D366] to-[#128C7E]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Boost Reservations with
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                DineMate AI
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Try DineMate AI free now and see how it can fill your tables 24/7.
              <span className="font-bold"> Your next call could be your next full house.</span>
            </p>

            <div className="mb-12">
              <div
                id="vapi-widget-container"
                className="flex justify-center"
              >
                <Button
                  size="lg"
                  className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-[#25D366] px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                  onClick={() => {
                    // Create and load VAPI widget
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/vapi-sdk@latest/dist/index.umd.js';
                    script.onload = () => {
                      const vapiWidget = document.createElement('vapi-widget');
                      vapiWidget.setAttribute('assistant-id', '3a292793-41ce-46e2-9bf3-e2e020ca9b5e');
                      vapiWidget.setAttribute('public-key', '858b87e2-6fe0-4fca-9eff-d7e8ecf436ab');
                      document.body.appendChild(vapiWidget);
                      vapiWidget.click();
                    };
                    document.head.appendChild(script);
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to DineMate AI Now
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-white/80">Restaurants trust us</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">60%</div>
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
                className="bg-white text-[#25D366] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
                onClick={handleTryFree}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Try DineMate AI Free
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#25D366] px-8 py-4 text-lg font-semibold rounded-xl"
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

export default DineMateAIAgent;