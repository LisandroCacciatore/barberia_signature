/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b0c0e',
        'surface-container-low': '#111318',
        'surface-container': '#191c22',
        'surface-container-high': '#22262f',
        primary: {
          DEFAULT: '#f1f5f9',
        },
        secondary: '#94a3b8',
        'outline-variant': '#2a2f3a',
        outline: '#3d4452',
        error: '#ff6b6b',
        'error-container': '#7f1d1d',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'label-sm': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.07em' }],
        'label-md': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.07em' }],
        'label-lg': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.07em' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.25rem' }],
        'body-md': ['0.9375rem', { lineHeight: '1.5rem' }],
        'body-lg': ['1rem', { lineHeight: '1.75rem' }],
      },
      spacing: {
        margin: '5rem',
        'margin-mobile': '1.25rem',
      },
    },
  },
  plugins: [],
};

