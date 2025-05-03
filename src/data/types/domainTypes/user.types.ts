// Type 1: User sign-in details (e.g., during login)
export type UserSignInType = {
  name: string;
  password: string;
};

// Type 2: Full user details (used during registration)
export type FullUserType = {
  id?: number;
  name: string;
  email: string;
  password: string;
};

// Type 3: User details for read-only access
export type UserType = {
  id: number;
  name: string;
  email: string;
};
