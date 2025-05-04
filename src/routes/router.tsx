import { useSelector } from "react-redux";
import { useEffect } from "react";
import { createBrowserRouter, Navigate, Outlet, useLocation } from "react-router-dom";
import { isProfessional, selectIsAuthenticated } from "data/redux/auth/auth.selectors";
import { PATHS } from "routes/paths";
import { RootState } from "data/redux/store";
import NavBar from "components/layout/navbar/Navbar";
import StickyFooter from "components/layout/Footer";
import TopicItem from "components/topic/TopicItem";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import AboutMePage from "../pages/AboutMePage";
import HomePage from "../pages/HomePage";
import CreateTopicPage from "../pages/CreateTopicPage";
import DeletePostPage from "../pages/DeletePostPage";
import UserRegPage from "../pages/signup/UserRegPage";
import AboutPage from "../pages/AboutPage";
import RulesPage from "../pages/RulesPage";
import LoginPage from "../pages/LoginPage";
import CounselorsPage from "../pages/CounselorsPage";
import CounselorRegPage from "../pages/signup/CounselorRegPage";
import image from "../../src/images/image6.png";
const Root = styled(Box)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  lineHeight: 1.6,
  margin: 0,
  padding: 0,
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  backgroundAttachment: "scroll",
}));

// Router configuration, mapping paths to components
export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />, // Layout component wrapping all pages

    children: [
      { path: PATHS.Home, element: <HomePage /> },
      { path: PATHS.Counselors, element: <CounselorsPage /> },
      { path: PATHS.UserSignUp, element: <UserRegPage /> },
      { path: PATHS.CounselorSignUp, element: <CounselorRegPage /> },
      { path: PATHS.NewTopic, element: <NewTopicGuard /> }, // Guard for New Topic page
      { path: PATHS.LogIn, element: <LoginPage /> },
      { path: PATHS.About, element: <AboutPage /> },
      { path: PATHS.ForumRules, element: <RulesPage /> },
      { path: PATHS.TopicItem, element: <TopicItem /> },
      { path: PATHS.DeletePost, element: <DeletePostPage /> },
      { path: PATHS.AboutMe, element: <AboutMePage /> },
    ],
  },
]);

function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Dynamically update document title based on the current route
    switch (location.pathname) {
      case "/":
        document.title = "דף הבית - חינוך לעם";
        break;
      case "/signin":
        document.title = "התחברות";
        break;
      case "/api/User/SignUp":
        document.title = "הרשמה להורה";
        break;
      case "/counselor-signup":
        document.title = "הרשמה ליועץ";
        break;
      case "/new-topic":
        document.title = "פתיחת אשכול חדש";
        break;
      case "/counselors":
        document.title = "היועצים שלנו";
        break;
      case "/about":
        document.title = "אודות - חינוך לעם";
        break;
      case "/forum-rules":
        document.title = "כללי הפורום";
        break;
      case "/topic/:id":
        document.title = "פרטי האשכול";
        break;
      case "/delete-post/:id":
        document.title = "מחיקת תגובה";
        break;
      default:
        document.title = "חינוך לעם - ייעוץ להורים";
    }
  }, [location]);

  return (
    <Root>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <StickyFooter />
      </footer>
    </Root>
  );
}

function Header() {
  return <NavBar />;
}

// Restrict access to the creation of new topics to authenticated users only, excluding counselors.
function NewTopicGuard() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isCounselor = useSelector((state: RootState) => isProfessional(state));

  if (isAuthenticated && !isCounselor) {
    return <CreateTopicPage />;
  } else {
    return <Navigate to={PATHS.UserSignUp} />;
  }
}

