/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        accent: '#3b82f6',
        dark: '#0f172a',
        light: '#f8fafc',
        'dark-bg': '#0a0a0a',
        'dark-card': '#1a1a1a',
        'dark-text': '#e5e5e5',
      }
    },
  },
  plugins: [],
}