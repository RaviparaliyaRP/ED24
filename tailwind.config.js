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
        'ed24-purple': '#60311F',
        'ed24-orange': '#FABB38',
        'ed24-khaki': '#F1DC8D',
        'ed24-brown': '#60311F',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #FABB38 0%, #F1DC8D 100%)',
        'gradient-purple': 'linear-gradient(135deg, #60311F 0%, #8B4C6A 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

