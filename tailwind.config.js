/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'pink-primary': 'hsl(322, 100%, 66%)',
        neutral: {
          'pale-cyan': 'hsl(193, 100%, 96%)',
          'dark-cyan': 'hsl(192, 100%, 9%)',
          'grayish-cyan': 'hsl(208, 11%, 55%)',
        },
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Open_Sans: ['Open Sans'],
      },
      backgroundImage: {
        'hero-background-mobile': "url('assets/images/bg-hero-mobile.svg')",
        'hero-background-desktop': "url('assets/images/bg-hero-desktop.svg')",
      },
    },
  },
  plugins: [],
};
