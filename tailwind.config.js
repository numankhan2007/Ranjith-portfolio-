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
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9', // Vibrant Sky Blue
          600: '#0284C7',
          700: '#0369A1',
        },
        slate: {
          900: '#0F172A', // Deep Slate primary text
          850: '#151F33',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', '"Space Grotesk"', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee-left': 'marqueeLeft 35s linear infinite',
        'marquee-right': 'marqueeRight 35s linear infinite',
        'marquee-slow': 'marqueeLeft 45s linear infinite',
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
      },
      boxShadow: {
        'card-subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 25px -5px rgba(14, 165, 233, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
        'sky-glow': '0 0 20px rgba(14, 165, 233, 0.25)',
      }
    },
  },
  plugins: [],
}
