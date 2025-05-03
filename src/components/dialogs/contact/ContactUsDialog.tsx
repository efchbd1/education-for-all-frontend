import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogActions, TextField, Button, DialogTitle } from '@mui/material';
import { contactGeneral } from 'data/services/contact.service';
import { makeStyles } from '@mui/styles';
import { ContactRequestType } from 'data/types/reactTypes/contact/contactRequest.types';
import { useAppSetup } from 'data/useAppSetup';
import { validateContactMessage } from "utils/validation";

const useStyles = makeStyles({
  dialogContent: {
    direction: 'rtl',
  },
});

type ContactUsDialogProps = {
  isOpen: boolean;
  onClose: () => void;
}

const ContactUsDialog: React.FC<ContactUsDialogProps> = ({ isOpen, onClose }) => {
  const classes = useStyles();
  const { currentUser } = useAppSetup();
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>("");
  //Form errors will only be displayed after a submission attempt has been made
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMessage('');
      setAttemptedSubmit(false)
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    if (attemptedSubmit) {
      setError(validateContactMessage(e.target.value));
    }
  };

  const handleSubmit = async () => {
    setAttemptedSubmit(true);
    const validationError = validateContactMessage(message);
    setError(validationError);

    if (validationError) {
      return;
    }

    if (currentUser && message) {
      const request: ContactRequestType = {
        userName: currentUser.name,
        userEmail: currentUser.email,
        message: message,
      };

      try {
        onClose();
        await contactGeneral(request);
      } catch (error) {
        alert('שגיאה בשליחת ההודעה, נסה שנית מאוחר יותר.');
      }
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent className={classes.dialogContent}>
        <DialogTitle>          צרו קשר        </DialogTitle>
        <TextField
          autoFocus
          margin="dense"
          name="message"
          label="הודעה"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          error={Boolean(error)}
          helperText={error}
        />
      </DialogContent>
      <DialogActions style={{ direction: 'rtl' }}>
        <Button onClick={onClose} color="primary">
          ביטול
        </Button>
        <Button onClick={handleSubmit} color="primary">
          שלח
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactUsDialog;