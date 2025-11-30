/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        primary: {
          DEFAULT: '#2CADE6', // Main color - blue
          light: '#58BDEB',   // Lighter blue
          dark: '#1a8eb9',    // Darker blue variant
        },
        secondary: {
          DEFAULT: '#57C797', // Green color
          light: '#78d5b0',   // Lighter green
          dark: '#3da77a',    // Darker green
        },
        accent: {
          DEFAULT: '#58BDEB', // Accent blue
        },
        background: {
          DEFAULT: '#f6fdf9', // Light background color
          alt: '#f5fcf5',
        },
        text: {
          DEFAULT: '#333333',
          light: '#ffffff',
        }
      },
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(white|primary|secondary)\/[0-9]+/,
    },
    {
      pattern: /backdrop-blur-(xs|sm|md|lg|xl)/,
    }
  ],
} 