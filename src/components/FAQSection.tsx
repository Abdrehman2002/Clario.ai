"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Vextria AI and how does it work?",
    answer: "Vextria AI is an advanced AI automation platform that deploys intelligent voice agents and chatbots to handle customer interactions, appointments, and lead qualification. Our AI agents integrate seamlessly with your existing systems to automate repetitive tasks and improve business efficiency."
  },
  {
    question: "How long does it take to set up?",
    answer: "Most implementations are completed within 1-2 weeks. This includes custom AI agent training, system integration, and thorough testing. We provide full support throughout the setup process to ensure a smooth transition."
  },
  {
    question: "Can the AI handle complex customer queries?",
    answer: "Yes! Our AI agents are trained on your specific business data and can handle complex, multi-step conversations. They understand context, remember conversation history, and escalate to human agents when needed for truly exceptional cases."
  },
  {
    question: "What integrations do you support?",
    answer: "We integrate with major CRMs (Salesforce, HubSpot, Zoho), communication platforms (Twilio, Vonage), calendaring systems (Google Calendar, Calendly), and can connect to custom APIs. If you use it, we can likely integrate with it."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption, comply with GDPR and SOC 2 standards, and never share your data with third parties. All conversations and customer data are securely stored and can be deleted upon request."
  },
  {
    question: "What kind of ROI can I expect?",
    answer: "Most clients see a 40% increase in revenue within 3-6 months through improved lead capture, 24/7 availability, and reduced operational costs. Our AI agents handle routine tasks at a fraction of the cost of human staff while maintaining quality."
  },
  {
    question: "Do I need technical knowledge to use Vextria AI?",
    answer: "Not at all! Our platform is designed for business users. We provide an intuitive dashboard where you can monitor performance, adjust settings, and view analytics—no coding required. Our team handles all technical setup and maintenance."
  },
  {
    question: "Can I try it before committing?",
    answer: "Yes! We offer live demo calls where you can experience our AI agents firsthand. Simply select an agent above and start a conversation. We also provide a 30-day pilot program for businesses that want to test the full system."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <section
      id="faq"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-black via-[#0A0510] to-black"
      onMouseMove={handleMouseMove}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,97,255,0.08),transparent_50%)]"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(to right, #7B61FF 1px, transparent 1px),
          linear-gradient(to bottom, #7B61FF 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Radial gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(123, 97, 255, 0.15), transparent 60%)`
        }}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4 md:mb-6">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#A16BFF] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full border border-[#7B61FF]/30 backdrop-blur-sm"
              style={{ background: 'rgba(123, 97, 255, 0.1)' }}>
              FAQ
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2">
            Questions?
          </h2>
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 px-2">
            <span className="bg-gradient-to-r from-[#7B61FF] via-[#8B5CF6] to-[#A16BFF] bg-clip-text text-transparent">
              We've got answers.
            </span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Everything you need to know about Vextria AI and how we can<br className="hidden md:block" />
            transform your business with intelligent automation.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-[#7B61FF]/30 transition-all duration-300"
                style={{
                  boxShadow: openIndex === index ? '0 0 30px rgba(123, 97, 255, 0.2)' : 'none'
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#A16BFF] transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#8B5CF6] flex items-center justify-center transition-transform duration-300"
                    style={{
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed mt-4 pt-4 border-t border-white/10">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Still have questions? We're here to help.
          </p>
          <motion.a
            href="https://calendly.com/abdurrehman1711/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #7B61FF 0%, #6B4CFF 100%)',
              boxShadow: '0 0 30px rgba(123, 97, 255, 0.5)',
              color: '#FFFFFF'
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(123, 97, 255, 0.7)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Call
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
