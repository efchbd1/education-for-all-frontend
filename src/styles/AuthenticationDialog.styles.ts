import { makeStyles } from "@mui/styles";

export const useAuthenticationDialogStyles = makeStyles({
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    "@media (max-width: 600px)": {
      padding: "10px",
    },
  },

  warningIcon: {
    color: "red",
    fontSize: "8rem !important",
    marginBottom: "20px",
    "@media (max-width: 600px)": {
      fontSize: "5rem !important",
    },
  },

  heading: {
    fontSize: "2.5em",
    marginBottom: "20px",
    textAlign: "center",
    "@media (max-width: 600px)": {
      fontSize: "1.5em",
    },
  },

  linkContainer: {
    display: "inline",
    margin: "0 10px",
    color: "#2196F3",
    textDecoration: "none",
    fontSize: "1.5em",
    cursor: "pointer",
    position: "relative",
    transition: "color 0.3s",
    "&:hover": {
      color: "black",
    },
    "&:hover $underline": {
      borderBottom: "2px solid black",
    },
    "@media (max-width: 600px)": {
      fontSize: "1em",
    },
  },

  underline: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "-4px",
    transition: "width 0.3s ease-in-out",
  },

  flexContainer: {
    fontSize: "2.5em",
    display: "inline-flex",
    alignItems: "center",
    "@media (max-width: 600px)": {
      fontSize: "1.5em",
    },
  },
});
