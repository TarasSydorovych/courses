import css from "./cabiner.module.css";
import { useState, useEffect } from "react";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../function/firebase";
import withFirebaseCollection from "../HOK/withFirebaseCollection";

const DelCourseCom = ({ data }) => {
  console.log(data);
  const handleDeleteCategory = async (categoryId) => {
    try {
      // Видаляємо категорію за ID
      await deleteDoc(doc(db, "course", categoryId));

      alert("Вибрана категорія видалена"); // Виводимо повідомлення

      // Оновлюємо сторінку, оновлюючи список категорій

      // Перезавантажуємо сторінку
      window.location.reload();
    } catch (error) {
      alert("Вибрана категорія не видалена");
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <section className={css.categoryList}>
      <ul className={css.ulDelCat}>
        {data.map((category) => (
          <li key={category.uid} className={css.ulDelCatLi}>
            {category.courseName}
            <button
              className={css.buttDelete}
              onClick={() => handleDeleteCategory(category.uid)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default withFirebaseCollection("course")(DelCourseCom);
