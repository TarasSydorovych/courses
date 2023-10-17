import { useState } from "react";
import css from "./cabiner.module.css";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../function/firebase";
import { v4 as uuidv4 } from "uuid";
import withFirebaseCollection from "../HOK/withFirebaseCollection";

const AddCategory = ({ data }) => {
  const [catName, setCatName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Додайте стан для вибраної категорії
  const uid = uuidv4();

  const addCategoryDocument = async () => {
    try {
      const docRef = await addDoc(collection(db, "pidCategoryUa"), {
        uid: "",
        categoryName: selectedCategory, // Використовуйте вибрану категорію
        pidCategoryName: catName,
      });
      const newDocId = docRef.id;
      await updateDoc(doc(db, "pidCategoryUa", newDocId), {
        uid: newDocId,
      });

      console.log("Document added with ID: ", docRef.id);
      alert("Підкатегорію додано");
      window.location.reload();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Підкатегорію не додано");
    }
  };

  const changeIn = (e) => {
    setCatName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className={css.addCategory}>
      <div className={css.inpWrap}>
        <p className={css.nameInput}>Назва підкатегорії Українською</p>
        <input className={css.inputInCat} value={catName} onChange={changeIn} />
      </div>
      <div className={css.secWrap}>
        <p className={css.nameInput}>Виберіть категорію</p>
        <select
          className={css.inputInCat}
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {data.map((category, index) => (
            <option key={index} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>
      <button className={css.catNButton} onClick={addCategoryDocument}>
        Зберегти
      </button>
    </section>
  );
};

export default withFirebaseCollection("categoryUa")(AddCategory);
