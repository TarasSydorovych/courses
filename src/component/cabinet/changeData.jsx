import css from "./cabinet.module.css";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { auth, db } from "../../function/firebase";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

export default function ChangeData({ userBd, setCheSetinings, t }) {
  const productBigWrapRef = useRef(null);
  const [name, setName] = useState(userBd.displayName);
  const [email, setEmail] = useState(userBd.email);
  console.log(userBd);
  const [phone, setPhone] = useState(userBd.phone);
  const [file, setFile] = useState(null);

  const closeSet = () => {
    setCheSetinings(false);
  };
  const changeDataFunc = async () => {
    if (file) {
      // Якщо файл існує, тоді завантажуємо його в Firebase Storage
      try {
        const storage = getStorage();
        const storageRef = ref(storage, `users/${userBd.uid}/profile-photo`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Відстежування процесу завантаження (необов'язково)
          },
          (error) => {
            // Помилка під час завантаження (необов'язково)
            console.error("Помилка завантаження файлу:", error);
          },
          async () => {
            // Завантаження завершено успішно
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            // Тепер ми маємо отримати URL завантаженого файлу

            // Тепер оновимо дані в Firestore з отриманим URL
            const frankDocRef = doc(db, "users", userBd.uid);

            try {
              await updateDoc(frankDocRef, {
                photo: downloadURL, // Оновлюємо поле photo з URL зображення
                displayName: name, // Оновлюємо поле displayName
                email: email, // Оновлюємо поле email

                phone: phone, // Оновлюємо поле phone
              });
              window.location.reload();
            } catch (error) {
              console.error("Помилка оновлення даних в Firestore:", error);
            }
          }
        );
      } catch (error) {
        console.error(
          "Помилка завантаження зображення в Firebase Storage:",
          error
        );
      }
    } else {
      // Якщо файлу немає, тоді просто оновлюємо інші дані в Firestore

      const frankDocRef = doc(db, "users", userBd.uid);

      try {
        await updateDoc(frankDocRef, {
          displayName: name, // Оновлюємо поле displayName
          email: email, // Оновлюємо поле email

          phone: phone, // Оновлюємо поле phone
        });
        window.location.reload();
      } catch (error) {
        console.error("Помилка оновлення даних в Firestore:", error);
      }
    }
  };

  return (
    <div className={css.changeDataWrap}>
      <div className={css.changeDataWrapSmall}>
        <div className={css.nameCountWrap}>
          <h2 className={css.countH2}>
            {t("description.part1.cabinet.myInformation")}
          </h2>
          <AiOutlineClose className={css.countSvg} onClick={closeSet} />
        </div>
        <div className={css.inputWrapCard}>
          <div className={css.wrapInput}>
            <p className={css.inputChangeName}>
              {t("description.part1.cabinet.name")}
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={css.wrapInput}>
            <p className={css.inputChangeName}>Email</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={css.wrapInput}>
            <p className={css.inputChangeName}>
              {t("description.part1.cabinet.phone")}
            </p>
            <input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={css.wrapInput}>
            <p className={css.inputChangeName}>
              {t("description.part1.cabinet.foto")}
            </p>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>
        <button onClick={changeDataFunc} className={css.likeButtonChange}>
          {t("description.part1.cabinet.upData")}
        </button>
      </div>
    </div>
  );
}
