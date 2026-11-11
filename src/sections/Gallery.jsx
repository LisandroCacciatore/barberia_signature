import { gallery } from '../data/gallery.js';

export default function Gallery() {
  return (
    <section className="w-full py-20 lg:py-28 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="mb-12">
          <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">
            Nuestro trabajo
          </span>
          <h2 className="font-display text-3xl lg:text-4xl text-primary uppercase font-light mt-2">
            Galería
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="aspect-square bg-surface-container border border-outline-variant rounded-xl overflow-hidden flex flex-col items-center justify-center group hover:border-primary transition-all"
            >
              <span className="material-symbols-outlined text-secondary text-[48px] opacity-30 group-hover:opacity-50 transition-opacity">
                {item.category === 'espacio' ? 'storefront' : 'content_cut'}
              </span>
              <p className="text-label-sm text-secondary/60 mt-2 px-4 text-center">{item.caption}</p>
            </div>
          ))}
        </div>

        <p className="text-label-sm text-secondary text-center mt-6">
          Seguinos en{' '}
          <a
            href="https://instagram.com/signature.salon.rosario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            @signature.salon.rosario
          </a>{' '}
          para ver el trabajo completo.
        </p>
      </div>
    </section>
  );
}

