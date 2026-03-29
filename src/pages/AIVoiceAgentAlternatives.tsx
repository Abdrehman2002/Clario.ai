import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, DollarSign, Clock, Star, Zap, Shield, Code, Users, TrendingUp, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { organizationSchema } from '@/utils/schemas';

interface Platform {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  bestFor: string;
  pricing: string;
  setupTime: string;
  technicalLevel: 'No-code' | 'Low-code' | 'Developer';
  rating: number;
  pros: string[];
  cons: string[];
  link: string;
  compareLink?: string;
  category: 'Enterprise' | 'Mid-Market' | 'Small Business' | 'Developer';
}

export default function AIVoiceAgentAlternatives() {
  const platforms: Platform[] = [
    {
      name: 'Vextria AI',
      logo: '🎯',
      tagline: 'No-Code AI Voice & Chat Agents for SMBs',
      description: 'All-in-one AI platform with voice agents, chatbots, WhatsApp integration, and workflow automation designed for small to mid-sized businesses.',
      bestFor: 'Small businesses needing multiple AI channels (voice, chat, WhatsApp) with no-code setup',
      pricing: '$199-499/month flat rate',
      setupTime: '24 hours',
      technicalLevel: 'No-code',
      rating: 4.8,
      pros: [
        'Fastest setup (24 hours)',
        'Multiple AI channels in one platform',
        'No coding required',
        'Affordable for SMBs ($199-499/mo)',
        'WhatsApp voice note support'
      ],
      cons: [
        'Newer platform (less brand recognition)',
        'Smaller feature set than enterprise solutions',
        'Limited customization vs developer platforms'
      ],
      link: 'https://vextriaai.com',
      compareLink: '/compare/vextria-vs-air-ai',
      category: 'Small Business'
    },
    {
      name: 'Bland AI',
      logo: '🤖',
      tagline: 'Developer-Friendly AI Phone Calling',
      description: 'AI phone calling platform with advanced conversational AI, voice cloning, and powerful API for developers building custom voice applications.',
      bestFor: 'Businesses with technical teams needing AI voice automation with API access',
      pricing: '$499/month + usage',
      setupTime: '24-48 hours',
      technicalLevel: 'Low-code',
      rating: 4.7,
      pros: [
        'Powerful API for developers',
        'Voice cloning capabilities',
        'Advanced conversational AI',
        'Real-time call monitoring',
        'Strong developer community'
      ],
      cons: [
        'Requires technical knowledge',
        'Higher base price ($499/mo)',
        'No video or messaging features',
        'Learning curve for non-technical users'
      ],
      link: 'https://www.bland.ai',
      compareLink: '/compare/bland-ai-vs-dialpad',
      category: 'Mid-Market'
    },
    {
      name: 'Air.ai',
      logo: '🚀',
      tagline: '10+ Minute AI Phone Conversations',
      description: 'Enterprise AI phone agent that handles full-length sales and support calls with human-like conversations lasting 10-40 minutes.',
      bestFor: 'Enterprise sales and support teams needing long-form AI conversations',
      pricing: '$750-1,500/month',
      setupTime: '3-5 days',
      technicalLevel: 'No-code',
      rating: 4.5,
      pros: [
        'Handles long conversations (10-40 min)',
        'Human-like conversation quality',
        'Enterprise-grade reliability',
        'Dedicated success manager',
        'Industry-specific training'
      ],
      cons: [
        'Expensive ($750-1,500/mo)',
        '$2,500 setup fee',
        'Slower setup (3-5 days)',
        'Overkill for simple tasks',
        'Annual contract required'
      ],
      link: 'https://www.air.ai',
      compareLink: '/compare/vextria-vs-air-ai',
      category: 'Enterprise'
    },
    {
      name: 'Retell AI',
      logo: '⚡',
      tagline: 'Real-Time Voice AI SDK',
      description: 'Developer platform for building custom voice AI agents with WebSocket API, LLM integration, and real-time conversation control.',
      bestFor: 'Software companies building voice AI into their products',
      pricing: '$499/month + API usage',
      setupTime: '3-7 days (requires coding)',
      technicalLevel: 'Developer',
      rating: 4.6,
      pros: [
        'Powerful SDK for developers',
        'Real-time conversation control',
        'LLM agnostic (OpenAI, Anthropic, etc.)',
        'WebSocket streaming',
        'Excellent documentation'
      ],
      cons: [
        'Requires significant coding',
        'Not suitable for non-technical users',
        'No pre-built solutions',
        'Higher total cost of ownership',
        'Maintenance required'
      ],
      link: 'https://www.retellai.com',
      compareLink: '/compare/vextria-vs-retell-ai',
      category: 'Developer'
    },
    {
      name: 'Synthflow',
      logo: '🎙️',
      tagline: 'No-Code AI Voice Assistants',
      description: 'No-code platform for creating AI voice assistants with visual workflow builder, CRM integrations, and appointment scheduling.',
      bestFor: 'Non-technical teams needing voice automation with visual workflow builder',
      pricing: '$299-799/month',
      setupTime: '48 hours',
      technicalLevel: 'No-code',
      rating: 4.4,
      pros: [
        'Visual workflow builder',
        'No coding required',
        'Good CRM integrations',
        'Appointment scheduling built-in',
        'Active support community'
      ],
      cons: [
        'Mid-range pricing ($299-799/mo)',
        'Limited customization options',
        'Occasional voice quality issues',
        'Fewer features than enterprise options'
      ],
      link: 'https://www.synthflow.ai',
      category: 'Small Business'
    },
    {
      name: 'PolyAI',
      logo: '🏢',
      tagline: 'Enterprise Voice Assistants',
      description: 'Enterprise-grade conversational AI for large contact centers with multilingual support, custom voice models, and advanced analytics.',
      bestFor: 'Large enterprises with complex contact center requirements',
      pricing: 'Custom (typically $5,000+/month)',
      setupTime: '2-4 weeks',
      technicalLevel: 'Low-code',
      rating: 4.7,
      pros: [
        'Enterprise-grade scalability',
        'Multilingual (40+ languages)',
        'Custom voice models',
        'Advanced analytics',
        'Dedicated implementation team'
      ],
      cons: [
        'Very expensive ($5,000+/mo)',
        'Long implementation (2-4 weeks)',
        'Overkill for small businesses',
        'Requires annual contract',
        'Complex setup process'
      ],
      link: 'https://www.poly.ai',
      category: 'Enterprise'
    },
    {
      name: 'Dialpad',
      logo: '☎️',
      tagline: 'Unified Communications with AI',
      description: 'Business communications platform with voice, video, messaging, and basic AI features like transcription and analytics.',
      bestFor: 'Teams needing unified communications (not primarily AI automation)',
      pricing: '$15-25/user/month',
      setupTime: '1-2 weeks',
      technicalLevel: 'No-code',
      rating: 4.3,
      pros: [
        'Complete unified communications',
        'Video conferencing included',
        'Team messaging features',
        'Scales with team size',
        'Established brand'
      ],
      cons: [
        'Not true AI automation',
        'Per-user pricing adds up quickly',
        'Basic AI features only',
        'Annual contract required',
        'Additional fees for phone numbers'
      ],
      link: 'https://www.dialpad.com',
      compareLink: '/compare/bland-ai-vs-dialpad',
      category: 'Mid-Market'
    },
    {
      name: 'Vocode',
      logo: '💻',
      tagline: 'Open-Source Voice AI Framework',
      description: 'Open-source Python framework for building voice AI agents with full control over speech recognition, synthesis, and conversation logic.',
      bestFor: 'Developers wanting full control and customization with open-source tools',
      pricing: 'Free (open-source) + infrastructure costs',
      setupTime: '1-2 weeks (requires development)',
      technicalLevel: 'Developer',
      rating: 4.5,
      pros: [
        'Open-source and free',
        'Complete customization',
        'Active developer community',
        'No vendor lock-in',
        'Python-based'
      ],
      cons: [
        'Requires significant development',
        'No support (community only)',
        'Infrastructure costs separate',
        'Maintenance burden',
        'Not suitable for non-developers'
      ],
      link: 'https://www.vocode.dev',
      category: 'Developer'
    },
    {
      name: 'Parloa',
      logo: '🌍',
      tagline: 'Enterprise Contact Center AI',
      description: 'German-based enterprise voice AI platform for contact centers with strong European data compliance and multilingual support.',
      bestFor: 'European enterprises needing GDPR-compliant contact center AI',
      pricing: 'Custom (typically $3,000+/month)',
      setupTime: '2-3 weeks',
      technicalLevel: 'Low-code',
      rating: 4.4,
      pros: [
        'Strong GDPR compliance',
        'European data centers',
        'Multilingual support',
        'Contact center focused',
        'Enterprise support'
      ],
      cons: [
        'Expensive ($3,000+/mo)',
        'Long implementation time',
        'Limited presence outside Europe',
        'Complex pricing structure',
        'Overkill for SMBs'
      ],
      link: 'https://www.parloa.com',
      category: 'Enterprise'
    },
    {
      name: 'Eleven Labs (Voice AI)',
      logo: '🔊',
      tagline: 'AI Voice Generation & Cloning',
      description: 'Text-to-speech and voice cloning API for developers. Not a complete voice agent platform, but provides realistic voice synthesis.',
      bestFor: 'Developers needing high-quality text-to-speech for custom applications',
      pricing: '$5-99/month (API only)',
      setupTime: 'API integration time',
      technicalLevel: 'Developer',
      rating: 4.8,
      pros: [
        'Best-in-class voice quality',
        'Affordable API pricing',
        'Fast voice cloning',
        'Multiple languages',
        'Easy API integration'
      ],
      cons: [
        'Not a complete voice agent (TTS only)',
        'Requires building your own logic',
        'No conversation management',
        'Developer-only solution',
        'Must combine with other tools'
      ],
      link: 'https://elevenlabs.io',
      category: 'Developer'
    },
    {
      name: 'Kore.ai',
      logo: '🏭',
      tagline: 'Enterprise Conversational AI Platform',
      description: 'Full-stack conversational AI platform for enterprises with voice, chat, and automation across channels.',
      bestFor: 'Large enterprises needing omnichannel conversational AI',
      pricing: 'Custom (typically $10,000+/month)',
      setupTime: '4-8 weeks',
      technicalLevel: 'Low-code',
      rating: 4.2,
      pros: [
        'Complete enterprise platform',
        'Omnichannel (voice, chat, web)',
        'Advanced analytics',
        'Scalable architecture',
        'Dedicated support'
      ],
      cons: [
        'Very expensive ($10,000+/mo)',
        'Long implementation (4-8 weeks)',
        'Steep learning curve',
        'Enterprise-only focus',
        'Complex pricing'
      ],
      link: 'https://www.kore.ai',
      category: 'Enterprise'
    }
  ];

  const categoryColors = {
    'Small Business': 'bg-green-100 text-green-700 border-green-200',
    'Mid-Market': 'bg-blue-100 text-blue-700 border-blue-200',
    'Enterprise': 'bg-purple-100 text-purple-700 border-purple-200',
    'Developer': 'bg-orange-100 text-orange-700 border-orange-200'
  };

  const technicalLevelColors = {
    'No-code': 'bg-green-100 text-green-700',
    'Low-code': 'bg-blue-100 text-blue-700',
    'Developer': 'bg-red-100 text-red-700'
  };

  return (
    <>
      <SEO
        title="11 Best AI Voice Agent Alternatives 2026: Complete Comparison Guide"
        description="Compare 11 top AI voice agent platforms: Vextria AI, Bland AI, Air.ai, Retell AI, Synthflow & more. See pricing, features, setup time, and which platform fits your business needs."
        canonical="https://vextriaai.com/ai-voice-agent-alternatives"
        ogTitle="11 Best AI Voice Agent Platforms 2026 | Complete Comparison"
        ogDescription="Detailed comparison of AI voice agent platforms with pricing, features, and use cases. Find the perfect solution for your business – from no-code to enterprise."
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
                <Star className="w-4 h-4" />
                Updated March 2026 • 11 Platforms Compared
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                Best AI Voice Agent Alternatives 2026
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Complete guide to AI voice agent platforms. Compare pricing, features, setup time, and technical requirements to find the perfect solution for your business.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: <Phone className="w-6 h-6" />, stat: '11 Platforms', label: 'Compared' },
                { icon: <DollarSign className="w-6 h-6" />, stat: '$5-10K+', label: 'Price Range' },
                { icon: <Clock className="w-6 h-6" />, stat: '24hrs-8wks', label: 'Setup Time' },
                { icon: <Users className="w-6 h-6" />, stat: 'All Sizes', label: 'Business Types' }
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

            {/* Selection Guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl p-8 mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Quick Selection Guide</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-green-600 font-bold mb-2">🌱 Small Business</div>
                  <p className="text-sm text-gray-600 mb-3">No-code, affordable, fast setup</p>
                  <p className="text-xs font-semibold text-gray-900">Vextria AI, Synthflow</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-blue-600 font-bold mb-2">💼 Mid-Market</div>
                  <p className="text-sm text-gray-600 mb-3">Balance of features & price</p>
                  <p className="text-xs font-semibold text-gray-900">Bland AI, Dialpad</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-purple-600 font-bold mb-2">🏢 Enterprise</div>
                  <p className="text-sm text-gray-600 mb-3">Scalable, feature-rich, support</p>
                  <p className="text-xs font-semibold text-gray-900">Air.ai, PolyAI, Kore.ai</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-orange-600 font-bold mb-2">👨‍💻 Developer</div>
                  <p className="text-sm text-gray-600 mb-3">API-first, customizable, code</p>
                  <p className="text-xs font-semibold text-gray-900">Retell AI, Vocode, Eleven Labs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Listings */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">All AI Voice Agent Platforms</h2>

            <div className="space-y-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: Logo & Basic Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-5xl">{platform.logo}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
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
                            <span className="text-sm text-gray-600 ml-1">{platform.rating}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-purple-600 font-semibold mb-3">{platform.tagline}</p>

                      <div className="space-y-2 mb-4">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[platform.category]}`}>
                          {platform.category}
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ml-2 ${technicalLevelColors[platform.technicalLevel]}`}>
                          {platform.technicalLevel}
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-gray-500" />
                          <span className="font-semibold">{platform.pricing}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>{platform.setupTime} setup</span>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-6">
                        <a href={platform.link} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600">
                            Visit Site <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </a>
                        {platform.compareLink && (
                          <a href={platform.compareLink}>
                            <Button size="sm" variant="outline">
                              Compare
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Detailed Info */}
                    <div className="lg:w-2/3">
                      <p className="text-gray-700 mb-4">{platform.description}</p>

                      <div className="bg-purple-50 rounded-lg p-4 mb-4">
                        <p className="text-sm font-semibold text-purple-900 mb-1">Best For:</p>
                        <p className="text-sm text-purple-800">{platform.bestFor}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-green-700 mb-2 text-sm">✅ Pros:</p>
                          <ul className="space-y-1">
                            {platform.pros.map((pro, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-red-700 mb-2 text-sm">⚠️ Cons:</p>
                          <ul className="space-y-1">
                            {platform.cons.map((con, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-red-500 mt-0.5 flex-shrink-0">•</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Summary */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Quick Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                    <th className="text-left p-4 font-semibold">Platform</th>
                    <th className="text-center p-4 font-semibold">Category</th>
                    <th className="text-center p-4 font-semibold">Tech Level</th>
                    <th className="text-center p-4 font-semibold">Starting Price</th>
                    <th className="text-center p-4 font-semibold">Setup Time</th>
                    <th className="text-center p-4 font-semibold">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {platforms.map((platform, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-900">{platform.name}</td>
                      <td className="p-4 text-center">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${categoryColors[platform.category]}`}>
                          {platform.category}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${technicalLevelColors[platform.technicalLevel]}`}>
                          {platform.technicalLevel}
                        </span>
                      </td>
                      <td className="p-4 text-center text-sm">{platform.pricing}</td>
                      <td className="p-4 text-center text-sm">{platform.setupTime}</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-semibold">{platform.rating}</span>
                        </div>
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
            <h2 className="text-3xl font-bold mb-12 text-center">How to Choose the Right AI Voice Agent</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Budget & Pricing Model',
                  icon: <DollarSign className="w-6 h-6" />,
                  content: 'Consider total cost including setup fees, monthly base, per-minute usage, and hidden costs. Flat-rate ($199-499/mo) vs per-user ($15-25/user) vs enterprise (custom).',
                  color: 'purple'
                },
                {
                  title: 'Technical Expertise',
                  icon: <Code className="w-6 h-6" />,
                  content: 'No-code (Vextria, Synthflow) for non-technical teams. Low-code (Bland AI, PolyAI) for some customization. Developer platforms (Retell, Vocode) require coding.',
                  color: 'cyan'
                },
                {
                  title: 'Setup Time & Speed',
                  icon: <Clock className="w-6 h-6" />,
                  content: 'Fast (24-48 hrs) for no-code platforms. Medium (3-7 days) for API integrations. Slow (2-8 weeks) for enterprise implementations with custom training.',
                  color: 'purple'
                },
                {
                  title: 'Business Size & Scale',
                  icon: <TrendingUp className="w-6 h-6" />,
                  content: 'SMBs: $199-799/mo no-code solutions. Mid-market: $499-1,500/mo with integrations. Enterprise: $5,000+/mo with dedicated support and SLAs.',
                  color: 'cyan'
                },
                {
                  title: 'Use Case Complexity',
                  icon: <Zap className="w-6 h-6" />,
                  content: 'Simple tasks (scheduling, FAQs): Any platform works. Complex sales (10+ min calls): Air.ai or PolyAI. Custom logic: Retell AI or Vocode.',
                  color: 'purple'
                },
                {
                  title: 'Compliance & Security',
                  icon: <Shield className="w-6 h-6" />,
                  content: 'HIPAA for healthcare (most have it). GDPR for Europe (Parloa strong). SOC 2 for enterprise. Check data residency requirements.',
                  color: 'cyan'
                }
              ].map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-r ${
                    criteria.color === 'purple'
                      ? 'from-purple-500 to-pink-500'
                      : 'from-cyan-500 to-blue-500'
                  } text-white`}>
                    {criteria.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{criteria.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{criteria.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Comparisons & Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Vextria AI vs Air.ai',
                  description: 'Compare affordable no-code vs premium enterprise',
                  link: '/compare/vextria-vs-air-ai',
                  icon: <Zap className="w-5 h-5" />
                },
                {
                  title: 'Bland AI vs Dialpad',
                  description: 'AI automation vs unified communications',
                  link: '/compare/bland-ai-vs-dialpad',
                  icon: <Phone className="w-5 h-5" />
                },
                {
                  title: 'Vextria AI vs Retell AI',
                  description: 'No-code platform vs developer SDK',
                  link: '/compare/vextria-vs-retell-ai',
                  icon: <Code className="w-5 h-5" />
                },
                {
                  title: 'Bland AI Alternatives',
                  description: 'Top alternatives to Bland AI for voice automation',
                  link: '/bland-ai-alternatives',
                  icon: <Users className="w-5 h-5" />
                },
                {
                  title: 'Best AI Receptionist Software',
                  description: 'Top AI receptionist platforms ranked',
                  link: '/best-ai-receptionist-software',
                  icon: <Star className="w-5 h-5" />
                },
                {
                  title: 'AI Voice Agents for Small Business',
                  description: 'Affordable solutions under $500/month',
                  link: '/voice-agents',
                  icon: <DollarSign className="w-5 h-5" />
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
