import { Helmet } from 'react-helmet-async';
import { site } from '../data/site.js';

export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pichincha Bis 176',
      addressLocality: 'Rosario',
      addressRegion: 'Santa Fe',
      addressCountry: 'AR',
    },
    openingHours: ['Mo-Fr 09:00-20:00', 'Sa 09:00-18:00'],
    priceRange: 'ARS 6000–18500',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '312',
    },
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

