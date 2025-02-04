/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'design-green': '#c4f82a',
        'design-grey-900': '#141414',
        'design-grey-800': '#1f1f1f',
        'design-grey-700': '#333333',
      },
    },
  },
  plugins: [],
}
