import css from "./main.module.css";
import { useTranslation, Trans } from "react-i18next";
import keyWord from "../../function/keyWord";
import Slider from "./slider";
import SmallAbout from "./smallAbout";
import NewCourse from "./newCourse";
import WhyChouseUs from "./whyChoseUs";
import BigAbout from "./bigAbout";
import Feature from "./feature";
import Header from "../standartComponent/header/header";

export default function Main({ setActiveUser, activeUser }) {
  const { t, i18n } = useTranslation();
  keyWord(
    `${t("description.seo.contact.title")}`,
    `$${t("description.seo.contact.description")}`
  );
  // useEffect(() => {
  //   i18n.changeLanguage("en");
  // }, []);

  return (
    <>
      <Header setActiveUser={setActiveUser} activeUser={activeUser} />
      <Slider t={t} />
      <SmallAbout t={t} />
      <BigAbout t={t} />
      <Feature t={t} />
      <NewCourse t={t} />
    </>
  );
}
