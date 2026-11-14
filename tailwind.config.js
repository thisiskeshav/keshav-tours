/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#071326',
          midnight: '#0d2040',
          navy: '#133059',
          blue: '#0284c7',
          sky: '#38bdf8',
          accent: '#06b6d4',
          gold: '#f59e0b',
          amber: '#fbbf24',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(14, 165, 233, 0.4)',
        'glow-lg': '0 0 40px -10px rgba(14, 165, 233, 0.5)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px -15px rgba(2, 132, 199, 0.25)',
      }
    },
  },
  plugins: [],
};

