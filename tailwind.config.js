/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif Toto"],
        text: ["Poppins"],
      },
    },
  },

  plugins: [],
};
