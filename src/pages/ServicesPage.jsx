import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { services } from '../data/services.js';

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen pt-16">
      <Seo
        title="Servicios"
        description="Todos los servicios de Signature Salón Masculino: cortes, barba, rituales faciales y más. Precios claros, duración estimada."
        path="/servicios"
      />

      {/* Header */}
      <section className="w-full py-16 lg:py-20 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <span className="text-label-sm text-secondary uppercase tracking-[0.2em]">Lo que hacemos</span>
          <h1 className="font-display text-4xl lg:text-5xl text-primary uppercase font-light tracking-wider mt-3 mb-4">
            Servicios
          </h1>
          <p className="text-body-md text-secondary max-w-xl">
            Cada servicio está diseñado para darte el mejor resultado posible. Sin atajos. Sin demoras innecesarias.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-7 rounded-xl border flex flex-col ${
                  service.highlight
                    ? 'bg-surface-container-high border-primary'
                    : 'bg-surface-container border-outline-variant'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-label-sm text-secondary uppercase tracking-wider">{service.tag}</span>
                  {service.highlight && (
                    <span className="material-symbols-outlined text-primary text-[16px]">workspace_premium</span>
                  )}
                </div>
                <h2 className="font-display text-xl text-primary font-bold mb-2">{service.name}</h2>
                <p className="text-body-sm text-secondary mb-5 flex-1">{service.description}</p>

                {service.includes && (
                  <ul className="flex flex-col gap-1.5 mb-5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-body-sm text-secondary">
                        <span className="material-symbols-outlined text-primary text-[14px]">check</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="border-t border-outline-variant pt-4 flex justify-between items-center">
                  <span className="text-label-sm text-secondary">{service.duration}</span>
                  <span className="font-display text-2xl text-primary font-bold">
                    ARS {service.price.toLocaleString('es-AR')}
                  </span>
                </div>

                <Link
                  to="/reserva"
                  className="mt-4 w-full py-3 btn-chrome text-label-md uppercase tracking-wider rounded-lg text-center"
                >
                  Reservar este servicio
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="w-full py-16 border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin text-center">
          <h2 className="font-display text-2xl text-primary uppercase font-light mb-4">
            ¿No encontrás lo que buscás?
          </h2>
          <p className="text-body-md text-secondary mb-6">
            Escribinos por WhatsApp y te armamos una experiencia a medida.
          </p>
          <a
            href="https://wa.me/5493415558921"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-chrome font-label-lg uppercase tracking-wider rounded-lg"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

