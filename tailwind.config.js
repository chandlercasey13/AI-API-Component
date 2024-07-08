/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
colors : {
  'AI-Purple': "rgb(58, 12, 163, .8)",
  'AI-Send' : '#f72585',
  'AI-SendHover': '#f7025c' 
},
fontFamily : {
  'coolfont' : ['Playwrite-SK']

},

    },
  },
  plugins: [],
}

