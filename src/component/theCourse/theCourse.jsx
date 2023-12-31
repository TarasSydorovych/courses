import withFirebaseCollection from "../HOK/withFirebaseCollection";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./theCourse.module.css";
import CourseTitle from "./courseTitle";
import { useTranslation } from "react-i18next";
import VideoWrap from "./videoWrap";
import SecondBlock from "./secondBlock";
import Advantage from "./advantage";
import Header from "../standartComponent/header/header";
const TheCourse = ({ data, setActiveUser, activeUser }) => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [howMush, setHowMush] = useState("");
  useEffect(() => {
    const course = data.find((course) => course.uid === id);
    setSelectedCourse(course);
  }, [data, id, selectedCourse, i18n.language]);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollHeight = window.pageYOffset;
      setScrollHeight(currentScrollHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header setActiveUser={setActiveUser} activeUser={activeUser} />
      <section className={css.theCourseWrapAll}>
        {selectedCourse && (
          <CourseTitle
            t={t}
            selectedCourse={selectedCourse}
            howMush={howMush}
          />
        )}
        <SecondBlock t={t} />
        {selectedCourse && (
          <VideoWrap
            t={t}
            scrollHeight={scrollHeight}
            selectedCourse={selectedCourse}
            setHowMush={setHowMush}
            activeUser={activeUser}
          />
        )}
        <Advantage t={t} />
      </section>
    </>
  );
};
export default withFirebaseCollection("course")(TheCourse);
