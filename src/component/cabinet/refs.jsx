import css from "./cabinet.module.css";

const Refs = ({ t, uid }) => {
  return (
    <section className={css.listOfCourseWrap}>
      <div className={css.notCpurse}>
        <p className={css.refLinkP}>
          {t("description.part1.cabinet.refLink")}:
          https://www.newtonapples.com/referral/{uid}
        </p>
      </div>
    </section>
  );
};
export default Refs;
