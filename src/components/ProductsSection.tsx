import { ArrowRight, Stethoscope, UtensilsCrossed, Wrench, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useVapi } from '@/contexts/VapiContext';

const products = [
  {
    title: "MediCare AI Receptionist",
    tagline: "Never Miss a Patient Call Again.",
    description: "24/7 AI receptionist that handles patient calls, schedules appointments, and provides professional healthcare support when your clinic is closed.",
    benefits: ["Handle patient calls 24/7", "Automatic appointment booking", "Reduce missed appointments by 70%", "Improve patient satisfaction"],
    painPoints: ["Missed patient calls after hours", "Manual appointment scheduling", "Staff overwhelmed with calls", "Lost revenue from no-shows"],
    icon: Stethoscope,
    gradient: "from-[#0066FF] to-[#0033FF]",
    color: "#0066FF",
    category: "Healthcare AI",
    href: "/medicare-ai-receptionist",
    widgetId: "e2cb81bd-e022-46e1-a343-574e3f40383b"
  },
  {
    title: "DineMate AI Agent",
    tagline: "Your AI Host — Filling Every Table.",
    description: "DineMare is a Smart AI agent that takes reservations, suggests specials, and manages your restaurant bookings 24/7 to maximize table turnover.",
    benefits: ["24/7 reservation handling", "Upsell specials automatically", "Reduce no-shows by 60%", "Increase table turnover"],
    painPoints: ["Missed reservation calls", "Empty tables during peak hours", "Manual booking management", "Lost revenue after hours"],
    icon: UtensilsCrossed,
    gradient: "from-[#25D366] to-[#128C7E]",
    color: "#25D366",
    category: "Restaurant AI",
    href: "/dinemate-ai-agent",
    widgetId: "3a292793-41ce-46e2-9bf3-e2e020ca9b5e"
  },
  {
    title: "AutoCare AI Receptionist",
    tagline: "Your 24/7 Service Advisor — Keeping Bays Full.",
    description: "AI-powered service advisor that schedules repairs, provides quotes, and manages your automotive service workflow around the clock.",
    benefits: ["24/7 service scheduling", "Instant repair quotes", "Keep service bays full", "Reduce customer wait times"],
    painPoints: ["Missed service calls", "Empty service bays", "Manual quote generation", "Customer appointment delays"],
    icon: Wrench,
    gradient: "from-[#FFA726] to-[#FF9800]",
    color: "#FFA726",
    category: "Automotive AI",
    href: "/autocare-ai-receptionist",
    widgetId: "ded7d2ea-64e5-4798-a84b-d2c9c584f24d"
  },
  {
    title: "GlamCare AI Agent",
    tagline: "Your AI Concierge — Luxury Service from First Hello.",
    description: "Elegant AI concierge that books appointments, recommends treatments, and provides luxury customer service for salons and spas.",
    benefits: ["Luxury appointment booking", "Treatment recommendations", "24/7 client service", "Increase repeat bookings"],
    painPoints: ["Missed booking opportunities", "Manual appointment management", "Inconsistent service quality", "Lost clients to competitors"],
    icon: Sparkles,
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    color: "#8B5CF6",
    category: "Beauty AI",
    href: "/glamcare-ai-agent",
    widgetId: "6282c5c1-f2d2-453b-a033-569b4c45f6b2"
  }
];

const ProductsSection = () => {
  const navigate = useNavigate();
  const { startCall } = useVapi();

  const handleCardClick = (href: string) => {
    navigate(href);
  };

  const handleTryFree = (e: React.MouseEvent, widgetId: string) => {
    e.stopPropagation();
    startCall(widgetId);
  };

  return (
    <section id="products" className="relative py-16 lg:py-24 bg-card overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CCE0FF]/5 to-[#B8C2FF]/3"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0066FF]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#B8C2FF]/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-4">
            Our Solutions
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight bg-gradient-to-r from-[#0066FF] to-[#0033FF] bg-clip-text text-transparent mb-6">
            What We Build
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI solutions designed to transform your business operations and scale intelligently
          </p>
        </div>

        {/* Products Grid - 2 Cards Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative bg-background border border-border rounded-2xl p-8 hover:shadow-xl cursor-pointer transition-all duration-300"
              onClick={() => handleCardClick(product.href)}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 rounded-2xl`}></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full border border-border">
                  {product.category}
                </span>
              </div>

              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 shadow-lg`}>
                <product.icon className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#0066FF]">
                  {product.title}
                </h3>

                <p className="text-sm font-semibold text-[#0066FF] mb-3 italic">
                  {product.tagline}
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Pain Points */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#FF4444] mb-2 uppercase tracking-wide">Problems We Solve:</h4>
                  <ul className="space-y-2 mb-4">
                    {product.painPoints.map((painPoint, painIndex) => (
                      <li 
                        key={painIndex} 
                        className="flex items-center text-xs text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-[#FF4444] rounded-full mr-2 flex-shrink-0"></div>
                        <span>{painPoint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#00AA44] mb-2 uppercase tracking-wide">Your Results:</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex} 
                        className="flex items-center text-sm text-foreground font-medium"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Talk to Agent Button */}
                <div className="flex flex-col gap-3">
                  <button
                    className={`w-full py-3 px-4 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
                    onClick={(e) => handleTryFree(e, product.widgetId)}
                  >
                    Talk to Agent For Free
                  </button>

                  <div className="flex items-center justify-center text-[#0066FF] font-semibold text-sm group-hover:text-[#0052CC]">
                    <span>Click to learn more</span>
                    <div className="ml-2">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 rounded-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;