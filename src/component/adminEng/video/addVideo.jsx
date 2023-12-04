import css from "../cabiner.module.css";
import withFirebaseCollection from "../../HOK/withFirebaseCollection";
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
import { db } from "../../../function/firebase";
import { getStorage } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const AddVideo = ({ data }) => {
  const storage = getStorage();
  const [lesNumber, setLesNumber] = useState("");
  const [videoName, setVideoName] = useState("");
  const [selectedPidCategory, setSelectedPidCategory] = useState(""); // Додайте стан для вибраної категорії
  const [whotNeed, setWhotNeed] = useState([""]); // Стан для зберігання масиву підкатегорій
  const [ageGroup, setAgeGroup] = useState("");
  const [description, setDescription] = useState("");
  const [descripForArea, setDescripForArea] = useState("");
  const uid = uuidv4();
  const [seo, setSeo] = useState("");
  const [smallDescF, setSmallDescF] = useState("");
  const [seoDesc, setSeoDesc] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [progresVideoSt, setProgresVideoSt] = useState(false);
  const [progresFotoSt, setProgresFotoSt] = useState(false);
  useEffect(() => {
    if (data.length > 0) {
      setSelectedPidCategory(data[0].courseName);
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
      const docRef = await addDoc(collection(db, "videoEn"), {
        uid: "",
        videoName: videoName,
        courseName: selectedPidCategory,
        whotNeed: whotNeed,
        counter: lesNumber,
        comment: [],
        like: "1",
        description: description,
        smallDescF: smallDescF,
        ageGroup: ageGroup,
        photoURL: "", // Порожнє посилання на фото
        videoURL: "", // Порожнє посилання на відео
        seo: seo,
        seoDesc: seoDesc,
        createdOn: serverTimestamp(),
      });
      const newDocId = docRef.id;
      await updateDoc(doc(db, "videoEn", newDocId), {
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
              await updateDoc(doc(db, "videoEn", newDocId), {
                photoURL: photoURL,
              });

              // Завантаження відео
              if (videoFile) {
                const videoRef = ref(
                  storage,
                  `videos/${uid}-${videoFile.name}`
                );
                const videoUploadTask = uploadBytesResumable(
                  videoRef,
                  videoFile
                );

                // Обробка події завантаження відео
                videoUploadTask.on(
                  "state_changed",
                  (snapshot) => {
                    setProgresFotoSt(false);
                    setProgresVideoSt(true);
                    // Отримуємо прогрес завантаження відео
                    const videoProgress =
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    updateProgressBar(videoProgress);
                  },
                  (error) => {
                    console.error("Error during video upload: ", error);
                  },
                  async () => {
                    // Завершено завантаження відео, отримуємо посилання на відео
                    const videoURL = await getDownloadURL(videoRef);

                    // Оновлюємо поле 'videoURL' в Firestore документі
                    await updateDoc(doc(db, "videoEn", newDocId), {
                      videoURL: videoURL,
                    });

                    setProgresVideoSt(false);
                    alert("Відео додано");
                    window.location.reload();
                  }
                );
              }
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

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };
  const descFunc = (e) => {
    const encodedQuestionForE = encodeURIComponent(e.target.value);
    setDescripForArea(e.target.value);
    setDescription(encodedQuestionForE);
  };
  const smallDescFunction = (e) => {
    setSmallDescF(e.target.value);
  };
  const lessonsCount = (e) => {
    setLesNumber(e.target.value);
  };
  const seoTitle = (e) => {
    setSeo(e.target.value);
  };
  const seoDescription = (e) => {
    setSeoDesc(e.target.value);
  };
  const handleSubcategoryChange = (e, index) => {
    const updatedSubcategories = [...whotNeed];
    updatedSubcategories[index] = e.target.value;
    setWhotNeed(updatedSubcategories);
  };
  return (
    <section className={css.addVideo}>
      <div className={css.inpWrap}>
        <p className={css.nameInput}>Назва відео Українською</p>
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
            <option key={index} value={category.courseName}>
              {category.courseName}
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
        <p className={css.nameInput}>Номер уроку</p>
        <input
          className={css.inputInCat}
          value={lesNumber}
          onChange={lessonsCount}
        />
      </div>
      <div className={css.inpWrap}>
        <p className={css.nameInput}>Seo title</p>
        <input className={css.inputInCat} value={seo} onChange={seoTitle} />
      </div>
      <div className={css.inpWrap}>
        <p className={css.nameInput}>Seo description</p>
        <input
          className={css.inputInCat}
          value={seoDesc}
          onChange={seoDescription}
        />
      </div>
      <div className={css.inpWrap}>
        <p className={css.nameInput}>Опис для відео</p>
        <textarea
          className={css.inputInCatText}
          value={descripForArea}
          onChange={descFunc}
        />
      </div>
      <div className={css.inpWrap}>
        <p className={css.nameInput}>Маленький опис для каталогу</p>
        <textarea
          className={css.inputInCatText}
          value={smallDescF}
          onChange={smallDescFunction}
        />
      </div>
      <div className={css.inpWrap}>
        <label className={css.nameInput}>Виберіть фото:</label>
        <input type="file" accept="image/*" onChange={handlePhotoFileChange} />
      </div>

      {/* Інпут для вибору відео */}
      <div className={css.inpWrap}>
        <label className={css.nameInput}>Виберіть відео:</label>
        <input type="file" accept="video/*" onChange={handleVideoFileChange} />
      </div>
      <div className={css.subcategories}>
        <p className={css.nameInput}>Що потрібно для уроку</p>
        <div className={css.wrapAllNeed}>
          <div className={css.wrapAllInput}>
            {whotNeed.map((subcategory, index) => (
              <div key={index}>
                <input
                  type="text"
                  name="subcategory"
                  value={subcategory}
                  onChange={(e) => handleSubcategoryChange(e, index)}
                  placeholder="Що потрібно"
                />
              </div>
            ))}
          </div>
          <button className={css.addNew} onClick={addSubcategoryInput}>
            Додати ще
          </button>
        </div>
      </div>
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
      {progresVideoSt === true && (
        <div className={css.wrapLoad}>
          <p className={css.loadP}>Завантаження Відео</p>
          <div id={css.uploadprogresscontainer}>
            <div id={css.uploadprogressbar}></div>
          </div>
        </div>
      )}
    </section>
  );
};
export default withFirebaseCollection("courseEn")(AddVideo);
