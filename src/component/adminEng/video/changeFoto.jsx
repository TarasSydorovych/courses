import React, { useState, useEffect } from "react";
import css from "../cabiner.module.css";
import {
  getStorage,
  ref,
  deleteObject,
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../function/firebase";
import withFirebaseCollection from "../../HOK/withFirebaseCollection";

const ChangeFoto = ({ data }) => {
  const storage = getStorage();
  const [photoFile, setPhotoFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [products, setProducts] = useState([]); // Стан для збереження списку товарів
  const [selectedProduct, setSelectedProduct] = useState(null); // Стан для вибраного товару
  const [newImage, setNewImage] = useState(null); // Стан для нового фото
  const [progresVideoSt, setProgresVideoSt] = useState(false);
  const [progresFotoSt, setProgresFotoSt] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null); // Стан для ідентифікатора вибраного продукту
  console.log(data);
  const updateProgressBar = (progress) => {
    const progressBar = document.querySelector(`#${css.uploadprogressbar}`);

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  };
  const handleDeleteImage = async (product) => {
    // Оновити поле imageList товару в Firestore
    const productRef = doc(db, "videoEn", product.uid);
    await updateDoc(productRef, {
      photoURL: "",
    });
    window.location.reload();
  };
  const handleDeleteVideo = async (product) => {
    // Оновити поле imageList товару в Firestore
    const productRef = doc(db, "videoEn", product.uid);
    await updateDoc(productRef, {
      videoURL: "",
    });
    window.location.reload();
  };
  // Функція для оновлення фото товару
  const handleUpdateImage = async (product) => {
    if (photoFile) {
      const photoRef = ref(storage, `photos/${product.uid}-${photoFile.name}`);
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
          await updateDoc(doc(db, "videoEn", product.uid), {
            photoURL: photoURL,
          });

          // Завантаження відео
          alert("Фото змінено");
          window.location.reload();
        }
      );
    }
    if (videoFile) {
      const videoRef = ref(storage, `videos/${product.uid}-${videoFile.name}`);
      const videoUploadTask = uploadBytesResumable(videoRef, videoFile);

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
          await updateDoc(doc(db, "videoEn", product.uid), {
            videoURL: videoURL,
          });

          setProgresVideoSt(false);
          alert("Відео додано");
          window.location.reload();
        }
      );
    }
  };

  const viewClick = (product, uid) => {
    setSelectedProduct(product);
    setSelectedProductId(uid);
  };
  return (
    <div className={css.wrapPicList}>
      <h2>Product List</h2>
      <ul className={css.ulWrapPic}>
        {data.map((product) => (
          <>
            <li key={product.uid} className={css.liWrapPic}>
              <h3>{product.videoName}</h3>
              <h2>{product.uid}</h2>
              <button onClick={() => viewClick(product, product.uid)}>
                Показати файли
              </button>
            </li>
            {selectedProductId === product.uid && (
              <div>
                <h3>{selectedProduct.videoName} Файли</h3>

                <div>
                  <img
                    className={css.imgInWr}
                    src={selectedProduct.photoURL}
                    alt={`Product`}
                  />
                  <button onClick={() => handleUpdateImage(selectedProduct)}>
                    Змінити фото
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPhotoFile(e.currentTarget.files[0])}
                  />

                  <button onClick={() => handleDeleteImage(selectedProduct)}>
                    Видалити фото
                  </button>
                </div>
                <div>
                  <video width="640" height="360" controls>
                    <source src={selectedProduct.videoURL} type="video/mp4" />
                    Ваш браузер не підтримує відео тег.
                  </video>
                  <button onClick={() => handleUpdateImage(selectedProduct)}>
                    Змінити відео
                  </button>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setVideoFile(e.currentTarget.files[0])}
                  />

                  <button onClick={() => handleDeleteVideo(selectedProduct)}>
                    Видалити відео
                  </button>
                </div>
              </div>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default withFirebaseCollection("videoEn")(ChangeFoto);
