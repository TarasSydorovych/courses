import css from "./cabinet.module.css";
import { useTranslation, Trans } from "react-i18next";
import keyWord from "../../function/keyWord";
import FirstSection from "./firstSection";
import ListProp from "./listProp";
import ListOfCourse from "./listOfCourse";
export default function Cabinet() {
  const { t, i18n } = useTranslation();
  return (
    <section className={css.cabinetWrap}>
      <FirstSection t={t} />
      <ListProp t={t} />
      <ListOfCourse t={t} />
    </section>
  );
}
