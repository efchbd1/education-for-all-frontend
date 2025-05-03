import { createTheme } from "@mui/material/styles";

// Defining color variables for consistency
const primaryColor = "#D77F3E";
const secondaryColor = "#F1A95F";
const backgroundColor = "#FFF5E1";
const primaryTextColor = "#5F4B3A";
const secondaryTextColor = "#9C7F61";
const dialogTitleColor = "#8B5E3C";
const textFieldBackgroundColor = "#F5E1A4";
const focusedBorderColor = "#D57A3C";

const theme = createTheme({
  direction: "rtl",

  // Color Palette
  palette: {
    primary: { main: primaryColor },
    secondary: { main: secondaryColor },
    background: { default: backgroundColor },
    text: {
      primary: primaryTextColor,
      secondary: secondaryTextColor,
    },
  },

  // Typography
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.75rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },

  // Components Overrides
  components: {
    // Button Styles
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 16px",
          backgroundColor: primaryColor,
          color: "white",
          "&:hover": {
            backgroundColor: secondaryColor,
          },
        },
      },
    },

    // Dialog Styles
    MuiDialog: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },

    // Dialog Title Styles
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: dialogTitleColor,
          color: "#fff",
          textAlign: "center",
          padding: "16px 24px",
          fontSize: "1.6em",
          fontWeight: "bold",
        },
      },
    },

    // Dialog Content Styles
    MuiDialogContent: {
      styleOverrides: {
        root: {
          textAlign: "right",
          fontSize: "1.2em",
          padding: "16px 24px",
          color: "#5C3D1D",
        },
      },
    },

    // TextField Styles
    MuiTextField: {
      styleOverrides: {
        root: {
          direction: "rtl",
          minWidth: "400px",
          backgroundColor: textFieldBackgroundColor,
          borderRadius: "8px",
          marginBottom: "20px",
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused": {
              borderColor: focusedBorderColor,
            },
          },
        },
      },
    },

    // Input Label Styles
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "black !important",
        },
      },
    },
  },
});

export default theme;
