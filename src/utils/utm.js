// Reads UTM params from the current URL
export function getUTMParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
  };
}

// Builds the full lead payload
export function buildLeadPayload({
  nombre = '',
  email = '',
  telefono = '',
  servicio = '',
  fechaPreferida = '',
  mensaje = '',
  consentimiento = false,
  paginaOrigen = '',
} = {}) {
  return {
    nombre,
    email,
    telefono,
    servicio,
    fecha_preferida: fechaPreferida,
    mensaje,
    consentimiento,
    pagina_origen: paginaOrigen || (typeof window !== 'undefined' ? window.location.pathname : ''),
    timestamp: new Date().toISOString(),
    ...getUTMParams(),
  };
}

// Submits lead to the n8n webhook
export async function submitLead(payload) {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT;
  if (!endpoint) {
    console.warn('VITE_LEAD_ENDPOINT not set — lead not submitted');
    return { ok: true }; // dev mode: silently succeed
  }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

// Validates Argentine phone number
export function isValidPhone(phone) {
  return /^\+?54?9?[0-9\s\-]{8,15}$/.test(phone.replace(/\s/g, ''));
}

