import { useState } from "react";
import { addCounselor } from "data/services/counselor.service";
import { signin } from "data/services/auth.service";
import { setSession } from "../auth/utils";
import { handleApiErrors } from "utils/formErrorsUtils";
import { useAppSetup } from "data/useAppSetup";
import { addCounselor as addCounselorToUsersArr } from "data/redux/counselor/counselor.slice";
import { setCounselor } from "data/redux/auth/auth.slice";
import { CounselorFormErrorsType } from "data/types/reactTypes/registrationForm/formErrors/counselorFormErrors.types";
import { PATHS } from "routes/paths";
import {
  validateEmail,
  validateFullName,
  validateIsraeliID,
  validatePhoneNumber,
  validateYearsOfExperience,
  validateTextField,
  validatePassword,
} from "utils/validation";

// Custom hook for counselor registration form
export const useCounselorRegForm = () => {
  const { dispatch, navigate } = useAppSetup();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    identityNumber: "",
    phoneNumber: "",
    educationalInstitutions: "",
    yearsOfExperience: "",
    workHistory: "",
    academicDegrees: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<CounselorFormErrorsType>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async () => {
    let newErrors: CounselorFormErrorsType = {};

    // Validate required fields and conditions
    newErrors.name = validateFullName(formData.name);
    if (!formData.email) {
      newErrors.email = "אימייל הוא שדה חובה";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "אימייל לא תקין";
    }
    newErrors.password = validatePassword(formData.password);
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "הסיסמאות אינן תואמות";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "חובה להסכים לתקנון הפורום";
    newErrors.identityNumber = validateIsraeliID(formData.identityNumber);
    newErrors.phoneNumber = validatePhoneNumber(formData.phoneNumber);
    newErrors.yearsOfExperience = validateYearsOfExperience(
      formData.yearsOfExperience
    );
    newErrors.academicDegrees = validateTextField(
      formData.academicDegrees,
      3,
      5
    );
    newErrors.educationalInstitutions = validateTextField(
      formData.educationalInstitutions,
      3,
      5
    );
    newErrors.workHistory = validateTextField(formData.workHistory, 3, 5);
    newErrors.bio = validateTextField(formData.bio, 10, 5);

    newErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([_, v]) => v)
    );
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Create FormData for API call
    const newUser = new FormData();
    newUser.append("name", formData.name);
    newUser.append("email", formData.email);
    newUser.append("password", formData.password);
    newUser.append("bio", formData.bio);
    newUser.append("identityNumber", formData.identityNumber);
    newUser.append("phoneNumber", formData.phoneNumber);
    newUser.append("educationalInstitutions", formData.educationalInstitutions);
    newUser.append("yearsOfExperience", formData.yearsOfExperience);
    newUser.append("workHistory", formData.workHistory);
    newUser.append("academicDegrees", formData.academicDegrees);

    try {
      // Add counselor via service and sign in
      const res = await addCounselor(newUser);
      if (res) {
        const response = await signin(formData.name, formData.password);
        setSession(response.accessToken);

        // Create new counselor object and update Redux
        const newCounselor = {
          id: res,
          name: formData.name,
          email: formData.email,
          password: formData.password,
          bio: formData.bio,
          yearsOfExperience: parseInt(formData.yearsOfExperience),
          educationalInstitutions: formData.educationalInstitutions,
          workHistory: formData.workHistory,
          academicDegrees: formData.academicDegrees,
        };
        dispatch(setCounselor(newCounselor));
        dispatch(addCounselorToUsersArr(newCounselor));
        navigate(PATHS.Home);
      }
    } catch (error) {
      const newErrors = handleApiErrors(error);
      setErrors(newErrors);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    handleSubmit,
    handleChange,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
    setShowConfirmPassword,
  };
};
