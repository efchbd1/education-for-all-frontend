import { makeStyles } from "@mui/styles";

export const useDeletePostPage = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    color: "#3E2723",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },

  content: {
    maxWidth: "600px",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },

  heading: {
    fontSize: "2.1em",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6D4C41",
  },

  button: {
    backgroundColor: "#8D6E63",
    color: "white",
    padding: "10px 20px",
    fontSize: "1.5em",
    cursor: "pointer",
    marginBottom: "10px",
    opacity: (props: { deleteButtonDisabled: boolean }) =>
      props.deleteButtonDisabled ? 0.6 : 1,
    pointerEvents: (props: { deleteButtonDisabled: boolean }) =>
      props.deleteButtonDisabled ? "none" : "auto",
  },

  //Styles for link
  linkContainer: {
    display: "inline-block",
    margin: "10px",
    position: "relative",
  },

  link: {
    backgroundColor: "#3E2723",
    color: "white",
    padding: "10px 20px",
    fontSize: "1.2em",
    textDecoration: "none",
    display: "inline-block",
    transition: "color 0.3s",
    border: "none",
    borderRadius: "5px",
  },
});
