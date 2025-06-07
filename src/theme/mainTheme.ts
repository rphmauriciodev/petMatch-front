import { createTheme } from "@mui/material/styles";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#19a246",
      dark: "#146a3d",
      contrastText: "#fff",
    },
    
    secondary: {
      main: "#df5820",
    },
  },
  components: {
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          color: "#146a3d",
        },
      },
    },
  },
});

export default mainTheme;
