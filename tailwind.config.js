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
      colors: {
        background: '#faf5f1',
        primary: '#f87171',
        secondary: '#00FFFF',
        offSecondary: '#fed7aa',
        accent: '#ef4444',
        accentLighter: '#fca5a5',
        white: '#f8fafc',
        offGrey: '#c2c2c2',
        grey: '#6b7280',
        darkestGrey: '#111827',
      },
      animation: {
        ripple: 'ripple 1s',
        ZoomIn: 'ZoomIn 900ms forwards',
        bounceWithOpacity: 'bounceWithOpacity 700ms forwards',
      },
      keyframes: {
        ZoomIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
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
        bounceWithOpacity: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.76, 0.81)',
          },
          '25%': {
            transform: 'translateY(0%)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
          '75%': {
            opacity: 1,
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.76, 0.81)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.76, 0.81)',
          },
        },
      },
    },
  },
  plugins: [],
};
