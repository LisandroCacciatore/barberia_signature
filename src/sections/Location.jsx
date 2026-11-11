import { location } from '../data/location.js';

export default function Location() {
  return (
    <section className="w-full py-20 lg:py-28 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="mb-12">
          <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">
            Dónde encontrarnos
          </span>
          <h2 className="font-display text-3xl lg:text-4xl text-primary uppercase font-light mt-2">
            Ubicación
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-display text-lg text-primary font-bold">
                {location.address}
              </p>
              <p className="text-body-md text-secondary">{location.city}</p>
            </div>

            <div>
              <p className="text-label-sm text-primary uppercase tracking-wider font-semibold mb-3">
                Horarios
              </p>
              <ul className="flex flex-col gap-2">
                {location.hours.map((h, i) => (
                  <li key={i} className="flex justify-between text-body-sm border-b border-outline-variant pb-2">
                    <span className="text-secondary">{h.day}</span>
                    <span className="text-primary font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-label-sm text-primary uppercase tracking-wider font-semibold mb-3">
                Cómo llegar
              </p>
              <ul className="flex flex-col gap-3">
                {location.transport.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                      {t.icon}
                    </span>
                    <div>
                      <p className="text-label-sm text-primary font-semibold">{t.label}</p>
                      <p className="text-body-sm text-secondary">{t.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden min-h-[300px] flex items-center justify-center">
            <div className="text-center px-6">
              <span className="material-symbols-outlined text-secondary text-[48px] mb-3 block opacity-40">
                map
              </span>
              <p className="text-body-sm text-secondary mb-4">
                Pichincha Bis 176, Rosario
              </p>
              <a
                href={location.googleMapsUrl || 'https://maps.google.com/?q=Pichincha+Bis+176+Rosario'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 btn-chrome text-label-md uppercase tracking-wider rounded-lg"
              >
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

