import css from "./cabinet.module.css";
export default function ListOfCourse({ t }) {
  return (
    <section className={css.listOfCourseWrap}>
      <div className={css.notCpurse}>
        <h2 className={css.youDont}>{t("description.part1.cabinet.not")}</h2>
      </div>
    </section>
  );
}
