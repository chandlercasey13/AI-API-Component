/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors : {
  'AI-Purple': "#3A0CA3",
  'AI-Send' : '#f72585',
  'AI-SendHover': '#f7025c' 
}

    },
  },
  plugins: [],
}

