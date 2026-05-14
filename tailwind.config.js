/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        surface: '#141414',
        accent: '#2563EB',
        'accent-hover': '#1D4ED8',
        'accent-light': '#3B82F6',
        'text-primary': '#F2F2F2',
        'text-secondary': '#A3A3A3',
        'text-muted': '#6B6B6B',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
