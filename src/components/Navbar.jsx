import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { site } from '../data/site.js';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur border-b border-outline-variant shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-sm text-primary uppercase font-bold tracking-[0.25em]">
            Signature
          </span>
          <span className="text-[9px] text-secondary uppercase tracking-[0.3em]">
            Salón Masculino
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                `text-label-md uppercase tracking-wider transition-colors ${
                  isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-md text-secondary hover:text-primary uppercase tracking-wider transition-colors"
          >
            {site.phone}
          </a>
          <Link
            to="/reserva"
            className="px-4 py-2 btn-chrome text-label-md uppercase tracking-wider rounded-lg"
          >
            Reservar
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-primary"
          aria-label="Menú"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 border-b border-outline-variant">
          <nav className="flex flex-col px-margin-mobile py-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-label-lg uppercase tracking-wider ${isActive ? 'text-primary' : 'text-secondary'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/reserva"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center px-4 py-3 btn-chrome text-label-md uppercase tracking-wider rounded-lg mt-2"
            >
              Reservar turno
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

