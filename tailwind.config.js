/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      },
      colors: {
        midnight: '#060B18',
        navy: '#0B1226',
        surface: '#101A31',
        inovexa: {
          blue: '#3B82F6',
          cyan: '#22D3EE',
          green: '#34D399',
          amber: '#F59E0B'
        }
      },
      boxShadow: {
        soft: '0 24px 70px rgba(0,0,0,.32)'
      }
    }
  }
};
