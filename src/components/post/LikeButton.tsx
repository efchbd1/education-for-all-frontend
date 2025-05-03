import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { ThumbUp } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  likeIcon: {
    color: "black !important",
  },
  likedIcon: {
    color: "green !important",
  },
});

//The button is displayed on top of the post.
const LikeButton: React.FC<{
  liked: boolean;
  onClick: () => void;
  disabled: boolean; // The button is disabled if the user has already liked the post or has clicked the dislike-report button.
  likesCount: number;
}> = ({ liked, onClick, disabled, likesCount }) => {
  const classes = useStyles();

  return (
    <IconButton
      edge="end"
      aria-label="like"
      onClick={onClick}
      disabled={disabled}
      className={liked ? classes.likedIcon : classes.likeIcon}
    >
      <ThumbUp />
      <Typography variant="body2" color="textSecondary" style={{ marginLeft: "5px" }}>
        {likesCount}
      </Typography>
    </IconButton>
  );
};

export default LikeButton;