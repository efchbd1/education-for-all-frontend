import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TopicType } from "data/types/domainTypes/topic.types";
import {
  getAllTopics,
  getTopicById,
  getPostsByTopicId,
} from "data/services/topic.service";
import { RootState } from "data/redux/store";
import { selectTopic } from "data/redux/topic/topic.selector";

type TopicStateType = {
  topics: TopicType[];
};

const initialState: TopicStateType = {
  topics: [],
};

export const fetchTopicById = createAsyncThunk(
  "topic/fetchTopicById",
  async (id: number, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const topic = selectTopic(state);
    if (Array.isArray(topic)) {
      const filteredTopics = topic.filter(
        (item) => item !== null && item !== undefined
      );
      const existingTopic = filteredTopics.find(
        (topic: TopicType) => topic.id === id
      );
      if (existingTopic) {
        if (existingTopic.id !== undefined) {
          const posts = await getPostsByTopicId(existingTopic.id);
          return { ...existingTopic, posts };
        } else {
          return rejectWithValue("Topic ID is undefined");
        }
      }
    } else {
      return rejectWithValue("Topic is not an array or undefined");
    }

    try {
      const newTopic = await getTopicById(id);
      return newTopic;
    } catch (error) {
      return rejectWithValue(`Failed to fetch topic from server: ${error}`);
    }
  }
);

export const fetchAllTopics = createAsyncThunk(
  "topic/fetchAllTopics",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const topicState = selectTopic(state);
    if (topicState.length > 0) {
      const filteredTopicState = topicState.filter((topic) => topic !== null);
      const sortedTopics = filteredTopicState.sort(
        (a: TopicType, b: TopicType) =>
          new Date(b.dateLastActive).getTime() -
          new Date(a.dateLastActive).getTime()
      );
      return sortedTopics;
    }

    try {
      const topics = await getAllTopics();
      const sortedTopics = topics.sort(
        (a: TopicType, b: TopicType) =>
          new Date(b.dateLastActive).getTime() -
          new Date(a.dateLastActive).getTime()
      );
      return sortedTopics;
    } catch (error) {
      return rejectWithValue(`Failed to fetch topics: ${error}`);
    }
  }
);

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    addTopic: (state, action: PayloadAction<TopicType>) => {
      if (action.payload && action.payload.id !== undefined) {
        const existingTopicIndex = state.topics.findIndex(
          (topic) => topic.id === action.payload.id
        );
        if (existingTopicIndex !== -1) {
          state.topics[existingTopicIndex] = action.payload;
        } else {
          state.topics.push(action.payload);
        }
      } else {
        console.warn(
          "Attempted to add topic with undefined id",
          action.payload
        );
      }
    },

    updateTopic: (state, action: PayloadAction<TopicType>) => {
      const updatedTopic = action.payload;
      const existingIndex = state.topics.findIndex(
        (topic) => topic.id === updatedTopic.id
      );

      if (existingIndex !== -1) {
        state.topics[existingIndex] = {
          ...state.topics[existingIndex],
          ...updatedTopic,
        };
      }
    },

    removeTopic: (state, action: PayloadAction<number>) => {
      state.topics = state.topics.filter(
        (topic) => topic.id !== action.payload
      );
    },
    setTopics: (state, action: PayloadAction<TopicType[]>) => {
      const validTopics = action.payload.filter(
        (topic) => topic !== null && topic !== undefined
      );
      state.topics = validTopics;
    },
    resetTopicState: (state) => {
      state.topics = [];
    },
  },
  extraReducers: (builder) => {
    // Handle the fulfilled state of the fetchTopicById async thunk
    builder
      .addCase(fetchTopicById.fulfilled, (state, action) => {
        if (action.payload && action.payload.id !== undefined) {
          const existingTopicIndex = state.topics.findIndex(
            (topic) => topic.id === action.payload.id
          );
          if (existingTopicIndex !== -1) {
            state.topics[existingTopicIndex] = action.payload;
          } else {
            state.topics.push(action.payload);
          }
        }
      })

      // Handle the fulfilled state of the fetchAllTopics async thunk
      .addCase(fetchAllTopics.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          const validTopics = action.payload.filter(
            (topic) => topic !== null && topic !== undefined
          );
          state.topics = validTopics;
        } else {
          console.warn(
            "Fetched topics payload is not an array",
            action.payload
          );
        }
      });
  },
});

export const {
  addTopic,
  updateTopic,
  removeTopic,
  setTopics,
  resetTopicState,
} = topicSlice.actions;
export default topicSlice.reducer;
