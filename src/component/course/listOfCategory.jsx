import React, { useState } from "react";
import css from "./course.module.css";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const ListOfCategory = ({
  ageGroups,
  data,
  category,
  setPidCat,
  t,
  setAgeGroups,
  setPaymentType,
  paymentType,
}) => {
  const [openCategories, setOpenCategories] = useState({});
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
  const [checkboxStatus, setCheckboxStatus] = useState({
    3: false,
    5: false,
    7: false,
  });

  const toggleAgeGroup = (ageGroup) => {
    setCheckboxStatus((prevStatus) => ({
      ...prevStatus,
      [ageGroup]: !prevStatus[ageGroup],
    }));

    // Оновлюємо стан в `setAgeGroups`
    setAgeGroups((prevAgeGroups) => {
      const updatedAgeGroups = [...prevAgeGroups];
      const ageGroupString = `${ageGroup}-${
        ageGroup === 7 ? ageGroup + 5 : ageGroup + 2
      }`;

      if (checkboxStatus[ageGroup]) {
        // Видаляємо з масиву, якщо вже існує
        const index = updatedAgeGroups.indexOf(ageGroupString);
        if (index !== -1) {
          updatedAgeGroups.splice(index, 1);
        }
      } else {
        // Додаємо в масив, якщо не існує
        updatedAgeGroups.push(ageGroupString);
      }

      return updatedAgeGroups;
    });
  };
  const toggleCategory = (index) => {
    setOpenCategories((prevOpenCategories) => {
      const updatedOpenCategories = {};

      // Закрити всі відкриті категорії
      Object.keys(prevOpenCategories).forEach((key) => {
        updatedOpenCategories[key] = false;
      });

      // Відкрити поточну категорію
      updatedOpenCategories[index] = !prevOpenCategories[index];

      return updatedOpenCategories;
    });
  };
  const isCategoryOpen = (index) => {
    return openCategories[index];
  };
  const handlePaymentTypeChange = (type) => {
    // Перемикач між "безкоштовні", "платні" та порожнім значенням
    setPaymentType((prevType) => (prevType === type ? "" : type));
  };

  return (
    <section className={css.wrapListCat}>
      <ul className={css.ulForcategory}>
        <li className={css.nameCat}> {t("description.part1.courses.cate")}</li>
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
                          key={subCategory.pidCategoryName}
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
        <li className={css.nameCatAge}>{t("description.part1.courses.age")}</li>
        <ul className={css.ageGroupList}>
          {[3, 5, 7].map((ageGroup) => (
            <li key={ageGroup} className={css.liCheck}>
              <input
                className={css.checkBo}
                type="checkbox"
                id={`ageGroup${ageGroup}`}
                checked={checkboxStatus[ageGroup]}
                onChange={() => toggleAgeGroup(ageGroup)}
              />
              <label className={css.label} htmlFor={`ageGroup${ageGroup}`}>
                {`${ageGroup}-${ageGroup === 7 ? ageGroup + 5 : ageGroup + 2}`}
              </label>
            </li>
          ))}
        </ul>
        <li className={css.nameCatAge}>
          {t("description.part1.courses.payC")}
        </li>
        <ul className={css.ageGroupList}>
          <li className={css.liCheck}>
            <input
              className={css.checkBo}
              type="checkbox"
              id="freePaymentType"
              checked={paymentType === "free"}
              onChange={() => handlePaymentTypeChange("free")}
            />
            <label className={css.label} htmlFor="freePaymentType">
              {t("description.part1.courses.freeC")}
            </label>
          </li>
          <li className={css.liCheck}>
            <input
              className={css.checkBo}
              type="checkbox"
              id="paidPaymentType"
              checked={paymentType === "paid"}
              onChange={() => handlePaymentTypeChange("paid")}
            />
            <label className={css.label} htmlFor="paidPaymentType">
              {t("description.part1.courses.notFre")}
            </label>
          </li>
        </ul>
      </ul>
    </section>
  );
};

export default withFirebaseCollection("pidCategoryUa")(ListOfCategory);
