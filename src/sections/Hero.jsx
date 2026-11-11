import { Link } from 'react-router-dom';
import { hero } from '../data/hero.js';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-background overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin w-full py-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container border border-outline-variant rounded mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">{hero.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-6xl sm:text-8xl lg:text-[9rem] text-primary uppercase font-light tracking-tight leading-none mb-8">
          {hero.headline.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-secondary max-w-lg mb-10 leading-relaxed">
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            to={hero.cta.href}
            className="inline-flex items-center gap-2 px-8 py-4 btn-chrome font-label-lg uppercase tracking-wider rounded-lg"
          >
            {hero.cta.label}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <Link
            to={hero.ctaSecondary.href}
            className="inline-flex items-center gap-2 px-8 py-4 border border-outline-variant text-primary font-label-lg uppercase tracking-wider rounded-lg hover:border-primary transition-colors"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-outline-variant pt-10">
          {hero.stats.map((stat, i) => (
            <div key={i}>
              <p className="font-display text-2xl text-primary font-bold">{stat.value}</p>
              <p className="text-label-sm text-secondary uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

