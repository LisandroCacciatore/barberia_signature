import { testimonials } from '../data/testimonials.js'; // ✅ Import normal

export default function Testimonials() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-12">
          <h2 className="font-display text-2xl lg:text-3xl text-primary uppercase font-bold">5.0 Estrellas Impecables</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ✅ Fallback acá, en el map */}
          {(testimonials || []).map((t) => (
            <div key={t.name} className="flex flex-col justify-between p-8 rounded-xl bg-surface-container border border-outline-variant shadow-lg">
              <p className="text-body-md text-secondary leading-relaxed italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center font-bold text-primary font-display">{t.initials}</div>
                <div>
                  <p className="font-display text-sm text-primary font-semibold">{t.name}</p>
                  <p className="text-body-sm text-primary">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}