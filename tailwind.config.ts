import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#666666',
        accent: '#FF0000',
        background: '#FFFFFF',
        overlay: 'rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(4rem, 12vw, 10rem)',
        'hero-sm': 'clamp(2rem, 8vw, 6rem)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      transitionTimingFunction: {
        'lqve': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '800': '800ms',
      }
    },
  },
  plugins: [],
} satisfies Config;