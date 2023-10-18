import css from "./course.module.css";
import TitleCourse from "./titleCourse";
import { useTranslation, Trans } from "react-i18next";
export default function Course() {
  const { t, i18n } = useTranslation();
  return (
    <section className={css.allCoursesWrap}>
      <TitleCourse t={t} />
    </section>
  );
}
