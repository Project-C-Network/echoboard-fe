import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '4rem',
        screens: {
          sm: '100%',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      width: {
        'container-fluid': '100%',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        EBPrimary: {
          100: '#03a9f4',
          200: '#2196f3',
        },
        EBSecondary: '#ffeb3b',
        EBLight: '#ffffff',
        EBDark: '#000000',
        EBMaroon: '#e91e63',
        EBSuccess: {
          100: '#18f241',
          200: '#8bc34a',
        },
        EBDanger: '#f44336',
        EBOliveGreen: '#b0ba46',
        EBAmber: '#ff9800',
        EBGray: '#808080',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        dark: '900',
      },
      backgroundImage: {
        none: 'none',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
      },
      backgroundOpacity: ({ theme }) => theme('opacity'),
      backgroundPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none: 'none',
      },
      borderRadius: {
        none: '0px',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px',
      },
      margin: {
        'container-fluid': '0 auto',
      },
      fontSize: {
        10: ['10px', { lineHeight: '1.5rem' }],
        12: ['12px', { lineHeight: '1.75rem' }],
        14: ['14px', { lineHeight: '1.75rem' }],
        16: ['16px', { lineHeight: '2rem' }],
        18: ['18px', { lineHeight: '2rem' }],
        22: ['22px', { lineHeight: '2.5rem' }],
        26: ['26px', { lineHeight: '2.5rem' }],
        32: ['32px', { lineHeight: '3rem' }],
        36: ['36px', { lineHeight: '3.25rem' }],
        38: ['38px', { lineHeight: '3.5rem' }],
        42: ['42px', { lineHeight: '3.75rem' }],
        46: ['46px', { lineHeight: '4rem' }],
        48: ['48px', { lineHeight: '4rem' }],
        62: ['62px', { lineHeight: '5rem' }],
        65: ['65px', { lineHeight: '5rem' }],
        72: ['72px', { lineHeight: '5.25rem' }],
        82: ['82px', { lineHeight: '6rem' }],
        84: ['84px', { lineHeight: '6rem' }],
        90: ['90px', { lineHeight: '6.5rem' }],
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '28px',
              lineHeight: '1.2',
              '@screen md': {
                fontSize: '34px',
                lineHeight: '1.3',
              },
              '@screen lg': {
                fontSize: '44px',
                lineHeight: '1.4',
              },
              '@screen xl': {
                fontSize: '52px',
                lineHeight: '1.5',
              },
            },
            h2: {
              fontSize: '24px',
              lineHeight: '1.3',
              '@screen md': {
                fontSize: '30px',
                lineHeight: '1.4',
              },
              '@screen lg': {
                fontSize: '38px',
                lineHeight: '1.5',
              },
              '@screen xl': {
                fontSize: '46px',
                lineHeight: '1.6',
              },
            },
            h3: {
              fontSize: '20px',
              lineHeight: '1.4',
              '@screen md': {
                fontSize: '26px',
                lineHeight: '1.5',
              },
              '@screen lg': {
                fontSize: '32px',
                lineHeight: '1.6',
              },
              '@screen xl': {
                fontSize: '40px',
                lineHeight: '1.7',
              },
            },
            h4: {
              fontSize: '18px',
              lineHeight: '1.5',
              '@screen md': {
                fontSize: '22px',
                lineHeight: '1.6',
              },
              '@screen lg': {
                fontSize: '28px',
                lineHeight: '1.7',
              },
              '@screen xl': {
                fontSize: '34px',
                lineHeight: '1.8',
              },
            },
            h5: {
              fontSize: '16px',
              lineHeight: '1.6',
              '@screen md': {
                fontSize: '20px',
                lineHeight: '1.7',
              },
              '@screen lg': {
                fontSize: '24px',
                lineHeight: '1.8',
              },
              '@screen xl': {
                fontSize: '30px',
                lineHeight: '1.9',
              },
            },
            h6: {
              fontSize: '14px',
              lineHeight: '1.6',
              '@screen md': {
                fontSize: '18px',
                lineHeight: '1.7',
              },
              '@screen lg': {
                fontSize: '22px',
                lineHeight: '1.8',
              },
              '@screen xl': {
                fontSize: '26px',
                lineHeight: '1.9',
              },
            },
            p: {
              fontSize: '16px',
              lineHeight: '1.8',
              '@screen md': {
                fontSize: '18px',
                lineHeight: '1.9',
              },
              '@screen lg': {
                fontSize: '20px',
                lineHeight: '2.0',
              },
              '@screen xl': {
                fontSize: '22px',
                lineHeight: '2.1',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
