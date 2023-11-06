import { useState } from "react";
import css from "./cabiner.module.css";
import AddCategory from "./addCategory";
import DeleteCat from "./deleteCat";
export default function UseCategoryUa() {
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
          Додати категорію
        </li>
        <li className={css.versionWrLiCat} onClick={deleteCategory}>
          Видалити категорію
        </li>
      </ul>
      {addCat && <AddCategory />}
      {delCat && <DeleteCat />}
    </section>
  );
}
