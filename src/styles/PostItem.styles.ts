import { makeStyles } from "@mui/styles";

export const usePostItemStyles = makeStyles({
  listItemBase: {
    marginBottom: "20px",
    borderRadius: "16px",
    padding: "30px",
    backgroundColor: "rgba(255, 250, 230, 0.9)",
    backdropFilter: "blur(5px)",
  },

  listItemShadow: {
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    border: "2px dashed rgba(0, 0, 0, 0.2)",
  },

  content: {
    fontSize: "1.2rem",
    textAlign: "justify",
    fontStyle: "normal",
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  },

  blackIcon: {
    color: "black",
  },

  postLabel: {
    fontWeight: "bold",
    marginBottom: "10px",
    textDecoration: "underline",
  },
});
