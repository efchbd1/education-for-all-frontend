import { CounselorFormErrorsType } from "data/types/reactTypes/registrationForm/formErrors/counselorFormErrors.types";
import { UserFormErrorsType } from "data/types/reactTypes/registrationForm/formErrors/userFormErrors.types";

export const handleApiErrors = (
  error: any
): UserFormErrorsType | CounselorFormErrorsType => {
  const newErrors: UserFormErrorsType | CounselorFormErrorsType = {};

  // Map specific error messages to form fields
  if (error.message === "Email and Username already exist") {
    (newErrors as UserFormErrorsType).name = "שם משתמש כבר קיים";
    (newErrors as UserFormErrorsType).email = "אימייל כבר קיים";
  } else if (error.message === "Email already exists") {
    (newErrors as UserFormErrorsType).email = "אימייל כבר קיים";
  } else if (error.message === "Username already exists") {
    (newErrors as UserFormErrorsType).name = "שם משתמש כבר קיים";
  } else {
    (newErrors as UserFormErrorsType).general = "אירעה שגיאה בעת יצירת המשתמש";
  }
  return newErrors;
};
