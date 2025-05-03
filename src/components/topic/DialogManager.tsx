import React from "react";
import ReportDialog from "components/dialogs/report/ReportDialog";
import ReportSuccessDialog from "components/dialogs/report/ReportSuccessDialog";
import ContactCounselorDialog from "components/dialogs/contact/ContactCounselorDialog";
import AddPostDialog from "components/dialogs/AddPostDialog";
import { CounselorType } from "domainTypes/counselor.types";
import { UserType } from "domainTypes/user.types";

// Type definitions for the props that the DialogsManager component accepts
type DialogsManagerProps = {
  isDialogOpen: boolean; // Whether the add post dialog is open
  handleCloseDialog: () => void; // Function to close the add post dialog
  handleAddPost: () => void; // Function to handle post submission
  newPostContent: string; // The content of the new post
  handlePostContentChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle content change in the post
  error: string; // Error message to display if there's an error during post creation
  isAuthenticated: boolean; // Whether the user is authenticated or not
  currentUser: UserType | CounselorType | null; // The current user (can be of type User or Counselor)
  isCounselor: boolean; // Whether the current user is a counselor
  currentUserName: string; // The name of the current user
  hoveredSignUp: boolean; // Whether the signup button is being hovered
  setHoveredSignUp: React.Dispatch<React.SetStateAction<boolean>>; // Function to set the hovered state for signup
  hoveredLogin: boolean; // Whether the login button is being hovered
  setHoveredLogin: React.Dispatch<React.SetStateAction<boolean>>; // Function to set the hovered state for login
  isReportDialogOpen: boolean; // Whether the report dialog is open
  handleCloseReportDialog: () => void; // Function to close the report dialog
  handleConfirmReport: () => void; // Function to confirm the report action
  handleCloseReportSuccessDialog: () => void; // Function to close the report success dialog
  IsReportSuccessDialogOpen: boolean; // Whether the report success dialog is open
  setIsReportSuccessOpen: React.Dispatch<React.SetStateAction<boolean>>; // Function to set the state for report success dialog
  isContactDialogOpen: boolean; // Whether the contact counselor dialog is open
  handleCloseContactDialog: () => void; // Function to close the contact counselor dialog
  counselorEmail: string | null; // Email of the counselor
  counselorName: string | null; // Name of the counselor
};

const DialogsManager: React.FC<DialogsManagerProps> = ({
  isDialogOpen,
  handleCloseDialog,
  handleAddPost,
  newPostContent,
  handlePostContentChange,
  error,
  isAuthenticated,
  currentUser,
  isCounselor,
  currentUserName,
  hoveredSignUp,
  setHoveredSignUp,
  hoveredLogin,
  setHoveredLogin,
  isReportDialogOpen,
  handleCloseReportDialog,
  handleConfirmReport,
  handleCloseReportSuccessDialog,
  IsReportSuccessDialogOpen,
  isContactDialogOpen,
  handleCloseContactDialog,
  counselorEmail,
  counselorName,
}) => {
  return (
    <>
      {/* AddPostDialog - Dialog for adding a new post */}
      <AddPostDialog
        openDialog={isDialogOpen} // Controls if the dialog is open or closed
        handleCloseDialog={handleCloseDialog} // Function to close the dialog
        newPostContent={newPostContent} // The content of the new post
        handlePostContentChange={handlePostContentChange} // Function to update the content as the user types
        handleAddPost={handleAddPost} // Function to handle the post submission
        error={error} // Any error message to display
        isAuthenticated={isAuthenticated} // Whether the user is authenticated
        isCounselor={isCounselor} // Whether the user is a counselor
        userName={currentUserName} // The name of the current user
        hoveredSignUp={hoveredSignUp} // Hover state for the signup button
        setHoveredSignUp={setHoveredSignUp} // Function to set the hovered state for signup
        hoveredLogin={hoveredLogin} // Hover state for the login button
        setHoveredLogin={setHoveredLogin} // Function to set the hovered state for login
      />

      {/* ReportDialog - Dialog for reporting a post */}
      <ReportDialog
        open={isReportDialogOpen} // Controls if the report dialog is open or closed
        onClose={handleCloseReportDialog} // Function to close the report dialog
        onConfirm={handleConfirmReport} // Function to confirm the report action
        isAuthenticated={isAuthenticated} // Whether the user is authenticated
        hoveredSignUp={hoveredSignUp} // Hover state for the signup button
        setHoveredSignUp={setHoveredSignUp} // Function to set the hovered state for signup
        hoveredLogin={hoveredLogin} // Hover state for the login button
        setHoveredLogin={setHoveredLogin} // Function to set the hovered state for login
      />

      {/* ReportSuccessDialog - Dialog shown after successfully reporting a post */}
      <ReportSuccessDialog
        open={IsReportSuccessDialogOpen} // Controls if the report success dialog is open or closed
        onClose={handleCloseReportSuccessDialog} // Function to close the report success dialog
      />

      {/* ContactCounselorDialog - Dialog for contacting a counselor */}
      <ContactCounselorDialog
        open={isContactDialogOpen} // Controls if the contact counselor dialog is open or closed
        onClose={handleCloseContactDialog} // Function to close the contact counselor dialog
        counselorEmail={counselorEmail} // Email of the counselor
        counselorName={counselorName} // Name of the counselor
        isAuthenticated={isAuthenticated} // Whether the user is authenticated
        currentUser={currentUser} // The current user
        hoveredSignUp={hoveredSignUp} // Hover state for the signup button
        setHoveredSignUp={setHoveredSignUp} // Function to set the hovered state for signup
        hoveredLogin={hoveredLogin} // Hover state for the login button
        setHoveredLogin={setHoveredLogin} // Function to set the hovered state for login
      />
    </>
  );
};

export default DialogsManager;