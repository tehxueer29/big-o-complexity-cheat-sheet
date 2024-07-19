/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter']
    },
    extend: {
      colors: {
        black: {
          900: '#484B6A',
          800: '#8184A1'
        },
        white: {
          100: '#FAFAFA',
          200: '#F1F2F9',
          400: '#D2D3DB'
        },
        primary: {
          500: '#7559B9',
          700: '#4D3AA4'
        },
        secondary: '#ff7849',
        green: {
          500: '#ADEAA1',
          400: '#DCEAA1'
        },
        yellow: '#FBFB9A',
        orange: '#FFBF92',
        red: '#FF9292'
      }
    }
  },
  plugins: []
};
