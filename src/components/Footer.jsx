import { Link } from 'react-router-dom';
import { site } from '../data/site.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface-container border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-3">
              <span className="font-display text-lg text-primary uppercase font-bold tracking-[0.25em] block">
                Signature
              </span>
              <span className="text-[10px] text-secondary uppercase tracking-[0.3em]">
                Salón Masculino
              </span>
            </div>
            <p className="text-body-sm text-secondary max-w-xs">
              Barbería premium en Rosario. Donde el estilo es una firma.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors text-label-sm uppercase tracking-wider"
              >
                Instagram
              </a>
              <span className="text-outline">·</span>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors text-label-sm uppercase tracking-wider"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-label-sm text-primary uppercase tracking-wider font-semibold mb-3">
              Navegación
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Servicios', href: '/servicios' },
                { label: 'Nosotros', href: '/nosotros' },
                { label: 'Blog', href: '/blog' },
                { label: 'Reservar', href: '/reserva' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-body-sm text-secondary hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-label-sm text-primary uppercase tracking-wider font-semibold mb-3">
              Contacto
            </p>
            <ul className="flex flex-col gap-2 text-body-sm text-secondary">
              <li>{site.address}</li>
              <li>{site.hours}</li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-outline-variant pt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-label-sm text-secondary">
            © {year} Signature Salón Masculino. Todos los derechos reservados.
          </p>
          <p className="text-label-sm text-secondary">
            Rosario, Santa Fe · Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}

