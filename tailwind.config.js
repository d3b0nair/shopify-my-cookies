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
        xs: `@media (min-width: 480px) { ... }`,
      },
      colors: {
        background: '#faf5f1',
        primary: '#61423c',
        secondary: '#ffe0ab75',
        accent: '#f59e0b',
        white: '#f8fafc',
        offGrey: '#c2c2c2',
        grey: '#6b7280',
        darkestGrey: '#111827',
      },
    },
  },
  plugins: [],
};
