import React from 'react';
import { ListItem, ListItemText, Typography, IconButton, Divider } from '@mui/material';
import { Mail } from '@mui/icons-material';
import { PostType } from 'data/types/domainTypes/post.types';
import LikeButton from './LikeButton'
import HeaderRibbon from './HeaderRibbon';
import DislikeButton from './DislikeButton';
import { usePostItemStyles } from '../../styles/PostItem.styles';

type PostItemProps = {
    post: PostType;
    topicUserId: number;
    usersMap: { [key: string]: string };
    likedPosts: { [key: number]: { liked: boolean; disliked: boolean } };
    formatDate: (date: Date) => string;
    handleLikePost: (postId: number) => void;
    handleReportClick: (postId: number) => void;
    handleContactClick: (counselorId: number) => void;
}

const PostItem: React.FC<PostItemProps> = ({
    post,
    topicUserId,
    usersMap,
    likedPosts,
    formatDate,
    handleLikePost,
    handleReportClick,
    handleContactClick,
}) => {
    const classes = usePostItemStyles();
    const userType = post.userId === topicUserId ? 'owner' : post.counselorId ? 'counselor' : 'user';

    // Function to get the user label based on type
    const getUserLabel = (userType: string, post: PostType, usersMap: { [key: string]: string }) => {
        if (userType === 'owner') return usersMap[`user-${post.userId}`];
        if (userType === 'counselor') return usersMap[`counselor-${post.counselorId}`];
        return usersMap[`user-${post.userId}`] || 'משתמש לא ידוע';
    };
    const postLikeStatus = likedPosts[post.id] || { liked: false, disliked: false };

    return (
        <>
            <ListItem className={`${classes.listItemBase} ${classes.listItemShadow}`}>
                <HeaderRibbon
                    userType={userType} />
                <ListItemText
                    primary={
                        <Typography variant="h6" className={classes.content}>
                            {post.content}
                        </Typography>
                    }
                    secondary={
                        <Typography
                            variant="caption"
                            style={{ color: 'black' }}
                        >
                            {`${getUserLabel(userType, post, usersMap)}, ${formatDate(new Date(post.date))}`}
                        </Typography>
                    }
                />

                {/* Show email icon button if counselorId exists */}
                {post.counselorId && (
                    <IconButton aria-label="Email" onClick={() => post.counselorId && handleContactClick(post.counselorId)}>
                        <Mail className={classes.blackIcon} />
                    </IconButton>
                )}

                {/* Like and dislike buttons */}
                <LikeButton
                    liked={likedPosts[post.id]?.liked || false}
                    onClick={() => handleLikePost(post.id)}
                    disabled={likedPosts[post.id]?.liked || likedPosts[post.id]?.disliked}
                    likesCount={post.likes}
                />
                <DislikeButton
                    disliked={postLikeStatus.disliked} // Opens the report dialog when clicked
                    onClick={() => handleReportClick(post.id)}
                    disabled={postLikeStatus.liked || postLikeStatus.disliked}
                />
            </ListItem>
            <Divider />
        </>
    );
};

export default PostItem;