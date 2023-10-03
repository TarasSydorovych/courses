import css from "./cabinet.module.css";
import { AiFillStar, AiFillSetting } from "react-icons/ai";

export default function FirstSection({ t }) {
  return (
    <div className={css.firstSection}>
      <h1 className={css.cabinetH1}>{t("description.part1.cabinet.title")}</h1>
      <div className={css.userInfo}>
        <div className={css.wrapUseInfo}>
          <div className={css.picWrap}></div>
          <div className={css.wrapDesc}>
            <p className={css.stylePName}>
              {t("description.part1.cabinet.hi")}
            </p>
            <p className={css.stylePName}>
              {t("description.part1.cabinet.name")}
            </p>
            <AiFillStar className={css.aiOutlineStar} />
          </div>
        </div>
        <AiFillSetting className={css.aiFillSetting} />
      </div>
    </div>
  );
}
