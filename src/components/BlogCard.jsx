import { Link } from 'react-router-dom';
import { formatDateShort } from '../utils/formatDate.js';

export default function BlogCard({ post }) {
  return (
    <article className="group bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col">
      <div className="relative h-64 overflow-hidden bg-surface-container">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-label-sm text-secondary uppercase tracking-wider">
            {post.categoryLabel}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-surface-container-high/90 backdrop-blur-md rounded text-label-sm text-secondary flex items-center gap-1">
          <span className="material-symbols-outlined text-[13px]">schedule</span>
          {post.readingTime}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 text-label-sm text-secondary uppercase mb-2">
            <time dateTime={post.date}>{formatDateShort(post.date)}</time>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          <h3 className="font-display text-lg text-primary uppercase font-semibold leading-snug mb-2 group-hover:text-secondary transition-colors">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="text-body-md text-secondary line-clamp-3 mb-4">{post.excerpt}</p>
        </div>
        <div className="pt-4 flex items-center justify-between">
          <span className="text-label-sm text-secondary">Lectura: {post.readingTime}</span>
          <Link
            to={`/blog/${post.slug}`}
            className="text-label-md text-primary uppercase font-bold flex items-center gap-1 hover:gap-2 transition-all"
          >
            Leer
            <span className="material-symbols-outlined text-[16px]">east</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
