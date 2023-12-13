import { useState } from "react";
import css from "./cabiner.module.css";
import AddCategory from "./addCategory";
import DeleteCat from "./deleteCat";
import AddBlogPost from "./addBlogPost";
import AddProfession from "./addProf";
export default function UseBlog() {
  const [addCat, setAddCat] = useState(false);
  const [delCat, setDelCat] = useState(false);
  const deleteCategory = () => {
    setDelCat(!delCat);
    setAddCat(false);
  };
  const add = () => {
    setAddCat(!addCat);
    setDelCat(false);
  };
  return (
    <section className={css.useCategoryWrap}>
      <ul className={css.versionWrUl}>
        <li className={css.versionWrLiCat} onClick={add}>
          Додати блог
        </li>
        <li className={css.versionWrLiCat} onClick={deleteCategory}>
          Додати категорію{" "}
        </li>
      </ul>
      {addCat && <AddBlogPost />}
      {delCat && <AddProfession />}
    </section>
  );
}
