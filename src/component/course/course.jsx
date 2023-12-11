import css from "./course.module.css";
import TitleCourse from "./titleCourse";
import { useTranslation, Trans } from "react-i18next";
import ListOfCategory from "./listOfCategory";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import ListOfCourses from "./listOfCourses";
import { useState } from "react";
const Course = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [pidCat, setPidCat] = useState("");
  const [ageGroups, setAgeGroups] = useState([]);
  const [paymentType, setPaymentType] = useState("");
  return (
    <section className={css.allCoursesWrap}>
      <TitleCourse t={t} />
      <div className={css.listCatAndProdWR}>
        <ListOfCategory
          setPaymentType={setPaymentType}
          paymentType={paymentType}
          t={t}
          category={data}
          setPidCat={setPidCat}
          setAgeGroups={setAgeGroups}
          ageGroups={ageGroups}
        />
        <ListOfCourses
          paymentType={paymentType}
          t={t}
          pidCat={pidCat}
          ageGroups={ageGroups}
        />
      </div>
    </section>
  );
};
export default withFirebaseCollection("categoryUa")(Course);
