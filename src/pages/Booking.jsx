import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import { useBooking } from '../hooks/useBooking.js';
import {
  bookingMorningSlots,
  bookingAfternoonSlots,
  bookingDrinks,
  bookingPolicies,
} from '../data/booking.js';
import { buildLeadPayload, submitLead, isValidPhone } from '../utils/utm.js';

export default function Booking() {
  const b = useBooking();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleConfirm = async () => {
    if (!b.customer.nombre || !b.customer.email || !b.customer.telefono) {
      setError('Completá nombre, email y teléfono');
      return;
    }
    if (!isValidPhone(b.customer.telefono)) {
      setError('Teléfono inválido. Formato: +54 9 341 ...');
      return;
    }
    if (!b.customer.consent) {
      setError('Aceptá la política de privacidad');
      return;
    }
    setStatus('loading');
    setError('');
    const payload = buildLeadPayload({
      nombre: b.customer.nombre,
      email: b.customer.email,
      telefono: b.customer.telefono,
      servicio: `${b.service.name} (${b.dateId}/${b.time})`,
      mensaje: `Barber: ${b.barber.name}. Bebida: ${b.customer.bebida || 'no especificada'}. Notas: ${b.customer.notas || 'sin notas'}.`,
      consentimiento: b.customer.consent,
      paginaOrigen: '/reserva',
    });
    const result = await submitLead(payload);
    if (result.ok) {
      setStatus('success');
    } else {
      setStatus('error');
      setError(result.error || 'Error al enviar. Probá por WhatsApp.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-background min-h-screen">
        <Seo title="Reserva confirmada" description="Tu turno fue reservado." path="/reserva" />
        <section className="w-full py-24">
          <div className="max-w-2xl mx-auto px-margin-mobile lg:px-margin text-center">
            <div className="bg-surface-container border border-outline-variant rounded-2xl p-12 shadow-2xl">
              <span className="material-symbols-outlined text-primary text-[64px] mb-4">
                check_circle
              </span>
              <span className="text-label-md text-primary uppercase tracking-[0.2em] font-semibold">
                Reserva confirmada
              </span>
              <h1 className="font-display text-3xl text-primary uppercase font-bold mt-2 mb-4">
                Te esperamos, {b.customer.nombre.split(' ')[0]}
              </h1>
              <p className="text-body-md text-secondary mb-6">
                Recibirás la confirmación por WhatsApp en los próximos minutos. Si necesitás
                reprogramar, escribinos directamente.
              </p>
              <div className="bg-surface-container-low border border-outline-variant rounded-lg p-4 text-left mb-6">
                <div className="flex justify-between text-body-sm mb-1">
                  <span className="text-secondary">Servicio</span>
                  <span className="text-primary font-semibold">{b.service.name}</span>
                </div>
                <div className="flex justify-between text-body-sm mb-1">
                  <span className="text-secondary">Barbero</span>
                  <span className="text-primary">{b.barber.name}</span>
                </div>
                <div className="flex justify-between text-body-sm mb-1">
                  <span className="text-secondary">Fecha</span>
                  <span className="text-primary">{b.dateId} · {b.time}</span>
                </div>
                <div className="flex justify-between text-body-sm">
                  <span className="text-secondary">Total</span>
                  <span className="text-primary font-bold">
                    ARS {b.total.toLocaleString('es-AR')}
                  </span>
                </div>
              </div>
              <a
                href="https://wa.me/5493415558921"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 btn-chrome font-label-lg uppercase tracking-wider rounded-lg"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Seo
        title="Reservar turno"
        description="Reservá tu turno online en Signature Salón Masculino. Elegí servicio, barbero, fecha y horario. Pago presencial."
        path="/reserva"
      />
      {/* Header */}
      <section className="w-full py-10 lg:py-14 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-outline-variant">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-label-sm text-primary uppercase tracking-[0.2em]">
                Reserva Online Inmediata
              </span>
            </div>
            <span className="text-label-sm text-secondary">
              Tiempo estimado de reserva: 2 minutos
            </span>
          </div>
          <div className="mt-6 max-w-2xl">
            <h1 className="font-display text-3xl lg:text-4xl text-primary uppercase font-light tracking-wider leading-tight">
              Reservá tu turno <span className="text-secondary">en Signature</span>
            </h1>
            <p className="text-body-md text-secondary mt-2">
              Seleccioná tu servicio, barbero y horario. Confirmación inmediata por WhatsApp.
              Sin pagos online.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="w-full py-10">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT (form) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* 1. Servicio */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary text-background flex items-center justify-center font-display font-bold text-sm">
                  1
                </span>
                <h2 className="font-display text-lg text-primary uppercase font-bold">
                  Elegí tu servicio
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {b.services.map((s) => {
                  const active = b.serviceId === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => b.setServiceId(s.id)}
                      className={`text-left p-5 rounded-xl border transition-all ${
                        active
                          ? 'bg-surface-container-high border-2 border-primary shadow-xl'
                          : 'bg-surface-container border-outline-variant hover:border-primary'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-label-sm text-primary uppercase font-semibold">
                          {s.tag}
                        </span>
                        {active && (
                          <span className="material-symbols-outlined text-primary text-[18px]">
                            check_circle
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-base text-primary font-bold mb-1">
                        {s.name}
                      </h3>
                      <p className="text-body-sm text-secondary mb-3 line-clamp-2">
                        {s.description}
                      </p>
                      <div className="flex justify-between items-center pt-2 border-t border-outline-variant">
                        <span className="text-label-sm text-secondary">{s.duration}</span>
                        <span className="font-display text-base text-primary font-bold">
                          ARS {s.price.toLocaleString('es-AR')}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Barbero */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary text-background flex items-center justify-center font-display font-bold text-sm">
                  2
                </span>
                <h2 className="font-display text-lg text-primary uppercase font-bold">
                  Elegí tu barbero
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {b.barbers.map((barber) => {
                  const active = b.barberId === barber.id;
                  return (
                    <button
                      key={barber.id}
                      type="button"
                      onClick={() => b.setBarberId(barber.id)}
                      className={`p-3 rounded-xl border transition-all flex flex-col items-center text-center ${
                        active
                          ? 'bg-surface-container-high border-2 border-primary shadow-lg'
                          : 'bg-surface-container border-outline-variant hover:border-primary'
                      }`}
                    >
                      {!barber.noAvatar && barber.image ? (
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-outline-variant">
                          <img src={barber.image} alt={barber.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-surface-container-high border-2 border-outline-variant flex items-center justify-center mb-2">
                          <span className="material-symbols-outlined text-primary text-[28px]">
                            groups
                          </span>
                        </div>
                      )}
                      <span className="font-display text-xs text-primary font-bold leading-tight">
                        {barber.name}
                      </span>
                      <span className="text-[10px] text-secondary uppercase tracking-wider mt-1">
                        {barber.rating}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Fecha */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary text-background flex items-center justify-center font-display font-bold text-sm">
                  3
                </span>
                <h2 className="font-display text-lg text-primary uppercase font-bold">
                  Elegí el día
                </h2>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {b.dates.map((d) => {
                  const active = b.dateId === d.date;
                  return (
                    <button
                      key={d.date}
                      type="button"
                      onClick={() => d.available && b.setDateId(d.date)}
                      disabled={!d.available}
                      className={`p-3 rounded-xl border transition-all flex flex-col items-center gap-1 ${
                        !d.available
                          ? 'bg-surface-container-low border-outline-variant opacity-40 cursor-not-allowed'
                          : active
                          ? 'bg-primary text-background border-primary shadow-lg'
                          : 'bg-surface-container border-outline-variant text-primary hover:border-primary'
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-wider font-semibold">
                        {d.day}
                      </span>
                      <span className="font-display text-xl font-bold">{d.date}</span>
                      <span className={`text-[10px] ${active ? 'text-background/70' : 'text-secondary'}`}>
                        {d.slots}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Horario */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary text-background flex items-center justify-center font-display font-bold text-sm">
                  4
                </span>
                <h2 className="font-display text-lg text-primary uppercase font-bold">
                  Elegí el horario
                </h2>
              </div>
              <div className="mb-4">
                <span className="text-label-sm text-secondary uppercase tracking-wider">Mañana</span>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {bookingMorningSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => slot.available && b.setTime(slot.time)}
                      disabled={!slot.available}
                      className={`py-2 rounded-lg border text-label-md font-semibold transition-all ${
                        !slot.available
                          ? 'bg-surface-container-low border-outline-variant text-secondary opacity-40 cursor-not-allowed line-through'
                          : b.time === slot.time
                          ? 'bg-primary text-background border-primary'
                          : 'bg-surface-container border-outline-variant text-primary hover:border-primary'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-label-sm text-secondary uppercase tracking-wider">Tarde</span>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {bookingAfternoonSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => slot.available && b.setTime(slot.time)}
                      disabled={!slot.available}
                      className={`py-2 rounded-lg border text-label-md font-semibold transition-all ${
                        !slot.available
                          ? 'bg-surface-container-low border-outline-variant text-secondary opacity-40 cursor-not-allowed line-through'
                          : b.time === slot.time
                          ? 'bg-primary text-background border-primary'
                          : 'bg-surface-container border-outline-variant text-primary hover:border-primary'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Add-ons */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary text-background flex items-center justify-center font-display font-bold text-sm">
                  5
                </span>
                <h2 className="font-display text-lg text-primary uppercase font-bold">
                  Extras opcionales
                </h2>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { id: 'wash', name: 'Lavado Crioterapéutico', detail: 'Agua termal helada + mentol', price: 5000 },
                  { id: 'eyes', name: 'Parches de Ojeras de Plata', detail: 'Descongestión con cafeína pura', price: 6500 },
                ].map((addon) => (
                  <label
                    key={addon.id}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      b.addons.has(addon.id) ? 'bg-surface-container-high border-primary' : 'bg-surface-container border-outline-variant hover:border-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={b.addons.has(addon.id)}
                        onChange={() => b.toggleAddon(addon.id)}
                        className="w-4 h-4 rounded"
                      />
                      <div>
                        <p className="font-display text-sm text-primary font-semibold">{addon.name}</p>
                        <p className="text-body-sm text-secondary">{addon.detail}</p>
                      </div>
                    </div>
                    <span className="font-display text-sm text-primary font-bold">
                      + ARS {addon.price.toLocaleString('es-AR')}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 6. Datos */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary text-background flex items-center justify-center font-display font-bold text-sm">
                  6
                </span>
                <h2 className="font-display text-lg text-primary uppercase font-bold">
                  Tus datos
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-label-md text-primary uppercase font-semibold">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    value={b.customer.nombre}
                    onChange={(e) => b.updateCustomer('nombre', e.target.value)}
                    placeholder="Ej: Nicolás Rossi"
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-label-md text-primary uppercase font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={b.customer.email}
                    onChange={(e) => b.updateCustomer('email', e.target.value)}
                    placeholder="nicolas@ejemplo.com"
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-label-md text-primary uppercase font-semibold">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={b.customer.telefono}
                    onChange={(e) => b.updateCustomer('telefono', e.target.value)}
                    placeholder="+54 9 341 000-0000"
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-label-md text-primary uppercase font-semibold">
                    Bebida de cortesía
                  </label>
                  <select
                    value={b.customer.bebida}
                    onChange={(e) => b.updateCustomer('bebida', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Seleccioná una opción</option>
                    {bookingDrinks.map((drink) => (
                      <option key={drink} value={drink}>
                        {drink}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-label-md text-primary uppercase font-semibold">
                    Notas adicionales
                  </label>
                  <textarea
                    rows={2}
                    value={b.customer.notas}
                    onChange={(e) => b.updateCustomer('notas', e.target.value)}
                    placeholder="Preferencias, alergias, referencias de estilo..."
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <input
                    type="checkbox"
                    checked={b.customer.consent}
                    onChange={(e) => b.updateCustomer('consent', e.target.checked)}
                    className="mt-1 w-4 h-4 rounded"
                  />
                  <label className="text-body-sm text-secondary">
                    Acepto la política de privacidad y recibir confirmación por WhatsApp.
                  </label>
                </div>
              </div>
              {error && (
                <p role="alert" className="text-body-sm text-error bg-error-container/20 p-3 rounded">
                  {error}
                </p>
              )}
            </div>

            {/* Confirm button */}
            <button
              type="button"
              onClick={handleConfirm}
              disabled={status === 'loading'}
              className="w-full py-4 btn-chrome font-label-lg uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <span>{status === 'loading' ? 'Confirmando...' : 'Confirmar reserva'}</span>
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
            </button>

            {/* Policies */}
            <div className="mt-4 pt-4 border-t border-outline-variant">
              <p className="text-label-sm text-secondary uppercase mb-2">Políticas</p>
              <ul className="flex flex-col gap-1.5">
                {bookingPolicies.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-body-sm text-secondary">
                    <span className="material-symbols-outlined text-primary text-[14px] mt-0.5">
                      info
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT (sticky summary) */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 bg-surface-container border border-outline-variant rounded-2xl p-6 shadow-2xl">
              <h3 className="font-display text-lg text-primary uppercase font-bold mb-4 pb-3 border-b border-outline-variant">
                Tu reserva
              </h3>
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex justify-between text-body-sm">
                  <span className="text-secondary">Servicio</span>
                  <span className="text-primary font-semibold text-right">{b.service.name}</span>
                </div>
                <div className="flex justify-between text-body-sm">
                  <span className="text-secondary">Duración</span>
                  <span className="text-primary">{b.service.duration}</span>
                </div>
                <div className="flex justify-between text-body-sm">
                  <span className="text-secondary">Barbero</span>
                  <span className="text-primary text-right">{b.barber.name}</span>
                </div>
                <div className="flex justify-between text-body-sm">
                  <span className="text-secondary">Fecha</span>
                  <span className="text-primary">{b.dateId} · {b.time}</span>
                </div>
              </div>

              {b.addonsTotal > 0 && (
                <div className="border-t border-outline-variant pt-3 mb-3">
                  <p className="text-label-sm text-secondary uppercase mb-2">Extras</p>
                  {b.addons.has('wash') && (
                    <div className="flex justify-between text-body-sm">
                      <span className="text-secondary">Lavado crioterapéutico</span>
                      <span className="text-primary">+ ARS 5.000</span>
                    </div>
                  )}
                  {b.addons.has('eyes') && (
                    <div className="flex justify-between text-body-sm">
                      <span className="text-secondary">Parches de ojeras</span>
                      <span className="text-primary">+ ARS 6.500</span>
                    </div>
                  )}
                </div>
              )}

              <div className="border-t border-outline-variant pt-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-label-md text-secondary uppercase font-semibold">
                    Total
                  </span>
                  <span className="font-display text-2xl text-primary font-bold">
                    ARS {b.total.toLocaleString('es-AR')}
                  </span>
                </div>
                <p className="text-body-sm text-secondary mt-1">Pago presencial · Sin seña</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
