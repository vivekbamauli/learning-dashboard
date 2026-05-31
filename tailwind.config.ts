import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg: {
          base: '#080b10',
          surface: '#0d1117',
          elevated: '#161b22',
          overlay: '#1c2332',
        },
        accent: {
          cyan: '#00d4ff',
          purple: '#7c3aed',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e',
        },
        border: {
          subtle: '#1e2736',
          muted: '#2d3748',
          glow: 'rgba(0, 212, 255, 0.3)',
        },
        text: {
          primary: '#e6edf3',
          secondary: '#8b949e',
          muted: '#484f58',
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
        'glow-cyan': 'radial-gradient(circle at center, rgba(0,212,255,0.15) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(circle at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
        'mesh-1': 'radial-gradient(at 40% 20%, rgba(0,212,255,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(124,58,237,0.08) 0px, transparent 50%)',
        'mesh-2': 'radial-gradient(at 0% 50%, rgba(16,185,129,0.08) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(0,212,255,0.05) 0px, transparent 50%)',
        'mesh-3': 'radial-gradient(at 20% 80%, rgba(245,158,11,0.08) 0px, transparent 50%), radial-gradient(at 60% 20%, rgba(124,58,237,0.08) 0px, transparent 50%)',
        'mesh-4': 'radial-gradient(at 70% 70%, rgba(244,63,94,0.08) 0px, transparent 50%), radial-gradient(at 20% 20%, rgba(0,212,255,0.06) 0px, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'streak': 'streak 1.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        streak: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleX(1)' },
          '50%': { opacity: '1', transform: 'scaleX(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0,212,255,0.2)',
        'glow-md': '0 0 20px rgba(0,212,255,0.25), 0 0 40px rgba(0,212,255,0.1)',
        'glow-lg': '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(0,212,255,0.15)',
        'glow-purple': '0 0 20px rgba(124,58,237,0.3), 0 0 40px rgba(124,58,237,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)',
      },
      gridTemplateColumns: {
        'bento': 'repeat(12, 1fr)',
      },
      gridTemplateRows: {
        'bento': 'auto',
      },
    },
  },
  plugins: [],
}

export default config
