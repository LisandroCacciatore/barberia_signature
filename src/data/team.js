const base = import.meta.env.BASE_URL;

export const team = [
  {
    name: 'Valentin',
    role: 'Barbero',
    tag: 'Cortes & Fade',
    image: `${base}images/team/valentin.jpeg`,
    bio: 'Especialista en cortes clásicos y fades limpios. Detallista con la línea y el acabado final.',
  },
  {
    name: 'Maximiliano',
    role: 'Barbero',
    tag: 'Barba & Navaja',
    image: `${base}images/team/maximiliano.jpeg`,
    bio: 'Perfilado de barba con navaja y toalla caliente. Experto en diseño de barba según morfología facial.',
  },
  {
    name: 'Nicolas',
    role: 'Barbero',
    tag: 'Estilo & Actitud',
    image: `${base}images/team/nicolas.jpg`,
    bio: 'Cortes con personalidad y asesoramiento de imagen. El toque distintivo de Signature.',
  },
];