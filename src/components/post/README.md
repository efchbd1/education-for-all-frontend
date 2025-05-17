# Post Components

This folder contains reusable React components related to displaying and interacting with individual posts in a discussion thread.

---

## Components

### 1. `PostList.tsx`

- **Description:** Renders a list of posts using the `PostItem` component.
- **Props:**
  - `posts`: `PostType[]` — array of post objects.
  - `topicUserId`: `number` — ID of the topic creator.
  - `usersMap`: `{ [key: string]: string }` — maps user IDs to display names.
  - `likedPosts`: `{ [key: number]: { liked: boolean; disliked: boolean } }` — stores like/dislike state.
  - `handleLikePost(postId)`: handles like button clicks.
  - `handleReportClick(postId)`: handles dislike/report button clicks.
  - `handleContactClick(counselorId)`: opens contact option for counselors.
  - `formatDate(date)`: formats the post date.

---

### 2. `PostItem.tsx`

- **Description:** Represents a single post item with content, metadata, and interactive buttons.
- **Features:**
  - Displays post content, author label, and date.
  - Shows a colored ribbon based on user role (`owner`, `counselor`, `user`).
  - Includes like and dislike/report buttons.
  - Shows an email/contact icon for counselor posts.
- **Dependencies:** `LikeButton`, `DislikeButton`, `HeaderRibbon`.

---

### 3. `LikeButton.tsx`

- **Description:** A button to like a post.
- **Props:**
  - `liked`: `boolean` — whether the post is already liked.
  - `onClick`: `() => void` — like handler function.
  - `disabled`: `boolean` — disables if already liked or disliked.
  - `likesCount`: `number` — number of likes to display.
- **Style:** Turns green when liked.

---

### 4. `DislikeButton.tsx`

- **Description:** A button to report a post. Triggers a report dialog.
- **Props:**
  - `disliked`: `boolean` — whether the post was already disliked/reported.
  - `onClick`: `() => void` — report handler function.
  - `disabled`: `boolean` — disables if already liked or disliked.
- **Style:** Turns red when reported.

---

### 5. `HeaderRibbon.tsx`

- **Description:** A decorative ribbon shown at the top of the post indicating the role of the user.
- **Props:**
  - `userType`: `'owner' | 'counselor' | 'user'`
- **Styles:**
  - Orange for `user`
  - Green for `counselor`
  - Red for `owner`

---

## Usage

These components are typically used together to render a discussion thread UI in a forum-like application. They rely on consistent user and post data passed via props.
