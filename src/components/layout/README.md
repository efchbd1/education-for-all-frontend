
## Components Overview

### `Chatbot.tsx`
An interactive chatbot component that provides users with answers to frequently asked questions using a dialog interface. It uses a hierarchical data structure (`FAQNode`) and supports navigation through nested questions and answers.

- **Features:**
  - Floating action button to open the chatbot
  - Dialog interface with FAQ tree navigation
  - Displays answers or sub-question lists
  - RTL support and custom styling via `chatbotStyles`

---

### `Footer.tsx`
The footer section of the site. Displays important links (such as Terms and Contact), and includes the `Chatbot` component.

- **Features:**
  - Contact link that opens a contact dialog (or authentication dialog for guests)
  - Link to site rules and personal "About Me" page
  - Integrated `Chatbot` and `ContactUsDialog`
  - Responsive design and RTL layout

---

## Navbar Components (`/navbar`)

### `Navbar.tsx`
The main AppBar navigation component. Displays navigation links, user greeting, authentication options, and dialogs for registration/login.

- **Features:**
  - Links to key pages: Home, Counselors, About
  - Authenticated greeting and logout option
  - Opens authentication dialog if user isn't logged in
  - Registration menu for selecting between Parent or Counselor
  - Dialog-based authentication flow

---

### `NavigationMenu.tsx`
Used within the `Navbar`, this component displays the clickable navigation links. Supports event handling for "New Topic" and registration dropdowns.

- **Props:**
  - `handleRegistrationMenuOpen`: triggers the dropdown for registration options
  - `handleNewTopicClick`: initiates new topic creation or opens auth dialog

---

### `RegistrationMenu.tsx`
Dropdown menu for selecting the registration type (Parent or Counselor). Appears when clicking on the "Register" link in the navigation bar.

- **Props:**
  - `registrationAnchorEl`: anchor element for positioning
  - `isRegistrationMenuOpen`: controls visibility
  - `handleRegistrationMenuClose`: closes the menu
  - `handleRegistrationOptionClick`: navigates based on user selection

---

## Styling

- Uses **MUI** (`@mui/material`) components and theme breakpoints.
- Custom styles are applied from:
  - `Chatbot.styles.ts`
  - `Footer.styles.ts`

---

## Dependencies

- React
- React Router (`react-router-dom`)
- Material UI
- Internal data hooks (e.g. `useAppSetup`)
- Internal routing constants (`PATHS`)
- Internal dialogs (`AuthenticationDialog`, `ContactUsDialog`)

---

## Notes

- All components are RTL-compatible.
- This layout system is built with reusability and maintainability in mind.
- Designed to support both authenticated and unauthenticated flows gracefully.
