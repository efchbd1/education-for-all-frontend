import { makeStyles } from "@mui/styles";

export const useTopicItemStyles = makeStyles({
  root: {
    marginTop: "64px",
    padding: "20px",
    direction: "rtl",
  },

  title: {
    fontSize: "2.5rem !important",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
  },

  //Styles for buttons
  addButton: {
    marginTop: "20px",
    width: "100%",
    fontSize: "1.5em !important",
    padding: "15px 20px",
    borderRadius: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.5) !important",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  readButton: {
    marginTop: "20px",
    width: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "1.5em !important",
    padding: "15px 20px",
    borderRadius: "30px",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: "#8B5E3C !important",
    color: "white !important",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#6F4328 !important",
    },
    "&:disabled": {
      backgroundColor: "#A68A6D !important",
      cursor: "not-allowed",
    },
  },

  //Styles for loading
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "rgba(255, 165, 0, 0.1)",
    textAlign: "center",
  },

  loadingText: {
    marginTop: "16px",
    fontSize: "2.5rem !important",
    fontWeight: "bold",
    color: "#444",
  },

  loadingSpinner: {
    width: "120px !important",
    height: "120px !important",
  },
});
