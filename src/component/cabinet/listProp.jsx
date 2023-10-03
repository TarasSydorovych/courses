// import css from "./cabinet.module.css";
// export default function ListProp({ t }) {
//   return (
//     <section className={css.listPropWrap}>
//       <ul className={css.listULW}>
//         <li className={css.listLi}>
//           {t("description.part1.cabinet.myCourse")}
//         </li>
//         <li className={css.listLi}>{t("description.part1.cabinet.subs")}</li>
//         <li className={css.listLi}>{t("description.part1.cabinet.message")}</li>
//       </ul>
//     </section>
//   );
// }
import React, { useState } from "react";
import css from "./cabinet.module.css";

export default function ListProp({ t }) {
  // Початкове значення активного елемента - 0 (перший елемент)
  const [activeItem, setActiveItem] = useState(0);

  // Функція для зміни активного елемента при кліку
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <section className={css.listPropWrap}>
      <ul className={css.listULW}>
        <li
          className={`${css.listLi} ${activeItem === 0 ? css.activeItem : ""}`}
          onClick={() => handleItemClick(0)}
        >
          {t("description.part1.cabinet.myCourse")}
        </li>
        <li
          className={`${css.listLi} ${activeItem === 1 ? css.activeItem : ""}`}
          onClick={() => handleItemClick(1)}
        >
          {t("description.part1.cabinet.subs")}
        </li>
        <li
          className={`${css.listLi} ${activeItem === 2 ? css.activeItem : ""}`}
          onClick={() => handleItemClick(2)}
        >
          {t("description.part1.cabinet.message")}
        </li>
      </ul>
    </section>
  );
}
