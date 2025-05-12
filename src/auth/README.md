# Auth

This directory contains essential authentication-related utilities and middleware for handling user authentication, session management, and authorization checks in the application.

## Files:

### `authMiddleware.ts`
Contains middleware functions to intercept requests and responses in order to manage authentication. It ensures that a valid access token is included in requests and handles unauthorized responses by removing sessions.

### `guestGuard.ts`
This component prevents authenticated users from accessing certain routes meant for guests. If a user is authenticated, they are redirected to the login page.

### `utils.ts`
Provides utility functions for session management (e.g., setting, getting, and removing access tokens), JWT decoding, and token validation. It also includes logic for handling token refreshment to maintain user sessions.
