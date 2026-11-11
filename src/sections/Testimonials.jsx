import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  return (
    <section className="w-full py-20 lg:py-28 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="mb-12">
          <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">
            Lo que dicen
          </span>
          <h2 className="font-display text-3xl lg:text-4xl text-primary uppercase font-light mt-2">
            Reseñas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-surface-container border border-outline-variant rounded-xl p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="text-body-md text-secondary mb-4 italic">"{t.text}"</p>
              <div className="border-t border-outline-variant pt-3">
                <p className="font-display text-sm text-primary font-bold">{t.name}</p>
                <p className="text-label-sm text-secondary">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

