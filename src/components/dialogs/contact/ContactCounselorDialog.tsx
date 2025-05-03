import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import AuthenticationDialog from "../AuthenticationDialog";
import { CounselorType } from "data/types/domainTypes/counselor.types";
import { UserType } from "data/types/domainTypes/user.types";
import { ContactCounselorRequestType } from "data/types/reactTypes/contact/contactCounselorRequest.types";
import { contactCounselor } from "data/services/contact.service";
import { validateContactMessage } from "utils/validation";

type ContactCounselorDialogProps = {
  open: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  counselorEmail: string | null;
  counselorName: string | null;
  currentUser: UserType | CounselorType | null;
  hoveredSignUp: boolean;
  setHoveredSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  hoveredLogin: boolean;
  setHoveredLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

// Dialog component for contacting a counselor
const ContactCounselorDialog: React.FC<ContactCounselorDialogProps> = ({
  open,
  onClose,
  isAuthenticated,
  counselorEmail,
  counselorName,
  currentUser,
  hoveredSignUp,
  setHoveredSignUp,
  hoveredLogin,
  setHoveredLogin,
}) => {
  const [contactCounselorMessage, setContactCounselorMessage] = useState("");
  const [error, setError] = useState<string>("");
  //Form errors will only be displayed after a submission attempt has been made
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  useEffect(() => {
    if (!open) {
      setContactCounselorMessage("");
      setAttemptedSubmit(false)
    }
  }, [open]);

  const handleContactMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactCounselorMessage(event.target.value);
    if (attemptedSubmit) {
      setError(validateContactMessage(event.target.value));
    }
  };

  const handleSendContact = async () => {
    setAttemptedSubmit(true);
    const validationError = validateContactMessage(contactCounselorMessage);
    setError(validationError);

    if (validationError) {
      return;
    }

    if (currentUser && contactCounselorMessage) {
      const defaultCounselorName = counselorName || "";
      const defaultCounselorEmail = counselorEmail || "";

      const request: ContactCounselorRequestType = {
        userName: currentUser.name,
        userEmail: currentUser.email,
        message: contactCounselorMessage,
        counselorName: defaultCounselorName,
        counselorEmail: defaultCounselorEmail,
      };
      onClose();
      try {
        await contactCounselor(request);
      } catch (error) {
        alert("שגיאה בשליחת ההודעה, נסה שנית מאוחר יותר.");
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      {isAuthenticated ? (
        <>
          <DialogTitle>
            צור קשר עם היועצ/ת
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="תוכן ההודעה"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              style={{ direction: "rtl" }}
              value={contactCounselorMessage}
              onChange={handleContactMessageChange}
              error={Boolean(error)}
              helperText={error}
            />
          </DialogContent>
          <DialogActions style={{ direction: 'rtl' }}>
            <Button onClick={onClose} color="primary">
              ביטול
            </Button>
            <Button onClick={handleSendContact} color="primary">
              שלח
            </Button>
          </DialogActions>
        </>
      ) : (
        <AuthenticationDialog
          isOpen={open}
          onClose={onClose}
          hoveredSignUp={hoveredSignUp}
          setHoveredSignUp={setHoveredSignUp}
          hoveredLogin={hoveredLogin}
          setHoveredLogin={setHoveredLogin}
          warningMessage="היועצ/ת כאן בשבילך! עם זאת, רק משתמשים רשומים יכולים ליצור קשר"
        />
      )}
    </Dialog>
  );
};

export default ContactCounselorDialog;