/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F9F7F2',
        'ink': '#151515',
        'brand-orange': '#E85A2E',
        'brand-yellow': '#F5B629',
        'brand-blue': '#5A59E6',
        'brand-green': '#36B76B',
        'brand-purple': '#9B56E6',
      },
      fontFamily: {
        'serif': ['"Fraunces"', 'serif'],
        'sans': ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #151515',
        'brutal-hover': '6px 6px 0px 0px #151515',
        'brutal-sm': '2px 2px 0px 0px #151515',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #E5E5E5 1px, transparent 1px), linear-gradient(to bottom, #E5E5E5 1px, transparent 1px)",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        }
      }
    },
  },
  plugins: [],
}
