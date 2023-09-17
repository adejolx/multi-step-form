import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,md,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        sidebarMobile: 'url("src/assets/bg-sidebar-mobile.svg")',
        sidebarDesktop: 'url("src/assets/bg-sidebar-desktop.svg")',
      },
      colors: {
        blue: {
          100: 'hsl(var(--light-blue) / <alpha-value>)',
          200: 'hsl(var(--pastel-blue) / <alpha-value>)',
          300: 'hsl(var(--purplish-blue) / <alpha-value>)',
          400: 'hsl(var(--marine-blue) / <alpha-value>)',
        },
        red: {
          100: 'hsl(var(--strawberry-red) / <alpha-value>)',
        },
        gray: {
          100: 'hsl(var(--alabaster) / <alpha-value>)',
          200: 'hsl(var(--magnolia) / <alpha-value>)',
          300: 'hsl(var(--light-gray) / <alpha-value>)',
          400: 'hsl(var(--cool-gray) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Ubuntu', ...fontFamily.sans],
      },
      screens: {
        sm: '240px',
        lg: '1440px',
      },
      gridTemplateColumns: {
        'container-sm': '1rem 1fr 1rem',
        'container-md': '1rem 0.5fr 1fr 1rem',
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      },
    },
  },
  plugins: [],
};
