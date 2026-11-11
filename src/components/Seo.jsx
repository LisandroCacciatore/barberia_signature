import { Helmet } from 'react-helmet-async';
import { site } from '../data/site.js';

export default function Seo({ title, description, path = '', image }) {
  const fullTitle = title ? `${title} | Signature Salón Masculino` : site.name;
  const fullUrl = `${site.url}${path}`;
  const ogImage = image || `${site.url}/og-default.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || site.description} />
      <link rel="canonical" href={fullUrl} />
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || site.description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_AR" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || site.description} />
    </Helmet>
  );
}

