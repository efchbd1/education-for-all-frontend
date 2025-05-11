# Education for All – Frontend

This is the frontend of the **Education for All** platform, a web-based application built with React.  

## 🌐 Overview

The application allows parents to post educational questions about their children and receive personal answers from verified counselors. The frontend is built with **React** and includes real-time interactions, a clean RTL design, and accessibility features for Hebrew speakers.

You can visit the live application here: [Education for All](https://education-for-all.onrender.com/)

## 📦 Tech Stack

- **React** with TypeScript
- **Redux Toolkit** for state management
- **Axios** for HTTP communication with the backend
- **React Router** for navigation
- **Material UI (MUI)** for UI components and styling
- **Responsive Design** (mobile-first)
- **RTL (Right-to-Left)** support
- **Chatbot** interface for automated Q&A (customer service)
- **Integration with Machine Learning API**:
  - Text-to-Speech (TTS) via Azure Speech Services
  - Speech-to-Text (STT) using the browser’s built-in Web Speech API

## 🔐 Security & Authentication

- **JWT Access Tokens** and **HTTP-only Refresh Tokens**
- **Role-Based Access Control (RBAC)**: different UI behavior for parents and counselors
- Secure cookie handling (no token exposure in frontend code)
- Password-protected routes and role-specific permissions

## 🚀 Features

- Full **ask/answer interface** for parents and counselors
- **Login / Registration** with secure auth
- **Email verification** (via backend MailKit)
- **Real-time UI updates** on new answers or moderated content
- **Voice input/output** support (via Azure Speech Services)
- **Chatbot integration** for FAQ and guidance
- **Accessible UI** and mobile responsiveness

## 🔗 Related Repositories

- [education-for-all-backend](https://github.com/efchbd1013/education-for-all-backend)

## 🛠️ Getting Started

To run the project locally:

```bash
git clone https://github.com/efchbd1013/education-for-all-frontend.git
cd education-for-all-frontend
npm install
npm run dev
```

You also need to create two environment files with the appropriate base URL for your backend (local or cloud).
Here is an example of what each file might contain:

.env.development
```bash
REACT_APP_API_BASE_URL=https://localhost:58030/api
```

.env.production

```bash
REACT_APP_API_BASE_URL=https://education-for-all-backend.onrender.com/api
```
