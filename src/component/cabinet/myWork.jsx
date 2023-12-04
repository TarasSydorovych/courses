import { useEffect, useState } from "react";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import css from "./cabinet.module.css";
import { Link } from "react-router-dom";

const MyWork = ({ data, activeUser, t }) => {
  const [userWork, setUserWork] = useState(null);

  useEffect(() => {
    if (data && activeUser) {
      const currentUser = data.find((user) => user.uid === activeUser.uid);
      setUserWork(currentUser); // Записуємо користувача зі знайденим UID в стан
    }
  }, [data, activeUser]);
  return (
    <>
      {userWork && (
        <section className={css.workWrap}>
          <h1 className={css.h1YourWork}>
            {t("description.part1.cabinet.yourH1W")}
          </h1>
          <div className={css.allLesWrap}>
            {userWork.photos.map((el, index) => {
              return (
                <div key={index} className={css.lesWrap}>
                  <div className={css.descWrap}>
                    <p className={css.linkLabel}>
                      {" "}
                      {t("description.part1.cabinet.lesName")}
                    </p>
                    <Link
                      className={css.linkVideName}
                      to={`/video/${el.videoId}`}
                    >
                      {el.videoName}
                    </Link>
                  </div>
                  <div className={css.potoWrap}>
                    <img
                      className={css.imgStyle}
                      src={el.photoURL}
                      alt={`${el.videoName}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};
export default withFirebaseCollection("users")(MyWork);
