import { Star, Quote, TrendingUp, Users, Clock, Zap, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: "Andrew William",
    title: "VP of Marketing at XYZ Inc.",
    quote: "Our conversion rates increased by 35% in the first month. The AI chatbot handles customer inquiries 24/7 and never misses a sale opportunity.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "35% conversion increase",
    category: "Marketing",
    company: "XYZ Inc.",
    industry: "E-commerce"
  },
  {
    name: "Sarah Chen",
    title: "Operations Lead at TechFlow",
    quote: "We reduced our support costs by 60% while improving customer satisfaction. The AI handles 70% of inquiries automatically.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "60% cost reduction",
    category: "Operations",
    company: "TechFlow",
    industry: "SaaS"
  },
  {
    name: "Nate Jacobs",
    title: "Head of Product at InnovateCorp",
    quote: "Our lead generation increased 3x with AI-powered qualification. We're closing deals faster than ever before.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "3x more leads",
    category: "Product",
    company: "InnovateCorp",
    industry: "Fintech"
  },
  {
    name: "Sophie Mark",
    title: "VP of Customer Success at GrowthAI",
    quote: "The AI voice agent runs our customer support 24/7. We've never lost a customer due to wait times since implementing Vextria.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "24/7 support",
    category: "Customer Success",
    company: "GrowthAI",
    industry: "AI/ML"
  },
  {
    name: "Andy Marker",
    title: "Tech Director at FutureTech",
    quote: "ROI increased 3x in the first quarter. The workflow automation saved us 20+ hours per week per team member.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "3x ROI increase",
    category: "Technology",
    company: "FutureTech",
    industry: "Healthcare"
  },
  {
    name: "Rosaline James",
    title: "COO at ScaleUp Ventures",
    quote: "We scaled our operations 10x without hiring additional staff. The AI automation handles everything seamlessly.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    impact: "10x scale",
    category: "Operations",
    company: "ScaleUp Ventures",
    industry: "E-commerce"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients", color: "from-[#0066FF] to-[#0033FF]" },
  { icon: TrendingUp, value: "95%", label: "Success Rate", color: "from-[#25D366] to-[#128C7E]" },
  { icon: Clock, value: "24/7", label: "AI Availability", color: "from-[#FF6B6B] to-[#FF5252]" },
  { icon: Zap, value: "10x", label: "Faster Processing", color: "from-[#9C27B0] to-[#673AB7]" }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#0066FF]/10 to-[#0033FF]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#B8C2FF]/8 to-[#CCE0FF]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#0066FF]/5 to-[#B8C2FF]/3 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Client Success Stories</span>
            <Sparkles className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-[#0066FF] via-[#0033FF] to-[#0066FF] bg-clip-text text-transparent mb-8">
            Real Results from
            <br />
            <span className="bg-gradient-to-r from-[#B8C2FF] to-[#CCE0FF] bg-clip-text text-transparent">
              Real Clients
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            See how our clients are achieving 10x growth, 60% cost reduction, and 24/7 customer support with our AI solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="group relative bg-card border border-border rounded-2xl p-6 text-center hover:shadow-2xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-card border border-border rounded-3xl p-8 hover:shadow-2xl overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#CCE0FF]/8 to-[#B8C2FF]/5 opacity-0 group-hover:opacity-100 rounded-3xl"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#B8C2FF]">
                <Quote className="w-10 h-10" />
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="text-sm font-semibold text-[#0066FF] bg-[#CCE0FF]/40 px-4 py-2 rounded-full border border-[#CCE0FF]/60 backdrop-blur-sm">
                  {testimonial.category}
                </span>
              </div>
              
              {/* Profile Section */}
              <div className="flex items-start space-x-5 mb-8 mt-12">
                <div className="relative">
                  <img
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover border-3 border-[#CCE0FF] flex-shrink-0 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#0066FF] rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-foreground text-xl mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.title}</p>
                  <p className="text-sm text-[#0066FF] font-semibold">{testimonial.company}</p>
                  <div className="flex items-center space-x-1 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FFD700] fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Testimonial Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-8 italic font-medium relative">
                <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-[#0066FF] to-[#B8C2FF] rounded-full opacity-30"></div>
                "{testimonial.quote}"
              </blockquote>

              {/* Impact & Industry Section */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0066FF] to-[#0033FF] rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#0066FF] font-bold">{testimonial.impact}</div>
                    <div className="text-xs text-muted-foreground">Performance boost</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground bg-muted px-3 py-2 rounded-full border border-border font-medium">
                  {testimonial.industry}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/5 via-transparent to-[#0033FF]/5 opacity-0 group-hover:opacity-100 rounded-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;