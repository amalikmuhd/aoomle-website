/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#F8FAFC',
        accent: '#2563EB',
        'accent-hover': '#1D4ED8',
        'accent-light': '#3B82F6',
        'text-primary': '#111827',
        'text-secondary': '#525252',
        'text-muted': '#737373',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
