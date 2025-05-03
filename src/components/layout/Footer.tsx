import { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { PATHS } from 'routes/paths';
import ContactUsDialog from 'components/dialogs/contact/ContactUsDialog';
import AuthenticationDialog from 'components/dialogs/AuthenticationDialog';
import { useAppSetup } from "data/useAppSetup";
import { useFooterStyles } from "styles/Footer.styles";
import Chatbot from "components/layout/Chatbot";
import { Box } from "@mui/material";

export default function Footer() {
  const classes = useFooterStyles();
  const { isAuthenticated } = useAppSetup();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [hoveredSignUp, setHoveredSignUp] = useState(false);
  const [hoveredLogin, setHoveredLogin] = useState(false);

  const handleContactClick = () => {
    if (isAuthenticated) {
      setIsContactDialogOpen(true);
    } else {
      setIsAuthDialogOpen(true);
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Chatbot />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" className={classes.copyright}>
            <Link color="inherit" href={PATHS.ForumRules}>
              תקנון
            </Link>{" "}
            <Link color="inherit" onClick={handleContactClick}>
              צור קשר
            </Link>{" "}
            <Box>
              <Typography variant="body2" color="textSecondary" align="center">
                © {new Date().getFullYear()} אפרת בדיל, פיתוח מקצועי מקצה לקצה. {" "}
                <Link color="inherit" href={PATHS.AboutMe}>
                  לקריאה אודותיי לחצו כאן
                </Link>
              </Typography>
            </Box>
          </Typography>
        </Container>
      </footer>
      <ContactUsDialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)} />
      <AuthenticationDialog
        isOpen={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
        hoveredSignUp={hoveredSignUp}
        setHoveredSignUp={setHoveredSignUp}
        hoveredLogin={hoveredLogin}
        setHoveredLogin={setHoveredLogin}
        warningMessage="רק משתמש רשום יכול ליצור קשר"
      />
    </div>
  );
}