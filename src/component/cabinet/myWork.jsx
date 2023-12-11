import { useEffect, useState } from "react";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import css from "./cabinet.module.css";
import { Link } from "react-router-dom";

const MyWork = ({ userWork, t }) => {
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

                    <p className={css.statP}>
                      {" "}
                      <strong>
                        {t("description.part1.cabinet.statusCHe")}:&nbsp;
                      </strong>
                      {el.isCheked === "on" && (
                        <>{t("description.part1.cabinet.ches")}</>
                      )}
                      {el.isCheked !== "on" && (
                        <>{t("description.part1.cabinet.chesNo")}</>
                      )}
                    </p>
                    {el.isCheked === "on" && (
                      <p className={css.statP}>
                        <strong>
                          {t("description.part1.cabinet.star")}:&nbsp;{" "}
                        </strong>
                        {el.graduet}
                      </p>
                    )}
                    {el.isCheked === "on" && (
                      <p className={css.statPp}>
                        <strong>
                          {" "}
                          {t("description.part1.cabinet.rewi")}:&nbsp;{" "}
                        </strong>
                        {el.comment}
                      </p>
                    )}
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
export default MyWork;
