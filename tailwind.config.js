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
        primary: '#81574F',
        secondary: '#ffe0ab',
        accent: 'pink',
        white: '#f8fafc',
        offGrey: '#c2c2c2',
        grey: '#6b7280',
        darkestGrey: '#111827',
      },
    },
  },
  plugins: [],
};
