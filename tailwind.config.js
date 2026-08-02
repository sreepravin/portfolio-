/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060B',
          900: '#080A12',
          800: '#0D101B',
          700: '#141828',
          600: '#1C2236',
        },
        royal: {
          400: '#7C9BFF',
          500: '#5B7FFF',
          600: '#3B5CFF',
          700: '#2E48E0',
        },
        mist: {
          100: '#F5F7FC',
          300: '#C7CCDA',
          500: '#8A93A8',
          700: '#565E70',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(91, 127, 255, 0.55)',
        'glow-sm': '0 0 20px -6px rgba(91, 127, 255, 0.45)',
        card: '0 8px 30px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(91,127,255,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(91,127,255,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.06)' },
        },
        traceFlow: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
