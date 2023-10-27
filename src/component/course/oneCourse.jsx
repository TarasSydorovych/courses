import css from "./course.module.css";
import picI from "../../img/picForNew.webp";
import { useNavigate } from "react-router-dom";
export default function OneCourse({ t, el }) {
  const navigate = useNavigate();
  const goToCourse = () => {
    navigate(`/course/${el.uid}`);
  };
  return (
    <div className={css.lessonsWrap}>
      <div className={css.circulAgeWrap}>
        {el.ageGroup}
        <br />
        {t("description.part1.courses.year")}
      </div>
      <img
        src={el.photoURL}
        className={css.pictureStyleLes}
        alt={`${el.courseName}`}
      />
      <div className={css.informBlLessWrap}>
        <h5 className={css.courseName}>{el.courseName}</h5>
        <p className={css.courseDesc}>
          {t("description.part1.courses.price")}:&nbsp;{el.coursePrice}
        </p>
        <button className={css.buttonLesson} onClick={goToCourse}>
          {t("description.part1.header.whyChouseBut")}
        </button>
      </div>
    </div>
  );
}
