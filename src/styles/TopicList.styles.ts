export const useTopicListStyles = {
  root: {
    direction: "rtl",
  },

  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  infoItem: {
    marginRight: "10px",
    color: "black",
  },

  title: {
    fontSize: "1.5rem",
    color: "black",
    transition: "font-size 0.3s ease",
    "@media (max-width: 900px)": {
      fontSize: "1.25rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem",
    },
  },

  // Styles for pagination
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },

  paginationButton: {
    margin: "0 5px",
    padding: "10px 15px",
  },

  // Styles for searching a topic
  searchInput: {
    marginBottom: "20px",
    width: "100%",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  searchBox: {
    marginBottom: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.6) !important",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "relative",
    "& .MuiInputBase-root": {
      direction: "rtl",
    },
    "& .MuiInputLabel-root": {
      direction: "rtl",
      textAlign: "center",
      width: "100%",
      transform: "translate(0, 14px)",
      left: 0,
      position: "absolute",
      color: "#6F4E37",
    },
    "& .MuiOutlinedInput-root": {
      padding: "0 10px",
    },
  },

  //Styles for card
  card: {
    border: "1px solid #ccc",       
    marginBottom: "20px",
    margin: "0 auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "50%",
    color: "black",
    transition:
      "transform 0.3s ease, border 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.02)",
      border: "2px solid black",
      backgroundColor: "rgba(255, 165, 0, 0.1)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    "@media (max-width: 900px)": {
      maxWidth: "70%",
    },
    "@media (max-width: 600px)": {
      maxWidth: "90%",
    },
    "@media (max-width: 400px)": {
      maxWidth: "100%",
      margin: "10px",
    },
  },

  cardContent: {
    padding: "20px",
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  cardActions: {
    padding: "0 20px 20px 20px",
    display: "flex",
    justifyContent: "center",
  },

  //Styles for loading
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh",
    textAlign: "center",
  },

  loadingText: {
    marginTop: "16px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#444",
  },
};
