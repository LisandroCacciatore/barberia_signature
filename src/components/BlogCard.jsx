import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate.js';

export default function BlogCard({ post, featured = false }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group block bg-surface-container border border-outline-variant rounded-xl overflow-hidden hover:border-primary transition-all ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Placeholder image */}
      <div
        className={`bg-surface-container-high flex items-center justify-center ${
          featured ? 'h-56' : 'h-40'
        }`}
      >
        <span className="material-symbols-outlined text-secondary text-[48px] opacity-30">
          article
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 bg-surface-container-high rounded text-label-sm text-primary uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-label-sm text-secondary">{post.readTime}</span>
        </div>
        <h3
          className={`font-display text-primary font-bold mb-2 group-hover:text-secondary transition-colors ${
            featured ? 'text-xl' : 'text-base'
          }`}
        >
          {post.title}
        </h3>
        <p className="text-body-sm text-secondary line-clamp-2 mb-3">{post.excerpt}</p>
        <span className="text-label-sm text-secondary">{formatDate(post.date)}</span>
      </div>
    </Link>
  );
}

