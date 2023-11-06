import css from "./theCourse.module.css";
export default function Advantage({ t }) {
  return (
    <section className={css.advantageWrap}>
      <h4 className={css.ourRecomend}>
        {t("description.part1.courses.titBlockOur")}
      </h4>
      <div className={css.advSmallWrap}>
        <div className={css.firstDiv}>
          <p className={css.num}>1</p>
          <p className={css.pForBlock}>
            {t("description.part1.courses.advFirstTitle")}
          </p>
          <p className={css.pForBlockTwo}>
            {t("description.part1.courses.advDescFirst")}
          </p>
          <div className={css.before}></div>
        </div>
        <div className={css.firstDiv}>
          <p className={css.num}>2</p>
          <p className={css.pForBlock}>
            {t("description.part1.courses.advSecondTitle")}
          </p>
          <p className={css.pForBlockTwo}>
            {t("description.part1.courses.advDescSecond")}
          </p>
          <div className={css.beforeO}></div>
        </div>
        <div className={css.firstDiv}>
          <p className={css.num}>3</p>
          <p className={css.pForBlock}>
            {t("description.part1.courses.advThreTitle")}
          </p>
          <p className={css.pForBlockTwo}>
            {t("description.part1.courses.advDescThre")}
          </p>
          <div className={css.beforeT}></div>
        </div>
        <div className={css.firstDiv}>
          <p className={css.num}>4</p>
          <p className={css.pForBlock}>
            {t("description.part1.courses.advFourTitle")}
          </p>
          <p className={css.pForBlockTwo}>
            {t("description.part1.courses.advDescFour")}
          </p>
          <div className={css.beforeTh}></div>
        </div>
        <div className={css.firstDiv}>
          <p className={css.num}>5</p>
          <p className={css.pForBlock}>
            {t("description.part1.courses.advFiveTitle")}
          </p>
          <p className={css.pForBlockTwo}>
            {t("description.part1.courses.advDescFive")}
          </p>
          <div className={css.beforeF}></div>
        </div>
        <div className={css.firstDiv}>
          <p className={css.num}>6</p>
          <p className={css.pForBlock}>
            {t("description.part1.courses.advSixTitle")}
          </p>
          <p className={css.pForBlockTwo}>
            {t("description.part1.courses.advDescSix")}
          </p>
          <div className={css.beforeFi}></div>
        </div>
      </div>
    </section>
  );
}
