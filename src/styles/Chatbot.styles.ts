export const chatbotStyles = {
  chatButton: {
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 1000,
  },
  chatIcon: {
    backgroundColor: "#D32F2F",
    color: "black",
    width: 60,
    height: 60,
    boxShadow: 3,
    "&:hover": { backgroundColor: "red" },
  },
  chatDialog: {
    border: "3px solid #8B4513",
    borderRadius: 2,
    direction: "rtl",
  },
  chatPaper: {
    p: 2,
    bgcolor: "#FFF3E0",
    direction: "rtl",
  },
  answerText: {
    mt: 2,
    color: "#4E342E",
    textAlign: "center",
  },
  listItem: {
    mb: 1,
  },
  listItemButton: {
    direction: "rtl",
    bgcolor: "#A0522D",
    color: "white",
    borderRadius: "25px",
    border: "2px solid #8B4513",
    "&:hover": { bgcolor: "#8B4513" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    bgcolor: "#D32F2F",
    borderRadius: "25px",
    border: "2px solid #B71C1C",
    "&:hover": { bgcolor: "#B71C1C" },
  },
  closeButton: {
    bgcolor: "#D32F2F",
    color: "white",
    borderRadius: "25px",
    border: "2px solid #B71C1C",
    "&:hover": { bgcolor: "#B71C1C" },
  },
};
