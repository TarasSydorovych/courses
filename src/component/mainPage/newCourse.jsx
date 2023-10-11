import css from "./main.module.css";
import pic from "../../img/newCourse.webp";
import { Link } from "react-router-dom";
import picI from "../../img/picForNew.webp";
export default function NewCourse({ t }) {
  return (
    <section className={css.newCourseWrap}>
      <p className={css.firstPInBigAvo}>
        {t("description.part1.header.ourNews")}
      </p>
      <h2 className={css.bigAbH2}>{t("description.part1.header.ourNewsH")}</h2>
      <div className={css.wrapNewLessons}>
        <div className={css.lessonsWrap}>
          <div className={css.circulAgeWrap}>
            1-2
            <br />
            роки
          </div>
          <img src={picI} className={css.pictureStyleLes} alt="ds" />
          <div className={css.informBlLessWrap}>
            <h5 className={css.courseName}>
              {t("description.part1.header.ourNews")}
            </h5>
            <p className={css.courseDesc}>
              {t("description.part1.header.courseDesc")}
            </p>
            <button className={css.buttonLesson}>
              {t("description.part1.header.whyChouseBut")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
