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
        primary: '#f59e0b',
        secondary: '#92400e',
        white: '#f8fafc',
        darkBrown: '#61423c',
        offGrey: '#cfcac6',
        grey: '#6b7280',
        darkestGrey: '#111827',
      },
    },
  },
  plugins: [],
};
