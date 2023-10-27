import css from "./theCourse.module.css";
const Video = ({ el }) => {
  return (
    <section className={css.theVideo}>
      <div className={css.wrapSmallVideo}>
        <img
          className={css.videoImage}
          src={el.photoURL}
          alt={`${el.courseName} з ньютоновими яблучками`}
        />
      </div>
      <div className={css.videoDescWrap}>
        <h2 className={css.videoName}>{el.videoName}</h2>
        <p className={css.pDesc}>{el.description}</p>
      </div>
    </section>
  );
};
export default Video;
