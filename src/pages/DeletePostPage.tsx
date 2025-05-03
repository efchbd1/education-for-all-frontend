import { useEffect, useState } from "react";
import { deletePost, getPostByToken } from "data/services/post.service";
import { PostType } from "data/types/domainTypes/post.types";
import { useDeletePostPage } from "../styles/DeletePostPage.styles"

const DeletePostPage: React.FC = () => {
    const [token, setToken] = useState<string | null>(null);
    const [post, setPost] = useState<PostType | null>(null);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const [deleteButtonDisabled, setDeleteButtonDisabled] = useState<boolean>(false);
    const classes = useDeletePostPage({ deleteButtonDisabled });

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
        <div className={classes.container}>
            <div className={classes.content}>
                <h1 className={classes.heading}>?האם אתה בטוח שברצונך למחוק את התגובה</h1>
                <button className={classes.button} onClick={handleDeleteClick} disabled={deleteButtonDisabled}>
                    מחק פוסט
                </button>
                {isDeleted ? (
                    <div>
                        <p>המחיקה התבצעה בהצלחה</p>
                    </div>
                ) : (
                    <div className={classes.linkContainer}>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeletePostPage;