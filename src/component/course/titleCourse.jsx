import css from "./course.module.css";
export default function TitleCourse({ t }) {
  return (
    <section className={css.titleWrap}>
      <div className={css.titleReservWrap}>
        <div className={css.wrapTitleSmall}>
          <h1 className={css.titleCourseH1}>
            {t("description.part1.courses.title")}
          </h1>
          <p className={css.titleCourseP}>
            {t("description.part1.courses.descTitle")}
          </p>
          <ul className={css.smalListUK}>
            <li className={css.smallListLi}>
              {t("description.part1.courses.descUlFirst")}
            </li>
            <li className={css.smallListLi}>
              {t("description.part1.courses.descUlSecond")}
            </li>
            <li className={css.smallListLi}>
              {t("description.part1.courses.descULThre")}
            </li>
            <li className={css.smallListLi}>
              {t("description.part1.courses.descULFour")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
