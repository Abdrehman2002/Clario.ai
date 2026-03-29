// Organization Schema (for all pages)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vextria AI",
  "url": "https://vextriaai.com",
  "logo": "https://vextriaai.com/v.png",
  "description": "24/7 AI Voice Agents and Chatbots for small businesses. Automate customer calls, live chat, and workflows.",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "info@vextriaai.com",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/vextria-ai-automations/",
    "https://twitter.com/clario_ai"
  ]
};

// Product Schema - Voice Agents
export const voiceAgentsProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Vextria AI Voice Agents",
  "description": "24/7 AI-powered voice receptionist that answers calls, books appointments, and qualifies leads automatically",
  "brand": {
    "@type": "Brand",
    "name": "Vextria AI"
  },
  "offers": {
    "@type": "Offer",
    "price": "199",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://vextriaai.com/voice-agents"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "89"
  }
};

// Product Schema - AI Chatbots
export const chatbotsProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Vextria AI Chatbots",
  "description": "AI-powered chatbots for websites that provide instant answers, capture leads, and boost conversions 24/7",
  "brand": {
    "@type": "Brand",
    "name": "Vextria AI"
  },
  "offers": {
    "@type": "Offer",
    "price": "149",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://vextriaai.com/ai-chatbots"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "76"
  }
};

// Product Schema - Workflow Automation
export const workflowAutomationProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Vextria AI Workflow Automation",
  "description": "Connect your apps and automate repetitive tasks. Integrate CRMs, calendars, and communication tools seamlessly.",
  "brand": {
    "@type": "Brand",
    "name": "Vextria AI"
  },
  "offers": {
    "@type": "Offer",
    "price": "99",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://vextriaai.com/workflow-automation"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "112"
  }
};

// FAQ Schema - General
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Vextria AI voice agent work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vextria AI voice agents use advanced natural language processing to handle phone calls 24/7. They answer customer questions, book appointments, qualify leads, and transfer calls when needed."
      }
    },
    {
      "@type": "Question",
      "name": "What is the pricing for Vextria AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vextria AI Voice Agents start at $199/month for unlimited calls. AI Chatbots start at $149/month. Workflow Automation starts at $99/month. All plans include a 14-day free trial."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize the AI agent's voice and personality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Vextria AI agents are fully customizable. You can choose voice types, accents, speaking speed, and customize the personality to match your brand."
      }
    },
    {
      "@type": "Question",
      "name": "Does Vextria AI integrate with my existing tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Vextria AI integrates with popular CRMs (Salesforce, HubSpot), calendars (Google Calendar, Outlook), and communication tools (Slack, WhatsApp, SMS)."
      }
    }
  ]
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vextria AI",
  "image": "https://vextriaai.com/v.png",
  "email": "info@vextriaai.com",
  "url": "https://vextriaai.com",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
};
