/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      pink: '#ED2590',
      gray: '#B4AEAE',
      white: '#FDFEFF',
      darkLight: '#4B4B4B',
      blueLight: '#D9E6F7',
      input: '#EFF3F8',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
