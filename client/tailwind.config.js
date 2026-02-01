/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        'premium-bg': '#0f172a', // Dark blue-gray
        'glass-light': 'rgba(255, 255, 255, 0.1)',
        'glass-heavy': 'rgba(255, 255, 255, 0.2)',
        'glass-border': 'rgba(255, 255, 255, 0.15)',
        primary: {
          DEFAULT: '#6366f1', // Indigo
          hover: '#4f46e5',
        },
        secondary: '#ec4899', // Pink
        accent: '#8b5cf6', // Violet
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
        'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "light"], 
  },
};
