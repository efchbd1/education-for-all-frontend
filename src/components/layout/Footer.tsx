import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom'; 
import { PATHS } from 'routes/paths';
import ContactUsDialog from 'components/dialogs/contact/ContactUsDialog';
import AuthenticationDialog from 'components/dialogs/AuthenticationDialog';
import { useAppSetup } from "data/useAppSetup";
import {
  FooterRoot,
  FooterBar,
  CopyrightText,
  FooterLink,
  SecondaryBox
} from 'styles/Footer.styles';
import Chatbot from "components/layout/Chatbot";

export default function Footer() {
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
    <FooterRoot>
      <CssBaseline />
      <Chatbot />
      <FooterBar>
        <Container maxWidth="sm">
          <CopyrightText variant="body2">
=            <RouterLink 
              to={PATHS.ForumRules} 
              style={{color: 'inherit', textDecoration: 'none'}}
            >
              תקנון
            </RouterLink>
            
            {/* שינוי 3: הפרדת הקישורים */}
            <FooterLink color="inherit" onClick={handleContactClick}>
              צור קשר
            </FooterLink>
            
            <SecondaryBox>
              © {new Date().getFullYear()} אפרת בדיל, פיתוח מקצועי מקצה לקצה.{' '}
              <RouterLink 
                to={PATHS.AboutMe}
                style={{color: 'inherit', textDecoration: 'none', fontWeight: 'normal'}}
              >
                לקריאה אודותיי לחצו כאן
              </RouterLink>
            </SecondaryBox>
          </CopyrightText>
        </Container>
      </FooterBar>
      <ContactUsDialog
        isOpen={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
      />
      <AuthenticationDialog
        isOpen={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
        hoveredSignUp={hoveredSignUp}
        setHoveredSignUp={setHoveredSignUp}
        hoveredLogin={hoveredLogin}
        setHoveredLogin={setHoveredLogin}
        warningMessage="רק משתמש רשום יכול ליצור קשר"
      />
    </FooterRoot>
  );
}