import { Dispatch } from "@reduxjs/toolkit";
import { PostType } from "domainTypes/post.types";
import { fetchCounselorById } from "data/redux/counselor/counselor.slice";
import { fetchUserById } from "data/redux/user/user.slice";
import { TopicType } from "data/types/domainTypes/topic.types";
import { fetchTopicById } from "data/redux/topic/topic.slice";
import { UserType } from "data/types/domainTypes/user.types";

// Function to fetch user and counselor names for each post
export const fetchUserAndCounselorNamesForPosts = async (
  topic: { posts: PostType[] },
  dispatch: Dispatch,
  setUsersMap: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (topic && topic.posts) {
    setIsLoading(true);
    try {
      const userMap: { [key: string]: string } = {};
      for (let i = 0; i < topic.posts.length; i++) {
        const post = topic.posts[i];
        const userId = post.userId;
        const counselorId = post.counselorId;

        // Fetch user name by user ID
        if (userId !== null && userId !== undefined) {
          const result = await dispatch(fetchUserById(userId) as any);
          if (fetchUserById.fulfilled.match(result)) {
            const user = result.payload;
            userMap[`user-${userId}`] = user.name as string;
          } else {
            userMap[`user-${userId}`] = "Unknown";
          }
        }

        // Fetch counselor name by counselor ID
        if (counselorId !== null && counselorId !== undefined) {
          const result = await dispatch(fetchCounselorById(counselorId) as any);
          if (fetchCounselorById.fulfilled.match(result)) {
            const counselor = result.payload;
            userMap[`counselor-${counselorId}`] = counselor.name;
          } else {
            userMap[`counselor-${counselorId}`] = "Unknown";
          }
        }
      }
      setUsersMap(userMap);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user names:", error);
    }
  }
};

// Function to fetch user names for topics
export const fetchUserNamesForTopics = async (
  topics: { userId: number }[],
  dispatch: Dispatch,
  setUsersMap: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!topics || topics.length === 0) return;

  setIsLoading(true);

  try {
    const userIds = Array.from(
      new Set(
        topics.map((topic) => topic.userId).filter((id) => id !== undefined)
      )
    );

    // Perform API calls to fetch user names
    const userPromises = userIds.map((id) =>
      dispatch(fetchUserById(id) as any)
        .then((result: any) => {
          if (fetchUserById.fulfilled.match(result)) {
            const user = result.payload as UserType;
            return { id, name: user.name };
          } else {
            return { id, name: "Unknown" };
          }
        })
        .catch(() => ({ id, name: "Unknown" }))
    );

    const userResults = await Promise.all(userPromises);

    // Create a map of user names
    const userMap = userResults.reduce(
      (acc, curr) => ({ ...acc, [curr.id]: curr.name }),
      {}
    );

    setUsersMap(userMap);
  } catch (error) {
    console.error("Error fetching user names:", error);
  } finally {
    setIsLoading(false);
  }
};

// Function to fetch topic data and associated user names
export const fetchTopicData = async (
  id: string | undefined,
  dispatch: Dispatch,
  setTopic: React.Dispatch<React.SetStateAction<TopicType | null>>,
  setUsersMap: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!id) {
    return;
  }
  setIsLoading(true);

  try {
    const actionResult = await dispatch(fetchTopicById(parseInt(id)) as any);
    if (fetchTopicById.fulfilled.match(actionResult)) {
      setTopic(actionResult.payload);
      fetchUserAndCounselorNamesForPosts(
        actionResult.payload,
        dispatch,
        setUsersMap,
        setIsLoading
      );
    }
  } catch (error) {
    console.error("Error fetching topicById:", error);
  }
};
