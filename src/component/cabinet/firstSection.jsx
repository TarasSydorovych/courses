import css from "./cabinet.module.css";
import { AiFillStar, AiFillSetting } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../../function/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ChangeData from "./changeData";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
const FirstSection = ({ t, activeUser, data }) => {
  const [cheSetinings, setCheSetinings] = useState(false);
  const [activeUs, setActiveUs] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const foundObject = data.find((item) => item.uid === activeUser.uid);

    if (foundObject) {
      // Знайдено об'єкт, оновлюємо стан
      setActiveUs(foundObject);
    }
  }, [data, activeUser.uid]);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const openDialog = () => {
    setCheSetinings(true);
  };
  return (
    <div className={css.firstSection}>
      <h1 className={css.cabinetH1}>{t("description.part1.cabinet.title")}</h1>
      {activeUs && (
        <div className={css.userInfo}>
          <div className={css.wrapUseInfo}>
            <div className={css.picWrap}>
              <img src={activeUs.photo} className={css.picUser} />
            </div>
            <div className={css.wrapDesc}>
              <p className={css.stylePName}>
                {t("description.part1.cabinet.hi")}
              </p>
              <p className={css.stylePName}>{activeUs.displayName}</p>
              <AiFillStar className={css.aiOutlineStar} />
            </div>
          </div>
          <div className={css.wrapOut}>
            <p className={css.quit} onClick={signOutUser}>
              {t("description.part1.cabinet.quit")}
            </p>
            <AiFillSetting onClick={openDialog} className={css.aiFillSetting} />
          </div>
        </div>
      )}
      {cheSetinings && (
        <ChangeData t={t} setCheSetinings={setCheSetinings} userBd={activeUs} />
      )}
    </div>
  );
};
export default withFirebaseCollection("users")(FirstSection);
