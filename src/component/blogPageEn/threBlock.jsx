import css from "./blogPage.module.css";
import { useTranslation } from "react-i18next";
export default function ThreBlock({ curProd }) {
  const { t } = useTranslation();
  return (
    <section className={css.titleWrapBlog}>
      <div className={css.divWrap}>
        <img
          src={curProd.fotoUrl}
          className={css.picBlTh}
          alt={`${curProd.title}`}
        />
      </div>
      <h3 className={css.threH3}>{t("description.part1.header.haveQue")}</h3>

      <p className={css.threP}> {t("description.part1.header.writeUs")}</p>
      <a href="https://t.me/tu_mon_ami" className={css.theBut}>
        {t("description.part1.header.write")}
      </a>
    </section>
  );
}
