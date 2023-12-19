import css from "./cabinet.module.css";
import { useTranslation, Trans } from "react-i18next";
import keyWord from "../../function/keyWord";
import FirstSection from "./firstSection";
import ListProp from "./listProp";
import ListOfCourse from "./listOfCourse";
import { useEffect, useState } from "react";
import MyWork from "./myWork";
import Mesages from "./mesages";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import ListOfCourseEn from "./ListOfCourseEn";
import Header from "../standartComponent/header/header";
import Refs from "./refs";
const Cabinet = ({ data, setActiveUser, activeUser }) => {
  const { t, i18n } = useTranslation();
  const [activeItem, setActiveItem] = useState(0);
  const [userWork, setUserWork] = useState(null);

  useEffect(() => {
    if (data && activeUser) {
      const currentUser = data.find((user) => user.uid === activeUser.uid);
      setUserWork(currentUser); // Записуємо користувача зі знайденим UID в стан
    }
  }, [data, activeUser]);
  return (
    <>
      <Header setActiveUser={setActiveUser} activeUser={activeUser} />
      <section className={css.cabinetWrap}>
        <FirstSection t={t} activeUser={activeUser} />
        <ListProp t={t} setActiveItem={setActiveItem} activeItem={activeItem} />
        {activeItem === 0 && i18n.language === "ua" && (
          <ListOfCourse t={t} userWork={userWork} />
        )}
        {activeItem === 0 && i18n.language === "en" && (
          <ListOfCourseEn t={t} userWork={userWork} />
        )}
        {activeItem === 3 && <MyWork userWork={userWork} t={t} />}
        {activeItem === 2 && <Mesages userWork={userWork} t={t} />}
        {activeItem === 4 && (
          <Refs userWork={userWork} t={t} uid={activeUser.uid} />
        )}
      </section>
    </>
  );
};
export default withFirebaseCollection("users")(Cabinet);
