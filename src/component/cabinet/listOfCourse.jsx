import { useEffect, useState } from "react";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import css from "./cabinet.module.css";
import { Link } from "react-router-dom";
const ListOfCourse = ({ data, t, userWork }) => {
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    if (userWork) {
      const filteredCourses = data.filter((course) =>
        userWork.myCourse.includes(course.uid)
      );

      // Запис фільтрованих курсів в стан
      setUserCourses(filteredCourses);
    }
  }, [data, userWork]);

  return (
    <section className={css.listOfCourseWrap}>
      {userCourses.length === 0 && (
        <div className={css.notCpurse}>
          <h2 className={css.youDont}>{t("description.part1.cabinet.not")}</h2>
        </div>
      )}
      {userCourses.length > 0 && (
        <div className={css.haveCourseWrap}>
          {userCourses.map((el, index) => {
            return (
              <div key={index} className={css.courseWrap}>
                {" "}
                <div className={css.divWrap}>
                  <img
                    src={el.photoURL}
                    className={css.pictureWrap}
                    alt="Ньютонові яблучка"
                  />
                </div>
                <div className={css.wrapTextC}>
                  <Link to={`/course/${el.uid}`} className={css.pTitle}>
                    {el.courseName}
                  </Link>

                  <p className={css.pdesc}>{el.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
export default withFirebaseCollection("course")(ListOfCourse);
