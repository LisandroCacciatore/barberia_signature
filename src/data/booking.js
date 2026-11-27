export const bookingServices = [
  {
    id: 'corte-pelo',
    name: 'Corte de Pelo',
    duration: '30–45 min',
    price: 24000,
    description: 'Corte a máquina y tijera adaptado a estilos clásicos y modernos. Incluye lavado y peinado.',
    tag: 'MÁS ELEGIDO',
    featured: true,
  },
  {
    id: 'corte-barba',
    name: 'Corte de Pelo + Barba',
    duration: '1 h',
    price: 34000,
    description: 'Corte preciso + perfilado de barba con navaja, espuma y toalla caliente. La experiencia completa.',
    tag: 'COMBO',
  },
  {
    id: 'limpieza-dermapen',
    name: 'Limpieza Facial + Dermapen',
    duration: '50 min',
    price: 22000,
    description: 'Limpieza profunda con extracción + micropunción con dermapen para renovación celular.',
    tag: 'DERMO',
  },
  {
    id: 'perfilado-cejas',
    name: 'Perfilado de Cejas',
    duration: '15 min',
    price: 15000,
    description: 'Diseño y perfilado de cejas adaptado a la morfología facial.',
    tag: 'EXPRESS',
  },
];

export const bookingAddons = [
  {
    id: 'wash',
    name: 'Lavado Crioterapéutico',
    detail: 'Agua termal helada + mentol',
    price: 5000,
    defaultChecked: true,
  },
  {
    id: 'eyes',
    name: 'Parches de Ojeras de Plata',
    detail: 'Descongestión con cafeína pura',
    price: 6500,
  },
];

const base = import.meta.env.BASE_URL;

export const bookingBarbers = [
  {
    id: 'valentin',
    name: 'Valentin',
    role: 'Cortes & Fade',
    rating: '5.0',
    availability: 'Turnos disponibles',
    image: `${base}images/team/valentin.jpeg`,
  },
  {
    id: 'maximiliano',
    name: 'Maximiliano',
    role: 'Barba & Navaja',
    rating: '5.0',
    availability: 'Turnos disponibles',
    image: `${base}images/team/maximiliano.jpeg`,
  },
  {
    id: 'nicolas',
    name: 'Nicolas',
    role: 'Estilo & Actitud',
    rating: '5.0',
    availability: 'Turnos disponibles',
    image: `${base}images/team/nicolas.jpg`,
  },
  {
    id: 'any',
    name: 'Sin Preferencia',
    role: 'Asignación inmediata de alta calidad',
    rating: 'ÁGIL',
    availability: 'Mayor amplitud de horarios',
    noAvatar: true,
  },
];

export const bookingDates = [
  { day: 'MAR', date: '18', slots: '4 cupos', available: true },
  { day: 'MIÉ', date: '19', slots: '2 cupos', available: true },
  { day: 'JUE', date: '20', slots: 'Seleccionado', available: true, selected: true },
  { day: 'VIE', date: '21', slots: '3 cupos', available: true },
  { day: 'SÁB', date: '22', slots: '1 cupo', available: true, urgent: true },
  { day: 'DOM', date: '23', slots: 'Cerrado', available: false },
];

export const bookingMorningSlots = [
  { time: '10:00', available: true },
  { time: '10:45', available: true },
  { time: '11:30', available: false },
  { time: '12:15', available: true },
];

export const bookingAfternoonSlots = [
  { time: '15:00', available: true },
  { time: '15:45', available: true },
  { time: '16:30', available: true, selected: true },
  { time: '17:15', available: true },
  { time: '18:00', available: true, urgent: true },
];

export const bookingDrinks = [
  'Espresso Doble (Grano Colombia de Especialidad)',
  'Scotch Single Malt (12 años)',
  'Agua mineral San Pellegrino con limón',
  'Cerveza Artesanal IPA Local bien fría',
  'Sin cortesía, solo agua fresca',
];

export const bookingPolicies = [
  'Cancelación libre: reprogramá o cancelá sin costo hasta 3 horas antes desde el link de WhatsApp.',
  'Atelier Libre de Ruido: capacidad acotada a 3 clientes simultáneos para preservar la privacidad.',
];