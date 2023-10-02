import { Link } from "react-router-dom";
import css from "./main.module.css";
export default function WhyChouseUs({ t }) {
  return (
    <section className={css.whyChoseUs}>
      <div className={css.whtWe}>
        <div className={css.whyWrapText}>
          <h4 className={css.whyChouseH4}>
            {t("description.part1.header.whyChouseTitle")}
          </h4>
          <p className={css.whyChouseP}>
            {t("description.part1.header.whyChouseDesc")}
          </p>
          <Link to="/" className={css.wheChouseLink}>
            {t("description.part1.header.whyChouseBut")}
          </Link>
        </div>
      </div>
    </section>
  );
}
