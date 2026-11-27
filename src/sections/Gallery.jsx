import { gallery = [] } from '../data/gallery.js';

export default function Gallery() {
  return (
    <section className="w-full bg-background py-16 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <span className="text-label-md text-primary uppercase tracking-[0.2em] mb-2 block font-semibold">Galería Fotográfica</span>
            <h2 className="font-display text-2xl lg:text-3xl text-primary uppercase font-bold">Cultura de Precisión</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {gallery?.map((img, i) => (
            <div key={i} className={`rounded-xl overflow-hidden shadow-lg border border-outline-variant bg-surface-container aspect-square ${img.tall ? 'md:row-span-2 md:aspect-[4/5]' : ''}`}>
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}