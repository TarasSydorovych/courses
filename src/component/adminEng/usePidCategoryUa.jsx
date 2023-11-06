import { useState } from "react";
import css from "./cabiner.module.css";
import AddPidCategory from "./addPidCategory";
import DeletePidCat from "./deletePidCat";
export default function UsePidCategoryUa() {
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
          Додати підкатегорію
        </li>
        <li className={css.versionWrLiCat} onClick={deleteCategory}>
          Видалити підкатегорію
        </li>
      </ul>
      {addCat && <AddPidCategory />}
      {delCat && <DeletePidCat />}
    </section>
  );
}
