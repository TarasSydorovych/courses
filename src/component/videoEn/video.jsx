import { useParams } from "react-router-dom";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import css from "./video.module.css";
import imageSize from "image-size-browser";
import { useEffect, useState, React, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { db, auth } from "../../function/firebase";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { AiFillCamera } from "react-icons/ai";
import AddComent from "./addComent";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const VideoEn = ({ data }) => {
  const { id } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { t } = useTranslation();
  const storage = getStorage();
  useEffect(() => {
    const course = data.find((course) => course.uid === id);
    setSelectedCourse(course);
  }, [data, id]);
  /////////////////
  const checkPhotoSize = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onabort = () =>
        reject(alert("Читання файлу відмінено користувачем."));
      reader.onerror = () => reject(alert("Помилка читання файлу."));

      reader.onload = () => {
        const arrayBuffer = reader.result;
        // Розмір у мегабайтах
        const sizeInMB = arrayBuffer.byteLength / (1024 * 1024);

        // Визначте ваш ліміт розміру в мегабайтах
        const sizeLimitMB = 5;

        if (sizeInMB > sizeLimitMB) {
          reject();
        } else {
          resolve(true);
        }
      };

      reader.readAsArrayBuffer(file);
    });
  };
  /////////////////////////////////////////////////
  const [commentar, setCommentar] = useState("");
  const [nextLes, setNextLes] = useState("");
  const [el, setEl] = useState(selectedCourse);
  const [videoData, setVideoData] = useState(selectedCourse);
  const [userUid, setUserUid] = useState("");
  const addCommentToVideo = async (id, commentar, userId) => {
    try {
      // Отримати посилання на документ відео за його `id`
      const videoDocRef = doc(db, "video", id);

      // Оновити поле 'comment' в документі, додавши новий коментар до масиву
      await updateDoc(videoDocRef, {
        comment: arrayUnion({ comentar: commentar, userId: userId }),
      });

      alert("Дякуємо за Ваш коментар невдовзі він зʼявиться на сайті");
    } catch (error) {
      console.error("Помилка додавання коментаря до відео:", error);
    }
  };

  let paragraphs, decodedQuestionForDesc;
  if (selectedCourse) {
    decodedQuestionForDesc = decodeURIComponent(selectedCourse.description);

    paragraphs = decodedQuestionForDesc.split("\n").map((paragraph, idx) => (
      <Fragment key={idx}>
        {" "}
        {/* Використовуємо Fragment */}
        {paragraph}
        <br />
      </Fragment>
    ));
  }
  // const funcAddPhoto = async () => {
  //   try {
  //     const fileInput = document.createElement("input");
  //     fileInput.type = "file";
  //     fileInput.accept = "image/*";
  //     fileInput.onchange = async (e) => {
  //       const file = e.target.files[0];
  //       if (file) {
  //         // Викликаємо функцію для завантаження фотографії в Firebase Storage
  //         const photoURL = await uploadPhoto(file);

  //         // Оновлюємо відповідний документ користувача в Firestore
  //         await updateUserInfo(photoURL);
  //       }
  //     };

  //     // Викликаємо клік на створений елемент введення файлу
  //     fileInput.click();
  //   } catch (error) {
  //     console.error("Помилка додавання фотографії:", error);
  //   }
  // };
  const funcAddPhoto = async () => {
    try {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          try {
            await checkPhotoSize(file);
            // Викликаємо функцію для завантаження фотографії в Firebase Storage
            const photoURL = await uploadPhoto(file);

            // Оновлюємо відповідний документ користувача в Firestore
            await updateUserInfo(photoURL);
          } catch (error) {
            alert(`Розмір фотографії повинен бути менше 5 МБ.`);
          }
        }
      };

      // Викликаємо клік на створений елемент введення файлу
      fileInput.click();
    } catch (error) {
      console.error("Помилка додавання фотографії:", error);
    }
  };
  // ... (ваш існуючий код)

  // Функція для завантаження фотографії в Firebase Storage
  const uploadPhoto = async (file) => {
    const storageRef = ref(storage, `users/${userUid}/photos/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  };

  // Функція для оновлення відповідного документа користувача в Firestore
  const updateUserInfo = async (photoURL) => {
    const userDocRef = doc(db, "users", userUid);
    await updateDoc(userDocRef, {
      photos: arrayUnion({
        photoURL,
        userUid,
        videoId: selectedCourse.uid,
        videoName: selectedCourse.videoName,
      }),
    });
    alert("Ваша робота успішно додана");
  };
  return (
    <section className={css.lessonWrapS}>
      <div className={css.modal}>
        {selectedCourse && (
          <video className={css.videoStyleMp} controls key={selectedCourse.uid}>
            <source src={selectedCourse.videoURL} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        )}
        {selectedCourse && (
          <div className={css.videoTextWr}>
            <div className={css.descWrFirst}>
              <div className={css.firstP}>
                <h1 className={css.h1CourseName}>{selectedCourse.videoName}</h1>
                <p className={css.pDesc}>{paragraphs}</p>
              </div>
              <div className={css.firstP}>
                <p className={css.pDesc}>
                  {t("description.part1.courses.smalFotoDesc")}
                </p>
                <div className={css.uploadFoto} onClick={funcAddPhoto}>
                  <AiFillCamera className={css.aiFillCamera} />
                </div>
              </div>
            </div>
            <div className={css.descWrFirst}>
              <div className={css.firstP}>
                <h2 className={css.h1CourseName}>
                  {t("description.part1.courses.whotNeed")}
                </h2>
                <div className={css.whotNeedWrTo}>
                  {selectedCourse.whotNeed.map((element, index) => {
                    return (
                      <div key={index} className={css.wNedFi}>
                        {element}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <AddComent
              t={t}
              selectedCourse={selectedCourse}
              commentar={commentar}
              setCommentar={setCommentar}
              addCommentToVideo={addCommentToVideo}
              nextLes={nextLes}
              dataProd={data}
              setNextLes={setNextLes}
              setUserUid={setUserUid}
            />
          </div>
        )}
      </div>
    </section>
  );
};
export default withFirebaseCollection("videoEn")(VideoEn);
