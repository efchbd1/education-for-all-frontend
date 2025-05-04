import React from "react";
import { IconButton, Typography } from "@mui/material";
import { ThumbUp } from "@mui/icons-material";

//The button is displayed on top of the post.
const LikeButton: React.FC<{
  liked: boolean;
  onClick: () => void;
  disabled: boolean; // The button is disabled if the user has already liked the post or has clicked the dislike-report button.
  likesCount: number;
}> = ({ liked, onClick, disabled, likesCount }) => {

  return (
    <IconButton
      edge="end"
      aria-label="like"
      onClick={onClick}
      disabled={disabled}
      sx={{
        color: liked ? 'green !important' : 'black !important', 
      }}
    >
      <ThumbUp />
      <Typography variant="body2" color="textSecondary" style={{ marginLeft: "5px" }}>
        {likesCount}
      </Typography>
    </IconButton>
  );
};

export default LikeButton;