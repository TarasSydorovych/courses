import AddCourseCom from "./addCourseCom";
import css from "./cabiner.module.css";
import { useState, useEffect } from "react";
import DelCourseCom from "./delCourseCom";
export default function AddCourse() {
  const [addCourse, setAddCourse] = useState(false);
  const [delCourse, setDelCourse] = useState(false);
  const deleteCourse = () => {
    setDelCourse(!delCourse);
    setAddCourse(false);
  };
  const add = () => {
    setAddCourse(!addCourse);
    setDelCourse(false);
  };
  return (
    <section className={css.useCategoryWrap}>
      <ul className={css.versionWrUl}>
        <li className={css.versionWrLiCat} onClick={add}>
          Додати курс
        </li>
        <li className={css.versionWrLiCat} onClick={deleteCourse}>
          Видалити курс
        </li>
      </ul>
      {addCourse && <AddCourseCom />}
      {delCourse && <DelCourseCom />}
    </section>
  );
}
