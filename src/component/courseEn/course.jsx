import css from "./course.module.css";
import TitleCourse from "./titleCourse";
import { useTranslation, Trans } from "react-i18next";
import ListOfCategory from "./listOfCategory";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import ListOfCourses from "./listOfCourses";
import { useState } from "react";
const CourseEn = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [pidCat, setPidCat] = useState("");
  return (
    <section className={css.allCoursesWrap}>
      <TitleCourse t={t} />
      <div className={css.listCatAndProdWR}>
        <ListOfCategory category={data} setPidCat={setPidCat} />
        <ListOfCourses t={t} pidCat={pidCat} />
      </div>
    </section>
  );
};
export default withFirebaseCollection("categoryEn")(CourseEn);
