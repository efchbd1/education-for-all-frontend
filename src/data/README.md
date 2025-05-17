# 📁 src/data

This directory contains core data logic, configurations, and type definitions used throughout the application. It provides centralized data handling utilities and structures to support services, state management, and shared resources.

## `redux/`
Contains Redux logic including slices, actions, reducers, and possibly middleware. This supports global state management.

## `services/`
Includes modules related to service layer communication (e.g., API base URLs, service wrappers).  
This helps abstract HTTP communication and provide reusable service calls.

## `types/`
Holds TypeScript type definitions and interfaces that are shared across the application, promoting consistency and strong typing.

## `axios.ts`
Defines a customized Axios setup with authentication request and response interceptors.  
- Uses middleware for attaching auth tokens to requests and handling 401 errors.
- Exports two Axios instances:
  - `privateAxiosInstance`: For authenticated requests.
  - `publicAxiosInstance`: For general public API requests.

## `faqData.ts`
Contains a nested data structure of frequently asked questions (FAQs) for chatbot or UI display purposes.  
- Built using the `FAQNode` interface, representing a tree of topics and answers.
- Organized into categories such as registration, forum usage, technical support, privacy, and more.
- The content is written in Hebrew.

## `hooks.ts`
Defines typed custom Redux hooks for TypeScript:
- `useAppDispatch`: Typed dispatch using `AppDispatch`.
- `useAppSelector`: Typed selector using `RootState`.
- Ensures type safety and improves Redux usage.

## `useAppSetup.ts`
Custom hook to centralize commonly used app-level logic and selectors:
- Accesses Redux state (auth status, user, counselors) with typed selectors.
- Provides `dispatch` and `navigate` for convenient use in components.
- Simplifies and standardizes app-wide setup logic.

---

## 📌 Notes
- All networking logic (especially related to authentication) should use the Axios instances defined here.
- `faqData` is designed to be easily searchable and adaptable for hierarchical display in interfaces.
