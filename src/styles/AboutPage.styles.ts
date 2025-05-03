import { makeStyles } from "@material-ui/core/styles";

export const useAboutPageStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    marginTop: theme.spacing(8),
    direction: "rtl",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(10px)",
  },

  title: {
    color: "#6f4f28",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing(3),
    fontSize: "2.8rem",
  },

  subtitle: {
    color: "#8B4513",
    marginBottom: "12px",
  },

  listItem: {
    marginBottom: "8px",
  },

  button: {
    marginTop: theme.spacing(3),
    padding: "10px 20px",
    borderRadius: "25px",
    background: "linear-gradient(135deg, #6f4f28, #8B4513)",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "none",
    transition: "transform 0.2s ease-in-out, background 0.3s ease-in-out",
    "&:hover": {
      background: "linear-gradient(135deg, #5e3d23, #6d4c41)",
      transform: "scale(1.05)",
    },
    alignSelf: "flex-start",
    textAlign: "left",
    width: "100%",
  },

  //Styles for card
  card: {
    margin: theme.spacing(2),
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid #d2b48c",
    "&:hover": {
      boxShadow: "0 6px 25px rgba(0, 0, 0, 0.2)",
      borderColor: "#c5a184",
    },
  },

  cardContent: {
    color: "#3e2723",
    lineHeight: 1.8,
  },
}));
