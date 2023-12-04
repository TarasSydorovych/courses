import css from "./cabinet.module.css";
import { useTranslation, Trans } from "react-i18next";
import keyWord from "../../function/keyWord";
import FirstSection from "./firstSection";
import ListProp from "./listProp";
import ListOfCourse from "./listOfCourse";
import { useState } from "react";
import MyWork from "./myWork";
export default function Cabinet({ activeUser }) {
  const { t, i18n } = useTranslation();
  const [activeItem, setActiveItem] = useState(0);
  return (
    <section className={css.cabinetWrap}>
      <FirstSection t={t} activeUser={activeUser} />
      <ListProp t={t} setActiveItem={setActiveItem} activeItem={activeItem} />
      {activeItem === 0 && <ListOfCourse t={t} />}
      {activeItem === 3 && <MyWork t={t} activeUser={activeUser} />}
    </section>
  );
}
