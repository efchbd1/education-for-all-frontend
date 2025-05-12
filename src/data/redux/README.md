# Redux Directory

This directory contains the Redux-related functionality for the application. It handles the application's global state, including user authentication, posts, topics, counselors, and more. The state management is done using Redux and includes different slices for managing each part of the application.

## Files and Folders:

### `auth/`
This folder contains the Redux slice related to user authentication. It includes actions, reducers, and selectors for managing user login, logout, and session state.

### `counselor/`
This folder contains the Redux slice for managing counselor-related data. It handles the loading, adding, and updating of counselor information.

### `post/`
This folder includes the Redux slice for managing post-related data. It deals with creating and deleting posts.

### `topic/`
This folder contains the Redux slice related to topic management. It includes actions and reducers for creating and fetching topics.

### `user/`
This folder manages the user data and information. It contains actions, reducers, and selectors for user management and interactions.

### `store.ts`
This file sets up the Redux store for the application. It combines all the slices (auth, counselor, post, topic, user) into a single root reducer and configures middleware like Redux Thunk for handling asynchronous actions.

## Purpose:

The purpose of this Redux directory is to centralize the application's state management, ensuring that components can easily access and update the state in a predictable manner. By using Redux, we aim to make the application more scalable and maintainable by keeping the state logic separate from the UI components.

## Usage:

- To access or modify state, components should use Redux hooks like `useSelector` and `useDispatch`.
- Each folder represents a specific domain or feature and contains its own slice for managing the related state.
- The `store.ts` file is responsible for combining all slices into a single store and applying middleware.
