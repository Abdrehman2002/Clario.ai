import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Zap,
  Shield,
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

const VextriaVsAirAI = () => {
  const comparisonFeatures = [
    // AI Voice Capabilities
    { feature: '24/7 AI Voice Agent', vextria: true, competitor: true, category: 'AI Voice Capabilities' },
    { feature: 'Natural Conversation Flow', vextria: true, competitor: true, category: 'AI Voice Capabilities' },
    { feature: 'Multi-Language Support', vextria: '50+ languages', competitor: '20+ languages', category: 'AI Voice Capabilities' },
    { feature: 'Voice Tone Customization', vextria: true, competitor: 'Limited', category: 'AI Voice Capabilities' },
    { feature: 'Accent Recognition', vextria: true, competitor: true, category: 'AI Voice Capabilities' },

    // Appointment & Booking
    { feature: 'Appointment Booking', vextria: true, competitor: true, category: 'Appointment & Booking' },
    { feature: 'Calendar Integration', vextria: 'Google, Outlook, Apple', competitor: 'Google, Outlook', category: 'Appointment & Booking' },
    { feature: 'Automated Reminders', vextria: true, competitor: true, category: 'Appointment & Booking' },
    { feature: 'Rescheduling Handling', vextria: true, competitor: true, category: 'Appointment & Booking' },
    { feature: 'No-Show Reduction', vextria: '70%', competitor: '60%', category: 'Appointment & Booking' },

    // Integration & Setup
    { feature: 'Setup Time', vextria: '24 hours', competitor: '3-5 days', category: 'Integration & Setup' },
    { feature: 'CRM Integration', vextria: 'Salesforce, HubSpot, Zoho', competitor: 'Salesforce only', category: 'Integration & Setup' },
    { feature: 'API Access', vextria: true, competitor: true, category: 'Integration & Setup' },
    { feature: 'White-Label Option', vextria: true, competitor: false, category: 'Integration & Setup' },
    { feature: 'Custom Workflows', vextria: true, competitor: 'Limited', category: 'Integration & Setup' },

    // Pricing & Support
    { feature: 'Starting Price', vextria: '$199/month', competitor: '$750/month', category: 'Pricing & Support' },
    { feature: 'Free Trial', vextria: '14 days', competitor: 'Demo only', category: 'Pricing & Support' },
    { feature: 'Setup Fee', vextria: '$0', competitor: '$2,500', category: 'Pricing & Support' },
    { feature: '24/7 Support', vextria: true, competitor: 'Business hours', category: 'Pricing & Support' },
    { feature: 'Dedicated Account Manager', vextria: 'Enterprise', competitor: 'All plans', category: 'Pricing & Support' },

    // Security & Compliance
    { feature: 'HIPAA Compliance', vextria: true, competitor: true, category: 'Security & Compliance' },
    { feature: 'SOC 2 Certified', vextria: true, competitor: true, category: 'Security & Compliance' },
    { feature: 'GDPR Compliant', vextria: true, competitor: true, category: 'Security & Compliance' },
    { feature: 'Data Encryption', vextria: 'AES-256', competitor: 'AES-256', category: 'Security & Compliance' },
  ];

  const useCases = [
    {
      title: 'Small Business Owner',
      vextriaReason: 'Lower cost ($199/mo vs $750/mo), faster setup (24hrs vs 3-5 days), no setup fee',
      airAIReason: 'Dedicated account manager on all plans, more hands-on support',
      winner: 'Vextria AI'
    },
    {
      title: 'Healthcare Practice',
      vextriaReason: 'Better calendar integration, 70% no-show reduction, HIPAA compliant',
      airAIReason: 'Proven in healthcare, dedicated support',
      winner: 'Vextria AI'
    },
    {
      title: 'Enterprise Company',
      vextriaReason: 'White-label option, more CRM integrations, custom workflows',
      airAIReason: 'Dedicated account manager, enterprise-grade support',
      winner: 'Tie'
    },
    {
      title: 'Restaurant Chain',
      vextriaReason: '50+ language support, faster setup for multiple locations, lower cost',
      airAIReason: 'Strong voice AI, good at handling complex orders',
      winner: 'Vextria AI'
    }
  ];

  const faqs = [
    {
      question: 'Which is cheaper: Vextria AI or Air.ai?',
      answer: 'Vextria AI is significantly more affordable. Vextria starts at $199/month with no setup fee, while Air.ai starts at $750/month with a $2,500 setup fee. For a small business, Vextria saves $6,612 in the first year.'
    },
    {
      question: 'How long does it take to set up each platform?',
      answer: 'Vextria AI can be set up in 24 hours with minimal technical knowledge. Air.ai typically takes 3-5 days and requires more technical setup. Vextria\'s faster setup means you can start capturing missed calls sooner.'
    },
    {
      question: 'Which has better calendar integration?',
      answer: 'Vextria AI integrates with Google Calendar, Outlook, and Apple Calendar, while Air.ai supports Google and Outlook. Vextria also offers two-way sync for all supported calendars.'
    },
    {
      question: 'Can I try before buying?',
      answer: 'Yes! Vextria AI offers a full-featured 14-day free trial with no credit card required. Air.ai only offers a demo call with their sales team before you commit.'
    },
    {
      question: 'Which is better for healthcare practices?',
      answer: 'Both are HIPAA compliant, but Vextria AI has a 70% no-show reduction rate (vs Air.ai\'s 60%) and better calendar integration. Vextria is also more affordable for small to medium practices.'
    },
    {
      question: 'Does Air.ai have any advantages over Vextria?',
      answer: 'Yes - Air.ai provides a dedicated account manager on all plans (Vextria only on Enterprise), and some users prefer their more hands-on onboarding process. Air.ai is also a good fit for very large enterprises with complex needs.'
    }
  ];

  return (
    <>
      <SEO
        title="Vextria AI vs Air.ai: Complete 2026 Comparison [Features, Pricing, Reviews]"
        description="Compare Vextria AI vs Air.ai: Vextria costs $199/mo with 24-hour setup and 70% no-show reduction. Air.ai costs $750/mo with 3-5 day setup. See which is right for you."
        canonical="https://vextriaai.com/compare/vextria-vs-air-ai"
        ogTitle="Vextria AI vs Air.ai: Which AI Voice Platform is Best? (2026)"
        ogDescription="Detailed comparison of features, pricing, and real customer results. Vextria offers faster setup and lower cost, while Air.ai provides dedicated account managers."
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
                  Vextria AI vs Air.ai:<br />
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                    Complete 2026 Comparison
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Comparing two leading AI voice platforms. Vextria AI offers faster setup ($199/mo, 24hrs) while Air.ai provides dedicated account managers ($750/mo, 3-5 days). See which fits your business.
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
                      Best Value
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-[#8B5CF6]" />
                      <span><strong>$199/month</strong> starting price</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#8B5CF6]" />
                      <span><strong>24 hours</strong> setup time</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-[#8B5CF6]" />
                      <span><strong>70%</strong> no-show reduction</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span><strong>14-day</strong> free trial</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span><strong>No setup fee</strong></span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Best for:</strong> Small to medium businesses, healthcare practices, restaurants, auto shops that need affordable AI with fast deployment.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white">
                      Start Free Trial
                    </Button>
                  </div>
                </motion.div>

                {/* Air.ai Card */}
                <motion.div
                  className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Air.ai</h3>
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Enterprise Focus
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-gray-600" />
                      <span><strong>$750/month</strong> starting price</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-600" />
                      <span><strong>3-5 days</strong> setup time</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-gray-600" />
                      <span><strong>60%</strong> no-show reduction</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-gray-600" />
                      <span><strong>Demo only</strong> (no free trial)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-gray-600" />
                      <span><strong>$2,500</strong> setup fee</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Best for:</strong> Large enterprises with complex requirements that need dedicated account management and hands-on support.
                    </p>
                    <Button variant="outline" className="w-full">
                      Request Air.ai Demo
                    </Button>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Cost Savings with Vextria AI</h4>
                    <p className="text-green-800">
                      First-year savings: <strong>$6,612</strong> (including setup fee difference and monthly subscription).
                      Vextria offers 73% lower cost while delivering 10% better no-show reduction results.
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
                See how Vextria AI and Air.ai compare across AI capabilities, pricing, integrations, and support.
              </p>

              <ComparisonTable
                competitorName="Air.ai"
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
                The best platform depends on your business size, budget, and support needs.
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
                        <p className="text-sm font-semibold text-gray-600 mb-1">Choose Air.ai if:</p>
                        <p className="text-sm text-muted-foreground">{useCase.airAIReason}</p>
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
                  Vextria AI Wins for Most Businesses
                </h3>

                <p className="text-lg mb-6">
                  For <strong>90% of small to medium businesses</strong>, Vextria AI is the better choice. You get:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>73% lower cost</strong> ($6,612 saved in year 1)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>5x faster setup</strong> (24 hours vs 3-5 days)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Better no-show reduction</strong> (70% vs 60%)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>14-day free trial</strong> to test before committing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>More calendar & CRM integrations</strong></span>
                  </li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  Air.ai is a solid choice for very large enterprises ($10M+ revenue) that need dedicated account management and have complex, custom requirements. However, for most businesses, the higher cost and longer setup time don't justify the benefits.
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
                <h4 className="font-semibold text-blue-900 mb-2">Still Not Sure?</h4>
                <p className="text-blue-800 mb-4">
                  Try Vextria AI risk-free for 14 days. No credit card required, cancel anytime. See if it works for your business before committing.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start Free Trial Now
                </Button>
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
                  <p className="text-sm text-muted-foreground">Compare developer-focused platforms</p>
                </a>
                <a href="/compare/vextria-vs-dialpad" className="block bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">Vextria AI vs Dialpad</h3>
                  <p className="text-sm text-muted-foreground">AI receptionist vs phone system</p>
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

export default VextriaVsAirAI;
