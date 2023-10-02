import css from "./header.module.css";
import {
  AiOutlineInstagram,
  AiOutlineUser,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import en from "../../../img/lanEng.jpg";
import ukr from "../../../img/lanUkr.jpg";
export default function HeaderTop({ t }) {
  return (
    <section className={css.headerTopWrap}>
      <div className={css.wrapSocial}>
        <AiOutlineInstagram className={css.iOutlineInstagram} />
        <AiOutlineWhatsApp className={css.whatApp} />
      </div>
      <div className={css.wrapCenter}>
        <div className={css.wrapLang}>
          <img src={en} className={css.picLan} />
        </div>

        <div className={css.wrapLang}>
          <img src={ukr} className={css.picLan} />
        </div>
      </div>

      <div className={css.wrapLogin}>
        <div className={css.wrapLog}>
          <p className={css.pLofg}> {t("description.part1.header.log")}</p>
          <AiOutlineUser className={css.iOutlineUser} />
        </div>
      </div>
    </section>
  );
}
