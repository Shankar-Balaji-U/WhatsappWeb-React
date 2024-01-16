/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },
    extend: {
      minHeight: {
        '18': '4.5rem'
      },
      animation: {
        scalein: 'scalein 300ms cubic-bezier(0.1,0.82,0.25,1)',
      },
      keyframes: {
        scalein: {
          '0%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      colors: {
        primary: colors.indigo,
        secondary: colors.gray["100"],
        neutral: colors.gray,
        orange: {
          75: '#efeae2',
        },
        cyan: {
          990:  '#2a3942',
          1000: '#222e35',
          1010: '#202c33',
          1040: '#111b21',
          1045: '#0b141a',
          1050: '#0c1317',
        },
        // emerald: {
        //   1050: '#0c1317',
        // },
      }
    },
  },
  plugins: [],
}