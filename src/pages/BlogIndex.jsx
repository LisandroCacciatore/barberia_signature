import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import BlogCard from '../components/BlogCard.jsx';
import { blogCategories, getPostsByCategory, getFeaturedPost } from '../data/blog.js';
import { formatDate } from '../utils/formatDate.js';

export default function BlogIndex() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const hash = location.hash.replace('#', '').toLowerCase();
    const validCategories = blogCategories?.map((c) => c.id) || [];
    if (hash && validCategories.includes(hash)) {
      setActiveCategory(hash);
    }
  }, [location.hash]);

  const posts = useMemo(() => {
    const filtered = getPostsByCategory(activeCategory) || [];
    return [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [activeCategory]);

  const featured = activeCategory === 'all' ? getFeaturedPost() : null;
  const others = featured ? posts.filter((p) => p.slug !== featured.slug) : posts;

  return (
    <div className="bg-background min-h-screen">
      <Seo title="Blog" description="Artículos de visagismo, dermocosmética y estilo masculino." path="/blog" />

      <section className="relative w-full bg-surface-container-lowest border-b border-outline-variant py-16">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl lg:text-5xl text-primary uppercase font-light tracking-wider leading-tight">
              Estilo & Cultura Masculina
            </h1>
            <p className="text-body-lg text-secondary mt-4 max-w-2xl">
              Artículos de visagismo morfopsicológico, arquitectura capilar, dermocosmética y la vida en Pichincha, Rosario.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
            {blogCategories?.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => { setActiveCategory(cat.id); navigate(cat.id === 'all' ? '/blog' : `/blog#${cat.id}`, { replace: true }); }}
                className={`px-4 py-1.5 rounded-full font-label-md uppercase tracking-wider whitespace-nowrap transition-all border ${activeCategory === cat.id ? 'bg-primary text-background border-primary font-bold' : 'bg-surface-container border-outline-variant text-secondary hover:text-primary'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {featured && (
        <section className="w-full py-12 bg-background">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <article className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant shadow-xl group">
              <div className="lg:col-span-7 relative h-80 lg:h-auto bg-surface-container overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="lg:col-span-5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-label-sm text-secondary uppercase mb-3">
                    <span className="text-primary font-bold">{featured.categoryLabel}</span>
                    <span>•</span>
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  </div>
                  <h2 className="font-display text-2xl text-primary uppercase font-bold leading-tight mb-4">{featured.title}</h2>
                  <p className="text-body-md text-secondary leading-relaxed mb-6 line-clamp-4">{featured.excerpt}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-primary font-semibold">{featured.author}</span>
                  <Link to={`/blog/${featured.slug}`} className="px-4 py-2 btn-chrome font-label-md uppercase tracking-wider rounded-lg">Leer artículo</Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="w-full py-12 bg-background">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others?.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
