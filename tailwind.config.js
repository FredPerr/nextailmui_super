/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['"Poppins"', 'ui-sans-serif'],
    },
    extend: {
      colors: {
        primary: "#FFF",
        secondary: "#212121",
      }
    },
    screens: {
      ...{
        xs: "0px",
        mb: "350px",
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1920px",
      },
      ha: {raw: "(hover: hover)"},
    }
  },
  plugins: [],
}
