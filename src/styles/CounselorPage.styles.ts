export const useCounselorPageStyles = {
  root: {
    marginTop: "50px",
    padding: "20px",
    direction: "rtl",
  },

  title: {
    textAlign: "center",
    color: "#5F4B3A",
    marginBottom: "30px",
    fontSize: "3rem !important",
    fontWeight: 700,
  },

  explanationBox: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "#6F4E37",
    fontSize: "1rem",
    lineHeight: "1.5",
    textAlign: "center",
  },

  icon: {
    color: "#A0522D",
    fontSize: "2rem !important",
    backgroundColor: "#F5DEB3",
    borderRadius: "50%",
    padding: "8px",
  },

  button: {
    marginTop: "20px",
    backgroundColor: "#D77F3E",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    fontWeight: "bold",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#F1A95F",
    },
  },

  buttonIcon: {
    marginLeft: "8px",
  },

  //Styles for counselor card
  counselorItem: {
    padding: "20px",
    background: "linear-gradient(145deg, #FFF5E1, #F1E7D2)",
    borderRadius: "16px",
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  },

  counselorName: {
    fontSize: "1.5rem !important",
    fontWeight: 700,
    color: "#8B4513",
    textAlign: "center",
    marginBottom: "20px",
    textTransform: "uppercase",
  },

  counselorDetails: {
    marginTop: "10px",
    fontSize: "1.1rem",
    color: "#6F4E37",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    alignItems: "center",
    gap: "10px",
  },

  //Styles for searching a counselor
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

  searchBoxContainer: {
    marginBottom: "40px",
  },

  //Styles for badge
  badge: {
    fontWeight: "bold",
    color: "#fff",
  },

  badgeBeginner: {
    backgroundColor: "#F5DEB3",
    color: "#6F4E37",
  },

  badgeExperienced: {
    backgroundColor: "#D77F3E",
    color: "#fff",
  },

  badgeExpert: {
    backgroundColor: "#8B4513",
    color: "#fff",
  },

  badgeSenior: {
    backgroundColor: "#4B2C20",
    color: "#fff",
  },
};
