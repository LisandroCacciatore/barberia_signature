import { Link } from 'react-router-dom';
import { hero } from '../data/hero.js';

// Avatar images for the badge (use existing barber avatars)
const barberAvatars = [
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=80&q=80',
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 lg:py-24 border-b border-outline-variant">
      {/* Dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial glows */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />

      {/* Vertical decorative bars */}
      <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent pointer-events-none" />
      <div className="hidden lg:block absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Badge with avatars and rating */}
            <div className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-surface-container border border-outline-variant mb-6 shadow-sm">
              <div className="flex -space-x-2">
                {barberAvatars.map((src, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-surface-container overflow-hidden bg-surface-container-high"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="text-label-md text-primary uppercase tracking-wider font-semibold">
                {hero.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl lg:text-6xl text-primary tracking-tight mb-6 uppercase font-extrabold leading-[1.05]">
              {hero.headline.join(' ')}
              <br />
              <span className="text-secondary font-light">{hero.subheadline}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-body-lg text-secondary max-w-xl mb-8">{hero.subheadline}</p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                to={hero.cta.href}
                className="px-6 py-3.5 btn-chrome font-label-lg uppercase tracking-wider rounded-lg"
              >
                {hero.cta.label}
              </Link>
              <Link
                to={hero.ctaSecondary.href}
                className="px-6 py-3.5 rounded-lg bg-surface-container border border-outline-variant text-primary font-label-lg uppercase tracking-wider hover:border-primary transition-all"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
              {hero.stats.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col p-3 rounded-lg bg-surface-container border border-outline-variant hover:border-primary transition-colors"
                >
                  <span className="font-display text-xl text-primary font-bold tracking-tight">{m.value}</span>
                  <span className="text-label-sm text-secondary uppercase">{m.label}</span>
                </div>
              ))}
            </div>

            {/* "As seen on" strip */}
            <div className="mt-8 pt-6 border-t border-outline-variant w-full flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">Encontranos en</span>
              <div className="flex items-center gap-5 opacity-60">
                <span className="font-display text-sm text-primary font-semibold">Fresha</span>
                <span className="font-display text-sm text-primary font-semibold">Google</span>
                <span className="font-display text-sm text-primary font-semibold">Instagram</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Vertical EST. 2021 */}
            <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-label-sm text-secondary uppercase tracking-[0.3em] whitespace-nowrap">
              Est. 2021 — Rosario
            </div>

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                alt="Signature Salon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none" />

              {/* Rating badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-outline-variant flex items-center gap-1.5 shadow-lg">
                <span className="material-symbols-outlined text-amber-400 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-label-md text-primary font-bold">5.0</span>
                <span className="text-label-sm text-secondary">Fresha</span>
              </div>

              {/* Caption bottom */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-background/85 backdrop-blur-md border border-outline-variant shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary text-background flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">content_cut</span>
                  </div>
                  <div>
                    <p className="text-body-md text-primary font-semibold">Corte premium</p>
                    <p className="text-body-sm text-secondary">Con estilo y precisión</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
              </div>
            </div>

            {/* Secondary floating image */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 rounded-xl overflow-hidden border-2 border-background shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?auto=format&fit=crop&w=200&q=80"
                alt="Detalle"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Atelier badge */}
            <div className="hidden lg:flex absolute -top-3 -left-3 items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-background shadow-2xl z-10">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="text-label-md font-bold uppercase tracking-wider">Atelier</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
