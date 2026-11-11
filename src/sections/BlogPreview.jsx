import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog.js';
import BlogCard from '../components/BlogCard.jsx';

export default function BlogPreview() {
  const featured = blogPosts.filter((p) => p.featured).slice(0, 2);
  const rest = blogPosts.filter((p) => !p.featured).slice(0, 2);
  const displayed = [...featured, ...rest].slice(0, 4);

  return (
    <section className="w-full py-20 lg:py-28 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">
              Grooming & Estilo
            </span>
            <h2 className="font-display text-3xl lg:text-4xl text-primary uppercase font-light mt-2">
              Blog
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-label-sm text-secondary hover:text-primary uppercase tracking-wider transition-colors flex items-center gap-1"
          >
            Ver todos
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayed.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

