import css from "./theCourse.module.css";
import pic from "../../img/slide12.webp";
import lesPic from "../../img/lessonsM.png";
import walet from "../../img/waletForCo.jpeg";
import childPa from "../../img/childPain.jpeg";
export default function CourseTitle({ t, selectedCourse, howMush }) {
  return (
    <section className={css.courseTitleWrap}>
      <div className={css.divWrap}>
        <img
          src={selectedCourse.photoURL}
          className={css.pictureWrap}
          alt="Ньютонові яблучка"
        />
      </div>
      <div className={css.titleReservWrap}>
        <div className={css.wrapTitleSmall}>
          <h1 className={css.titleCourseH1}>{selectedCourse.courseName}</h1>
          <p className={css.titleCourseP}>{selectedCourse.description}</p>
        </div>
        <div className={css.yerGrWrap}>
          <div className={css.listWrPic}>
            <img src={lesPic} className={css.iconLeson} alt="Урок малювання" />
            &nbsp;
            <p className={css.textLesonP}>
              {t("description.part1.courses.lesson")}&nbsp;
              {howMush}
            </p>
          </div>
          <div className={css.listWrPic}>
            <img src={walet} className={css.iconLeson} alt="Урок малювання" />
            &nbsp;
            <p className={css.textLesonP}>{selectedCourse.coursePrice}usd</p>
          </div>
          <div className={css.listWrPic}>
            <img src={childPa} className={css.iconLeson} alt="Урок малювання" />
            &nbsp;
            <p className={css.textLesonP}>{selectedCourse.ageGroup}years</p>
          </div>
        </div>
      </div>
    </section>
  );
}
