import React from 'react';
import { Menu, MenuItem } from '@mui/material';

type RegistrationMenuProps = {
  registrationAnchorEl: null | HTMLElement;
  isRegistrationMenuOpen: boolean;
  handleRegistrationMenuClose: () => void;
  handleRegistrationOptionClick: (option: string) => void;
}

// Registration menu component for selecting a user type (Parent or Counselor)
const RegistrationMenu: React.FC<RegistrationMenuProps> = ({
  registrationAnchorEl,
  isRegistrationMenuOpen,
  handleRegistrationMenuClose,
  handleRegistrationOptionClick,
}) => {
  return (
    <Menu
      dir="rtl"
      anchorEl={registrationAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isRegistrationMenuOpen}
      onClose={handleRegistrationMenuClose}
    >
      <MenuItem onClick={() => handleRegistrationOptionClick('user')}>הורה</MenuItem>
      <MenuItem onClick={() => handleRegistrationOptionClick('counselor')}>יועץ</MenuItem>
    </Menu>
  );
};

export default RegistrationMenu;