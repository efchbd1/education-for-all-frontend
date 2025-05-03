import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { ThumbDown } from '@mui/icons-material';

type DislikeButtonProps = {
  disliked: boolean;
  onClick: () => void;
  disabled: boolean;
}

//When clicked, opens a report dialog
const DislikeButton: React.FC<DislikeButtonProps> = ({ disliked, onClick, disabled }) => {
  return (
    <IconButton
      edge="end"
      aria-label="dislike"
      style={{ color: disliked ? 'red' : 'inherit' }}
      onClick={onClick}
      disabled={disabled}
    >
      <ThumbDown />
      <Typography variant="caption" component="span">
        לדיווח
      </Typography>
    </IconButton>
  );
};

export default DislikeButton;