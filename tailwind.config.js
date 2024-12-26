/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'calibri': ['Calibri', 'sans-serif']
      },
      colors: {
        'custom-blue': 'rgba(3, 56, 244, 0.71)',
        'custom-pink': 'rgba(224, 37, 206, 0.79)',
        'custom-black': 'rgba(196, 196, 196, 0.30)',
        'custom-gray': 'rgba(196, 196, 196, 0.35)',
        'gray': {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        'zinc': "#101010",
        'white-text': "#FFF",
        'black-text':"#343434",
        'black-bg' : "#545454",
        'border-blue' : "#3B5999",
        'gray-text' : "#CECACA"
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
