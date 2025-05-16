# Redux - Auth Module

This folder contains Redux logic for managing authentication state across the application.

## 📁 Files Overview

### `auth.slice.ts`
Defines the `auth` slice using Redux Toolkit.

- **State Structure:**
  - `user`: The currently logged-in user (can be a regular user or a counselor).
  - `isAuthenticated`: Boolean indicating if a user is authenticated.
  - `isInitialized`: Boolean indicating if the auth state has finished initializing.

- **Reducers:**
  - `setUser`: Sets a regular user as the authenticated user.
  - `setCounselor`: Sets a counselor as the authenticated user.
  - `setInitialized`: Flags that the auth check is complete.
  - `logout`: Clears user data and removes the session from local storage.

---

### `auth.selectors.ts`
Provides selectors to access pieces of the `auth` state from components.

- `selectAuth`: Returns the full auth state.
- `selectUserName`: Returns the authenticated user's name or an empty string.
- `selectUserId`: Returns the user's ID or `null`.
- `selectIsAuthenticated`: Boolean indicating if a user is logged in.
- `isProfessional`: Boolean indicating if the user is a counselor (professional).

---

### `authGuard.tsx`
A React component that wraps protected routes and ensures only authenticated users can access them.

- Redirects to the login page (`PATHS.LogIn`) if the user is not authenticated.
- Waits for the `auth` state to initialize before deciding access.
- Renders a loading spinner while initialization is in progress.

---

## 🔄 Integration
- The `auth` slice is registered in the Redux store.
- Used across the app to:
  - Protect routes (`AuthGuard`)
  - Display user-specific content
  - Control login/logout flow
