import withFirebaseCollection from "../HOK/withFirebaseCollection";
import css from "./cabinet.module.css";
const ListOfCourseEn = ({ t, userWork }) => {
  return (
    <section className={css.listOfCourseWrap}>
      <div className={css.notCpurse}>
        <h2 className={css.youDont}>{t("description.part1.cabinet.not")}</h2>
      </div>
    </section>
  );
};
export default withFirebaseCollection("courseEn")(ListOfCourseEn);
