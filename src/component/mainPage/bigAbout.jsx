import css from "./main.module.css";
import pic1 from "../../img/1.webp";
import pic2 from "../../img/2.webp";
import pic3 from "../../img/3.webp";
import pic4 from "../../img/4.webp";
import pic5 from "../../img/5.webp";
import { HandySvg } from "handy-svg";
import iconSrc from "../../img/im.svg";
export default function BigAbout({ t }) {
  return (
    <section className={css.sectionAboutBigWrap}>
      <p className={css.firstPInBigAvo}>
        {t("description.part1.header.about")}
      </p>
      <h2 className={css.bigAbH2}>
        {t("description.part1.header.bigAbFirspP")}
      </h2>
      <p className={css.pNearH}> {t("description.part1.header.pPidH")}</p>
      <div className={css.blockWithPicture}>
        <img src={pic1} className={css.pic1} alt="pic1" />
        <img src={pic2} className={css.pic2} alt="pic1" />
        <img src={pic3} className={css.pic3} alt="pic1" />
        <img src={pic4} className={css.pic4} alt="pic1" />
        <img src={pic5} className={css.pic5} alt="pic1" />
        <div className={css.star}></div>
        <div className={css.cir}></div>
        <HandySvg src={iconSrc} width="150" height="150" className={css.svgN} />
      </div>
    </section>
  );
}
