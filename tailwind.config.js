/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Jost: 'Jost, sans-serif',
        Sora: 'Sora, sans-serif',
        Ibm: 'IBM Plex Mono, monospace',
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        26: '26px',
        30: '30px',
        36: '36px',
        56: '56px',
        64: '64px',
      },

      colors: {
        'purple-0': '#4661E6',
        'purple-1': '#4c05d0',
        'pink-purple-1': '#AD1FEA',
        'pink-purple-0': '#C75AF6',
        'dark-navy': '#020c1b',
        navy: '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'navy-shadow': 'rgba(2,12,27,0.7)',
        'navy-1': '#11121e',
        'white-1': '#F7F8FD',
        'white-2': '#F2F4FE',
        'slate-0': '#ccd6f6',
        'slate-1': '#8892b0',
        'slate-2': '#647196',
        'slate-3': '#3A4374',
        'slate-4': '#373F68',
        green: '#64ffda',
        'orange-status': '#F49F85',
        'blue-status': '#62BCFA',
      },
      borderRadius: {
        4: '4px',
        10: '10px',
      },

      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 500ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 500ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
  },
};
