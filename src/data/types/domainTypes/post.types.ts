// Represents a post made by a user or counselor in a specific topic
export type PostType = {
  id: number;
  date: Date;
  likes: number;
  content: string;
  isReported: boolean; // Whether the post has been reported for inappropriate content
  isDeleted: boolean;
  topicId: number;
  userId?: number;
  counselorId?: number;
};

// Represents the data required to create a new post
export type NewPostType = {
  content: string;
  topicId: number;
  userId?: number;
  counselorId?: number;
};
