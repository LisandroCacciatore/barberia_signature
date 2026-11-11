// Booking-specific data

// Services available in the booking form
export { services as bookingServices } from './services.js';

// Barbers mapped for booking (uses team data)
export const bookingBarbers = [
  { id: 'matias', name: 'Matías R.', rating: 'Director', image: null },
  { id: 'lucas', name: 'Lucas F.', rating: 'Senior', image: null },
  { id: 'ezequiel', name: 'Ezequiel T.', rating: 'Grooming', image: null },
  { id: 'nicolas', name: 'Nicolás P.', rating: 'Barber', image: null },
  { id: 'cualquiera', name: 'Sin preferencia', rating: 'Flexible', image: null, noAvatar: true },
];

// Next 6 available days (Mon–Sat)
function generateDates() {
  const result = [];
  const today = new Date();
  let count = 0;
  let d = new Date(today);
  while (result.length < 6) {
    d = new Date(today);
    d.setDate(today.getDate() + count);
    const dow = d.getDay(); // 0=sun
    if (dow !== 0) { // skip Sundays
      const day = d.toLocaleDateString('es-AR', { weekday: 'short' }).toUpperCase().replace('.', '');
      const date = d.getDate().toString();
      result.push({
        date,
        day,
        available: count > 0, // today blocked as example
        slots: count === 0 ? 'Sin turnos' : count === 1 ? '2 turnos' : `${7 - count} turnos`,
      });
    }
    count++;
  }
  return result;
}

export const bookingDates = generateDates();

export const bookingMorningSlots = [
  { time: '09:00', available: true },
  { time: '09:45', available: true },
  { time: '10:30', available: false },
  { time: '11:15', available: true },
  { time: '12:00', available: true },
];

export const bookingAfternoonSlots = [
  { time: '14:00', available: true },
  { time: '14:45', available: false },
  { time: '15:30', available: true },
  { time: '16:15', available: true },
  { time: '17:00', available: true },
  { time: '17:45', available: false },
  { time: '18:30', available: true },
  { time: '19:15', available: true },
];

export const bookingDrinks = [
  'Agua mineral',
  'Café espresso',
  'Café con leche',
  'Mate',
  'Cerveza artesanal (Quilmes IPA)',
  'Jugo de naranja',
  'Prefiero no tomar',
];

export const bookingPolicies = [
  'Cancelaciones con más de 2 hs de anticipación sin cargo.',
  'No-show reiterado puede resultar en restricción de turnos.',
  'Pago presencial al finalizar. Sin seña online.',
  'Llegadas con +10 min pueden ser reasignadas.',
];

