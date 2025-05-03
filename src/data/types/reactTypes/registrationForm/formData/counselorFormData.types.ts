// Extends the structure of UserFormDataType with additional fields specific to counselors
import { UserFormDataType } from "./userFormData.types";

export type CounselorFormDataType = UserFormDataType & {
  id: string;
  identityNumber: string;
  phoneNumber: string;
  yearsOfExperience: string;
  educationalInstitutions: string;
  workHistory: string;
  academicDegrees: string;
  bio: string;
};
