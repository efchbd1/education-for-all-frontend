import * as React from 'react';
import { Box, AppBar, Toolbar, Typography, Menu } from '@mui/material';
import { PATHS } from 'routes/paths';
import { logout } from '../../../auth/utils';
import NavigationMenu from './NavigationMenu';
import RegistrationMenu from './RegistrationMenu';
import AuthenticationDialog from 'components/dialogs/AuthenticationDialog';
import { useAppSetup } from 'data/useAppSetup';

export default function PrimarySearchAppBar() {

  const { dispatch, navigate, isAuthenticated, isCounselor, currentUser } = useAppSetup();

  // Handling menu anchors and authentication dialogs
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const [registrationAnchorEl, setRegistrationAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = React.useState(false);
  const [hoveredSignUp, setHoveredSignUp] = React.useState(false);
  const [hoveredLogin, setHoveredLogin] = React.useState(false);

  // Menu states
  const isMenuOpen = Boolean(anchorEl);
  const isRegistrationMenuOpen = Boolean(registrationAnchorEl);

  // Closes all menus
  const closeAllMenus = () => {
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
    setRegistrationAnchorEl(null);
  };

  // Handles new topic creation - navigates if authenticated, otherwise opens authentication dialog
  const handleNewTopicClick = () => {
    if (!isAuthenticated || isCounselor) {
      setIsAuthDialogOpen(true);
    } else {
      navigate(PATHS.NewTopic);
    }
  };

  // Opens the registration menu
  const handleRegistrationMenuOpen = (event: React.MouseEvent<HTMLElement>) => setRegistrationAnchorEl(event.currentTarget);

  // Handles selection of a registration option
  const handleRegistrationOptionClick = (option: string) => {
    closeAllMenus();
    navigate(option === 'user' ? PATHS.UserSignUp : PATHS.CounselorSignUp);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate(PATHS.LogIn);
  };

  return (
    <Box sx={{ flexGrow: 1 }} dir="rtl">
      <AppBar position="fixed">
        <Toolbar>
          {/* Main navigation menu */}
          <NavigationMenu handleRegistrationMenuOpen={handleRegistrationMenuOpen} handleNewTopicClick={handleNewTopicClick} />

          {/* Registration menu */}
          <RegistrationMenu
            registrationAnchorEl={registrationAnchorEl}
            isRegistrationMenuOpen={isRegistrationMenuOpen}
            handleRegistrationMenuClose={() => setRegistrationAnchorEl(null)}
            handleRegistrationOptionClick={handleRegistrationOptionClick}
          />

          <Typography color="black" variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
            שלום {currentUser?.name || "אורח"}
          </Typography>

          {/* Login/Logout button */}
          <Typography
            color="yellow"
            variant="h6"
            onClick={handleLogout}
            sx={{ marginRight: '10px', cursor: 'pointer' }}
          >
            {isAuthenticated ? 'התנתקות' : 'התחברות'}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

        </Toolbar>
      </AppBar>

      {/* Authentication dialog when attempting to create a new topic */}
      <AuthenticationDialog
        isOpen={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
        hoveredSignUp={hoveredSignUp}
        setHoveredSignUp={setHoveredSignUp}
        hoveredLogin={hoveredLogin}
        setHoveredLogin={setHoveredLogin}
        warningMessage={isCounselor ? `אנו מעריכים מאוד את תרומתך לפורום! עם זאת, למען שמירה על סדרי הפורום, רק משתמשים רגילים יכולים לפתוח אשכול חדש` : 'רק משתמש רשום יכול לפתוח אשכול חדש'}
      />

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={closeAllMenus}
      />
    </Box>
  );
}