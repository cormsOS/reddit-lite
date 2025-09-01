import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        reddit: {
          orange: '#ff4500',
          blue: '#0079d3',
          darkBlue: '#24a0ed',
          lightGray: '#f8f9fa',
          darkGray: '#1a1a1b',
          borderGray: '#e4e4e7',
        },
        custom: {
          cardBg: 'var(--card-background)',
          border: 'var(--border-color)',
          muted: 'var(--text-muted)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
        'elevated': '0 8px 30px 0 rgba(0, 0, 0, 0.12)',
        'glow-orange': '0 0 20px rgba(255, 69, 0, 0.3)',
        'glow-blue': '0 0 20px rgba(0, 121, 211, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-3px)' },
          '60%': { transform: 'translateY(-2px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-orange': 'linear-gradient(135deg, #ff4500 0%, #ff6b35 100%)',
        'gradient-blue': 'linear-gradient(135deg, #0079d3 0%, #24a0ed 100%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#ff4500',
            secondary: '#0079d3',
          }
        },
        dark: {
          colors: {
            primary: '#ff6b35',
            secondary: '#24a0ed',
          }
        }
      }
    }),
  ],
} satisfies Config;
