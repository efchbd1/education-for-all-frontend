import React from 'react';
import { List } from '@mui/material';
import PostItem from './PostItem';
import { PostType } from 'data/types/domainTypes/post.types';

type PostListProps = {
    posts: PostType[];
    topicUserId: number; // The user ID of the topic creator
    usersMap: { [key: string]: string }; // Mapping user IDs to their names
    likedPosts: { [key: number]: { liked: boolean; disliked: boolean } }; // Stores the like/dislike status of posts
    handleLikePost: (postId: number) => void;
    handleReportClick: (postId: number) => void;
    handleContactClick: (counselorId: number) => void;
    formatDate: (date: Date) => string;
};

const PostList: React.FC<PostListProps> = ({
    posts,
    topicUserId,
    usersMap,
    likedPosts,
    handleLikePost,
    handleReportClick,
    handleContactClick,
    formatDate,
}) => {
    if (!posts || posts.length === 0) {
        return <div>No posts available.</div>;
    }

    return (
        <List>
            {posts.map((post: PostType) => (
                <PostItem
                    key={post.id}
                    post={post}
                    topicUserId={topicUserId}
                    usersMap={usersMap}
                    likedPosts={likedPosts}
                    handleLikePost={handleLikePost}
                    handleReportClick={handleReportClick}
                    handleContactClick={handleContactClick}
                    formatDate={formatDate}
                />
            ))}
        </List>
    );
};

export default PostList;