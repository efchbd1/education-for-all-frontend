# React Types

This directory contains shared TypeScript type definitions used across the React application. The types are grouped by domain and functionality to improve maintainability, readability, and reusability throughout the codebase.


---

## File Overview

 structure of a decoded JWT token, used in authentication and session validation.

### `contact/`  
Contains type definitions related to contact forms:
- `contactRequest.types.ts` is used for generic contact requests sent to the site manager.
- `contactCounselorRequest.types.ts` extends the base contact type for cases where users contact specific counselors.

### `registrationForm/formData/`  
Defines the shape of data submitted in registration forms:
- `userFormData.types.ts` includes fields common to all users.
- `counselorFormData.types.ts` extends user data with additional counselor-specific information.

### `registrationForm/formErrors/`  
Contains types for managing validation errors in forms:
- `userFormErrors.types.ts` defines optional fields for user validation messages.
- `counselorFormErrors.types.ts` extends user errors with counselor-specific error fields.

### `auth.types.ts`  
Defines the structure for authentication state, including the authenticated user and status flags.

### `decodedToken.types.ts`  
Represents the expected

---

## Purpose

These types serve as a single source of truth for data structures used in forms, authentication, and user interactions. Using centralized and strongly-typed definitions enhances code consistency and reduces bugs, especially in large-scale applications.


