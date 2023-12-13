import { useState } from "react";
import css from "./cabiner.module.css";
import UseCategoryUa from "./useCategoryUa";
import UsePidCategoryUa from "./usePidCategoryUa";
import UseVideoUa from "./video/useVideoUa";
import AddCourse from "./addCourse";
import AddBlogPost from "./addBlogPost";
import UseBlog from "./useBlog";
export default function UaVersion() {
  const [category, setCategory] = useState(false);
  const [pidCategory, setPidCategory] = useState(false);
  const [video, setVideo] = useState(false);
  const [course, setCourse] = useState(false);
  const [blog, setBlog] = useState(false);
  const categoryNew = () => {
    setCategory(!category);
    setPidCategory(false);
    setVideo(false);
    setCourse(false);
    setBlog(false);
  };
  const pidCategoryNew = () => {
    setCategory(false);
    setPidCategory(!pidCategory);
    setVideo(false);
    setCourse(false);
    setBlog(false);
  };
  const videoNew = () => {
    setCategory(false);
    setPidCategory(false);
    setVideo(!video);
    setCourse(false);
    setBlog(false);
  };
  const courseNew = () => {
    setCourse(!course);
    setCategory(false);
    setPidCategory(false);
    setVideo(false);
    setBlog(false);
  };
  const addBlog = () => {
    setCourse(false);
    setCategory(false);
    setPidCategory(false);
    setVideo(false);
    setBlog(!blog);
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
        <li className={css.versionWrLi} onClick={addBlog}>
          Додати Блог
        </li>
      </ul>
      {category && <UseCategoryUa />}
      {pidCategory && <UsePidCategoryUa />}
      {course && <AddCourse />}
      {video && <UseVideoUa />}
      {blog && <UseBlog />}
    </section>
  );
}
