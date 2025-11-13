/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    './index.html', // for static HTML
    './src/**/*.{js,ts,jsx,tsx}', // all your JS/TS/React components
    './app/**/*.{js,ts,jsx,tsx}', // if using Next.js app folder
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#84FFAF', dark: '#333333' },
        secondary: { DEFAULT: '#FFFFFF', dark: '#7F7F7F' },
      },
      fontFamily: {
        sans: ['Sofia Sans', 'sans-serif'],
      },
      fontSize: {
        h1: ['32px', { lineHeight: '1.2', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
};
