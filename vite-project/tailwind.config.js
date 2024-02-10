/** @type {import('tailwindcss').Config} */
import Images from './images';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '#27AC35': '#27AC35',
        '#777C7D': '#777C7D',
        '#718E81': '#718E81',
        '#7D7D7D': '#7D7D7D',
        '#FAFAFA': '#FAFAFA'
      },
      width: {
        '50%': '50%',
        '40%': '40%',
        '1440px': '1440px',
        '1180px': '1180px',
        '150px': '150px',
        '200px': '200px',
        '300px': '300px',
        '320px': '320px',
        '500px': '500px',
        '600px': '600px',
      },
      spacing: {
        'negative100px': '-100px',
        '50px': '50px',
        '100px': '100px',
        '125px': '125px',
        '150px': '150px',
        '160px': '160px',
        '200px': '200px',
        '250px': '250px',
        '300px': '300px'
      },
      borderRadius: {
        '20px': '20px',
        '24px': '24px',
        '100px' : '100px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif']
      },
      fontSize: {
        '20px': '20px',
        '24px': '24px',
        '50px': '50px',
      },
      height: {
        '800px': '800px',
      }
    },
  },
  plugins: [],
}
