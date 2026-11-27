import { Link } from 'react-router-dom';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <section className="w-full bg-background py-16 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-label-md text-primary uppercase tracking-[0.2em] mb-2 font-semibold">Carta de Tratamientos</span>
          <h2 className="font-display text-2xl lg:text-3xl text-primary uppercase font-bold">Nuestros Servicios</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service) => (
            <div key={service.id} className={`flex flex-col justify-between p-8 rounded-xl border ${service.featured ? 'bg-surface-container-high border-2 border-primary/60 shadow-2xl relative' : 'bg-surface-container border-outline-variant'} hover:border-primary transition-all`}>
              {service.featured && service.tag && (
                <div className="absolute -top-3 right-6 bg-primary text-background font-label-sm px-3 py-1 rounded-full uppercase tracking-wider font-extrabold shadow-md">
                  {service.tag}
                </div>
              )}
              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span className="text-label-sm px-2.5 py-1 rounded bg-background border border-outline-variant text-primary font-semibold uppercase">{service.duration}</span>
                  {/* ✅ Validación del precio */}
                  <span className="font-display text-lg text-primary font-bold">
                    {service.price ? `ARS ${service.price.toLocaleString('es-AR')}` : 'Consultar'}
                  </span>
                </div>
                <h3 className="font-display text-lg text-primary uppercase font-semibold mb-2">{service.title}</h3>
                <p className="text-body-sm text-secondary leading-relaxed mb-4">{service.description}</p>
              </div>
              <Link to="/reserva" className={`w-full py-2.5 rounded text-center font-label-md uppercase tracking-wider font-bold transition-all ${service.featured ? 'btn-chrome' : 'bg-surface-container-high border border-outline-variant text-primary hover:bg-primary hover:text-background'}`}>Reservar</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}