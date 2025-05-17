# Components: Topic

This folder contains React components related to displaying and interacting with a specific discussion topic, including post creation, reporting, and contacting a counselor.

## Components

### 1. `TopicItem.tsx`

**Purpose:**  
Responsible for rendering the full topic view. This includes fetching topic data, rendering posts, and managing dialog states for reporting, adding posts, and contacting counselors.

**Main responsibilities:**
- Fetch topic and user data using hooks.
- Display topic title and posts.
- Handle user interactions such as:
  - Adding new posts
  - Reporting posts
  - Contacting counselors
  - Authenticating when needed

**Key dependencies:**
- `useTopicHook`, `useAddPost`, `useLikePost`
- Dialog components: `DialogsManager`, `AuthenticationDialog`
- Services: `topic.service`, `post.service`
- Redux slice: `counselor.slice`

**Dialog management:**  
Manages several dialogs with a local `dialogState` object:
- Add Post Dialog
- Report Dialog
- Report Success Dialog
- Contact Counselor Dialog
- Authentication Dialog

---

### 2. `DialogManager.tsx`

**Purpose:**  
A centralized manager for all dialogs used in the topic view.

**Dialogs managed:**
- `AddPostDialog` — For creating new posts
- `ReportDialog` — For reporting inappropriate content
- `ReportSuccessDialog` — Confirmation after reporting a post
- `ContactCounselorDialog` — Allows authenticated users to contact a counselor

**Props:**
Receives a large set of props from `TopicItem`, including:
- Dialog open/close flags and handlers
- Post content state
- Authentication and user status
- Report handling functions
- Hover state controls for login/signup tooltips
- Counselor contact info


---

### 3. `TopicList.tsx`

The `TopicList` component displays a paginated list of forum topics and provides a search feature. It integrates with Redux for state management and uses MUI for styling and layout.

**Features:**
- **Topic Fetching**: Automatically fetches all topics on component mount using Redux thunk (`fetchAllTopics`).
- **User Name Resolution**: Retrieves usernames associated with each topic's `userId` using a debounced API call (`fetchUserNamesForTopics`) to avoid redundant requests.
- **Search Functionality**: Allows filtering topics by title via a search box.
- **Pagination**: Displays a limited number of topics per page (default: 8), with navigation buttons (hidden when a search query is active).
- **Loading State**: Shows a spinner and message while topics are being loaded.
- **Responsive Cards**: Each topic is displayed in a card, showing:
  - The title of the topic
  - The creation date and time (formatted in Hebrew locale)
  - The name of the user who created it (or a loading placeholder)

---

## Related Components (External)

These dialogs are imported from `components/dialogs/` and used within `DialogManager.tsx`:
- `AddPostDialog`
- `ReportDialog`
- `ReportSuccessDialog`
- `ContactCounselorDialog`

---

## Notes

- The dialogs are conditionally rendered and passed down all necessary props.
- Authentication is checked before allowing protected actions (e.g., reading aloud a topic or contacting a counselor).
- The use of hooks and modular dialog management makes the topic view highly maintainable and scalable.
