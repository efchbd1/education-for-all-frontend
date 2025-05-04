import React from 'react';
import { Dialog, DialogContent, Typography, Box, Link } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { PATHS } from 'routes/paths';
import { useAuthenticationDialogStyles } from 'styles/AuthenticationDialog.styles';

type AuthenticationDialogProps = {
    isOpen: boolean;
    onClose: () => void;
    hoveredSignUp: boolean;
    setHoveredSignUp: React.Dispatch<React.SetStateAction<boolean>>;
    hoveredLogin: boolean;
    setHoveredLogin: React.Dispatch<React.SetStateAction<boolean>>;
    warningMessage: string;
}

// Dialog displayed when a user without the required permissions attempts to access the action.
const AuthenticationDialog: React.FC<AuthenticationDialogProps> = ({
    isOpen,
    onClose,
    hoveredSignUp,
    setHoveredSignUp,
    hoveredLogin,
    setHoveredLogin,
    warningMessage
}) => {
    const classes = useAuthenticationDialogStyles;

    const handleLinkClick = (path: string) => {
        onClose();
        window.location.href = path;
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogContent sx={classes.dialogContent}>
                <WarningIcon sx={classes.warningIcon} />
                <Typography variant="h4" sx={classes.heading}>
                    {warningMessage}
                </Typography>
                <Box sx={classes.flexContainer}>
                    <Box
                        sx={classes.linkContainer}
                        onMouseEnter={() => setHoveredSignUp(true)}
                        onMouseLeave={() => setHoveredSignUp(false)}
                        onClick={() => handleLinkClick(PATHS.UserSignUp)}
                    >
                        <Link underline="none">
                            הירשם
                        </Link>
                        <Box sx={classes.underline} style={{ width: hoveredSignUp ? '100%' : '0%' }} />
                    </Box>
                    <Typography variant="body1" component="span" style={{ margin: '0 10px', fontSize: '1em' }}>
                        או
                    </Typography>
                    <Box
                        sx={classes.linkContainer}
                        onMouseEnter={() => setHoveredLogin(true)}
                        onMouseLeave={() => setHoveredLogin(false)}
                        onClick={() => handleLinkClick(PATHS.LogIn)}
                    >
                        <Link underline="none">
                            התחבר
                        </Link>
                        <Box sx={classes.underline} style={{ width: hoveredLogin ? '100%' : '0%' }} />
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AuthenticationDialog;