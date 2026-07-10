/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#8b5cf6',
          hover: '#7c3aed',
        },
        accent: {
          DEFAULT: '#06b6d4',
        },
        neon: {
          DEFAULT: '#a855f7',
        },
        darkBg: '#020208',
      },
      animation: {
        'glow-pulse': 'glow 3s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'star-twinkle': 'twinkle 4s ease-in-out infinite',
        'gradient-shift': 'gradient 8s ease infinite',
        'particle-float': 'particle 12s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.2), 0 0 10px rgba(99, 102, 241, 0.2)' },
          '100%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.6), 0 0 30px rgba(139, 92, 246, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-12px) scale(1.02)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) translateX(0) rotate(0deg)', opacity: 0 },
          '10%': { opacity: 0.6 },
          '90%': { opacity: 0.6 },
          '100%': { transform: 'translateY(-10vh) translateX(50px) rotate(360deg)', opacity: 0 },
        }
      },
    },
  },
  plugins: [],
}