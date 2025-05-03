import { useState } from "react";
import { signin } from "data/services/auth.service";
import { jwtDecode, setSession } from "../auth/utils";
import { setCounselor, setUser } from "data/redux/auth/auth.slice";
import { fetchCounselorById } from "data/redux/counselor/counselor.slice";
import { fetchUserById } from "data/redux/user/user.slice";
import { useAppSetup } from "data/useAppSetup";
import { PATHS } from "routes/paths";

type FormData = {
  name: string;
  password: string;
};

// Custom hook for handling login form logic
export const useLoginForm = () => {
  const { dispatch, navigate } = useAppSetup();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "שם משתמש הוא שדה חובה";
    if (!formData.password) newErrors.password = "סיסמה היא שדה חובה";

    setErrors(newErrors);

    // If there are errors, prevent further action
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      // Perform login
      const response = await signin(formData.name, formData.password);
      setSession(response.accessToken);

      // Decode the AccessToken to extract the user ID
      const decodedToken = jwtDecode(response.accessToken); // Use AccessToken

      const userId = Number(decodedToken.sub);

      // Fetch user or counselor details based on role
      let userDetails;
      if (response.role === "counselor") {
        userDetails = await dispatch(fetchCounselorById(userId)).unwrap();
        dispatch(setCounselor(userDetails));
      } else {
        userDetails = await dispatch(fetchUserById(userId)).unwrap();
        dispatch(setUser(userDetails));
      }

      navigate(PATHS.Home);
    } catch (error) {
      setErrors({ ...errors, form: "שגיאה בהתחברות, אנא נסה שנית" });
    }
  };

  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return {
    formData,
    errors,
    showPassword,
    handleChange,
    handleSubmit,
    handleClickShowPassword,
  };
};
