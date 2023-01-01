const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lato', ...fontFamily.sans],
        secondary: ['Fredoka One', ...fontFamily.sans],
      },
      colors: {
        dark: {
          DEFAULT: '#1C1C1C',
          100: '#333333',
          400: '#252525',
          700: '#000000',
        },
        darkbg: '#1C1C1C',
        light: {
          DEFAULT: '#f3f3f3',
          100: '#ffffff',
          400: '#fefefe',
          700: '#eef3f9',
        },
        teal: colors.teal,
        cyan: colors.cyan,
        primary: {
          400: '#00E0F3',
          500: '#00c4fd',
        },
        npc: {
          DEFAULT: '#c93d45',
          100: '#ffbbbc',
          400: '#fd7d7e',
          700: '#fd5457',
        },
        nlc: {
          DEFAULT: '#fccc00',
          100: '#fde466',
          400: '#ffb349',
          700: '#fe6021',
        },
        nst: {
          DEFAULT: '#18a489',
          100: '#95dc8e',
          400: '#53c97f',
          700: '#138176',
        },
        reeva: {
          DEFAULT: '#008bd0',
          100: '#a3e1fa',
          400: '#77bede',
          700: '#3d7196',
        },
      },
      flex: {
        2: '2 2 0%',
        6: '6 6 0%',
      },
      borderRadius: {
        large: '30px',
      },
      backgroundPosition: {
        'top-right': 'top right',
        'center-right': 'center right',
      },
      backgroundSize: {
        'size-70': '70%',
        'size-90': '90%',
        'size-120': '120%',
        'size-150': '150%',
        'size-190': '190%',
        'size-210': '210%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
