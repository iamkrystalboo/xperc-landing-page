import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme palette
        'bg-primary': '#0D1117',
        'bg-secondary': '#161B22',
        'bg-card': '#1C2128',
        'border': '#30363D',
        'border-light': '#484F58',
        
        'text-primary': '#F0F6FC',
        'text-secondary': '#8B949E',
        'text-tertiary': '#6E7681',
        
        // Accent colors - from xperc logo (blue & white)
        'accent': '#4683C1',
        'accent-hover': '#5A9BD4',
        'accent-muted': 'rgba(70, 131, 193, 0.12)',
        
        // Logo navy blue
        'logoNavy': '#3D4996',
        'logoNavyLight': '#5964A5',
        
        // Status colors
        'danger': '#F85149',
        'success': '#3FB950',
        'warning': '#d29922',
        
        // Legacy for compatibility
        primary: '#4683C1',
        'primary-dark': '#3D4996',
        'primary-light': '#5A9BD4',
        'accent-light': '#5A9BD4',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 30px rgba(70, 131, 193, 0.3)',
        'glow-accent': '0 0 30px rgba(70, 131, 193, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'stagger-fade': 'staggerFade 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        staggerFade: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};

export default config;
