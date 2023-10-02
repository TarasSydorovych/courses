import css from "./main.module.css";
import pic from "../../img/newCourse.webp";
import { Link } from "react-router-dom";
export default function NewCourse({ t }) {
  return (
    <section className={css.newCourseWrap}>
      <h2 className={css.newCourseH2}>{t("description.part1.header.news")}</h2>
      <div className={css.courseWrap}>
        <div className={css.oneCourseWrap}>
          <img src={pic} className={css.picCouseNew} alt="apple" />
          <h3 className={css.h2CousePic}>Назва курсу</h3>
          <Link className={css.goToCourse} to="/">
            {t("description.part1.header.goTo")}
          </Link>
        </div>
        <div className={css.oneCourseWrap}>
          <img src={pic} className={css.picCouseNew} alt="apple" />
          <h3 className={css.h2CousePic}>Назва курсу</h3>
          <Link className={css.goToCourse} to="/">
            {t("description.part1.header.goTo")}
          </Link>
        </div>
        <div className={css.oneCourseWrap}>
          <img src={pic} className={css.picCouseNew} alt="apple" />
          <h3 className={css.h2CousePic}>Назва курсу</h3>
          <Link className={css.goToCourse} to="/">
            {t("description.part1.header.goTo")}
          </Link>
        </div>
      </div>
    </section>
  );
}
