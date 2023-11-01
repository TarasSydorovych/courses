import { useState } from "react";
import css from "./theCourse.module.css";
import Product from "../product/product";
const Video = ({ el, scrollHeight }) => {
  const [bigVideo, setBigVideo] = useState(false);
  const openModal = () => {
    setBigVideo(true);
  };

  const closeModal = () => {
    setBigVideo(false);
  };
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
          isOpen={bigVideo}
          onClose={closeModal}
          scrollHeight={scrollHeight}
          el={el}
        />
      )}
    </section>
  );
};
export default Video;
