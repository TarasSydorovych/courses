import { Link } from "react-router-dom";
import css from "./main.module.css";
import kid1 from "../../img/kid1.webp";
import kid2 from "../../img/kid2.webp";
import kid3 from "../../img/kid3.webp";
export default function SmallAbout({ t }) {
  return (
    <section className={css.smallAboutWrap}>
      <div className={css.smallAbFirstWrap}>
        <h1 className={css.aboutH1}>
          {t("description.part1.header.aboutTit")}
        </h1>
        <p className={css.aboutP}>{t("description.part1.header.aboutDexc")}</p>
        <Link to="/about" className={css.buttonLinkAbout}>
          {t("description.part1.header.abotBut")}
        </Link>
      </div>
      <div className={css.picWrapKid}>
        <img src={kid1} className={css.kid1} alt="ньютонові яблучка" />
        <img src={kid3} className={css.kid3} alt="ньютонові яблучка" />
        <img src={kid2} className={css.kid2} alt="ньютонові яблучка" />
      </div>
    </section>
  );
}
