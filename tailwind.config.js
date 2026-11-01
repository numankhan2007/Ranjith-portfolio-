/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#000000',
          900: '#0A0A0A', // Deep solid black
          850: '#111111',
          800: '#171717',
          700: '#262626',
        },
        royal: {
          light: '#3B82F6',
          DEFAULT: '#2563EB', // Primary Royal Blue requested
          dark: '#1D4ED8',
          deep: '#1E40AF',
        },
        gold: {
          light: '#FDE68A',
          DEFAULT: '#FBBF24', // Metallic Gold requested
          metallic: '#FFD700',
          dark: '#D97706',
          deep: '#B45309',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', '"Space Grotesk"', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee-left': 'marqueeLeft 40s linear infinite',
        'marquee-right': 'marqueeRight 40s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(1.05)' },
        }
      },
      boxShadow: {
        'royal-glow': '0 0 25px -3px rgba(37, 99, 235, 0.45)',
        'gold-glow': '0 0 25px -3px rgba(251, 191, 36, 0.4)',
        'card-clean': '0 8px 30px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'card-hover': '0 14px 40px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(251, 191, 36, 0.25)',
      }
    },
  },
  plugins: [],
}
