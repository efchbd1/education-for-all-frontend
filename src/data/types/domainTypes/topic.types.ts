export type TopicType = {
  id?: number;
  title: string;
  wasAnswered: boolean;
  dateCreated: string;
  dateLastActive: string;
  userId: number;
  postIds: number[];
};

// Represents the data required to create or update a topic, excluding fields that are generated automatically (id, dateCreated, dateLastActive)
export type TopicFormType = Omit<
  TopicType,
  "id" | "dateCreated" | "dateLastActive"
>;
