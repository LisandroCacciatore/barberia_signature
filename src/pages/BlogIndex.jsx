import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import BlogCard from '../components/BlogCard.jsx';
import { blogPosts, blogCategories } from '../data/blog.js';

export default function BlogIndex() {
  const [category, setCategory] = useState('Todos');

  const filtered =
    category === 'Todos'
      ? blogPosts
      : blogPosts.filter((p) => p.category === category);

  return (
    <div className="bg-background min-h-screen pt-16">
      <Seo
        title="Blog"
        description="Consejos de grooming, estilo masculino, productos y cultura de barbería. El blog de Signature Salón Masculino."
        path="/blog"
      />

      {/* Header */}
      <section className="w-full py-16 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">Grooming & Estilo</span>
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

