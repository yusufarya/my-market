// theme.ts

import { createTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2", // Change the primary color
    },
    secondary: {
      main: "#FF4081", // Change the secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Change the default font family
  },
});

export default theme;
