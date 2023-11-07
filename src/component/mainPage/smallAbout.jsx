import { Link } from "react-router-dom";
import css from "./main.module.css";

import picO from "../../img/Group-178.webp";
import picT from "../../img/Group-169.webp";
import picTh from "../../img/Group-169-1.webp";
import picMol from "../../img/mol.png";
export default function SmallAbout({ t }) {
  return (
    <section className={css.smallAboutWrap}>
      <div className={css.smalWr}>
        <div className={css.wrapBlockInfo}>
          <h1 className={css.h1BlockinTit}>
            {t("description.part1.header.firstBST")}
          </h1>
          <button className={css.buttonInBlock}>
            {t("description.part1.header.buttonBlockOne")}
          </button>
          <p className={css.descBlockIn}>
            {t("description.part1.header.descFirstBst")}
          </p>
          <img src={picMol} className={css.wrapPicFirst} alt="mol" />
        </div>
        <div className={css.wrapBlockInfo}>
          <h1 className={css.h1BlockinTit}>
            {t("description.part1.header.secondBST")}
          </h1>
          <button className={css.buttonInBlock}>
            {t("description.part1.header.buttonBlockOne")}
          </button>
          <p className={css.descBlockIn}>
            {t("description.part1.header.descSecondBst")}
          </p>
          <img src={picO} className={css.wrapPicFirst} alt="mol" />
        </div>
        <div className={css.wrapBlockInfo}>
          <h1 className={css.h1BlockinTit}>
            {t("description.part1.header.threBST")}
          </h1>
          <button className={css.buttonInBlock}>
            {t("description.part1.header.buttonBlockOne")}
          </button>
          <p className={css.descBlockIn}>
            {t("description.part1.header.descThreBst")}
          </p>
          <img src={picT} className={css.wrapPicFirst} alt="mol" />
        </div>
        <div className={css.wrapBlockInfo}>
          <h1 className={css.h1BlockinTit}>
            {t("description.part1.header.fourBST")}
          </h1>
          <button className={css.buttonInBlock}>
            {t("description.part1.header.buttonBlockOne")}
          </button>
          <p className={css.descBlockIn}>
            {t("description.part1.header.descFourBst")}
          </p>
          <img src={picTh} className={css.wrapPicFirst} alt="mol" />
        </div>
      </div>
    </section>
  );
}
