/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: `@media (min-width: 320px) { ... }`,
      },
      colors: {
        background: '#faf5f1',
        primary: '#c2410c',
        secondary: '#f97316',
        offSecondary: '#fed7aa',
        accent: '#f87171',
        accentDarker: '#ef4444',
        accentLighter: '#fca5a5',
        white: '#f8fafc',
        offGrey: '#c2c2c2',
        grey: '#6b7280',
        darkestGrey: '#111827',
      },
      animation: {
        ripple: 'ripple 1s',
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
