import logo from "./logo.svg";
import "./App.css";
import Header from "./component/standartComponent/header/header";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import keyWord from "./function/keyWord";
import Main from "./component/mainPage/main";
import Footer from "./component/standartComponent/footer/footer";
import Contact from "./component/contact/contact";
import Cabinet from "./component/cabinet/cabinet";
import Course from "./component/course/course";
import Admin from "./component/admin/admin";
import CourseEn from "./component/courseEn/course";
import TheCourse from "./component/theCourse/theCourse";
import TheCourseEn from "./component/theCourseEn/theCourse";
import { useTranslation, Trans } from "react-i18next";
import AboutUs from "./component/aboutUs/aboutUs";
import Video from "./component/video/video";
import VideoEn from "./component/videoEn/video";
import Blog from "./component/blog/blog";
import BlogPage from "./component/blogPage/blogPage";
import BlogEn from "./component/blogEn/blog";
import BlogPageEn from "./component/blogPageEn/blogPage";
function App() {
  const [windowDimensions, setWindowDimensions] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [activeUser, setActiveUser] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, i18n.language]);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1100) {
        setWindowDimensions(false);
      } else {
        setWindowDimensions(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main setActiveUser={setActiveUser} activeUser={activeUser} />
          }
        />
        <Route
          path="/referral/:id"
          element={
            <Main setActiveUser={setActiveUser} activeUser={activeUser} />
          }
        />
        {i18n.language === "ua" && (
          <Route
            path="/course"
            element={
              <Course setActiveUser={setActiveUser} activeUser={activeUser} />
            }
          />
        )}
        {i18n.language === "en" && (
          <Route
            path="/course"
            element={
              <CourseEn setActiveUser={setActiveUser} activeUser={activeUser} />
            }
          />
        )}
        <Route
          path="/contact"
          element={
            <Contact setActiveUser={setActiveUser} activeUser={activeUser} />
          }
        />
        <Route
          path="/admin"
          element={
            <Admin setActiveUser={setActiveUser} activeUser={activeUser} />
          }
        />
        <Route
          path="/cabinet"
          element={
            <Cabinet setActiveUser={setActiveUser} activeUser={activeUser} />
          }
        />
        {i18n.language === "ua" && (
          <Route
            path="/video/:id"
            element={
              <Video setActiveUser={setActiveUser} activeUser={activeUser} />
            }
          />
        )}
        {i18n.language === "en" && (
          <Route
            path="/video/:id"
            element={
              <VideoEn setActiveUser={setActiveUser} activeUser={activeUser} />
            }
          />
        )}
        {i18n.language === "ua" && (
          <Route
            path="/course/:id"
            element={
              <TheCourse
                setActiveUser={setActiveUser}
                activeUser={activeUser}
              />
            }
          />
        )}
        {i18n.language === "en" && (
          <Route
            path="/course/:id"
            element={
              <TheCourseEn
                setActiveUser={setActiveUser}
                activeUser={activeUser}
              />
            }
          />
        )}
        {i18n.language === "ua" && (
          <Route
            path="/blog"
            element={
              <Blog
                t={t}
                setActiveUser={setActiveUser}
                activeUser={activeUser}
              />
            }
          />
        )}
        {i18n.language === "ua" && (
          <Route
            path="/blog/:id"
            element={
              <BlogPage
                t={t}
                setActiveUser={setActiveUser}
                activeUser={activeUser}
              />
            }
          />
        )}
        {i18n.language === "en" && (
          <Route
            path="/blog"
            element={
              <BlogEn
                t={t}
                setActiveUser={setActiveUser}
                activeUser={activeUser}
              />
            }
          />
        )}
        {i18n.language === "en" && (
          <Route
            path="/blog/:id"
            element={
              <BlogPageEn
                t={t}
                setActiveUser={setActiveUser}
                activeUser={activeUser}
              />
            }
          />
        )}
        <Route
          path="/about"
          element={
            <AboutUs
              t={t}
              setActiveUser={setActiveUser}
              activeUser={activeUser}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
