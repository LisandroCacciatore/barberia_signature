import { Link } from 'react-router-dom';
import { services } from '../data/services.js';

export default function Services({ limit = 4 }) {
  const displayed = limit ? services.slice(0, limit) : services;
  return (
    <section className="w-full py-20 lg:py-28 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">
              Lo que hacemos
            </span>
            <h2 className="font-display text-3xl lg:text-4xl text-primary uppercase font-light mt-2">
              Servicios
            </h2>
          </div>
          <Link
            to="/servicios"
            className="text-label-sm text-secondary hover:text-primary uppercase tracking-wider transition-colors flex items-center gap-1"
          >
            Ver todos
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayed.map((service) => (
            <div
              key={service.id}
              className={`p-6 rounded-xl border transition-all ${
                service.highlight
                  ? 'bg-surface-container-high border-primary'
                  : 'bg-surface-container border-outline-variant hover:border-primary'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-label-sm text-secondary uppercase tracking-wider">
                  {service.tag}
                </span>
                {service.highlight && (
                  <span className="material-symbols-outlined text-primary text-[16px]">
                    workspace_premium
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg text-primary font-bold mb-2">{service.name}</h3>
              <p className="text-body-sm text-secondary mb-4">{service.description}</p>
              <div className="flex justify-between items-center border-t border-outline-variant pt-3">
                <span className="text-label-sm text-secondary">{service.duration}</span>
                <span className="font-display text-lg text-primary font-bold">
                  ARS {service.price.toLocaleString('es-AR')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {limit && services.length > limit && (
          <div className="mt-8 text-center">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 px-6 py-3 border border-outline-variant text-primary font-label-lg uppercase tracking-wider rounded-lg hover:border-primary transition-colors"
            >
              Ver los {services.length - limit} servicios restantes
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

