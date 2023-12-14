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
import { useNavigate } from "react-router-dom";
import Subscript from "../subscript/subscript";

const Video = ({ el, scrollHeight, t, data, activeUser, selectedCourse }) => {
  const navigete = useNavigate();
  const [bigVideo, setBigVideo] = useState(false);
  const [productKey, setProductKey] = useState(0);
  const [userData, setUserData] = useState(null);
  const [sub, setSub] = useState(false);
  const openModal = () => {
    setBigVideo(true);
  };

  const closeModal = () => {
    setBigVideo(false);
  };
  const closeModalSub = () => {
    setSub(false);
  };
  useEffect(() => {
    const course = data.find((course) => course.uid === activeUser.uid);
    setUserData(course);
  }, [data, activeUser]);
  const checkPayment = () => {
    if (selectedCourse && parseInt(selectedCourse.coursePrice, 10) > 1) {
      if (
        userData &&
        userData.myCourse &&
        userData.myCourse.includes(selectedCourse.uid)
      ) {
        navigete(`/video/${el.uid}`);
      } else {
        // Користувач не має доступу, можна відкрити попап або виконати інші дії
        // Реалізуйте свою логіку для відображення попапа або інших дій тут
        setSub(false);
        setBigVideo(true);
      }
    } else if (selectedCourse && selectedCourse.coursePrice === "") {
      navigete(`/video/${el.uid}`);
    } else if (
      selectedCourse &&
      userData &&
      selectedCourse.coursePrice === "subscription" &&
      userData.mySubscriptions.length > 0 &&
      userData.mySubscriptions[0] === "subscription"
    ) {
      navigete(`/video/${el.uid}`);
    } else {
      setSub(true);
      setBigVideo(false);
    }
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
      <div className={css.videoDescWrap} onClick={checkPayment}>
        <h2 className={css.videoName}>{el.videoName}</h2>
        <p className={css.pDescOne}>{el.smallDescF}</p>
      </div>
      {bigVideo && (
        <Product
          userData={userData}
          curency={`UAH`}
          courseUid={selectedCourse.uid}
          price={selectedCourse.coursePrice}
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
      {sub && (
        <Subscript
          userData={userData}
          curency={`UAH`}
          courseUid={selectedCourse.uid}
          price={selectedCourse.coursePrice}
          setProductKey={setProductKey}
          setBigVideo={setSub}
          autor={data}
          isOpen={sub}
          onClose={closeModalSub}
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
