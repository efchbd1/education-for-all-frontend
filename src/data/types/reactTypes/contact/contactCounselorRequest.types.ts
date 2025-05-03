import { ContactRequestType } from "./contactRequest.types";

export type ContactCounselorRequestType = ContactRequestType & {
  counselorName: string; // Name of the counselor being contacted
  counselorEmail: string;
};
