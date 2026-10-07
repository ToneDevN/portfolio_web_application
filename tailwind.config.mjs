/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        'e-blue': '#00d2ff',
        'e-blue-dark': '#0284c7',
        'h-pink': '#6366f1',
        'h-pink-dark': '#4f46e5',
        'abyss': '#070913',
        'surface': '#0e1122',
        'surface-2': '#161a30',
        'ink': '#f8fafc',
        'ink-muted': '#94a3b8',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'IBM Plex Sans Thai', 'Inter', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'IBM Plex Sans Thai', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float-a': 'float 7s ease-in-out infinite',
        'float-b': 'float 9s ease-in-out 2s infinite',
        'float-c': 'float 6s ease-in-out 4s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'fade-up': 'fade-up 0.7s ease forwards',
        'fade-in': 'fade-in 0.7s ease forwards',
        'slide-right': 'slide-right 0.7s ease forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(3deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-right': {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
};
