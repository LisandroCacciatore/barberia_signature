export const blogCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'visagismo', label: 'Tendencias & Visagismo' },
  { id: 'barba', label: 'Cuidado de Barba' },
  { id: 'dermocosmetica', label: 'Dermocosmética' },
  { id: 'afeitado', label: 'Técnicas de Afeitado' },
  { id: 'lifestyle', label: 'Lifestyle & Pichincha' },
];

export const blogPosts = [
  {
    slug: 'visagismo-nordico-morfopsicologia',
    title: 'Visagismo Nórdico y Morfopsicología: cómo diseñar el corte exacto según tu estructura facial',
    excerpt:
      'Dejamos atrás la era del corte genérico por catálogo. Analizamos ángulos mandibulares, proyección cigomática y remolino occipital para tallar una silueta que equilibre proporciones.',
    category: 'visagismo',
    categoryLabel: 'Tendencias & Visagismo',
    readingTime: '6 min',
    date: '2025-02-18',
    author: 'Valentin',
    featured: true,
    isPlaceholder: true,
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'tendencias-2026-texturas-organicas',
    title: 'Tendencias 2026: por qué las líneas rígidas dan paso a texturas orgánicas',
    excerpt:
      'El fin de la gomina plástica y el degradado hipermarcado. El hombre actual prioriza movilidad natural, secado al aire y tridimensionalidad con tijera de entresacar japonesa.',
    category: 'visagismo',
    categoryLabel: 'Tendencias & Visagismo',
    readingTime: '4 min',
    date: '2025-02-12',
    author: 'Luciano',
    isPlaceholder: true,
    image:
      'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'cuidado-barba-climas-humedos',
    title: 'Cuidado de barba en climas húmedos: aceites de cedro vs. bálsamos matificantes',
    excerpt:
      'El Río Paraná impone desafíos de encrespamiento y poro abierto únicos en Rosario. La diferencia de densidad lipídica para mantener la cutícula sellada sin brillo graso.',
    category: 'barba',
    categoryLabel: 'Cuidado de Barba',
    readingTime: '5 min',
    date: '2025-02-08',
    author: 'Valentin',
    isPlaceholder: true,
    image:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'dermapen-limpieza-ozono-piel-masculina',
    title: 'Dermapen y limpieza con ozono: por qué la piel masculina exige protocolos clínicos',
    excerpt:
      'Con estrato córneo 25% más grueso y mayor vascularización, los tratamientos estándar no penetran. El protocolo de bioestimulación colágena para ejecutivos.',
    category: 'dermocosmetica',
    categoryLabel: 'Dermocosmética',
    readingTime: '7 min',
    date: '2025-02-01',
    author: 'Equipo Signature',
    isPlaceholder: true,
    image:
      'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'navaja-kamison-afeitado-clasico',
    title: 'La navaja Kamison: el arte japonés del afeitado clásico sin microirritación',
    excerpt:
      'A diferencia de las navajas occidentales articuladas, la hoja fija oriental ofrece retroalimentación háptica milimétrica. Cómo protege el manto hidrolipídico facial.',
    category: 'afeitado',
    categoryLabel: 'Técnicas de Afeitado',
    readingTime: '4 min',
    date: '2025-01-25',
    author: 'Luciano',
    isPlaceholder: true,
    image:
      'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'guia-pichincha-circuito-gastronomico',
    title: 'Guía de Pichincha: circuito gastronómico y diseño para complementar tu visita',
    excerpt:
      'Un recorrido por cafés de especialidad de tostado nórdico, vinotecas boutique de partidas limitadas y galerías de arquitectura que dialogan con el espíritu del salón.',
    category: 'lifestyle',
    categoryLabel: 'Lifestyle & Pichincha',
    readingTime: '6 min',
    date: '2025-01-18',
    author: 'Equipo Signature',
    isPlaceholder: true,
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'camuflaje-canas-sutil-coloracion-translucida',
    title: 'Camuflaje de canas sutil: coloración translúcida para mantener la madurez con frescura',
    excerpt:
      'Por qué el teñido tradicional en bloque envejece las facciones. La técnica de matiz ceniza translúcido reduce el contraste blanco en un 60% sin raíces evidentes.',
    category: 'visagismo',
    categoryLabel: 'Tendencias & Visagismo',
    readingTime: '5 min',
    date: '2025-01-10',
    author: 'Valentin',
    isPlaceholder: true,
    image:
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80',
  },
];

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
export const getPostsByCategory = (categoryId) =>
  categoryId === 'all' ? blogPosts : blogPosts.filter((p) => p.category === categoryId);
export const getRelatedPosts = (slug, category, limit = 3) =>
  blogPosts.filter((p) => p.slug !== slug && p.category === category).slice(0, limit);
export const getSortedPosts = () =>
  [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
export const getFeaturedPost = () => blogPosts.find((p) => p.featured) || getSortedPosts()[0];