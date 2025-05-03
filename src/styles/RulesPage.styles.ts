import { makeStyles } from "@material-ui/core/styles";

export const useRulesPage = makeStyles((theme) => ({
  container: {
    maxWidth: "900px",
    margin: "auto",
    marginTop: theme.spacing(8),
    direction: "rtl",
  },

  title: {
    color: "#5d4037",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing(4),
    fontSize: "3rem",
  },

  circularGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing(4),
  },

  //Styles for card
  cardContainer: {
    perspective: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2),
  },

  card: {
    width: "290px",
    height: "290px",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s",
    borderRadius: "50%",
    "&:hover": {
      transform: "rotateY(180deg)",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },

  // Styles for card side
  cardSide: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
    boxSizing: "border-box",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  },

  front: {
    backgroundColor: "rgba(255, 245, 236, 0.6)",
    color: "#3e2723",
    fontSize: "2.5rem",
    fontWeight: "bold",
  },

  back: {
    backgroundColor: "#d7ccc8",
    color: "#5d4037",
    transform: "rotateY(180deg)",
    fontSize: "1rem",
  },
}));
