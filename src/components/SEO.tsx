import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  schema?: object | object[];
  noindex?: boolean;
  datePublished?: string;
  dateModified?: string;
}

export function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://vextriaai.com/v.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schema,
  noindex = false,
  datePublished,
  dateModified
}: SEOProps) {
  const fullTitle = title.includes('Vextria') ? title : `${title} | Vextria AI`;
  const robotsContent = noindex
    ? 'noindex, follow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  // Add WebPage schema with dates if provided
  const webPageSchema = (datePublished || dateModified) ? {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": canonical,
    "name": fullTitle,
    "description": description,
    ...(datePublished && { "datePublished": datePublished }),
    ...(dateModified && { "dateModified": dateModified })
  } : null;

  const allSchemas = [
    ...(schema ? (Array.isArray(schema) ? schema : [schema]) : []),
    ...(webPageSchema ? [webPageSchema] : [])
  ];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Vextria AI" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={ogTitle || fullTitle} />
      <meta property="twitter:description" content={ogDescription || description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {allSchemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
        </script>
      )}
    </Helmet>
  );
}