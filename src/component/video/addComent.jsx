import withFirebaseCollection from "../HOK/withFirebaseCollection";
import css from "./video.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../function/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AddComent = ({
  setUserUid,
  nextLessons,
  t,
  selectedCourse,
  data,
  commentar,
  addCommentToVideo,
  nextLes,
  setCommentar,
  dataProd,
  setNextLes,
}) => {
  const [userU, setUserU] = useState(null);
  const [foundUser, setFoundUser] = useState(null); // стейт для зберігання знайденого користувача

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUserU(authUser.uid);
        setUserUid(authUser.uid);
      } else {
        // Користувач вийшов, робіть необхідні дії
      }
    });

    return () => unsubscribe();
  }, [auth]);
  useEffect(() => {
    // Функція для пошуку користувача за uid
    const findUser = () => {
      const user = data.find((user) => user.uid === userU);
      setFoundUser(user); // оновлюємо стейт знайденого користувача
    };

    if (userU !== "") {
      findUser();
    }
  }, [userU, data]);
  useEffect(() => {
    if (selectedCourse) {
      const lesson = dataProd.find((lesson) => {
        const lessonCounter = parseInt(lesson.counter, 10);
        const elCounter = parseInt(selectedCourse.counter, 10);

        return lessonCounter === elCounter + 1;
      });

      if (lesson) {
        // Знайдено урок, де `counter` більший за `el.counter`

        setNextLes(lesson);
      } else {
        // Урок не знайдено
      }
    }
  }, [selectedCourse, dataProd]);
  return (
    <>
      {foundUser && (
        <div className={css.descWrFirst}>
          <div className={css.firstP}>
            <h1 className={css.h1CourseName}>
              {t("description.part1.courses.coment")}
            </h1>
            {selectedCourse.comment.map((koment, index) => {
              if (koment !== "") {
                if (userU) {
                  return (
                    <div className={css.respWrap}>
                      <img
                        className={css.respAutorPic}
                        src={foundUser.photo}
                        alt={foundUser.displayName}
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
                addCommentToVideo(selectedCourse.uid, commentar, foundUser.uid)
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
              <Link className={css.addComCour} to={`/video/${nextLes.uid}`}>
                <p className={css.addComCour}>{nextLes.videoName}</p>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default withFirebaseCollection("users")(AddComent);
