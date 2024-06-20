/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Rojo: "#da2a2c",
        Pink: "#eaabc4",
        Thistle: "#c3b5d9",
        SeaShell: "#f9f0ec",
        Black: "#000000",
        Jet: "#363644",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Recoleta: ["Recoleta", "serif"],
      },
    },
  },
  plugins: [],
};
