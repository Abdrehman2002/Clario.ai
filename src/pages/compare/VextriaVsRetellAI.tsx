import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Zap,
  Code,
  Users,
  TrendingUp,
  Phone,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { organizationSchema } from '@/utils/schemas';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';

const VextriaVsRetellAI = () => {
  const comparisonFeatures = [
    // AI Voice Capabilities
    { feature: '24/7 AI Voice Agent', vextria: true, competitor: true, category: 'AI Voice Capabilities' },
    { feature: 'Natural Conversation Flow', vextria: true, competitor: true, category: 'AI Voice Capabilities' },
    { feature: 'Multi-Language Support', vextria: '50+ languages', competitor: '30+ languages', category: 'AI Voice Capabilities' },
    { feature: 'Custom Voice Training', vextria: true, competitor: true, category: 'AI Voice Capabilities' },
    { feature: 'Real-time Voice Analytics', vextria: true, competitor: true, category: 'AI Voice Capabilities' },

    // Developer Experience
    { feature: 'API Access', vextria: 'REST + WebSocket', competitor: 'REST + WebSocket', category: 'Developer Experience' },
    { feature: 'SDK Availability', vextria: 'Python, Node.js, React', competitor: 'Python, Node.js', category: 'Developer Experience' },
    { feature: 'Webhook Support', vextria: true, competitor: true, category: 'Developer Experience' },
    { feature: 'Documentation Quality', vextria: 'Comprehensive', competitor: 'Developer-focused', category: 'Developer Experience' },
    { feature: 'Code Examples', vextria: '50+ examples', competitor: '30+ examples', category: 'Developer Experience' },

    // Business Features
    { feature: 'No-Code Setup Option', vextria: true, competitor: false, category: 'Business Features' },
    { feature: 'Appointment Booking', vextria: true, competitor: 'Via custom code', category: 'Business Features' },
    { feature: 'Calendar Integration', vextria: 'Built-in', competitor: 'API only', category: 'Business Features' },
    { feature: 'CRM Integration', vextria: 'Pre-built', competitor: 'Custom', category: 'Business Features' },
    { feature: 'White-Label Option', vextria: true, competitor: true, category: 'Business Features' },

    // Pricing & Support
    { feature: 'Starting Price', vextria: '$199/month', competitor: '$499/month', category: 'Pricing & Support' },
    { feature: 'Free Trial', vextria: '14 days', competitor: 'Contact sales', category: 'Pricing & Support' },
    { feature: 'Setup Time (No-Code)', vextria: '24 hours', competitor: 'N/A - Code required', category: 'Pricing & Support' },
    { feature: 'Setup Time (With Code)', vextria: '2-3 days', competitor: '1-2 days', category: 'Pricing & Support' },
    { feature: '24/7 Support', vextria: true, competitor: 'Business hours', category: 'Pricing & Support' },
    { feature: 'Implementation Support', vextria: 'Included', competitor: 'Enterprise only', category: 'Pricing & Support' },

    // Security & Compliance
    { feature: 'HIPAA Compliance', vextria: true, competitor: true, category: 'Security & Compliance' },
    { feature: 'SOC 2 Certified', vextria: true, competitor: 'In progress', category: 'Security & Compliance' },
    { feature: 'GDPR Compliant', vextria: true, competitor: true, category: 'Security & Compliance' },
    { feature: 'Data Encryption', vextria: 'AES-256', competitor: 'AES-256', category: 'Security & Compliance' },
  ];

  const useCases = [
    {
      title: 'Non-Technical Business Owner',
      vextriaReason: 'No-code setup in 24 hours, built-in appointment booking, lower cost ($199 vs $499)',
      retellReason: 'Not ideal - requires developer knowledge and custom coding',
      winner: 'Vextria AI'
    },
    {
      title: 'Developer Building Custom Solution',
      vextriaReason: 'Good API, more SDKs (Python, Node.js, React), comprehensive docs',
      retellReason: 'Strong developer focus, slightly faster custom implementation',
      winner: 'Tie'
    },
    {
      title: 'Healthcare Practice',
      vextriaReason: 'No-code setup, built-in calendar integration, HIPAA + SOC 2 certified',
      retellReason: 'HIPAA compliant but requires developer for booking features',
      winner: 'Vextria AI'
    },
    {
      title: 'SaaS Startup',
      vextriaReason: 'Lower cost, faster time-to-market with no-code option, white-label',
      retellReason: 'Good for custom integrations if you have dev resources',
      winner: 'Vextria AI'
    }
  ];

  const faqs = [
    {
      question: 'Which is cheaper: Vextria AI or Retell AI?',
      answer: 'Vextria AI is more affordable at $199/month vs Retell AI\'s $499/month starting price. Vextria also offers a free 14-day trial, while Retell requires contacting sales first. Over a year, Vextria saves $3,600.'
    },
    {
      question: 'Can I use Retell AI without coding?',
      answer: 'No, Retell AI is primarily developer-focused and requires coding to implement. Vextria AI offers both no-code (24-hour setup) and code-based options, making it accessible to non-technical users while still powerful for developers.'
    },
    {
      question: 'Which has better developer tools?',
      answer: 'Both have strong developer tools. Retell AI is purely developer-focused. Vextria AI offers more SDKs (Python, Node.js, React vs just Python and Node.js) and 50+ code examples. For pure API-first approach, they\'re comparable.'
    },
    {
      question: 'Which is better for appointment booking?',
      answer: 'Vextria AI is better - it has built-in appointment booking and calendar integration. With Retell AI, you need to build this functionality yourself using their API, which takes additional development time.'
    },
    {
      question: 'How long does setup take for each?',
      answer: 'Vextria AI: 24 hours (no-code) or 2-3 days (with custom code). Retell AI: 1-2 days (requires coding). For non-technical users, Vextria is faster and easier.'
    },
    {
      question: 'Which has better security certifications?',
      answer: 'Vextria AI is fully SOC 2 and HIPAA certified. Retell AI is HIPAA compliant but SOC 2 certification is still in progress. Both use AES-256 encryption and are GDPR compliant.'
    }
  ];

  return (
    <>
      <SEO
        title="Vextria AI vs Retell AI: Complete 2026 Comparison [No-Code vs Developer]"
        description="Compare Vextria AI vs Retell AI: Vextria offers no-code setup at $199/mo with built-in booking. Retell costs $499/mo and requires coding. See which fits your needs."
        canonical="https://vextriaai.com/compare/vextria-vs-retell-ai"
        ogTitle="Vextria AI vs Retell AI: Which AI Voice Platform is Best? (2026)"
        ogDescription="No-code vs developer-focused comparison. Vextria offers faster setup and lower cost with no-code option. Retell provides developer-first approach."
        schema={[organizationSchema]}
      />
      <Header />
      <div className="min-h-screen bg-background">

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#8B5CF6]/10 to-[#06B6D4]/10 border border-[#8B5CF6]/20 rounded-full px-4 py-2 mb-6">
                  <Star className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="text-sm font-semibold text-[#8B5CF6]">Updated March 2026</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Vextria AI vs Retell AI:<br />
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                    No-Code vs Developer Platform
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Comparing business-friendly vs developer-focused AI voice platforms. Vextria offers no-code setup ($199/mo) while Retell is API-first ($499/mo, coding required). See which matches your technical level.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] hover:from-[#7C3AED] hover:to-[#0891B2] text-white"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Try Vextria Free for 14 Days
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Book a Demo
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Comparison Summary */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Quick Comparison Summary</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Vextria AI Card */}
                <motion.div
                  className="bg-gradient-to-br from-[#8B5CF6]/5 to-[#06B6D4]/5 border-2 border-[#8B5CF6] rounded-2xl p-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Vextria AI</h3>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      No-Code Friendly
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-[#8B5CF6]" />
                      <span><strong>$199/month</strong> starting price</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#8B5CF6]" />
                      <span><strong>24 hours</strong> no-code setup</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span><strong>Built-in</strong> appointment booking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span><strong>14-day</strong> free trial</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Code className="w-5 h-5 text-[#8B5CF6]" />
                      <span><strong>Optional:</strong> Full API access</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Best for:</strong> Non-technical business owners, healthcare practices, small businesses that need fast deployment without coding.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white">
                      Start Free Trial
                    </Button>
                  </div>
                </motion.div>

                {/* Retell AI Card */}
                <motion.div
                  className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Retell AI</h3>
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Developer-First
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-gray-600" />
                      <span><strong>$499/month</strong> starting price</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-600" />
                      <span><strong>1-2 days</strong> setup (requires code)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Code className="w-5 h-5 text-gray-600" />
                      <span><strong>API only</strong> - build your own</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-gray-600" />
                      <span><strong>Contact sales</strong> for trial</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                      <span><strong>Strong</strong> developer docs</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Best for:</strong> Developers and technical teams building custom voice AI solutions with full control over implementation.
                    </p>
                    <Button variant="outline" className="w-full">
                      Request Retell Demo
                    </Button>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Cost & Time Savings with Vextria AI</h4>
                    <p className="text-green-800">
                      <strong>Save $3,600/year</strong> on subscription costs. <strong>Launch 75% faster</strong> with no-code setup (24 hours vs 1-2 days + dev time).
                      No developer needed means additional savings of $5,000-$15,000 in development costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Feature-by-Feature Comparison</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                See how Vextria AI and Retell AI compare across ease of use, developer tools, pricing, and features.
              </p>

              <ComparisonTable
                competitorName="Retell AI"
                features={comparisonFeatures}
              />
            </div>
          </div>
        </section>

        {/* Use Case Scenarios */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Which Should You Choose?</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                The best platform depends on your technical expertise and requirements.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                      {useCase.title}
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-[#8B5CF6] mb-1">Choose Vextria AI if:</p>
                        <p className="text-sm text-muted-foreground">{useCase.vextriaReason}</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">Choose Retell AI if:</p>
                        <p className="text-sm text-muted-foreground">{useCase.retellReason}</p>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-sm">
                          <strong>Winner:</strong> <span className={useCase.winner === 'Vextria AI' ? 'text-[#8B5CF6] font-semibold' : useCase.winner === 'Tie' ? 'text-gray-600' : 'text-gray-600'}>{useCase.winner}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-border rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Verdict */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">The Verdict</h2>

              <div className="bg-gradient-to-br from-[#8B5CF6]/5 to-[#06B6D4]/5 border-2 border-[#8B5CF6] rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2 text-[#8B5CF6]" />
                  Vextria AI Wins for Non-Technical Users (90% of businesses)
                </h3>

                <p className="text-lg mb-6">
                  <strong>If you're not a developer</strong>, Vextria AI is the clear winner:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>No coding required</strong> - Set up in 24 hours through dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>60% lower cost</strong> ($199/mo vs $499/mo + dev time)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Built-in appointment booking</strong> (vs building it yourself)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Free 14-day trial</strong> to test before buying</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Optional API access</strong> if you decide to customize later</span>
                  </li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  Retell AI is an excellent choice for <strong>developers building custom solutions</strong> who want an API-first approach.
                  However, for most small to medium businesses without in-house developers, the no-code option, lower cost, and faster deployment of Vextria AI make it the better choice.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] hover:from-[#7C3AED] hover:to-[#0891B2] text-white"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Start Your Vextria Free Trial
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Demo Call
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">For Developers: Both Are Great</h4>
                <p className="text-blue-800 mb-4">
                  If you're a developer, both platforms offer strong APIs. Vextria provides more SDKs and examples, while Retell is purely API-first.
                  Consider Vextria if you want the flexibility of no-code + API, or Retell if you prefer a developer-only platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Comparisons */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Comparisons</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <a href="/compare/vextria-vs-bland-ai" className="block bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">Vextria AI vs Bland AI</h3>
                  <p className="text-sm text-muted-foreground">Compare developer platforms</p>
                </a>
                <a href="/compare/vextria-vs-air-ai" className="block bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">Vextria AI vs Air.ai</h3>
                  <p className="text-sm text-muted-foreground">Affordable vs enterprise solution</p>
                </a>
                <a href="/ai-voice-agent-alternatives" className="block bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">All AI Voice Alternatives</h3>
                  <p className="text-sm text-muted-foreground">Compare 11 top platforms</p>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default VextriaVsRetellAI;
