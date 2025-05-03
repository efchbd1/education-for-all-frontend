// Extends the structure of UserFormErrorsType with additional optional error fields specific to counselors
import { UserFormErrorsType } from "./userFormErrors.types";

export type CounselorFormErrorsType = UserFormErrorsType & {
  identityNumber?: string;
  phoneNumber?: string;
  yearsOfExperience?: string;
  academicDegrees?: string;
  educationalInstitutions?: string;
  bio?: string;
  workHistory?: string;
};
