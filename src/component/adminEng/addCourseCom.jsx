import css from "./cabiner.module.css";

import withFirebaseCollection from "../HOK/withFirebaseCollection";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../function/firebase";
import { getStorage } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const AddCourseCom = ({ data }) => {
  const storage = getStorage();
  const [description, setDescription] = useState("");
  const [videoName, setVideoName] = useState("");
  const [selectedPidCategory, setSelectedPidCategory] = useState(""); // Додайте стан для вибраної категорії
  const [whotNeed, setWhotNeed] = useState([""]); // Стан для зберігання масиву підкатегорій
  const [ageGroup, setAgeGroup] = useState("");
  const uid = uuidv4();
  const [photoFile, setPhotoFile] = useState(null);
  const [coursePrice, setCoursePrice] = useState("");
  const [progresFotoSt, setProgresFotoSt] = useState(false);
  const descFun = (e) => {
    setDescription(e.target.value);
  };
  const price = (e) => {
    setCoursePrice(e.target.value);
  };
  useEffect(() => {
    if (data.length > 0) {
      setSelectedPidCategory(data[0].categoryName);
    }
  }, [data]);
  const ageGroupFunc = (e) => {
    setAgeGroup(e.target.value);
  };

  const updateProgressBar = (progress) => {
    const progressBar = document.querySelector(`#${css.uploadprogressbar}`);

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  };

  const addCategoryDocument = async () => {
    try {
      // Створюємо Firestore документ
      const docRef = await addDoc(collection(db, "courseEn"), {
        uid: "",
        courseName: videoName,
        pidCategoryName: selectedPidCategory,
        coursePrice: coursePrice,
        description: description,
        ageGroup: ageGroup,
        photoURL: "", // Порожнє посилання на фото

        createdOn: serverTimestamp(),
      });
      const newDocId = docRef.id;
      await updateDoc(doc(db, "courseEn", newDocId), {
        uid: newDocId,
      });

      // Перевіряємо, чи storage ініціалізовано перед використанням
      if (storage) {
        // Завантаження фото
        if (photoFile) {
          const photoRef = ref(storage, `photos/${uid}-${photoFile.name}`);
          const photoUploadTask = uploadBytesResumable(photoRef, photoFile);

          // Обробка події завантаження фото
          photoUploadTask.on(
            "state_changed",
            (snapshot) => {
              setProgresFotoSt(true);
              // Отримуємо прогрес завантаження фото
              const photoProgress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (error) => {
              console.error("Error during photo upload: ", error);
            },
            async () => {
              // Завершено завантаження фото, отримуємо посилання на фото
              const photoURL = await getDownloadURL(photoRef);

              // Оновлюємо поле 'photoURL' в Firestore документі
              await updateDoc(doc(db, "courseEn", newDocId), {
                photoURL: photoURL,
              });
              window.location.reload();
              // Завантаження відео
            }
          );
        }
      } else {
        console.error("Firebase storage is not properly initialized.");
        alert("Помилка: Firebase Storage не ініціалізовано правильно.");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Підкатегорію не додано");
    }
  };

  const changeIn = (e) => {
    setVideoName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedPidCategory(e.target.value);
  };

  const addSubcategoryInput = () => {
    const updatedSubcategories = [...whotNeed];
    updatedSubcategories.push("");
    setWhotNeed(updatedSubcategories);
  };
  const handlePhotoFileChange = (e) => {
    const file = e.target.files[0];
    setPhotoFile(file);
  };

  return (
    <section className={css.addVideo}>
      <div className={css.inpWrap}>
        <p className={css.nameInput}>Назва курсу Українською</p>
        <input
          className={css.inputInCat}
          value={videoName}
          onChange={changeIn}
        />
      </div>
      <div className={css.secWrap}>
        <p className={css.nameInput}>Виберіть підкатегорію</p>
        <select
          className={css.inputInCat}
          value={selectedPidCategory}
          onChange={handleCategoryChange}
        >
          {data.map((category, index) => (
            <option key={index} value={category.pidCategoryName}>
              {category.pidCategoryName}
            </option>
          ))}
        </select>
      </div>
      <div className={css.inpWrap}>
        <p className={css.nameInput}>Вікова група</p>
        <input
          className={css.inputInCat}
          value={ageGroup}
          onChange={ageGroupFunc}
        />
      </div>
      <div className={css.inpWrap}>
        <p className={css.nameInput}>Вартість курсу</p>
        <input
          className={css.inputInCat}
          value={coursePrice}
          onChange={price}
        />
      </div>
      <div className={css.inpWrap}>
        <p className={css.nameInput}>Опис курсу</p>
        <textarea
          className={css.inputInCat}
          value={description}
          onChange={descFun}
        />
      </div>
      <div className={css.inpWrap}>
        <label className={css.nameInput}>Виберіть фото:</label>
        <input type="file" accept="image/*" onChange={handlePhotoFileChange} />
      </div>

      {/* Інпут для вибору відео */}

      <button className={css.catNButton} onClick={addCategoryDocument}>
        Зберегти
      </button>
      {progresFotoSt === true && (
        <div className={css.wrapLoad}>
          <p className={css.loadP}>Завантаження Фото</p>
          <div id={css.uploadprogresscontainer}>
            <div id={css.uploadprogressbar}></div>
          </div>
        </div>
      )}
    </section>
  );
};
export default withFirebaseCollection("pidCategoryEn")(AddCourseCom);
