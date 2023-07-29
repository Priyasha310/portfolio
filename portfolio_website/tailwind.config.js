/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{svg,png,jpg,jpeg}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  colors: {
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
    'white': '#ffffff',
    'black': '#000000',
    'ghost-white': '#F8F8FF',
    'gainsboro': '#DCDCDC',
    'dim-grey':'#696969',
    'sky-blue-light':'#5a9cb8',
    'chinese-silver': '#ccc',
    'nero': '#272727',
    'navy-shade':'#1E60C3',
    'app-body-color': '#f6f6f6'
  },
  spacing: {
    '128': '32rem',
    '144': '36rem',
    '1/10': '10%',
    '1/5': '20%',
    '3/10': '30%',
    '2/5': '40%',
    '1/2': '50%',
    '3/5': '60%',
    '7/10': '70%',
    '4/5': '80%',
    '1/100': '1%',
    '9/10': '90%',
    '1/6': '16.67%',
    '1/3': '33.33%',
    '1/4': '25%',
    '3/4': '75%',
    '1/20': '5%',
    '3/20': '15%',
    'inherit': 'inherit'
  },
  borderRadius: {
    '4xl': '2rem',
  },
  plugins: [],
}
