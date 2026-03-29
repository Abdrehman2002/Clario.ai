import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, DollarSign, Clock, Star, Zap, Shield, Phone, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { organizationSchema } from '@/utils/schemas';

export default function BestAIReceptionistSoftware() {
  const rankings = [
    {
      rank: 1,
      name: 'Vextria AI',
      logo: '🎯',
      tagline: 'Best Overall for Small Businesses',
      rating: 4.8,
      pricing: '$199-499/month',
      setupTime: '24 hours',
      score: 94,
      pros: [
        'Fastest setup in the industry (24 hours)',
        'Most affordable ($199/mo entry)',
        'Multi-channel (voice, chat, WhatsApp)',
        'No-code, perfect for non-technical teams',
        '70% no-show reduction',
        '40% increase in appointments'
      ],
      cons: [
        'Newer platform (less brand recognition)',
        'Smaller enterprise feature set',
        'Limited customization vs developer platforms'
      ],
      bestFor: 'Small to mid-sized businesses needing affordable, easy-to-use AI receptionist with multiple channels',
      industries: ['Medical', 'Dental', 'Salons', 'Auto Repair', 'Restaurants'],
      features: {
        appointmentScheduling: true,
        multiLanguage: '50+ languages',
        crmIntegration: '50+ platforms',
        callTranscription: true,
        sentimentAnalysis: true,
        hipaaCompliant: true
      },
      link: 'https://vextriaai.com',
      tryLink: 'https://vextriaai.com/voice-agents'
    },
    {
      rank: 2,
      name: 'Air.ai',
      logo: '🚀',
      tagline: 'Best for Enterprise & Complex Sales',
      rating: 4.5,
      pricing: '$750-1,500/month',
      setupTime: '3-5 days',
      score: 91,
      pros: [
        'Handles 10-40 minute conversations',
        'Human-like voice quality',
        'Dedicated success manager',
        'Industry-specific AI training',
        'Enterprise-grade reliability',
        'Proven for complex sales calls'
      ],
      cons: [
        'Expensive ($750-1,500/mo)',
        '$2,500 setup fee',
        'Slower setup (3-5 days)',
        'Annual contract required',
        'Overkill for simple receptionist tasks'
      ],
      bestFor: 'Enterprise businesses with complex sales processes needing long-form AI conversations',
      industries: ['Enterprise Sales', 'Financial Services', 'Real Estate', 'B2B Services'],
      features: {
        appointmentScheduling: true,
        multiLanguage: '20+ languages',
        crmIntegration: '25+ platforms',
        callTranscription: true,
        sentimentAnalysis: true,
        hipaaCompliant: true
      },
      link: 'https://www.air.ai',
      compareLink: '/compare/vextria-vs-air-ai'
    },
    {
      rank: 3,
      name: 'Bland AI',
      logo: '🤖',
      tagline: 'Best for Developer Customization',
      rating: 4.7,
      pricing: '$499/month + usage',
      setupTime: '24-48 hours',
      score: 88,
      pros: [
        'Powerful API for developers',
        'Voice cloning capabilities',
        'Real-time call monitoring',
        'Strong developer community',
        'Flexible customization',
        'Good documentation'
      ],
      cons: [
        'Requires technical knowledge',
        'Higher base price ($499/mo)',
        'No built-in multi-channel support',
        'Learning curve for non-developers'
      ],
      bestFor: 'Businesses with technical teams wanting AI receptionist with API customization',
      industries: ['Tech Companies', 'Healthcare', 'Professional Services', 'E-commerce'],
      features: {
        appointmentScheduling: true,
        multiLanguage: '30+ languages',
        crmIntegration: '30+ platforms',
        callTranscription: true,
        sentimentAnalysis: true,
        hipaaCompliant: true
      },
      link: 'https://www.bland.ai',
      compareLink: '/bland-ai-alternatives'
    },
    {
      rank: 4,
      name: 'Synthflow',
      logo: '🎙️',
      tagline: 'Best No-Code Visual Builder',
      rating: 4.4,
      pricing: '$299-799/month',
      setupTime: '48 hours',
      score: 85,
      pros: [
        'Visual workflow builder',
        'No coding required',
        'Good CRM integrations',
        'Active support community',
        'Appointment scheduling built-in',
        'Reasonable pricing'
      ],
      cons: [
        'Limited customization vs API platforms',
        'Occasional voice quality issues reported',
        'Fewer features than enterprise options',
        'Mid-range pricing'
      ],
      bestFor: 'Non-technical teams needing visual workflow builder for receptionist automation',
      industries: ['Small Medical', 'Salons', 'Law Firms', 'Consulting'],
      features: {
        appointmentScheduling: true,
        multiLanguage: '25+ languages',
        crmIntegration: '20+ platforms',
        callTranscription: true,
        sentimentAnalysis: false,
        hipaaCompliant: true
      },
      link: 'https://www.synthflow.ai'
    },
    {
      rank: 5,
      name: 'PolyAI',
      logo: '🏢',
      tagline: 'Best for Large Contact Centers',
      rating: 4.7,
      pricing: 'Custom ($5,000+/month)',
      setupTime: '2-4 weeks',
      score: 87,
      pros: [
        'Enterprise-grade scalability',
        'Multilingual (40+ languages)',
        'Custom voice models',
        'Advanced analytics',
        'Dedicated implementation team',
        'White-glove support'
      ],
      cons: [
        'Very expensive ($5,000+/mo)',
        'Long implementation (2-4 weeks)',
        'Overkill for small businesses',
        'Complex setup process',
        'Annual contract required'
      ],
      bestFor: 'Large enterprises with high-volume contact centers needing multilingual support',
      industries: ['Large Healthcare Systems', 'Banks', 'Telecom', 'Government'],
      features: {
        appointmentScheduling: true,
        multiLanguage: '40+ languages',
        crmIntegration: '50+ platforms',
        callTranscription: true,
        sentimentAnalysis: true,
        hipaaCompliant: true
      },
      link: 'https://www.poly.ai'
    },
    {
      rank: 6,
      name: 'Retell AI',
      logo: '⚡',
      tagline: 'Best SDK for Product Companies',
      rating: 4.6,
      pricing: '$499/month + API usage',
      setupTime: '3-7 days',
      score: 83,
      pros: [
        'Powerful SDK for embedding in products',
        'Real-time WebSocket streaming',
        'LLM agnostic architecture',
        'Excellent documentation',
        'Granular conversation control',
        'Active developer community'
      ],
      cons: [
        'Requires significant coding',
        'Not suitable for non-technical users',
        'No pre-built receptionist solution',
        'Higher total cost of ownership',
        'Maintenance required'
      ],
      bestFor: 'Software companies building AI receptionist features into their own products',
      industries: ['SaaS Products', 'Healthcare Software', 'CRM Platforms', 'Tech Companies'],
      features: {
        appointmentScheduling: false,
        multiLanguage: 'Custom',
        crmIntegration: 'Custom',
        callTranscription: true,
        sentimentAnalysis: 'Custom',
        hipaaCompliant: true
      },
      link: 'https://www.retellai.com',
      compareLink: '/compare/vextria-vs-retell-ai'
    }
  ];

  const selectionGuide = [
    {
      budget: 'Under $300/month',
      recommendation: 'Vextria AI ($199/mo)',
      reason: 'Best value with comprehensive features'
    },
    {
      budget: '$300-800/month',
      recommendation: 'Synthflow or Bland AI',
      reason: 'Balance of features and price'
    },
    {
      budget: '$800-2,000/month',
      recommendation: 'Air.ai',
      reason: 'Enterprise features, long conversations'
    },
    {
      budget: '$5,000+/month',
      recommendation: 'PolyAI',
      reason: 'Large-scale contact center solution'
    }
  ];

  return (
    <>
      <SEO
        title="6 Best AI Receptionist Software 2026: Rankings, Pricing & Features Compared"
        description="Top 6 AI receptionist software ranked and compared. Vextria AI (#1, $199/mo) to PolyAI ($5K+/mo). See features, pricing, setup time, and which solution fits your business size and budget."
        canonical="https://vextriaai.com/best-ai-receptionist-software"
        ogTitle="Best AI Receptionist Software 2026 | Top 6 Platforms Ranked"
        ogDescription="Comprehensive rankings of AI receptionist software. Compare Vextria AI, Air.ai, Bland AI, Synthflow, PolyAI & Retell AI. Find the perfect fit for your business."
        schema={[organizationSchema]}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Expert Rankings • Updated March 2026
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                Best AI Receptionist Software 2026
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Top 6 AI receptionist platforms ranked by features, pricing, ease of use, and customer reviews. Find the perfect solution for your business size and budget.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: <Phone className="w-6 h-6" />, stat: '6 Platforms', label: 'Reviewed' },
                { icon: <DollarSign className="w-6 h-6" />, stat: '$199-5K+', label: 'Price Range' },
                { icon: <Clock className="w-6 h-6" />, stat: '24hrs-4wks', label: 'Setup Time' },
                { icon: <Star className="w-6 h-6" />, stat: '4.4-4.8', label: 'Avg Rating' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 text-white">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{item.stat}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Quick Selection Guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl p-8 mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Quick Selection Guide by Budget</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {selectionGuide.map((guide, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">{guide.budget}</p>
                    <p className="font-bold text-gray-900 mb-2">{guide.recommendation}</p>
                    <p className="text-xs text-gray-600">{guide.reason}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rankings */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Top 6 AI Receptionist Software Ranked</h2>

            <div className="space-y-8">
              {rankings.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`bg-white rounded-2xl p-8 shadow-xl border-2 ${
                    platform.rank === 1
                      ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-white'
                      : 'border-gray-200'
                  } hover:border-purple-300 transition-all relative`}
                >
                  {/* Rank Badge */}
                  <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg ${
                    platform.rank === 1
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                      : platform.rank === 2
                      ? 'bg-gradient-to-br from-gray-400 to-gray-600'
                      : platform.rank === 3
                      ? 'bg-gradient-to-br from-orange-400 to-orange-600'
                      : 'bg-gradient-to-br from-purple-500 to-cyan-500'
                  }`}>
                    #{platform.rank}
                  </div>

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6 ml-8">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{platform.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                        <p className="text-purple-600 font-semibold">{platform.tagline}</p>
                        <div className="flex items-center gap-2 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(platform.rating)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">{platform.rating}/5.0</span>
                        </div>
                      </div>
                    </div>

                    {/* Score */}
                    <div className="text-center">
                      <div className={`text-4xl font-bold ${
                        platform.score >= 90 ? 'text-green-600' :
                        platform.score >= 85 ? 'text-blue-600' :
                        'text-purple-600'
                      }`}>
                        {platform.score}
                      </div>
                      <p className="text-xs text-gray-600">Overall Score</p>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="w-4 h-4 text-purple-600" />
                        <p className="text-xs text-gray-600">Pricing</p>
                      </div>
                      <p className="font-bold text-gray-900">{platform.pricing}</p>
                    </div>
                    <div className="bg-cyan-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-cyan-600" />
                        <p className="text-xs text-gray-600">Setup Time</p>
                      </div>
                      <p className="font-bold text-gray-900">{platform.setupTime}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-purple-600" />
                        <p className="text-xs text-gray-600">Industries</p>
                      </div>
                      <p className="font-bold text-gray-900 text-sm">{platform.industries.length} types</p>
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-green-700 mb-3 text-sm">✅ Strengths:</h4>
                      <ul className="space-y-2">
                        {platform.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-700 mb-3 text-sm">⚠️ Limitations:</h4>
                      <ul className="space-y-2">
                        {platform.cons.map((con, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-red-500 mt-0.5 flex-shrink-0">•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="bg-gradient-to-r from-purple-50 to-cyan-50 rounded-lg p-4 mb-6">
                    <p className="text-sm font-semibold text-purple-900 mb-2">🎯 Best For:</p>
                    <p className="text-sm text-purple-800 mb-3">{platform.bestFor}</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.industries.map((industry, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        {platform.features.appointmentScheduling ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <span className="w-4 h-4 text-red-500">✗</span>
                        )}
                        <span>Scheduling</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{platform.features.multiLanguage}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{platform.features.crmIntegration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {platform.features.callTranscription ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <span className="w-4 h-4 text-red-500">✗</span>
                        )}
                        <span>Transcription</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {platform.features.sentimentAnalysis ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <span className="w-4 h-4 text-red-500">✗</span>
                        )}
                        <span>Sentiment AI</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {platform.features.hipaaCompliant ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <span className="w-4 h-4 text-red-500">✗</span>
                        )}
                        <span>HIPAA</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <a href={platform.tryLink || platform.link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gradient-to-r from-purple-600 to-cyan-600">
                        Try {platform.name} <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                    {platform.compareLink && (
                      <a href={platform.compareLink}>
                        <Button variant="outline">
                          View Comparison
                        </Button>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Feature Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                    <th className="text-left p-4 font-semibold">Rank</th>
                    <th className="text-left p-4 font-semibold">Platform</th>
                    <th className="text-center p-4 font-semibold">Price</th>
                    <th className="text-center p-4 font-semibold">Setup</th>
                    <th className="text-center p-4 font-semibold">Rating</th>
                    <th className="text-center p-4 font-semibold">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.map((platform) => (
                    <tr key={platform.rank} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white ${
                          platform.rank === 1 ? 'bg-yellow-500' :
                          platform.rank === 2 ? 'bg-gray-400' :
                          platform.rank === 3 ? 'bg-orange-500' :
                          'bg-purple-500'
                        }`}>
                          #{platform.rank}
                        </span>
                      </td>
                      <td className="p-4 font-semibold text-gray-900">{platform.name}</td>
                      <td className="p-4 text-center text-sm">{platform.pricing}</td>
                      <td className="p-4 text-center text-sm">{platform.setupTime}</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-semibold">{platform.rating}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`font-bold ${
                          platform.score >= 90 ? 'text-green-600' :
                          platform.score >= 85 ? 'text-blue-600' :
                          'text-purple-600'
                        }`}>
                          {platform.score}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Selection Criteria */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">How We Ranked These Platforms</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  criterion: 'Ease of Use',
                  weight: '25%',
                  description: 'No-code setup, intuitive interface, and learning curve for non-technical users.',
                  icon: <Users className="w-6 h-6" />
                },
                {
                  criterion: 'Value for Money',
                  weight: '25%',
                  description: 'Pricing relative to features, no hidden fees, and ROI for different business sizes.',
                  icon: <DollarSign className="w-6 h-6" />
                },
                {
                  criterion: 'Features & Capabilities',
                  weight: '20%',
                  description: 'Appointment scheduling, multi-language, CRM integration, and AI quality.',
                  icon: <Zap className="w-6 h-6" />
                },
                {
                  criterion: 'Setup Speed',
                  weight: '15%',
                  description: 'Time to deployment, onboarding support, and technical requirements.',
                  icon: <Clock className="w-6 h-6" />
                },
                {
                  criterion: 'Reliability & Security',
                  weight: '10%',
                  description: 'Uptime, HIPAA compliance, SOC 2, data encryption, and customer support.',
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  criterion: 'Customer Reviews',
                  weight: '5%',
                  description: 'User ratings, testimonials, case studies, and real-world performance.',
                  icon: <Star className="w-6 h-6" />
                }
              ].map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {criterion.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900">{criterion.criterion}</h3>
                        <span className="text-sm font-bold text-purple-600">{criterion.weight}</span>
                      </div>
                      <p className="text-sm text-gray-600">{criterion.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: 'What is the best AI receptionist software for small businesses?',
                  answer: 'Vextria AI is the best for small businesses, starting at $199/month with 24-hour setup, no-code interface, and multi-channel support (voice, chat, WhatsApp). It offers the most value for SMBs without requiring technical expertise.'
                },
                {
                  question: 'How much does AI receptionist software cost?',
                  answer: 'Pricing ranges from $199/month (Vextria AI) to $5,000+/month (PolyAI). Most small business solutions cost $199-799/month, mid-market options $499-1,500/month, and enterprise $5,000+/month. Watch for setup fees, per-minute charges, and annual contracts.'
                },
                {
                  question: 'Can AI receptionist software integrate with my existing systems?',
                  answer: 'Yes, all top platforms integrate with major CRMs (Salesforce, HubSpot), calendars (Google, Outlook), and phone systems. Vextria AI offers 50+ integrations, Bland AI 30+, and enterprise platforms like PolyAI offer custom integrations.'
                },
                {
                  question: 'Is AI receptionist software HIPAA compliant for medical practices?',
                  answer: 'Yes, all platforms in our top 6 are HIPAA compliant. Vextria AI, Air.ai, Bland AI, Synthflow, PolyAI, and Retell AI all offer HIPAA-compliant solutions with BAAs for healthcare practices.'
                },
                {
                  question: 'How long does it take to set up AI receptionist software?',
                  answer: 'Setup time ranges from 24 hours (Vextria AI) to 4 weeks (PolyAI). No-code platforms like Vextria AI and Synthflow deploy in 24-48 hours. Developer platforms like Retell AI take 3-7 days. Enterprise solutions require 2-4 weeks.'
                },
                {
                  question: 'Do I need technical skills to use AI receptionist software?',
                  answer: 'Not for no-code platforms. Vextria AI and Synthflow are designed for non-technical users with visual builders. Bland AI and Air.ai require minimal technical knowledge. Only Retell AI requires significant coding expertise.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                >
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Guides & Comparisons</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Vextria AI vs Air.ai',
                  description: 'Compare #1 vs #2 ranked platforms',
                  link: '/compare/vextria-vs-air-ai',
                  icon: <Zap className="w-5 h-5" />
                },
                {
                  title: 'Bland AI Alternatives',
                  description: 'Top alternatives to Bland AI',
                  link: '/bland-ai-alternatives',
                  icon: <Phone className="w-5 h-5" />
                },
                {
                  title: 'All AI Voice Agent Platforms',
                  description: 'Complete directory of 11 platforms',
                  link: '/ai-voice-agent-alternatives',
                  icon: <Star className="w-5 h-5" />
                },
                {
                  title: 'AI Voice Agents for Healthcare',
                  description: 'HIPAA-compliant receptionist solutions',
                  link: '/medicare-ai-receptionist',
                  icon: <Shield className="w-5 h-5" />
                },
                {
                  title: 'AI Voice Agents for Restaurants',
                  description: 'DineMate AI for reservations & orders',
                  link: '/dinemate-ai-agent',
                  icon: <Phone className="w-5 h-5" />
                },
                {
                  title: 'AI Voice Agents for Salons',
                  description: 'GlamCare AI for luxury bookings',
                  link: '/glamcare-ai-agent',
                  icon: <Star className="w-5 h-5" />
                }
              ].map((resource, index) => (
                <motion.a
                  key={index}
                  href={resource.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="block bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-purple-300 transition-all group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <span className="text-purple-600 font-semibold text-sm flex items-center gap-2">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
