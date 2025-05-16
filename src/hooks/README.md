# 📂 Hooks Directory

This folder contains custom React hooks used throughout the application for managing forms, posts, user actions, and other reusable logic.

---

## Hook Descriptions

### `useAddPost.tsx`
A custom hook for handling the logic of adding a new post to a discussion topic.

- **Validates** post content to ensure it contains at least two meaningful words and no overly short or long words.
- **Handles** special logic for counselor users by assigning their ID accordingly.
- **Interacts** with the API to add a post and updates both the Redux store and the local state.
- **Triggers** UI updates such as closing dialogs and resetting the input field.

---

### `useCounselorRegForm.ts`

A custom hook that manages the entire registration form process for **counselor users**. This hook encapsulates form state, validation logic, and the submission workflow, providing a clean interface to use in the registration component.

#### Features:
- **Form State Management**:
  - Stores all counselor-related fields such as name, email, password, bio, and work history.
  - Supports real-time updates for all form inputs, including checkboxes.

- **Validation**:
  - Validates fields such as:
    - Full name
    - Email format
    - Password complexity
    - Matching passwords
    - Israeli ID
    - Phone number
    - Bio and text fields with length limits
  - Displays error messages for invalid or missing fields.
  - Ensures user agrees to the forum terms.

- **Submission Logic**:
  - Submits data via `FormData` to the API endpoint for adding a new counselor.
  - Upon success, automatically signs in the counselor and stores their session token.
  - Updates the Redux store with the new counselor information.

- **Redux Integration**:
  - Dispatches actions to:
    - Add the counselor to the list of users.
    - Set the authenticated counselor in the global auth state.

- **Navigation**:
  - Redirects the user to the home page after successful registration and sign-in.

- **Password Visibility**:
  - Provides toggles to show/hide password and confirm password inputs.
---

### `useCreateTopic.ts`

A custom React hook for managing the creation of new discussion topics and their initial posts.

#### Features:
- Manages form state for a new topic and its first post.
- Validates:
  - Topic title (min/max word count, letter checks, word length).
  - Post content (min word count, letter inclusion, word length).
- Handles input changes with real-time validation.
- On successful submission:
  - Sends topic data to the backend.
  - Adds the new topic to Redux.
  - Creates an initial post and associates it with the topic.
  - Redirects the user to the homepage.

---

### `useLikePost.ts`

A custom React hook that manages the "like" functionality for forum posts.

#### Features:
- Sends a like request for a specific post to the backend.
- Updates the post's like count locally in the topic object.
- Synchronizes the updated topic with the Redux store.
- Tracks liked/disliked state for the post in local component state.

#### Parameters:
- `topic`: The current topic containing the post.
- `setTopic`: State setter for the topic.
- `dispatch`: Redux dispatch function.
- `setLikedPosts`: Setter to manage local like/dislike status.
  
---

### `useLoginForm.ts`

A custom React hook for managing login form behavior and authentication.

#### Features:
- Manages form state for username and password.
- Validates required fields before submission.
- Performs login via the `signin` API call.
- Stores JWT access token in session storage.
- Decodes token to extract user ID.
- Fetches and sets user or counselor data in Redux store based on role.
- Navigates to home page after successful login.
- Handles toggle for password visibility.

---

### `useTopicHook.ts`
Utility functions for fetching topic data along with user and counselor names.

#### Functions:

- **`fetchUserAndCounselorNamesForPosts(topic, dispatch, setUsersMap, setIsLoading)`**
  - Iterates through all posts in a topic.
  - Fetches user and counselor names by ID.
  - Populates a map of names for display purposes.
  - Updates loading state during the process.

- **`fetchUserNamesForTopics(topics, dispatch, setUsersMap, setIsLoading)`**
  - Extracts unique user IDs from multiple topics.
  - Fetches user names in parallel.
  - Stores them in a user map for later use.

- **`fetchTopicData(id, dispatch, setTopic, setUsersMap, setIsLoading)`**
  - Fetches a topic by its ID.
  - Sets topic state and fetches related user/counselor names.
  - Manages loading state throughout.

#### Purpose:
These functions centralize the logic for fetching topic and post data along with associated user identities, supporting user-friendly UI rendering with names instead of raw IDs.

---

### `useUserRegForm.ts`
A custom React hook for managing user registration form logic.

#### Responsibilities:
- Manages form state for a new user (email, password, name, etc.)
- Handles real-time validation for fields like email, password, and agreement checkbox
- Sends API request to register a new user
- Signs in the user automatically after successful registration
- Updates Redux store with the new user data
- Redirects to home page upon successful signup

#### Features:
- `handleChange` — Updates form field state on user input
- `handleSubmit` — Validates fields and submits the form to backend
- `handleClickShowPassword`, `handleClickShowConfirmPassword` — Toggles password visibility
- Uses Redux dispatch and navigation from `useAppSetup`

#### Validations:
- Checks for valid email format
- Enforces password requirements and matching confirmation
- Ensures terms agreement checkbox is checked

#### Post-registration:
- Automatically signs the user in using their credentials
- Stores token in session and updates authenticated user in Redux
---

### `useVoiceTyping.tsx`
A custom React hook for integrating voice-to-text functionality using the browser's Speech Recognition API.

#### Responsibilities:
- Initializes and manages speech recognition for Hebrew (`he-IL`)
- Captures spoken input and converts it into text
- Updates external state with the recognized transcript
- Controls recording state and error handling

#### Features:
- `startRecording` — Starts speech recognition and opens a dialog
- `stopRecording` — Stops the recognition session and resets state
- Handles browser compatibility and user feedback for unsupported cases
- Sets `isRecording` flag for UI interaction

#### Integrates With:
- `setNewPostContent` — Callback to update text content with the transcript
- `setOpenDialog` — Callback to control UI dialog visibility for voice input

---

📝 **Note:** Each hook is designed to encapsulate logic specific to a domain (form, API, UI interaction) and keeps the components clean and focused.
