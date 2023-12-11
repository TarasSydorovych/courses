// import withFirebaseCollection from "../HOK/withFirebaseCollection";
// import css from "./course.module.css";
// import OneCourse from "./oneCourse";
// const ListOfCourse = ({ data, t, pidCat }) => {
//   return (
//     <section className={css.courseWrapList}>
//       {data.map((el, index) => {
//         return <OneCourse key={index} t={t} el={el} />;
//       })}
//     </section>
//   );
// };
// export default withFirebaseCollection("course")(ListOfCourse);
import React, { useState, useEffect } from "react";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import css from "./course.module.css";
import OneCourse from "./oneCourse";

const ListOfCourse = ({ data, t, pidCat, ageGroups, paymentType }) => {
  // Створюємо стан для зберігання фільтрованих даних
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    let coursesToShow = data;

    // Фільтрація за pidCat
    if (pidCat !== "") {
      coursesToShow = coursesToShow.filter(
        (el) => el.pidCategoryName === pidCat
      );
    }

    // Фільтрація за ageGroup
    if (ageGroups.length > 0) {
      coursesToShow = coursesToShow.filter((el) =>
        ageGroups.includes(el.ageGroup)
      );
    }

    // Додавання фільтрації за paymentType
    if (paymentType === "free") {
      coursesToShow = coursesToShow.filter((el) => el.coursePrice === "");
    } else if (paymentType === "paid") {
      coursesToShow = coursesToShow.filter((el) => el.coursePrice !== "");
    }

    // Оновлення стану filteredData
    setFilteredData(coursesToShow);
  }, [pidCat, ageGroups, data, paymentType]);

  return (
    <section className={css.courseWrapList}>
      {filteredData.map((el, index) => {
        return <OneCourse key={index} t={t} el={el} />;
      })}
    </section>
  );
};

export default withFirebaseCollection("course")(ListOfCourse);
