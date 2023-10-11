import { HandySvg } from "handy-svg";
import css from "./main.module.css";
import firstSvg from "../../img/svgOne.svg";
import secondSvg from "../../img/svgTwo.svg";
import threSvg from "../../img/svgThre.svg";
import fourSvg from "../../img/fourSvg.svg";
import fiveSvg from "../../img/fiveSvg.svg";
import sixSvg from "../../img/sixSvg.svg";
export default function Feature({ t }) {
  return (
    <section className={css.sectionAboutBigWrap}>
      <p className={css.firstPInBigAvo}>
        {t("description.part1.header.whyUsTitle")}
      </p>
      <h2 className={css.bigAbH2}>{t("description.part1.header.wyUsDesc")}</h2>
      <div className={css.wrapBubuleDlock}>
        <div className={css.bubleWrap}>
          <div className={css.svgWrap}>
            <HandySvg
              src={firstSvg}
              width="120"
              height="108"
              className={css.firstSvg}
            />
          </div>
          <h4 className={css.h4Prof}>{t("description.part1.header.prof")}</h4>
          <p className={css.pProf}>{t("description.part1.header.profDesc")}</p>
        </div>
        <div className={css.bubleWrap}>
          <div className={css.svgWrap}>
            <HandySvg
              src={secondSvg}
              width="120"
              height="108"
              className={css.firstSvg}
            />
          </div>
          <h4 className={css.h4Prof}>{t("description.part1.header.prof")}</h4>
          <p className={css.pProf}>{t("description.part1.header.profDesc")}</p>
        </div>
        <div className={css.bubleWrap}>
          <div className={css.svgWrap}>
            <HandySvg
              src={threSvg}
              width="120"
              height="108"
              className={css.firstSvg}
            />
          </div>
          <h4 className={css.h4Prof}>{t("description.part1.header.prof")}</h4>
          <p className={css.pProf}>{t("description.part1.header.profDesc")}</p>
        </div>
        <div className={css.bubleWrap}>
          <div className={css.svgWrap}>
            <HandySvg
              src={fourSvg}
              width="120"
              height="108"
              className={css.firstSvg}
            />
          </div>
          <h4 className={css.h4Prof}>{t("description.part1.header.prof")}</h4>
          <p className={css.pProf}>{t("description.part1.header.profDesc")}</p>
        </div>
        <div className={css.bubleWrap}>
          <div className={css.svgWrap}>
            <HandySvg
              src={fiveSvg}
              width="120"
              height="108"
              className={css.firstSvg}
            />
          </div>
          <h4 className={css.h4Prof}>{t("description.part1.header.prof")}</h4>
          <p className={css.pProf}>{t("description.part1.header.profDesc")}</p>
        </div>
        <div className={css.bubleWrap}>
          <div className={css.svgWrap}>
            <HandySvg
              src={sixSvg}
              width="120"
              height="108"
              className={css.firstSvg}
            />
          </div>
          <h4 className={css.h4Prof}>{t("description.part1.header.prof")}</h4>
          <p className={css.pProf}>{t("description.part1.header.profDesc")}</p>
        </div>
      </div>
    </section>
  );
}
