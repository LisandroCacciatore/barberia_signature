import { philosophy } from '../data/philosophy.js';

export default function Philosophy() {
  return (
    <section className="w-full py-20 lg:py-28 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">
            {philosophy.badge}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl text-primary uppercase font-light mt-3 mb-4">
            {philosophy.headline}
          </h2>
          <p className="text-body-md text-secondary">{philosophy.subheadline}</p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-surface-container border border-outline-variant rounded-xl p-6 hover:border-primary transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-[32px] mb-4 block">
                {pillar.icon}
              </span>
              <h3 className="font-display text-sm text-primary uppercase font-bold mb-2">
                {pillar.title}
              </h3>
              <p className="text-body-sm text-secondary">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

