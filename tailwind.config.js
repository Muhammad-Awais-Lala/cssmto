import path from 'path';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color tokens using CSS variables
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          600: 'var(--color-primary-600)',
        },
        accent: 'var(--color-accent)',
        muted: 'var(--color-muted)',
        danger: 'var(--color-danger)',
        success: 'var(--color-success)',
        text: {
          primary: 'var(--text-primary)',
          muted: 'var(--text-muted)',
        },
      },
      borderRadius: {
        'xl': '12px', // Slightly rounded corners (8-12px)
        'lg': '10px',
        'md': '8px',
        'sm': '6px',
        'DEFAULT': '8px',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '64': '64px',
      },
      fontSize: {
        sm: ['14px', { lineHeight: '1.4' }],
        base: ['16px', { lineHeight: '1.4' }],
        lg: ['18px', { lineHeight: '1.4' }],
        xl: ['20px', { lineHeight: '1.4' }], // h4
        '2xl': ['24px', { lineHeight: '1.3' }], // h3
        '3xl': ['32px', { lineHeight: '1.2' }], // h2
        '4xl': ['40px', { lineHeight: '1.1' }], // h1
        '5xl': ['48px', { lineHeight: '1.1' }],
        '6xl': ['60px', { lineHeight: '1.1' }],
        '7xl': ['72px', { lineHeight: '1.1' }],
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using Inter as primary font
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      screens: {
        sm: '0px',    // Mobile first, default for <768px
        md: '768px',  // Tablet
        lg: '1024px', // Desktop
        xl: '1280px', // Large Desktop
      },
    },
  },
  plugins: [],
};