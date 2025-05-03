// Defines the structure of the authentication state
import { CounselorType } from "data/types/domainTypes/counselor.types";
import { UserType } from "data/types/domainTypes/user.types";

export type AuthType = {
  user: UserType | CounselorType | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
};
