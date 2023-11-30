import { useParams } from "react-router-dom";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import css from "./video.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { db, auth } from "../../function/firebase";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { AiFillCamera } from "react-icons/ai";
const Video = ({ data }) => {
  const { id } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { t } = useTranslation();
  useEffect(() => {
    const course = data.find((course) => course.uid === id);
    setSelectedCourse(course);
    console.log(course);
  }, [data, id]);
  /////////////////////////////////////////////////
  const [commentar, setCommentar] = useState("");
  const [nextLes, setNextLes] = useState("");
  const [el, setEl] = useState(selectedCourse);
  const [videoData, setVideoData] = useState(selectedCourse);

  console.log("el before nextLessons:", el, nextLes);
  const nextLessons = () => {
    setEl(nextLes);
    setVideoData(nextLes);
  };
  console.log("el after nextLessons:", el, nextLes);

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

  const contentStyle = { width: "1000px", borderRadius: "10px" };

  function findUserByUid(userId, autor) {
    return autor.find((user) => user.uid === userId);
  }
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
                <p className={css.pDesc}>{selectedCourse.description}</p>
              </div>
              <div className={css.firstP}>
                <p className={css.pDesc}>
                  {t("description.part1.courses.smalFotoDesc")}
                </p>
                <div className={css.uploadFoto}>
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
            <div className={css.descWrFirst}>
              <div className={css.firstP}>
                <h1 className={css.h1CourseName}>
                  {t("description.part1.courses.coment")}
                </h1>
                {selectedCourse.comment.map((koment, index) => {
                  if (koment !== "") {
                    const user = findUserByUid(koment.userId, "1");
                    if (user) {
                      return (
                        <div className={css.respWrap}>
                          <img
                            className={css.respAutorPic}
                            src={user.photo}
                            alt={user.displayName}
                          />
                          <p className={css.pDescWrP} key={index}>
                            {koment.comentar}
                          </p>
                        </div>
                      );
                    }
                  }
                })}

                <p className={css.addCom}>
                  {t("description.part1.courses.addCom")}
                </p>
                <textarea
                  value={commentar}
                  onChange={(e) => setCommentar(e.target.value)}
                  className={css.textAreaComment}
                  placeholder={`${t("description.part1.courses.addCom")}`}
                ></textarea>
                <button
                  onClick={() =>
                    addCommentToVideo(selectedCourse.uid, commentar, "1")
                  }
                  className={css.buttonSend}
                >
                  {t("description.part1.courses.send")}
                </button>
              </div>
              <div className={css.firstP}>
                <p className={css.h1CourseName}>
                  {t("description.part1.courses.nextLes")}
                </p>
                {nextLes && (
                  <p className={css.addComCour} onClick={nextLessons}>
                    {nextLes.videoName}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default withFirebaseCollection("video")(Video);
