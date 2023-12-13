import withFirebaseCollection from "../HOK/withFirebaseCollection";
import css from "./blog.module.css";
const ListCat = ({ data, setCategory, t }) => {
  return (
    <ul className={css.ulCatWr}>
      <li className={css.listLi} key={"21232"} onClick={() => setCategory("")}>
        {t("description.part1.header.all")}
      </li>
      {data.map((el, index) => {
        return (
          <li
            className={css.listLi}
            key={index}
            onClick={() => setCategory(el.catName)}
          >
            {el.categoryName}
          </li>
        );
      })}
    </ul>
  );
};
export default withFirebaseCollection("categoryBlogEn")(ListCat);
