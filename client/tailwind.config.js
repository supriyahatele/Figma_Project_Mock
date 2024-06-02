/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "shojumaru": ['Shojumaru'],
        "zcool": ['ZCOOL KuaiLe', 'sans-serif'],
      },
      colors: {
        'gradient-start': '#FF002A',
        'gradient-end': '#720005',
      },
      screens: {
        'sm': '353px',
        // => @media (min-width: 576px) { ... }
  
        'lg': '1512px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}

