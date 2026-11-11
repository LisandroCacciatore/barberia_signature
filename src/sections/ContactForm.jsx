import { useState } from 'react';
import { contact } from '../data/contact.js';
import { buildLeadPayload, submitLead, isValidPhone } from '../utils/utm.js';

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', servicio: '', mensaje: '', consent: false,
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.telefono) {
      setErrorMsg('Completá nombre, email y teléfono.');
      return;
    }
    if (!isValidPhone(form.telefono)) {
      setErrorMsg('Teléfono inválido. Ej: +54 9 341 000-0000');
      return;
    }
    if (!form.consent) {
      setErrorMsg('Aceptá la política de privacidad.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    const payload = buildLeadPayload({
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono,
      servicio: form.servicio,
      mensaje: form.mensaje,
      consentimiento: form.consent,
      paginaOrigen: '/nosotros',
    });
    const result = await submitLead(payload);
    if (result.ok) setStatus('success');
    else { setStatus('error'); setErrorMsg(result.error || 'Error al enviar. Probá por WhatsApp.'); }
  };

  if (status === 'success') {
    return (
      <div className="bg-surface-container border border-outline-variant rounded-xl p-8 text-center">
        <span className="material-symbols-outlined text-primary text-[48px] mb-3 block">check_circle</span>
        <h3 className="font-display text-lg text-primary uppercase font-bold mb-2">Mensaje recibido</h3>
        <p className="text-body-md text-secondary">Te respondemos dentro del día hábil.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface-container border border-outline-variant rounded-xl p-8 flex flex-col gap-4">
      <h3 className="font-display text-lg text-primary uppercase font-bold">Envianos un mensaje</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-label-md text-primary uppercase font-semibold">Nombre *</label>
          <input type="text" value={form.nombre} onChange={(e) => update('nombre', e.target.value)} placeholder="Tu nombre" className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-label-md text-primary uppercase font-semibold">Email *</label>
          <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="tu@email.com" className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-label-md text-primary uppercase font-semibold">Teléfono *</label>
          <input type="tel" value={form.telefono} onChange={(e) => update('telefono', e.target.value)} placeholder="+54 9 341 000-0000" className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-label-md text-primary uppercase font-semibold">Servicio de interés</label>
          <input type="text" value={form.servicio} onChange={(e) => update('servicio', e.target.value)} placeholder="Corte, barba, evento..." className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="text-label-md text-primary uppercase font-semibold">Mensaje</label>
          <textarea rows={3} value={form.mensaje} onChange={(e) => update('mensaje', e.target.value)} placeholder="Contanos en qué podemos ayudarte..." className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
        </div>
        <div className="flex items-start gap-3 md:col-span-2">
          <input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} className="mt-1 w-4 h-4 rounded" />
          <label className="text-body-sm text-secondary">Acepto la política de privacidad y recibir respuesta por email o WhatsApp.</label>
        </div>
      </div>
      {errorMsg && <p role="alert" className="text-body-sm text-error bg-error-container/20 p-3 rounded">{errorMsg}</p>}
      <button type="submit" disabled={status === 'loading'} className="w-full py-4 btn-chrome font-label-lg uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 disabled:opacity-60">
        <span>{status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}</span>
        <span className="material-symbols-outlined text-[18px]">send</span>
      </button>
    </form>
  );
}

