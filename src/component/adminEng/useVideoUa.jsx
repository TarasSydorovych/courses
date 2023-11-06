import { useState } from "react";
import css from "../cabiner.module.css";

import AddVideo from "./addVideo";
import UseVideo from "./useVideo";
import ChangeFoto from "./changeFoto";
export default function UseVideoUa() {
  const [addCat, setAddCat] = useState(false);
  const [viewCat, setViewCat] = useState(false);
  const [changeVideo, setChangeVideo] = useState(false);
  const view = () => {
    setViewCat(!viewCat);
    setAddCat(false);
    setChangeVideo(false);
  };
  const add = () => {
    setAddCat(!addCat);
    setViewCat(false);
    setChangeVideo(false);
  };
  const change = () => {
    setChangeVideo(!changeVideo);
    setAddCat(false);
    setViewCat(false);
  };
  return (
    <section className={css.useCategoryWrap}>
      <ul className={css.versionWrUl}>
        <li className={css.versionWrLiCat} onClick={add}>
          Додати відео
        </li>
        <li className={css.versionWrLiCat} onClick={view}>
          Всі відео
        </li>
        <li className={css.versionWrLiCat} onClick={change}>
          Редагувани відео
        </li>
      </ul>
      {addCat && <AddVideo />}
      {viewCat && <UseVideo />}
      {changeVideo && <ChangeFoto />}
    </section>
  );
}
