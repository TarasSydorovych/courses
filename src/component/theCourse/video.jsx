import { useEffect, useState } from "react";
import css from "./theCourse.module.css";
import Product from "../product/product";
import { db, auth } from "../../function/firebase";
import {
  useAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
const Video = ({ el, scrollHeight, t, data }) => {
  const [bigVideo, setBigVideo] = useState(false);
  const [productKey, setProductKey] = useState(0);

  const openModal = () => {
    setBigVideo(true);
  };

  const closeModal = () => {
    setBigVideo(false);
  };
  useEffect(() => {}, [bigVideo]);
  return (
    <section className={css.theVideo}>
      <div className={css.wrapSmallVideo}>
        <img
          className={css.videoImage}
          src={el.photoURL}
          alt={`${el.courseName} з ньютоновими яблучками`}
        />
      </div>
      <div className={css.videoDescWrap} onClick={() => setBigVideo(true)}>
        <h2 className={css.videoName}>{el.videoName}</h2>
        <p className={css.pDesc}>{el.description}</p>
      </div>
      {bigVideo && (
        <Product
          setProductKey={setProductKey}
          setBigVideo={setBigVideo}
          autor={data}
          isOpen={bigVideo}
          onClose={closeModal}
          scrollHeight={scrollHeight}
          val={el}
          t={t}
          key={productKey} // Додаємо ключ
        />
      )}
    </section>
  );
};
export default withFirebaseCollection("users")(Video);
