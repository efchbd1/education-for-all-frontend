import { useState } from "react";
import { useAppSetup } from "data/useAppSetup";
import { addTopic } from "data/services/topic.service";
import { addPost } from "data/services/post.service";
import { addTopic as addTopicToReduxArr } from "data/redux/topic/topic.slice";
import { PATHS } from "routes/paths";
import { TopicFormType, TopicType } from "data/types/domainTypes/topic.types";
import { PostType } from "data/types/domainTypes/post.types";

export const useCreateTopic = () => {
  const { dispatch, navigate, currentUser } = useAppSetup();
  const [formData, setFormData] = useState<TopicFormType>({
    title: "",
    userId: currentUser?.id ?? 1,
    postIds: [],
    wasAnswered: false,
  });
  const [initialPostContent, setInitialPostContent] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation function for the title field
  const validateTitle = (value: string) => {
    const words = value.trim().split(/\s+/);
    const wordCount = words.length;

    if (!/[a-zA-Zא-ת].*[a-zA-Zא-ת]/.test(value)) {
      return "הכותרת חייבת לכלול גם אותיות.";
    }

    if (wordCount < 3) {
      return "הכותרת חייבת לכלול לפחות 3 מילים.";
    }
    if (wordCount > 15) {
      return "הכותרת לא יכולה לכלול יותר מ-15 מילים.";
    }
    for (const word of words) {
      if (!/^\d+$/.test(word)) {
        if (word.length < 2) {
          return "כל מילה בתגובה חייבת להיות לפחות בת 2 אותיות (למעט מספרים).";
        }
        if (word.length > 12) {
          return "אף מילה בכותרת לא יכולה להיות ארוכה מ-12 אותיות.";
        }
      }
    }
    return "";
  };

  // Validation function for the post content field
  const validatePostContent = (value: string) => {
    const words = value.trim().split(/\s+/);
    const wordCount = words.length;

    if (!/[a-zA-Zא-ת].*[a-zA-Zא-ת]/.test(value)) {
      return "תוכן השאלה חייב לכלול גם אותיות.";
    }

    if (wordCount < 10) {
      return "תוכן השאלה חייב לכלול לפחות 10 מילים.";
    }
    for (const word of words) {
      if (!/^\d+$/.test(word)) {
        if (word.length < 2) {
          return "כל מילה בתגובה חייבת להיות לפחות בת 2 אותיות (למעט מספרים).";
        }
        if (word.length > 12) {
          return "אף מילה בגוף השאלה לא יכולה להיות ארוכה מ-12 אותיות.";
        }
      }
    }
    return "";
  };

  const handleChange = (name: string, value: string) => {
    if (name === "initialPostContent") {
      setInitialPostContent(value);
      const error = validatePostContent(value);
      setErrors((prevErrors) => ({ ...prevErrors, initialPostContent: error }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name === "title") {
        const error = validateTitle(value);
        setErrors((prevErrors) => ({ ...prevErrors, title: error }));
      }
    }
  };

  const handleSubmit = async () => {
    const newErrors: { [key: string]: string } = {};

    // Validate title before submission
    const titleError = validateTitle(formData.title);
    if (titleError) newErrors.title = titleError;

    // Validate post content before submission
    const postContentError = validatePostContent(initialPostContent);
    if (postContentError) newErrors.initialPostContent = postContentError;

    if (!formData.title) newErrors.title = "הכותרת היא שדה חובה";
    if (!initialPostContent)
      newErrors.initialPostContent = "תוכן ההודעה הוא שדה חובה";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return false;
    }

    try {
      // Create topic DTO and send it to the API
      const topicCreateDto = new FormData();
      topicCreateDto.append("title", formData.title);
      topicCreateDto.append("userId", formData.userId.toString());
      topicCreateDto.append("wasAnswered", formData.wasAnswered.toString());

      const response: TopicType = await addTopic(topicCreateDto);
      if (!response.id) throw new Error("Topic ID is undefined");

      // Add the created topic to Redux store
      const topicToAddToRedux: TopicType = {
        ...response,
        dateCreated: new Date().toISOString(),
        dateLastActive: new Date().toISOString(),
        postIds: [],
      };

      dispatch(addTopicToReduxArr(topicToAddToRedux));

      // Create initial post for the topic
      const newPost: PostType = {
        id: 0,
        date: new Date(),
        likes: 0,
        content: initialPostContent,
        isReported: false,
        isDeleted: false,
        topicId: response.id,
        userId: formData.userId,
      };

      // Add the post and update form data with the new post ID
      const postResponse = await addPost(newPost);
      formData.postIds = [...formData.postIds, postResponse.id];

      navigate(PATHS.Home);
      return true;
    } catch (error) {
      setErrors({ ...errors, form: "שגיאה ביצירת הנושא, אנא נסה שנית" });
      return false;
    }
  };

  return {
    formData,
    initialPostContent,
    errors,
    handleChange,
    handleSubmit,
  };
};
