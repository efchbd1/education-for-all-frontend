# Pages Directory

This directory contains the main pages of the application that make up the user interface of the app. Each file represents a screen or view in the app. Below is an overview of the pages and their purposes.

## Page Descriptions

### AboutMePage.tsx
This page displays the personal and professional information of the developer. It highlights skills, work experience, education, and technical abilities.

#### Key Sections:

1. **Personal Info**  
   Name, title, and contact email.

2. **About Me**  
   Brief description of the developer's background and expertise.

3. **Featured Project**  
   Showcases a selected project with relevant technologies used.
   
### AboutPage.tsx

This page introduces the educational forum and explains its purpose, services, and benefits for users.

#### Sections:

- **Introduction**  
  Welcomes users and describes the platform’s mission.

- **What We Offer**  
  Explains how the forum helps parents get expert advice.

- **For Parents**  
  Free, reliable, and personal educational support.

- **For Counselors**  
  Professional exposure and engagement with target audience.

- **Why Us**  
  Highlights professionalism, community, and usability.

- **Call to Action**  
  Invitation to join the community with a return-home button.

### CounselorsPage.tsx

This page displays a list of counselors with search and filtering features.

#### Features:

- **Header & Intro**  
  Title and description of experience levels (Beginner, Experienced, Expert, Senior).

- **Filter by Experience**  
  Buttons to filter counselors based on years of experience:
  - Beginner: 0–2 years  
  - Experienced: 3–5 years  
  - Expert: 6–10 years  
  - Senior: 10+ years

- **Search by Name**  
  Search field to filter counselors by first or last name.

- **Counselor Cards**  
  Grid view displaying each counselor’s:
  - Name and biography  
  - Years of experience  
  - Work history  
  - Academic degrees & institutions  
  - Experience badge  
  - Contact button

- **Dialog for Contact**  
  Modal dialog opens when clicking "Contact" to initiate communication.

- **State Management & Filtering Logic**  
  Uses `useMemo` for optimized filtering and `useEffect` for sorting data.

### CreateTopicPage.tsx

A page for opening a new discussion topic in the forum.

#### Purpose:
Allows users to create a new topic with a title and a detailed question.

#### Features:

- **Page Title:**  
  `"Open a New Topic"`

- **Form Fields:**
  - `Title` – Text input with validation and placeholder.
  - `Initial Question Content` – Multiline text input for describing the question (e.g., child's age, dilemma, attempted solutions).

- **Validation:**
  - Client-side validation with error messages shown under each field.

- **Submit:**
  - A "Create Topic" button submits the form using the `useCreateTopic` custom hook.

### DeletePostPage.tsx

A page for confirming and executing the deletion of a forum post.

#### Purpose:
Allows **admin** to delete a specific post using a token extracted from the URL.

#### Features:

- **Token Extraction:**
  - Extracts a token from the current URL path on page load.

- **Post Fetching:**
  - Uses the token to fetch the corresponding post details using `getPostByToken`.

- **Delete Action:**
  - Provides a delete button that:
    - Calls `deletePost` with the token.
    - Displays a confirmation message upon successful deletion.
    - Disables the button after deletion to prevent duplicate actions.
    - Shows an alert if the user is not authorized.

- **Text Content:**
  - Confirmation message in Hebrew: “?האם אתה בטוח שברצונך למחוק את התגובה” ("Are you sure you want to delete this post?")
  - Success message: “המחיקה התבצעה בהצלחה” ("Deletion was successful")

### HomePage.tsx

The landing page of the educational community platform.

#### Purpose:
Welcomes users to the platform and displays a list of forum topics.

#### Features:

- **Introductory Text:**
  - Welcomes users to the platform: *"חינוך לעם"* ("Education for the People").
  - Explains the purpose of the platform: connecting parents and counselors in an educational community.
  - Encourages users to engage in meaningful parenting discussions and seek professional advice.

- **Components Used:**
  - `Box` and `Typography` from Material UI for layout and text presentation.
  - `TopicList` component displays a list of discussion topics on the homepage.

- **Content Summary:**
  - Title: Warm welcome message.
  - Subtitle: Explanation of the platform's purpose.
  - Description: Prompt to select a page.
  - Dynamic content: `<TopicList />` renders the list of forum threads.

### LoginPage.tsx

A login form component for users to authenticate with a username and password.

#### Purpose:
Allows users to log in to the platform securely with validation and visual feedback.

#### Features:

- **Input Fields:**
  - **Username** (`name`): Text input with a placeholder and validation.
  - **Password** (`password`): Password input with the ability to toggle visibility.

- **Hooks:**
  - Uses the custom hook `useLoginForm` to manage:
    - `formData`: Username and password values.
    - `errors`: Validation messages for each field.
    - `showPassword`: Boolean state for toggling password visibility.
    - `handleChange`: Updates field values.
    - `handleSubmit`: Submits the form.
    - `handleClickShowPassword`: Toggles password visibility.
   
### RulesPage.tsx
This component displays forum rules using flip cards in a circular grid layout.

#### Description
Each card represents a category of rules:
- **Parents** – respectful language, privacy, clear descriptions.
- **Advisors** – professionalism, supportive tone, accurate profiles.
- **Everyone** – no self-promotion, forum moderation rights.

The cards flip to reveal detailed rules written in HTML.

### CounselorRegPage.tsx

A registration form for counselors, built with **React** and **Material UI**.

#### Features
- Fields for name, password, ID, phone, email, education, experience, and bio.
- Password and confirmation with visibility toggles.
- Validation and error display from custom hook (`useCounselorRegForm`).
- Checkbox to agree to forum rules with a link to the rules page.
- RTL support and input adornments with icons.
- Styled with a centralized style object (`classes`).

#### Hooks and Utilities
- Uses `useCounselorRegForm` for form logic.
- Uses constants from `PATHS` for route navigation.

### UserRegPage.tsx

A registration page component for **parent users**, built with **React** and **Material UI**.

#### Features
- Input fields for name, password, confirm password, and email.
- Real-time email existence check with validation feedback.
- Password fields include visibility toggle buttons.
- Agreement checkbox linking to forum rules.
- RTL support and icon adornments for a friendly UX.
- Form state and logic managed via custom hook `useUserRegForm`.

#### Technologies Used
- `@mui/material` for UI components
- `@mui/icons-material` for input icons
- `useUserRegForm` custom hook for validation and state
- `PATHS` for dynamic route linking
- Custom style definitions via `classes`
