import { useState } from "react";
import css from "./cabiner.module.css";
import UseCategoryUa from "./useCategoryUa";
import UsePidCategoryUa from "./usePidCategoryUa";
import UseVideoUa from "./video/useVideoUa";
import AddCourse from "./addCourse";
export default function UaVersion() {
  const [category, setCategory] = useState(false);
  const [pidCategory, setPidCategory] = useState(false);
  const [video, setVideo] = useState(false);
  const [course, setCourse] = useState(false);
  const categoryNew = () => {
    setCategory(!category);
    setPidCategory(false);
    setVideo(false);
    setCourse(false);
  };
  const pidCategoryNew = () => {
    setCategory(false);
    setPidCategory(!pidCategory);
    setVideo(false);
    setCourse(false);
  };
  const videoNew = () => {
    setCategory(false);
    setPidCategory(false);
    setVideo(!video);
    setCourse(false);
  };
  const courseNew = () => {
    setCourse(!course);
    setCategory(false);
    setPidCategory(false);
    setVideo(false);
  };
  return (
    <section className={css.versionWrap}>
      <ul className={css.versionWrUl}>
        <li className={css.versionWrLi} onClick={categoryNew}>
          Управління категоріями
        </li>
        <li className={css.versionWrLi} onClick={pidCategoryNew}>
          Управління підкатегоріями
        </li>
        <li className={css.versionWrLi} onClick={courseNew}>
          Управління курсами
        </li>
        <li className={css.versionWrLi} onClick={videoNew}>
          Управління відео
        </li>
      </ul>
      {category && <UseCategoryUa />}
      {pidCategory && <UsePidCategoryUa />}
      {course && <AddCourse />}
      {video && <UseVideoUa />}
    </section>
  );
}
