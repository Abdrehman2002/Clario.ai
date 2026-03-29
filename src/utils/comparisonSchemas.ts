import { organizationSchema } from './schemas';

// ItemList schema for alternatives pages
export const createAlternativesSchema = (
  name: string,
  description: string,
  items: Array<{
    name: string;
    url: string;
    description: string;
    position: number;
  }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  description,
  numberOfItems: items.length,
  itemListElement: items.map((item) => ({
    '@type': 'ListItem',
    position: item.position,
    item: {
      '@type': 'SoftwareApplication',
      name: item.name,
      url: item.url,
      description: item.description,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web'
    }
  }))
});

// FAQ schema for comparison pages
export const createComparisonFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

// Product comparison schema
export const createComparisonSchema = (
  productA: {
    name: string;
    url: string;
    price: string;
    rating: number;
    description: string;
  },
  productB: {
    name: string;
    url: string;
    price: string;
    rating: number;
    description: string;
  }
) => [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productA.name,
    url: productA.url,
    description: productA.description,
    offers: {
      '@type': 'Offer',
      price: productA.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: productA.rating,
      bestRating: '5',
      worstRating: '1',
      ratingCount: '100'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productB.name,
    url: productB.url,
    description: productB.description,
    offers: {
      '@type': 'Offer',
      price: productB.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: productB.rating,
      bestRating: '5',
      worstRating: '1',
      ratingCount: '100'
    }
  }
];

// Review schema for best-of rankings
export const createRankingSchema = (
  rankings: Array<{
    name: string;
    url: string;
    rating: number;
    price: string;
    description: string;
    position: number;
  }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best AI Receptionist Software 2026',
  description: 'Expert rankings of top AI receptionist platforms',
  numberOfItems: rankings.length,
  itemListElement: rankings.map((item) => ({
    '@type': 'ListItem',
    position: item.position,
    item: {
      '@type': 'Product',
      name: item.name,
      url: item.url,
      description: item.description,
      offers: {
        '@type': 'Offer',
        price: item.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: item.rating,
        bestRating: '5',
        worstRating: '1',
        ratingCount: '100'
      }
    }
  }))
});

// BreadcrumbList schema for comparison pages
export const createComparisonBreadcrumbSchema = (
  comparisonName: string,
  comparisonUrl: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://vextriaai.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Comparisons',
      item: 'https://vextriaai.com/compare'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: comparisonName,
      item: comparisonUrl
    }
  ]
});

// How-to schema for selection guides
export const createSelectionGuideSchema = (
  name: string,
  description: string,
  steps: Array<{ name: string; text: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name,
  description,
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text
  }))
});

// Export all schemas together
export { organizationSchema };
