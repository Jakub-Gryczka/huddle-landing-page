/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'pink-primary': 'hsl(322, 100%, 66%)',
      neutral: {
        'pale-cyan': 'hsl(193, 100%, 96%)',
        'dark-cyan': 'hsl(192, 100%, 9%)',
        'grayish-cyan': 'hsl(208, 11%, 55%)',
      },
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Open_Sans: ['Open Sans'],
      },
    },
  },
  plugins: [],
};
