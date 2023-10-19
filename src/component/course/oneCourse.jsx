import css from "./course.module.css";
import picI from "../../img/picForNew.webp";
export default function OneCourse({ t, el }) {
  return (
    <div className={css.lessonsWrap}>
      <div className={css.circulAgeWrap}>
        {el.ageGroup}
        <br />
        роки
      </div>
      <img
        src={el.photoURL}
        className={css.pictureStyleLes}
        alt={`${el.courseName}`}
      />
      <div className={css.informBlLessWrap}>
        <h5 className={css.courseName}>{el.courseName}</h5>
        <p className={css.courseDesc}>
          {t("description.part1.header.courseDesc")}
        </p>
        <button className={css.buttonLesson}>
          {t("description.part1.header.whyChouseBut")}
        </button>
      </div>
    </div>
  );
}
