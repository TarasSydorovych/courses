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

const ListOfCourse = ({ data, t, pidCat }) => {
  // Створюємо стан для зберігання фільтрованих даних
  const [filteredData, setFilteredData] = useState(data);

  // Виконуємо фільтрацію, коли значення pidCat змінюється
  useEffect(() => {
    if (pidCat === "") {
      // Якщо pidCat порожній, показуємо весь data
      setFilteredData(data);
    } else {
      // В іншому випадку, фільтруємо дані за pidCat
      const filteredCourses = data.filter(
        (el) => el.pidCategoryName === pidCat
      );
      setFilteredData(filteredCourses);
    }
  }, [pidCat, data]);

  return (
    <section className={css.courseWrapList}>
      {filteredData.map((el, index) => {
        return <OneCourse key={index} t={t} el={el} />;
      })}
    </section>
  );
};

export default withFirebaseCollection("course")(ListOfCourse);
