/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#03070E',
          900: '#050B14', // Core deep space background requested
          850: '#07101F',
          800: '#0A172B',
          700: '#0F2342',
          card: 'rgba(7, 16, 31, 0.65)',
          border: 'rgba(0, 240, 255, 0.15)',
        },
        aurora: {
          cyan: '#00F0FF',
          blue: '#0070F3',
          purple: '#7928CA',
          neon: '#00FF9D',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'aurora-slow': 'aurora 18s ease-in-out infinite alternate',
        'aurora-reverse': 'aurora-rev 22s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee-left': 'marqueeLeft 35s linear infinite',
        'marquee-right': 'marqueeRight 35s linear infinite',
        'glitch': 'glitch 4s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -60px) scale(1.15)' },
          '100%': { transform: 'translate(-30px, 40px) scale(0.95)' },
        },
        'aurora-rev': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-50px, 40px) scale(1.2)' },
          '100%': { transform: 'translate(30px, -30px) scale(0.9)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -3px rgba(0, 240, 255, 0.4), 0 0 10px -2px rgba(0, 240, 255, 0.3)',
        'neon-blue': '0 0 25px -3px rgba(0, 112, 243, 0.4), 0 0 10px -2px rgba(0, 112, 243, 0.3)',
        'card-glow': '0 8px 32px 0 rgba(0, 240, 255, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'card-hover': '0 12px 40px -5px rgba(0, 240, 255, 0.25), inset 0 0 0 1px rgba(0, 240, 255, 0.4)',
      }
    },
  },
  plugins: [],
}

