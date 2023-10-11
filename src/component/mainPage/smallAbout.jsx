import { Link } from "react-router-dom";
import css from "./main.module.css";
import kid1 from "../../img/kid1.webp";
import kid2 from "../../img/kid2.webp";
import kid3 from "../../img/kid3.webp";
import picMol from "../../img/mol.png";
export default function SmallAbout({ t }) {
  return (
    <section className={css.smallAboutWrap}>
      <div className={css.smalWr}>
        <div className={css.wrapBlockInfo}>
          <h1 className={css.h1BlockinTit}>
            {t("description.part1.header.blockOneTitle")}
          </h1>
          <button className={css.buttonInBlock}>
            {t("description.part1.header.buttonBlockOne")}
          </button>
          <p className={css.descBlockIn}>
            {t("description.part1.header.blockOneDesc")}
          </p>
          <img src={picMol} className={css.wrapPicFirst} alt="mol" />
        </div>
        <div className={css.wrapBlockInfo}>
          <h1 className={css.h1BlockinTit}>
            {t("description.part1.header.blockOneTitle")}
          </h1>
          <button className={css.buttonInBlock}>
            {t("description.part1.header.buttonBlockOne")}
          </button>
          <p className={css.descBlockIn}>
            {t("description.part1.header.blockOneDesc")}
          </p>
          <img src={picMol} className={css.wrapPicFirst} alt="mol" />
        </div>
        <div className={css.wrapBlockInfo}>
          <h1 className={css.h1BlockinTit}>
            {t("description.part1.header.blockOneTitle")}
          </h1>
          <button className={css.buttonInBlock}>
            {t("description.part1.header.buttonBlockOne")}
          </button>
          <p className={css.descBlockIn}>
            {t("description.part1.header.blockOneDesc")}
          </p>
          <img src={picMol} className={css.wrapPicFirst} alt="mol" />
        </div>
        <div className={css.wrapBlockInfo}>
          <h1 className={css.h1BlockinTit}>
            {t("description.part1.header.blockOneTitle")}
          </h1>
          <button className={css.buttonInBlock}>
            {t("description.part1.header.buttonBlockOne")}
          </button>
          <p className={css.descBlockIn}>
            {t("description.part1.header.blockOneDesc")}
          </p>
          <img src={picMol} className={css.wrapPicFirst} alt="mol" />
        </div>
      </div>
    </section>
  );
}
