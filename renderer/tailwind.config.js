const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
    },
    extend: {
      colors:{
        'bga-blue': '#252644',
        'bga-light-blue': '#334E96',
        'whitesmoke': '#f5f5f5',
      },
    },
  },
  plugins: [],
};
