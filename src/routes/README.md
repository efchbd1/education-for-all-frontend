# 📁 routes

This folder handles the **routing structure** of the application using `react-router-dom`.

## Files

### 🔹 `paths.ts`
Defines all route paths used across the app as constants inside a single `PATHS` object.  
This improves maintainability and reduces the risk of hardcoded strings or typos.

### 🔹 `router.tsx`
Defines the **routing configuration** using `createBrowserRouter`.

Includes:
- A root layout (`<Layout />`) that wraps all pages and includes:
  - `<NavBar />` in the header
  - `<StickyFooter />` in the footer
- A `<NewTopicGuard />` component that protects the “Create New Topic” page from unauthorized or counselor access
- Dynamic document titles using `useEffect` and `useLocation` from `react-router-dom`
- A background image set via a styled `Box` component
