import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: "80px",
    paddingBottom: "40px",
    paddingLeft: "16px",
    paddingRight: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },

  title: {
    color: "#6A4E23",
    fontFamily: "Comic Sans MS",
    fontSize: "3rem !important",
    textAlign: "center",
    marginBottom: 40,
  },

  inputField: {
    background: "#ffffff !important",
    width: "100% !important", 
    boxSizing: "border-box",
  },

  textField: {
    marginBottom: 20,
    background: "rgba(255, 255, 255, 0.6) !important",
    width: "100% !important",
    boxSizing: "border-box",
  },

  icon: {
    color: "#6A4E23",
  },

  button: {
    backgroundColor: "#8D6E63",
    color: "#fff",
    fontWeight: "bold",
    width: "100%",
  },

  errorText: {
    marginBottom: 20,
  },
}));
