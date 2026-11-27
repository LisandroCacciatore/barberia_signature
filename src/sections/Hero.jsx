import { Link } from 'react-router-dom';
import { hero, metrics } from '../data/hero.js';

const barberAvatars = [
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=80&q=80',
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 lg:py-24 border-b border-outline-variant">
      {/* Fondo */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #f1f5f9 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

          {/* Columna Izquierda */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-surface-container border border-outline-variant mb-6 shadow-sm">
              <div className="flex -space-x-2">
                {barberAvatars?.map((src, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-surface-container overflow-hidden bg-surface-container-high">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-label-md text-primary uppercase tracking-wider font-semibold ml-1">
                {hero?.badge}
              </span>
            </div>

            <h1 className="font-display text-4xl lg:text-6xl text-primary tracking-tight mb-6 uppercase font-extrabold leading-[1.05]">
              {hero?.title}<br />
              <span className="text-secondary font-light">{hero?.titleAccent}</span>
            </h1>

            <p className="text-body-lg text-secondary max-w-xl mb-8">{hero?.subtitle}</p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link to={hero?.ctaPrimary?.to || '/'} className="px-6 py-3.5 btn-chrome font-label-lg uppercase tracking-wider rounded-lg">
                {hero?.ctaPrimary?.label}
              </Link>
              <Link to={hero?.ctaSecondary?.to || '/servicios'} className="px-6 py-3.5 rounded-lg bg-surface-container border border-outline-variant text-primary font-label-lg uppercase tracking-wider hover:border-primary transition-all">
                {hero?.ctaSecondary?.label}
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
              {metrics?.map((m) => (
                <div key={m.label} className="flex flex-col p-3 rounded-lg bg-surface-container border border-outline-variant hover:border-primary transition-colors">
                  <span className="font-display text-xl text-primary font-bold tracking-tight">{m.value}</span>
                  <span className="text-label-sm text-secondary uppercase">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha (Imagen) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant aspect-[3/4]">
              <img src={hero?.image} alt={hero?.imageAlt} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none" />

              {/* Badge Rating */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-outline-variant flex items-center gap-1.5 shadow-lg">
                <span className="material-symbols-outlined text-amber-400 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-label-md text-primary font-bold">5.0</span>
                <span className="text-label-sm text-secondary">Fresha</span>
              </div>

              {/* Tarjeta de Ubicación (Link a Maps) */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pichincha+Bis+176+Alberto+Olmedo+Rosario"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-background/85 backdrop-blur-md border border-outline-variant shadow-xl flex items-center justify-between hover:border-primary transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary text-background flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">content_cut</span>
                  </div>
                  <div>
                    <p className="text-body-md text-primary font-semibold group-hover:text-primary transition-colors">{hero?.imageCaption?.title}</p>
                    <p className="text-body-sm text-secondary">{hero?.imageCaption?.subtitle}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary text-[20px] group-hover:scale-110 transition-transform">directions</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}