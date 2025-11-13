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
        primary: { DEFAULT: '#a8f5a4', dark: '#333333' },
        secondary: { DEFAULT: '#FFFFFF', dark: '#7F7F7F' },
      },
      fontFamily: {
        sans: ['Sofia Sans', 'sans-serif'],
      },
      fontSize: {
        h1: [{ lineHeight: '1.2', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
};
