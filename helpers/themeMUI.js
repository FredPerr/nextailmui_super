import { createTheme } from "@mui/material/styles";


const mui_theme = createTheme({
  typography: {
    fontFamily: [
      '"Poppins"', 'sans-serif'
    ].join(',')
  },
  primary: "#fff",
  secondary: "#212121",
  breakpoints: {
    xs: 0,
    mb: 350,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
})

export { mui_theme };