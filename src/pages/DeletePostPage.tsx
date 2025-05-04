import { useEffect, useState } from "react";
import { deletePost, getPostByToken } from "data/services/post.service";
import { PostType } from "data/types/domainTypes/post.types";
import {
    containerStyle,
    contentStyle,
    headingStyle,
    buttonStyle,
    linkContainerStyle
  } from "../styles/DeletePostPage.styles";
import { Box, Button, Typography } from "@mui/material";
  
const DeletePostPage: React.FC = () => {
    const [token, setToken] = useState<string | null>(null);
    const [post, setPost] = useState<PostType | null>(null);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const [deleteButtonDisabled, setDeleteButtonDisabled] = useState<boolean>(false);

    useEffect(() => {
        const pathname = window.location.pathname;
        const tokens = pathname.split('/');
        const extractedToken = tokens[tokens.length - 1];
        setToken(extractedToken);
    }, []);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                if (token) {
                    const fetchedPost = await getPostByToken(token);
                    setPost(fetchedPost);
                }
            } catch (error) {
            }
        };

        if (token) {
            fetchPost();
        }
    }, [token]);

    const handleDeleteClick = async () => {
        try {
            if (token && !deleteButtonDisabled) {
                const pathname = window.location.pathname;
                const tokens = pathname.split('/');
                const token = tokens[tokens.length - 1];

                if (token) {
                    await deletePost(token);
                    setIsDeleted(true);
                    setDeleteButtonDisabled(true);
                }
            }
        } catch (error) {
            alert('אינכם בעלי הרשאה לבצע פעולה זו')
        }
    };

    return (
        <Box  sx={containerStyle}>
            <Box  sx={contentStyle}>
                <Typography component="h1" sx={headingStyle}>?האם אתה בטוח שברצונך למחוק את התגובה</Typography>
                <Button sx={buttonStyle(deleteButtonDisabled)} onClick={handleDeleteClick} disabled={deleteButtonDisabled}>
                    מחק פוסט
                </Button>
                {isDeleted ? (
                    <div>
                        <p>המחיקה התבצעה בהצלחה</p>
                    </div>
                ) : (
                    <Box sx={linkContainerStyle}>
                    </Box>
                )}
            </Box >
        </Box>
    );
};

export default DeletePostPage;