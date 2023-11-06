import css from "./theCourse.module.css";
import { PiPaintBrushThin, PiSunHorizon } from "react-icons/pi";
import { FaBrain, FaHandPeace } from "react-icons/fa";
import { BsStars, BsHearts } from "react-icons/bs";
import { GiSupersonicArrow } from "react-icons/gi";
import afi from "../../img/art.jpg";
export default function SecondBlock({ t }) {
  return (
    <section className={css.secondBlockWrap}>
      <div className={css.firstBlockS}>
        <h3 className={css.secondBlockH}>
          {t("description.part1.courses.secondBlockTitle")}
        </h3>
        <div className={css.wrapDescInSec}>
          <PiPaintBrushThin className={css.iconFirst} />
          <p className={css.secondDesctP}>
            {t("description.part1.courses.secFirst")}
          </p>
        </div>
        <div className={css.wrapDescInSec}>
          <PiSunHorizon className={css.iconFirstSon} />
          <p className={css.secondDesctP}>
            {t("description.part1.courses.secTwo")}
          </p>
        </div>
        <div className={css.wrapDescInSec}>
          <FaBrain className={css.iconFirst} />
          <p className={css.secondDesctP}>
            {t("description.part1.courses.secThre")}
          </p>
        </div>
        <div className={css.wrapDescInSec}>
          <BsStars className={css.iconFirstStar} />
          <p className={css.secondDesctP}>
            {t("description.part1.courses.secFour")}
          </p>
        </div>
        <div className={css.wrapDescInSec}>
          <GiSupersonicArrow className={css.iconFirst} />
          <p className={css.secondDesctP}>
            {t("description.part1.courses.secFive")}
          </p>
        </div>
        <div className={css.wrapDescInSec}>
          <FaHandPeace className={css.iconFirstStarPes} />
          <p className={css.secondDesctP}>
            {t("description.part1.courses.secSix")}
          </p>
        </div>
        <div className={css.wrapDescInSec}>
          <BsHearts className={css.iconFirst} />
          <p className={css.secondDesctP}>
            {t("description.part1.courses.secSeven")}
          </p>
        </div>
      </div>
      <img src={afi} className={css.afiIcon} alt="Newton apples" />
    </section>
  );
}
