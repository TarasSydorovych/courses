// import css from "./course.module.css";
// import withFirebaseCollection from "../HOK/withFirebaseCollection";
// import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
// const ListOfCategory = ({ data, category }) => {
//   console.log("data", data);
//   console.log("category", category);
//   return (
//     <section className={css.wrapListCat}>
//       <ul className={css.ulForcategory}>
//         {category.map((el, index) => {
//           return (
//             <li className={css.liForCategory}>
//               <p className={css.pInLiCat}>{el.categoryName}</p>
//               <AiOutlineDown className={css.aiOutlineDown} />
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };
// export default withFirebaseCollection("pidCategoryUa")(ListOfCategory);
import React, { useState } from "react";
import css from "./course.module.css";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const ListOfCategory = ({ data, category, setPidCat }) => {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (index) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [index]: !prevOpenCategories[index],
    }));
  };

  const isCategoryOpen = (index) => {
    return openCategories[index];
  };

  return (
    <section className={css.wrapListCat}>
      <ul className={css.ulForcategory}>
        {category.map((el, index) => {
          return (
            <>
              <li
                className={css.liForCategory}
                key={index}
                onClick={() => toggleCategory(index)}
              >
                <p className={css.pInLiCat}>{el.categoryName}</p>
                {isCategoryOpen(index) ? (
                  <AiOutlineUp className={css.aiOutlineDown} />
                ) : (
                  <AiOutlineDown className={css.aiOutlineDown} />
                )}
              </li>
              {isCategoryOpen(index) && (
                <ul className={css.subCategoryList}>
                  {data
                    .filter(
                      (subCategory) =>
                        subCategory.categoryName === el.categoryName
                    )
                    .map((subCategory, subIndex) => {
                      return (
                        <li
                          className={css.subCategoryItem}
                          key={subIndex}
                          onClick={() => setPidCat(subCategory.pidCategoryName)}
                        >
                          {subCategory.pidCategoryName}
                        </li>
                      );
                    })}
                </ul>
              )}
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default withFirebaseCollection("pidCategoryUa")(ListOfCategory);
