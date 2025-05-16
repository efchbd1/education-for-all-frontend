# Services Directory

This directory contains service modules that handle all communication with the backend API. Each file is responsible for a different domain of the application, following the single-responsibility principle and maintaining a clean separation of concerns.

## Overview

All services use a shared base URL for API communication, which is loaded from an environment variable: REACT_APP_API_BASE_URL


The base URL is exported from the `config/api.ts` file and imported in each service.

## Structure

### `auth.service.ts`
Handles user authentication, including:
- Signing in users and extracting roles from JWT tokens
- Refreshing access tokens
- Logging out users

### `contact.service.ts`
Provides functionality to:
- Contact a counselor
- Send a general inquiry to the site manager

### `counselor.service.ts`
Supports operations related to counselors:
- Retrieving all counselors or a specific one by ID
- Registering new counselors

### `post.service.ts`
Manages post-related operations:
- Fetching all posts or a specific post by ID or token
- Adding, updating, deleting, liking, and reporting posts

### `topic.service.ts`
Handles topic-related functionality:
- Fetching a topic by ID (with its posts)
- Fetching all topics or posts by topic ID
- Adding a new topic
- Triggering reading of a topic's posts

### `user.service.ts`
Provides user-specific operations:
- Fetching a user by ID
- Adding a new user

### `config/api.ts`
Exports the `API_BASE_URL` using the environment variable, ensuring a centralized source of configuration for all API calls.

## Common Features

- All requests are authenticated where necessary using access tokens.
- Centralized error handling and helper utilities are used for consistent behavior.
- Axios is used as the HTTP client across all services.

## Environment

Ensure that your `.env` file contains the following variable:
REACT_APP_API_BASE_URL=<your-api-base-url>

## Notes

- Services rely on helper utilities from `auth/utils`, `utils/handleRequest`, and shared types from the `types` directory.
- All requests that modify or access protected resources include authorization headers with bearer tokens.

---

This structure supports scalability and maintainability as the application grows.
