import tailwindcssContainerQueries from '@tailwindcss/container-queries';
import tailwindcssTypography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  mode: 'jit',
  prefix: '',
  theme: {
    fontFamily: {
      openSans: ['var(--font-openSans)'],
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1632px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'text-default': '#ffffff',
        'text-muted': '#aeaeae',
        'text-disabled': 'rgba(255, 255, 255, 0.4)',
        'text-inversed': '#121212',
        'bg-default': '#12171c',
        'surface-selected': 'rgba(255, 255, 255, 0.2)',
        'surface-primary-default': '#ffffff',
        'surface-primary-hover': '#e1e4e5',
        'surface-secondary-default': 'rgba(255, 255, 255, 0.05)',
        'surface-secondary-hover': 'rgba(255, 255, 255, 0.1)',
        'primary-blue': '#3bb5f7',
        'primary-orange': '#ff5e1f',
        'components-stroke-default': 'rgba(255, 255, 255, 0.1)',
        'status-success': '#66CCAC',
        'text-tugrenya-black': '#5c3737',
        'text-tugrenya-white': '#fde1b1',
      },
      backgroundImage: {
        'surface-default': 'linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)),linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
        'components-tab-bg-active-default': 'radial-gradient(50% 56.52% at 50% 100%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)',
        'components-overlay-bg': 'linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))',
      },
      lineHeight: {
        90: '.9',
        120: '1.2',
        150: '1.5',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'decor-circle': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'decor-circle': 'decor-circle 7s infinite linear',
      },
      transitionDuration: {
        default: '300ms',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    tailwindcssContainerQueries,
    tailwindcssTypography,
  ],
} satisfies Config;

export default config;
