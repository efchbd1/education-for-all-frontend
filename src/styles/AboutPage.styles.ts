const aboutPageStyles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    mt: 8,
    direction: "rtl",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(10px)",
  },
  title: {
    color: "#6f4f28",
    fontWeight: "bold",
    textAlign: "center",
    mb: 3,
    fontSize: "2.8rem",
  },
  subtitle: {
    color: "#8B4513",
    mb: "12px",
  },
  listItem: {
    mb: "8px",
  },
  button: {
    mt: 3,
    px: 4,
    py: 1.5,
    borderRadius: "25px",
    background: "linear-gradient(135deg, #6f4f28, #8B4513)",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "none",
    transition: "transform 0.2s ease-in-out, background 0.3s ease-in-out",
    alignSelf: "flex-start",
    textAlign: "left",
    width: "100%",
    "&:hover": {
      background: "linear-gradient(135deg, #5e3d23, #6d4c41)",
      transform: "scale(1.05)",
    },
  },
  card: {
    m: 2,
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
};

export default aboutPageStyles;
