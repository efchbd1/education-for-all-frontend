import React, { useState } from "react";
import { faqData, FAQNode } from "../../data/faqData";
import { Box, Button, Typography, Paper, IconButton, Dialog, List, ListItem, ListItemButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { chatbotStyles } from "styles/Chatbot.styles";

// Chatbot that provides answers to frequently asked questions.
const Chatbot: React.FC = () => {
  const [history, setHistory] = useState<FAQNode[]>([faqData]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Handle user selection of an FAQ node
  const handleSelection = (node: FAQNode) => {
    if (node.answer) {
      setSelectedAnswer(node.answer);
    } else if (node.children) {
      setHistory([...history, node]);
      setSelectedAnswer(null);
    }
  };

  const handleBack = () => {
    if (selectedAnswer) {
      setSelectedAnswer(null);
    } else if (history.length > 1) {
      setHistory(history.slice(0, -1));
    }
  };

  const handleClose = () => {
    setHistory([faqData]);
    setSelectedAnswer(null);
    setOpen(false);
  };

  // Get the current node being displayed
  const currentNode = history[history.length - 1];

  return (
    <>
      {/* Chatbot floating button */}
      <Box sx={chatbotStyles.chatButton}>
        <IconButton sx={chatbotStyles.chatIcon} onClick={() => setOpen(true)}>
          <ChatIcon fontSize="large" />
        </IconButton>
        <Typography variant="body2" sx={{ textAlign: "center", mt: 1, color: "#D32F2F" }}>
          אפשר לשאול אותי...
        </Typography>
      </Box>

      {/* Chatbot dialog window */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            ...chatbotStyles.chatDialog,
            position: "absolute",
            bottom: 90,
            right: 20,
            transform: "none",
          },
        }}
      >
        <Paper sx={chatbotStyles.chatPaper}>
          <Typography variant="h6" textAlign="center" color="primary">
            {currentNode.title}
          </Typography>

          {/* Display selected answer or list of child questions */}
          {selectedAnswer ? (
            <Typography sx={chatbotStyles.answerText}>{selectedAnswer}</Typography>
          ) : (
            <List sx={{ mt: 1 }}>
              {currentNode.children?.map((child) => (
                <ListItem key={child.title} disablePadding sx={chatbotStyles.listItem}>
                  <ListItemButton onClick={() => handleSelection(child)} sx={chatbotStyles.listItemButton}>
                    {child.title}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Navigation and close buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            {history.length > 1 || selectedAnswer ? (
              <Button onClick={handleBack} color="primary" sx={chatbotStyles.backButton}>
                לתפריט הקודם
              </Button>
            ) : null}
            <Button onClick={() => handleClose()} color="error" sx={chatbotStyles.closeButton}>
              סגור
            </Button>
          </Box>
        </Paper>
      </Dialog>
    </>
  );
};

export default Chatbot;