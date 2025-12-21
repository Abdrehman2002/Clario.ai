import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, Zap, BarChart3, Route, Brain, Clock, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { Feature } from "@/components/ui/feature-with-image-comparison";

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureItem = ({ icon, text }: FeatureItemProps) => (
  <div className="flex items-start gap-3 group/item">
    <div className="mt-0.5 text-[#00A892] transition-transform group-hover/item:scale-110">
      {icon}
    </div>
    <p className="text-sm leading-relaxed text-gray-300">{text}</p>
  </div>
);

interface FrameworkCardProps {
  badge: string;
  title: string;
  description: string;
  features: FeatureItemProps[];
  className?: string;
}

const FrameworkCard = ({ badge, title, description, features, className }: FrameworkCardProps) => (
  <div
    className={cn(
      "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0a0f0d]/90 to-[#0a0f0d]/60 p-8 backdrop-blur-sm transition-all duration-300",
      "hover:border-[#00A892]/30 hover:shadow-lg hover:shadow-[#00A892]/10",
      className
    )}
  >
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#00A892]/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-6">
      {/* Badge */}
      <div>
        <Badge
          variant="outline"
          className="border-[#00A892]/20 bg-[#00A892]/5 text-[#00A892] hover:bg-[#00A892]/10"
        >
          {badge}
        </Badge>
      </div>

      {/* Title & Description */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-gray-400">
          {description}
        </p>
      </div>

      {/* Features List */}
      <div className="space-y-4 pt-2">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} text={feature.text} />
        ))}
      </div>
    </div>

    {/* Bottom accent line */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#00A892] to-transparent transition-all duration-500 group-hover:w-full" />
  </div>
);

const FrameworksSection = () => {
  const frameworks: FrameworkCardProps[] = [
    {
      badge: "Voice AI",
      title: "AI Receptionist",
      description: "Intelligent voice agents that engage, qualify, and convert in real time.",
      features: [
        {
          icon: <Phone className="h-5 w-5" />,
          text: "Natural Conversations — Understands context and tone, providing human-like voice responses instantly.",
        },
        {
          icon: <Route className="h-5 w-5" />,
          text: "Smart Lead Routing — Identifies caller needs and directs them to the right team automatically.",
        },
        {
          icon: <BarChart3 className="h-5 w-5" />,
          text: "Real-Time Insights — Logs every call, sentiment, and action directly into your dashboard for review.",
        },
        {
          icon: <Clock className="h-5 w-5" />,
          text: "Always Available — Handles inbound inquiries 24/7 with consistent quality and zero downtime.",
        },
      ],
    },
    {
      badge: "Chat AI",
      title: "AI Chat Assistant",
      description: "Conversational AI built to automate support and boost conversions.",
      features: [
        {
          icon: <MessageSquare className="h-5 w-5" />,
          text: "Human-Like Replies — Responds naturally across channels while maintaining your brand's tone.",
        },
        {
          icon: <Brain className="h-5 w-5" />,
          text: "Smart Knowledge Base — Uses trained data to answer questions instantly and reduce support workload.",
        },
        {
          icon: <Activity className="h-5 w-5" />,
          text: "Context Retention — Remembers interactions to create smooth, continuous customer experiences.",
        },
        {
          icon: <BarChart3 className="h-5 w-5" />,
          text: "Performance Tracking — Measures chat volume, response rate, and satisfaction inside one unified dashboard.",
        },
      ],
    },
    {
      badge: "Automation",
      title: "Workflow Automations",
      description: "Connected systems that eliminate manual work and drive efficiency.",
      features: [
        {
          icon: <Zap className="h-5 w-5" />,
          text: "Seamless Integrations — Connects CRMs, forms, and apps to automate repetitive operations.",
        },
        {
          icon: <Route className="h-5 w-5" />,
          text: "Custom Triggers — Executes precise actions automatically based on data changes or user activity.",
        },
        {
          icon: <Clock className="h-5 w-5" />,
          text: "Time Optimization — Replaces hours of manual tasks with end-to-end workflow logic.",
        },
        {
          icon: <BarChart3 className="h-5 w-5" />,
          text: "Unified Dashboard — Monitors automation status, success rates, and ROI metrics in one place.",
        },
      ],
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0f0d] to-black py-20 lg:py-32">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00A892]/5 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Built to automate. Designed to perform.
          </h2>
          <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
            Each framework is a building block of your AI infrastructure, designed to automate, connect, and scale your operations with precision.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {frameworks.map((framework, index) => (
            <FrameworkCard key={index} {...framework} />
          ))}
        </div>

        {/* Interactive Feature Comparison */}
        <div className="mt-20">
          <Feature
            badge="Real-Time Analytics"
            title="Transform your business with AI-powered insights"
            description="See the difference between traditional dashboards and our intelligent AI platform. Drag the slider to compare."
            beforeImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
            afterImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export { FrameworksSection };
