## Dialogs Directory – Components Overview

### 📞 `ContactCounselorDialog.tsx`

A dialog used for authenticated users to contact a specific counselor.

**Props:**
- `open`: whether the dialog is open
- `onClose`: closes the dialog
- `isAuthenticated`: whether the user is logged in
- `counselorEmail`, `counselorName`: info about the target counselor
- `currentUser`: the current logged-in user
- `hoveredSignUp`, `setHoveredSignUp`, `hoveredLogin`, `setHoveredLogin`: used for hover interaction tracking

---

### ✉️ `ContactUsDialog.tsx`

A dialog for general contact messages. Only available for authenticated users.

**Props:**
- `isOpen`: whether the dialog is open
- `onClose`: closes the dialog

---

### 🚨 `ReportDialog.tsx`

Allows authenticated users to report problematic content.

**Props:**
- `open`: whether the dialog is open
- `onClose`, `onConfirm`: functions for closing or confirming the report
- `isAuthenticated`: whether the user is logged in
- `hoveredSignUp`, `setHoveredSignUp`, `hoveredLogin`, `setHoveredLogin`: hover interactions for auth links

---

### ✅ `ReportSuccessDialog.tsx`

Shows a confirmation after a successful report submission.

**Props:**
- `open`: whether the dialog is open
- `onClose`: closes the dialog

---

### 📝 `AddPostDialog.tsx`

Dialog for creating a new post or comment, supports voice typing.

**Props:**
- `openDialog`: open state
- `handleCloseDialog`: close handler
- `isAuthenticated`: user authentication status
- `newPostContent`: post content string
- `handlePostContentChange`: input change handler
- `handleAddPost`: post submit handler
- `error`: optional validation message
- `isCounselor`, `userName`: context for post content placeholder
- `hoveredSignUp`, `setHoveredSignUp`, `hoveredLogin`, `setHoveredLogin`: for handling hover states on auth links

---

### 🔐 `AuthenticationDialog.tsx`

Reusable dialog shown when user action requires authentication. Prompts login/signup options.

**Props:**
- `isOpen`: open state
- `onClose`: close handler
- `hoveredSignUp`, `setHoveredSignUp`, `hoveredLogin`, `setHoveredLogin`: manage hover behavior
- `warningMessage`: customizable warning message for unauthenticated access

---

## Notes

- All dialogs use MUI's `Dialog` component.
- Hebrew text is supported and most dialogs use RTL styling.
- Authentication gates (via `AuthenticationDialog`) are integrated in most dialogs requiring logged-in users.
- Input validation is handled through shared utility functions (e.g., `validateContactMessage`).

---

## Dependencies

- [`@mui/material`](https://mui.com/)
- `react-router-dom`
- Custom hooks (`useVoiceTyping`)
- Domain and React types from `data/types`
- Validation utilities from `utils/validation`
