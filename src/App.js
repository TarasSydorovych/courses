import logo from "./logo.svg";
import "./App.css";
import Header from "./component/standartComponent/header/header";
import { Route, Routes, useLocation } from "react-router-dom";
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
      <Header setActiveUser={setActiveUser} activeUser={activeUser} />
      <Routes>
        <Route path="/" element={<Main />} />
        {i18n.language === "ua" && (
          <Route path="/course" element={<Course />} />
        )}
        {i18n.language === "en" && (
          <Route path="/course" element={<CourseEn />} />
        )}
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cabinet" element={<Cabinet activeUser={activeUser} />} />

        {i18n.language === "ua" && (
          <Route path="/video/:id" element={<Video />} />
        )}
        {i18n.language === "en" && (
          <Route path="/video/:id" element={<VideoEn />} />
        )}
        {i18n.language === "ua" && (
          <Route
            path="/course/:id"
            element={<TheCourse activeUser={activeUser} />}
          />
        )}
        {i18n.language === "en" && (
          <Route
            path="/course/:id"
            element={<TheCourseEn activeUser={activeUser} />}
          />
        )}
        <Route path="/about" element={<AboutUs t={t} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
