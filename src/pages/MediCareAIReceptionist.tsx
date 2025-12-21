import {
  Stethoscope,
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
  HeartHandshake,
  UserCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useVapi } from '@/contexts/VapiContext';

const MediCareAIReceptionist = () => {
  const { startCall } = useVapi();
  const assistantId = 'e2cb81bd-e022-46e1-a343-574e3f40383b';

  const handleTryFree = () => {
    startCall(assistantId);
  };

  const caseStudy = {
    company: "HealthFirst Clinic",
    industry: "Healthcare",
    problem: "Missing patient calls and losing appointments due to limited phone hours",
    solution: "AI receptionist handling 24/7 patient calls and appointment booking",
    results: {
      appointments: "+40% more bookings",
      noShows: "70% reduction",
      revenue: "+35% increase",
      efficiency: "90% faster response"
    }
  };

  const painPoints = [
    { icon: AlertTriangle, title: "Missing Patient Calls After Hours", desc: "Losing 40% of potential patients when clinic is closed", color: "#EF4444" },
    { icon: DollarSign, title: "High No-Show Rates", desc: "30% of appointments are no-shows costing revenue", color: "#F59E0B" },
    { icon: Clock, title: "Limited Reception Hours", desc: "Can't take patient calls 24/7", color: "#8B5CF6" },
    { icon: Users, title: "Staff Overwhelmed", desc: "Receptionists can't handle call volume during busy periods", color: "#06B6D4" }
  ];

  const solutions = [
    { icon: Brain, title: "24/7 Patient Call Handling", desc: "Never miss a patient call again", color: "#8B5CF6" },
    { icon: Clock, title: "70% Fewer No-Shows", desc: "Smart appointment reminders and confirmations", color: "#06B6D4" },
    { icon: Stethoscope, title: "Healthcare-Trained AI", desc: "Understands medical terminology and procedures", color: "#10B981" },
    { icon: DollarSign, title: "40% More Appointments", desc: "Capture patient calls even when closed", color: "#F59E0B" },
    { icon: Shield, title: "HIPAA Compliant", desc: "Secure patient data handling", color: "#8B5CF6" },
    { icon: Users, title: "Multi-Call Handling", desc: "Handle multiple patient calls simultaneously", color: "#06B6D4" },
    { icon: HeartHandshake, title: "Professional Patient Care", desc: "Compassionate and helpful interactions", color: "#10B981" },
    { icon: UserCheck, title: "Instant Appointment Booking", desc: "Schedule appointments in real-time with calendar sync", color: "#F59E0B" }
  ];

  const features = [
    { icon: Shield, title: "HIPAA Compliance", desc: "Full healthcare data protection and privacy", color: "#8B5CF6" },
    { icon: BarChart3, title: "Patient Analytics", desc: "Track appointment patterns and no-show rates", color: "#06B6D4" },
    { icon: Users, title: "Multi-Patient Handling", desc: "Handle multiple calls simultaneously", color: "#10B981" },
    { icon: Clock, title: "Appointment Reminders", desc: "Automated SMS and call reminders", color: "#F59E0B" },
    { icon: Brain, title: "Medical Understanding", desc: "Trained on healthcare terminology", color: "#8B5CF6" },
    { icon: Phone, title: "Emergency Routing", desc: "Smart routing for urgent patient needs", color: "#06B6D4" },
    { icon: Calendar, title: "EHR Integration", desc: "Sync with Epic, Cerner, and other systems", color: "#10B981" },
    { icon: Mail, title: "Patient Communications", desc: "Automated confirmations and follow-ups", color: "#F59E0B" },
    { icon: Database, title: "Insurance Verification", desc: "Real-time insurance verification", color: "#8B5CF6" },
    { icon: TrendingUp, title: "Performance Optimization", desc: "AI continuously improves patient interactions", color: "#06B6D4" },
    { icon: Activity, title: "Vital Signs Scheduling", desc: "Schedule routine check-ups and screenings", color: "#10B981" },
    { icon: Wifi, title: "Telehealth Integration", desc: "Book virtual appointments seamlessly", color: "#F59E0B" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Practice Manager",
      company: "HealthFirst Clinic",
      rating: 5,
      quote: "MediCare AI handles our patient calls professionally 24/7. We've reduced no-shows by 70% and never miss an appointment request.",
      avatar: "SC",
      results: "70% fewer no-shows"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Family Physician",
      company: "Caring Family Medical",
      rating: 5,
      quote: "Our patients love the immediate response. The AI understands their concerns and books them efficiently. It's like having the perfect receptionist.",
      avatar: "MR",
      results: "+45% more appointments"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Patients Served", color: "#8B5CF6" },
    { icon: TrendingUp, value: "90%", label: "Faster Response", color: "#06B6D4" },
    { icon: Stethoscope, value: "500+", label: "Clinics Trust Us", color: "#10B981" },
    { icon: Clock, value: "24/7", label: "Availability", color: "#F59E0B" }
  ];

  const fomoElements = [
    { icon: Users, text: "500+ healthcare practices using MediCare AI", color: "#8B5CF6" },
    { icon: TrendingUp, text: "Average 40% increase in appointments", color: "#06B6D4" },
    { icon: Clock, text: "See results in first week", color: "#10B981" },
    { icon: DollarSign, text: "70% reduction in no-shows", color: "#F59E0B" }
  ];

  const prosAndCons = {
    pros: [
      "Never miss a patient call - 24/7 availability",
      "Reduce no-shows by 70% with smart reminders",
      "HIPAA compliant and secure patient data",
      "Understands medical terminology perfectly",
      "Handles multiple calls simultaneously",
      "Integrates with existing EHR systems",
      "Professional, compassionate patient interactions",
      "Reduces staff workload significantly"
    ],
    cons: [
      "Initial setup requires EHR integration time",
      "Complex medical cases may need human escalation",
      "Requires staff training on AI capabilities"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#0066FF]/10 to-[#06B6D4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#C4B5FD]/15 to-[#A5F3FC]/15 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="text-lg text-red-500 font-semibold">Healthcare Crisis</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-foreground">Every Missed Call</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Is a Missed Patient.
              </span>
              <br />
              <span className="text-foreground">Stop Losing Patients.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              While other clinics miss patient calls after hours, HealthFirst Clinic increased appointments by <span className="font-bold text-green-600">40%</span> and reduced no-shows by <span className="font-bold text-blue-600">70%</span> with MediCare AI that works 24/7.
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
                className="bg-gradient-to-r from-[#0066FF] to-[#06B6D4] hover:from-[#0052CC] hover:to-[#0891B2] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
                onClick={handleTryFree}
              >
                <Play className="w-5 h-5 mr-2" />
                Try MediCare AI Free
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl"
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
                <span className="text-foreground">Healthcare Challenges</span>
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
                <span className="text-foreground">How MediCare AI</span>
                <br />
                <span className="bg-gradient-to-r from-[#0066FF] to-[#06B6D4] bg-clip-text text-transparent">
                  Transforms Patient Care
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
                <span className="bg-gradient-to-r from-[#0066FF] to-[#06B6D4] bg-clip-text text-transparent">
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
                    <p className="text-green-600/80">Why clinics choose MediCare AI</p>
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
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0066FF]/10 to-[#06B6D4]/10 border border-[#0066FF]/20 rounded-full px-6 py-3 mb-6">
                <Users className="w-5 h-5 text-[#0066FF]" />
                <span className="text-lg text-[#0066FF] font-semibold">Healthcare Providers Like Yours</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Already Benefiting from</span>
                <br />
                <span className="bg-gradient-to-r from-[#0066FF] to-[#06B6D4] bg-clip-text text-transparent">
                  MediCare AI
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0066FF] to-[#06B6D4] flex items-center justify-center text-white font-bold">
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
      <section className="py-20 bg-gradient-to-br from-[#0066FF] to-[#06B6D4]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Stop Losing Patients to
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Missed Calls
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Try MediCare AI free today and see how it can transform your patient care.
              <span className="font-bold"> Your first conversation could be your next patient.</span>
            </p>

            <div className="mb-12">
              <div
                id="vapi-widget-container"
                className="flex justify-center"
              >
                <Button
                  size="lg"
                  className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-[#0066FF] px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                  onClick={() => {
                    // Create and load VAPI widget
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/vapi-sdk@latest/dist/index.umd.js';
                    script.onload = () => {
                      const vapiWidget = document.createElement('vapi-widget');
                      vapiWidget.setAttribute('assistant-id', 'e2cb81bd-e022-46e1-a343-574e3f40383b');
                      vapiWidget.setAttribute('public-key', '858b87e2-6fe0-4fca-9eff-d7e8ecf436ab');
                      document.body.appendChild(vapiWidget);
                      vapiWidget.click();
                    };
                    document.head.appendChild(script);
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to MediCare AI Now
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Healthcare practices trust us</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">70%</div>
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
                className="bg-white text-[#0066FF] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
                onClick={handleTryFree}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Try MediCare AI Free
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0066FF] px-8 py-4 text-lg font-semibold rounded-xl"
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

export default MediCareAIReceptionist;