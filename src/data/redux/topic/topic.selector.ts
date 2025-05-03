import { RootState } from "data/redux/store";
import { createSelector } from "reselect";

export const selectTopic = createSelector(
  (state: RootState) => state.topic.topics,
  (topics) => Object.values(topics)
);
