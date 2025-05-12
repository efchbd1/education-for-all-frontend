# Styles

This folder contains the styling logic for the application.

## Structure
- `.styles.ts` files contain component-scoped styles, using MUI's `styled` API.
- Global styles are in `App.css`, `index.css`, and `theme.ts`.

## Style Approach
We migrated from **MUI Core v4** (with `makeStyles`) to **MUI v5** using the `sx` prop and `@mui/system`'s `styled` utility.

## Files
- `*.styles.ts`: Style definitions for specific components or pages.
- `theme.ts`: Contains the app-wide MUI theme.
- `form.ts`: Shared style objects for form elements.
- `App.css`, `index.css`: Global base styles and resets.

## Guidelines
- Prefer `styled` over legacy JSS or inline styles.
- Reuse shared styles via `form.ts` or theme when possible.
