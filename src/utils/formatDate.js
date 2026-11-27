export function formatDate(isoDate, opts = {}) {
  const date = new Date(isoDate);
  return date.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...opts,
  });
}

export function formatDateShort(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
