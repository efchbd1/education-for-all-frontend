import { useState, ChangeEvent, FormEvent } from "react";
import { UserFormDataType } from "data/types/reactTypes/registrationForm/formData/userFormData.types";
import { UserFormErrorsType } from "data/types/reactTypes/registrationForm/formErrors/userFormErrors.types";
import { handleApiErrors } from "utils/formErrorsUtils";
import { addUser } from "data/services/user.service";
import { signin } from "data/services/auth.service";
import { setSession } from "../auth/utils";
import { setUser } from "data/redux/auth/auth.slice";
import { addUser as addUserToUsersArr } from "data/redux/user/user.slice";
import { useAppSetup } from "data/useAppSetup";
import { PATHS } from "routes/paths";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "utils/validation";

const useUserRegForm = () => {
  const { dispatch, navigate } = useAppSetup();

  const [formData, setFormData] = useState<UserFormDataType>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    agreeToTerms: false,
  });
  const [emailExists, setEmailExists] = useState(false);
  const [errors, setErrors] = useState<UserFormErrorsType>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle input change and update form data
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors: UserFormErrorsType = {};

    // Validate form fields
    newErrors.password = validatePassword(formData.password);
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "הסיסמאות אינן תואמות";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "חובה להסכים לתקנון הפורום";

    newErrors.name = validateUsername(formData.name);
    newErrors.email = !formData.email
      ? "אימייל הוא שדה חובה"
      : !validateEmail(formData.email)
      ? "אימייל לא תקין"
      : "";

    newErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([_, v]) => v)
    );

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const newUser = new FormData();
    newUser.append("name", formData.name);
    newUser.append("email", formData.email);
    newUser.append("password", formData.password);

    try {
      // Call API to add user
      const res = await addUser(newUser);
      if (res) {
        const response = await signin(formData.name, formData.password);
        setSession(response.accessToken);
        dispatch(
          setUser({ id: res, name: formData.name, email: formData.email })
        );
        dispatch(
          addUserToUsersArr({
            id: res,
            name: formData.name,
            email: formData.email,
          })
        );
        navigate(PATHS.Home);
      }
    } catch (error) {
      newErrors = handleApiErrors(error);
      setErrors(newErrors);
    }
  };

  // Toggle visibility for password fields
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return {
    formData,
    setFormData,
    emailExists,
    setEmailExists,
    errors,
    setErrors,
    showPassword,
    showConfirmPassword,
    handleChange,
    handleSubmit,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
  };
};

export default useUserRegForm;
