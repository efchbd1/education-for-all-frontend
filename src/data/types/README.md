# Types Directory

This directory defines TypeScript types used throughout the application. It is organized into two subdirectories to distinguish between business/domain models and UI-specific typing:

## Structure

### `domainTypes/`

Contains types that represent the core business logic and data models of the application. These types mirror the structures received from or sent to the backend API and define entities such as:

- `User`
- `Post`
- `Counselor`
- `Topic`

These types are backend-agnostic and are not tied to the React framework. They provide consistency across the application's service and data layers.

Use these types when:
- Communicating with APIs
- Typing database-related structures
- Representing domain-specific logic

### `reactTypes/`

Holds types and interfaces specifically used within the React UI layer. These may include:

- Props for React components
- Types for internal state, forms, modals, or event handlers
- UI-specific structures not necessarily present in the backend

Use these types when:
- Defining component props or form values
- Managing client-side UI state
- Structuring input/output for reusable UI utilities

## Best Practices

- **Do not** import `reactTypes` inside service or backend-related modules; reserve them for UI use.
- **Always** use `domainTypes` when working with API responses, requests, or shared business logic.
- Update types as needed to ensure type safety across the application.

---

This separation promotes clear boundaries between business logic and UI concerns, making the codebase more maintainable, scalable, and easier to test.
