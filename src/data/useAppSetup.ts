import { useNavigate } from "react-router-dom";
import {
  selectIsAuthenticated,
  isProfessional,
  selectAuth,
} from "data/redux/auth/auth.selectors";
import { useAppDispatch, useAppSelector } from "data/hooks";

export const useAppSetup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isCounselor = useAppSelector(isProfessional);
  const currentUser = useAppSelector((state) => selectAuth(state)?.user);
  const counselors = useAppSelector((state) => state.counselor.counselors);

  return {
    dispatch,
    navigate,
    isAuthenticated,
    isCounselor,
    currentUser,
    counselors,
  };
};
