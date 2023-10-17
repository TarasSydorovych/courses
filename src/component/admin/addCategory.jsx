import { useState } from "react";
import css from "./cabiner.module.css";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../function/firebase";
import { v4 as uuidv4 } from "uuid";
export default function AddCategory() {
  const [catName, setCatName] = useState("");
  const uid = uuidv4();
  const addCategoryDocument = async () => {
    try {
      const docRef = await addDoc(collection(db, "categoryUa"), {
        uid: "",
        categoryName: catName,
      });
      const newDocId = docRef.id;

      // Оновити документ з отриманим ID
      await updateDoc(doc(db, "categoryUa", newDocId), {
        uid: newDocId,
      });

      console.log("Document added with ID: ", docRef.id);
      alert("Категорію додано"); // Виводимо повідомлення
      window.location.reload(); // Оновлюємо сторінку
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Категорію не додано");
    }
  };

  const changeIn = (e) => {
    setCatName(e.target.value);
    console.log(e.target.value);
  };
  return (
    <section className={css.addCategory}>
      <div className={css.inpWrap}>
        <p className={css.nameInput}>Назва категорії Українською</p>
        <input className={css.inputInCat} value={catName} onChange={changeIn} />
      </div>
      <button className={css.catNButton} onClick={addCategoryDocument}>
        Зберегти
      </button>
    </section>
  );
}
