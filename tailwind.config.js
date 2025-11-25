/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        blush: {
          100: '#fff1f3',
          200: '#ffd9e1',
          400: '#ff85a2',
          500: '#ff5c85',
          700: '#ff2a64',
        },
      },
      backgroundImage: {
        sparkles:
          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.1), transparent 55%)',
      },
    },
  },
  plugins: [],
};

