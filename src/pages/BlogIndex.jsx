import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import BlogCard from '../components/BlogCard.jsx';
import { blogPosts, blogCategories, getFeaturedPost } from '../data/blog.js';
import { formatDate } from '../utils/formatDate.js';

export default function BlogIndex() {
  const [category, setCategory] = useState('Todos');

  const filtered =
    category === 'Todos'
      ? blogPosts
      : blogPosts.filter((p) => p.category === category);

  const featured = getFeaturedPost();

  return (
    <div className="bg-background min-h-screen pt-16">
      <Seo
        title="Blog"
        description="Consejos de grooming, estilo masculino, productos y cultura de barbería. El blog de Signature Salón Masculino."
        path="/blog"
      />

      {/* Featured article */}
      {featured && (
        <section className="w-full py-12 bg-background">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
            <article className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant shadow-xl group">
              <div className="lg:col-span-7 relative h-80 lg:h-auto bg-surface-container overflow-hidden">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-label-sm text-secondary uppercase tracking-wider">
                    {featured.categoryLabel}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-container-low/80 pointer-events-none" />
              </div>
              <div className="lg:col-span-5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-label-sm text-secondary uppercase mb-3">
                    <span className="text-primary font-bold">{featured.categoryLabel}</span>
                    <span>•</span>
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  </div>
                  <h2 className="font-display text-2xl text-primary uppercase font-bold leading-tight mb-4 group-hover:text-secondary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-body-md text-secondary leading-relaxed mb-6">{featured.excerpt}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-primary">{featured.author}</span>
                  <Link to={`/blog/${featured.slug}`} className="px-4 py-2 btn-chrome font-label-md uppercase tracking-wider rounded-lg">
                    Leer artículo
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Header */}
      <section className="w-full py-16 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">Grooming &amp; Estilo</span>
          <h1 className="font-display text-4xl lg:text-5xl text-primary uppercase font-light mt-3 mb-4">
            Blog
          </h1>
          <p className="text-body-md text-secondary max-w-lg">
            Todo lo que necesitás saber sobre cortes, barba, productos y el mundo del grooming masculino.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="w-full py-6 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-lg border text-label-sm uppercase tracking-wider transition-all ${
                  category === cat
                    ? 'bg-primary text-background border-primary'
                    : 'bg-surface-container border-outline-variant text-secondary hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          {filtered.length === 0 ? (
            <p className="text-body-md text-secondary">No hay artículos en esta categoría.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
