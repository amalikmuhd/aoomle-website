/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#F8FAFC',
        accent: '#111827',
        'accent-hover': '#000000',
        'accent-light': '#374151',
        'accent-muted': '#6B7280',
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
