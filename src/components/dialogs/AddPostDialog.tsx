import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import AuthenticationDialog from './AuthenticationDialog';
import { useVoiceTyping } from '../../hooks/useVoiceTyping';

type AddPostDialogProps = {
    openDialog: boolean;
    handleCloseDialog: () => void;
    isAuthenticated: boolean;
    newPostContent: string;
    handlePostContentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddPost: () => void;
    error?: string;
    isCounselor: boolean;
    userName: string;
    hoveredSignUp: boolean;
    setHoveredSignUp: React.Dispatch<React.SetStateAction<boolean>>;
    hoveredLogin: boolean;
    setHoveredLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddPostDialog: React.FC<AddPostDialogProps> = ({
    openDialog,
    handleCloseDialog,
    isAuthenticated,
    newPostContent,
    handlePostContentChange,
    handleAddPost,
    error,
    isCounselor,
    userName,
    hoveredSignUp,
    setHoveredSignUp,
    hoveredLogin,
    setHoveredLogin,
}) => {

    const handleVoiceTypingChange = (text: string) => {
        handlePostContentChange({
            target: { value: newPostContent + " " + text }
        } as React.ChangeEvent<HTMLInputElement>);
    };

    const setOpenDialogFn = (open: boolean) => {
        if (!open) {
            handleCloseDialog();
        }
    };

    const { isRecording, startRecording, stopRecording } = useVoiceTyping(handleVoiceTypingChange, setOpenDialogFn);

    const handleDialogClose = () => {
        handleCloseDialog();
    };

    return (
        <>
            <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
                {isAuthenticated ? (
                    <>
                        <DialogTitle>הוספת תגובה חדשה</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="תוכן הפוסט"
                                fullWidth
                                value={newPostContent}
                                onChange={handlePostContentChange}
                                error={!!error}
                                helperText={error}
                                placeholder={isCounselor ? `${userName}, אנו מעריכים מאוד את תרומתך לפורום!` :
                                    'שמחים לראותכם שותפים בקהילתנו החינוכית!'}
                                multiline
                                maxRows={10}
                                InputLabelProps={{ shrink: true }}
                                variant="outlined"
                            />
                        </DialogContent>
                        <DialogActions style={{ direction: 'rtl' }}>
                            <Button onClick={startRecording} variant="contained" disabled={isRecording}>
                                {isRecording ? "הקלטה פעילה" : "התחל הקלטה"}
                            </Button>
                            <Button onClick={stopRecording} variant="outlined" disabled={!isRecording}>
                                עצור הקלטה
                            </Button>
                            <Button onClick={handleDialogClose} variant="outlined">
                                ביטול
                            </Button>
                            <Button onClick={handleAddPost} variant="contained">
                                שלח
                            </Button>
                        </DialogActions>
                    </>
                ) : (
                    <AuthenticationDialog
                        isOpen={openDialog}
                        onClose={handleDialogClose}
                        hoveredSignUp={hoveredSignUp}
                        setHoveredSignUp={setHoveredSignUp}
                        hoveredLogin={hoveredLogin}
                        setHoveredLogin={setHoveredLogin}
                        warningMessage="דעתך חשובה לנו! עם זאת, רק משתמש רשום יכול להגיב"
                    />
                )}
            </Dialog>
        </>
    );
};

export default AddPostDialog;