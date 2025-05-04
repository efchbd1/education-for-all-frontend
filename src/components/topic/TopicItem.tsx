import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useAppSetup } from "data/useAppSetup";
import { reportPost } from "data/services/post.service";
import { readTopicById } from "data/services/topic.service";
import { fetchCounselorById } from "data/redux/counselor/counselor.slice";
import AuthenticationDialog from '../../components/dialogs/AuthenticationDialog';
import PostList from "components/post/PostList";
import DialogsManager from "./DialogManager";
import { fetchUserAndCounselorNamesForPosts, fetchTopicData } from "../../hooks/useTopicHook";
import { useLikePost } from "../../hooks/useLikePost";
import { useAddPost } from "../../hooks/useAddPost";
import { useTopicItemStyles } from "styles/TopicItem.styles";

const TopicItem: React.FC = () => {
  // Extracts the 'id' parameter from the URL (used for fetching the topic data)
  const { id } = useParams<{ id?: string }>();
  const classes = useTopicItemStyles;
  const { currentUser, isAuthenticated, isCounselor, dispatch } = useAppSetup();
  const currentUserId = currentUser?.id ?? 1;
  const [topic, setTopic] = useState<any>(null);
  const [usersMap, setUsersMap] = useState<{ [key: string]: string }>({});
  const [newPostContent, setNewPostContent] = useState("");
  const [error, setError] = useState("");
  const [likedPosts, setLikedPosts] = useState<{
    [key: number]: { liked: boolean; disliked: boolean };
  }>({});
  const [reportPostId, setReportPostId] = useState<number | null>(null);
  const [counselorEmail, setCounselorEmail] = useState<string | null>(null);
  const [counselorName, setCounselorName] = useState<string | null>(null);
  const [isReportSuccessOpen, setIsReportSuccessOpen] = useState<boolean>(false);
  const [hoveredSignUp, setHoveredSignUp] = useState(false);
  const [hoveredLogin, setHoveredLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isReading, setIsReading] = useState(false);

  // Dialog state management for opening/closing various dialogs (e.g., post, report, contact)
  const [dialogState, setDialogState] = useState({
    isDialogOpen: false,
    isReportDialogOpen: false,
    isReportSuccessDialogOpen: false,
    isContactDialogOpen: false,
    isAuthDialogOpen: false,
  });

  const openAuthDialog = () =>
    setDialogState((prev) => ({ ...prev, isAuthDialogOpen: true }));
  const closeAuthDialog = () =>
    setDialogState((prev) => ({ ...prev, isAuthDialogOpen: false }));

  //Opens the dialog to add a new post 
  const handleOpenDialog = () => {
    setDialogState((prev) => ({ ...prev, isDialogOpen: true }));
    setNewPostContent("");
  };

  const handleCloseDialog = () => {
    setDialogState((prev) => ({ ...prev, isDialogOpen: false }));
    setError("");
  };

  const handleOpenSpecificDialog = (dialogKey: keyof typeof dialogState) => {
    setDialogState((prev) => ({ ...prev, [dialogKey]: true }));
  };

  const handleCloseSpecificDialog = (dialogKey: keyof typeof dialogState) => {
    setDialogState((prev) => ({ ...prev, [dialogKey]: false }));
  };

  const handleReadTopic = async () => {
    if (!isAuthenticated) {
      openAuthDialog();
      return;
    }

    setIsReading(true);
    try {
      await readTopicById(topic.id);
    } catch (error) {
      console.error(error);
    }
    finally {
      setIsReading(false);
    }
  };

  /*
   This `useEffect` hook fetches data related to the topic when the component mounts,
   including topic details and the names of users and counselors. It also handles loading state.
   */
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        await fetchTopicData(id, dispatch, setTopic, setUsersMap, setIsLoading);
        if (topic) {
          await fetchUserAndCounselorNamesForPosts(topic, dispatch, setUsersMap, setIsLoading);
        }
      }
    };
    fetchData();
  }, [id, dispatch]);


  const handlePostContentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPostContent(event.target.value);
  };

  //Formats the provided date to the 'dd/mm/yyyy' format (Hebrew locale).
  const formatDate = (date1: Date): string => {
    const date = new Date(date1);
    return date.toLocaleDateString("he-IL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  /**
 Handles the contact click by checking the authentication status of the user.
 if the user is not authenticated, it opens the contact dialog.
 **/
  const handleContactClick = (counselorId: number) => {
    if (!isAuthenticated) {
      setDialogState((prev) => ({ ...prev, isContactDialogOpen: true }));
      return;
    }
    handleMailIconClick(counselorId);
  };

  // Opens the contact counselor dialog for a specific counselor.
  const handleMailIconClick = async (counselorId: number) => {
    try {
      const result = await dispatch(fetchCounselorById(counselorId));
      if (fetchCounselorById.fulfilled.match(result)) {
        const counselorDetails = result.payload;
        setCounselorEmail(counselorDetails.email);
        setCounselorName(counselorDetails.name);
        handleOpenSpecificDialog("isContactDialogOpen");
      } else {
        throw new Error("Failed to fetch counselor details");
      }
    } catch (error) {
      console.error("Failed to fetch counselor details", error);
    }
  };

  // Opens the report dialog for a specific post.
  const handleReportClick = (postId: number) => {
    setDialogState((prev) => ({ ...prev, isReportDialogOpen: true }));
    if (isAuthenticated) setReportPostId(postId);
  };

  // If the report is successful, it opens the report success dialog.
  const handleConfirmReport = async () => {
    handleCloseSpecificDialog("isReportDialogOpen");
    if (reportPostId !== null) {
      try {
        await reportPost(reportPostId, { reportReason: "תוכן פוגעני" });
        handleOpenSpecificDialog("isReportSuccessDialogOpen");
      } catch (error) {
        alert("ארעה תקלה, אנא נסה שנית במועד מאוחר יותר");
      }
    }
  };

  // Handles the process of adding a new post. It uses the `useAddPost` hook to add the post
  const { handleAddPost } = useAddPost(
    newPostContent,
    setNewPostContent,
    setError,
    topic,
    setTopic,
    currentUserId,
    dispatch,
    isCounselor,
    handleCloseDialog
  );

  // Handles liking or disliking a post using the `useLikePost` hook.
  const { handleLikePost } = useLikePost(
    topic,
    setTopic,
    dispatch,
    setLikedPosts
  );

  // Returns loading spinner if data is still loading
  if (isLoading || !topic) {
    return (
      <Box sx={classes.loadingContainer}>
        <CircularProgress sx={classes.loadingSpinner} />
        <Typography sx={classes.loadingText}>
          ...טוען
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {/* If the posts haven't loaded yet, a spinner is displayed. */}
      {isLoading ? (
        <Box sx={classes.loadingContainer}>
          <CircularProgress size={70} thickness={5} color="secondary" />
          <Typography sx={classes.loadingText}>
            טוען...
          </Typography>
        </Box>
      ) : (
        <Box sx={classes.root}>
          <Typography variant="h4" sx={classes.title}>{topic.title}</Typography>

          {/* A button that plays all posts in the topic. */}
          <Button
            sx={classes.readButton}
            onClick={handleReadTopic}
            disabled={isReading}
          >
            {isReading ? "משמיע..." : "הפעל השמעה"}
          </Button>

          <PostList
            posts={topic.posts}
            topicUserId={topic.userId}
            usersMap={usersMap}
            likedPosts={likedPosts}
            handleLikePost={handleLikePost}
            handleReportClick={handleReportClick}
            handleContactClick={handleContactClick}
            formatDate={formatDate}
          />

          <Button
            variant="contained"
            onClick={handleOpenDialog}
            sx={classes.addButton}
            size="large"
          >  הוספת תגובה
          </Button>

          <DialogsManager
            isDialogOpen={dialogState.isDialogOpen}
            handleCloseDialog={handleCloseDialog}
            handleAddPost={handleAddPost}
            newPostContent={newPostContent}
            handlePostContentChange={handlePostContentChange}
            error={error}
            isAuthenticated={isAuthenticated}
            currentUser={currentUser}
            isCounselor={isCounselor}
            currentUserName={currentUser?.name || ""}
            isReportDialogOpen={dialogState.isReportDialogOpen}
            handleCloseReportDialog={() => handleCloseSpecificDialog("isReportDialogOpen")}
            handleConfirmReport={handleConfirmReport}
            IsReportSuccessDialogOpen={dialogState.isReportSuccessDialogOpen}
            handleCloseReportSuccessDialog={() => handleCloseSpecificDialog("isReportSuccessDialogOpen")}
            isContactDialogOpen={dialogState.isContactDialogOpen}
            handleCloseContactDialog={() => handleCloseSpecificDialog("isContactDialogOpen")}
            counselorEmail={counselorEmail}
            counselorName={counselorName}
            setIsReportSuccessOpen={setIsReportSuccessOpen}
            hoveredSignUp={hoveredSignUp}
            setHoveredSignUp={setHoveredSignUp}
            hoveredLogin={hoveredLogin}
            setHoveredLogin={setHoveredLogin}
          />

          {/* A dialog that appears when a guest tries to add a post. */}
          <AuthenticationDialog
            isOpen={dialogState.isAuthDialogOpen}
            onClose={closeAuthDialog}
            hoveredSignUp={hoveredSignUp}
            setHoveredSignUp={setHoveredSignUp}
            hoveredLogin={hoveredLogin}
            setHoveredLogin={setHoveredLogin}
            warningMessage={
              "רק משתמש רשום יכול להשמיע אשכול בפורום"
            }
          />
        </Box>
      )}
    </>
  );
}
export default TopicItem;