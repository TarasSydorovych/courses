import css from "./aboutUs.module.css";
import pic1 from "../../img/1.webp";
import pic2 from "../../img/2.webp";
import pic3 from "../../img/3.webp";
import pic4 from "../../img/4.webp";
import pic5 from "../../img/5.webp";
import { HandySvg } from "handy-svg";
import iconSrc from "../../img/im.svg";
import teac from "../../img/teach.webp";
import svgwave from "../../svg/svgwave.svg";
import svgWaveBo from "../../svg/svgWaweBottom.svg";
import Header from "../standartComponent/header/header";
export default function AboutUs({ t, setActiveUser, activeUser }) {
  return (
    <>
      <Header setActiveUser={setActiveUser} activeUser={activeUser} />
      <section className={css.aboutWrap}>
        <div className={css.sectionAboutBigWrap}>
          <p className={css.firstPInBigAvo}>
            {t("description.part1.header.about")}
          </p>
          <h2 className={css.bigAbH2}>
            {t("description.part1.aboutPage.title")}
          </h2>
          <p className={css.pNearH}>
            {" "}
            {t("description.part1.aboutPage.description")}
          </p>
          <div className={css.blockWithPicture}>
            <img src={pic1} className={css.pic1} alt="pic1" />

            <img src={pic4} className={css.pic4} alt="pic1" />
            <img src={pic5} className={css.pic5} alt="pic1" />
            <div className={css.star}></div>
            <div className={css.cir}></div>
            <HandySvg
              src={iconSrc}
              width="150"
              height="150"
              className={css.svgN}
            />
          </div>
          <button className={css.buttonWiew}>
            {t("description.part1.aboutPage.but")}
          </button>
        </div>
        <div className={css.teacherWrap}>
          <img src={svgwave} alt="Wavy SVG" className={css.wavysvg} />
          <p className={css.firstPInBigAvo}>
            {t("description.part1.aboutPage.aboutTeacher")}
          </p>
          <h2 className={css.bigAbH2}>
            {t("description.part1.aboutPage.abotTitleTeacher")}
          </h2>
          <p className={css.pNearH}>
            {" "}
            {t("description.part1.aboutPage.teacherDesc")}
          </p>
          <div className={css.wrapFlex}>
            <div className={css.teacherWrapSmal}>
              <div className={css.wrapBlockTe}>
                <img src={teac} className={css.teacher} alt="Our teacher" />
                <p className={css.teacherName}>
                  {" "}
                  {t("description.part1.aboutPage.teacherFirstName")}
                </p>
                <p className={css.teacherProfesion}>
                  {t("description.part1.aboutPage.teacherFirstSmallDesc")}
                </p>
                <p className={css.teacherWillDo}>
                  {t("description.part1.aboutPage.teacherFirstBidDesc")}
                </p>
              </div>
            </div>
            <div className={css.teacherWrapSmal}>
              <div className={css.wrapBlockTe}>
                <img src={teac} className={css.teacher} alt="Our teacher" />
                <p className={css.teacherName}>
                  {" "}
                  {t("description.part1.aboutPage.teacherFirstName")}
                </p>
                <p className={css.teacherProfesion}>
                  {t("description.part1.aboutPage.teacherFirstSmallDesc")}
                </p>
                <p className={css.teacherWillDo}>
                  {t("description.part1.aboutPage.teacherFirstBidDesc")}
                </p>
              </div>
            </div>
            <div className={css.teacherWrapSmal}>
              <div className={css.wrapBlockTe}>
                <img src={teac} className={css.teacher} alt="Our teacher" />
                <p className={css.teacherName}>
                  {" "}
                  {t("description.part1.aboutPage.teacherFirstName")}
                </p>
                <p className={css.teacherProfesion}>
                  {t("description.part1.aboutPage.teacherFirstSmallDesc")}
                </p>
                <p className={css.teacherWillDo}>
                  {t("description.part1.aboutPage.teacherFirstBidDesc")}
                </p>
              </div>
            </div>
            <div className={css.teacherWrapSmal}>
              <div className={css.wrapBlockTe}>
                <img src={teac} className={css.teacher} alt="Our teacher" />
                <p className={css.teacherName}>
                  {" "}
                  {t("description.part1.aboutPage.teacherFirstName")}
                </p>
                <p className={css.teacherProfesion}>
                  {t("description.part1.aboutPage.teacherFirstSmallDesc")}
                </p>
                <p className={css.teacherWillDo}>
                  {t("description.part1.aboutPage.teacherFirstBidDesc")}
                </p>
              </div>
            </div>
            <img src={svgWaveBo} alt="Wavy SVG" className={css.wavysvgBottom} />
          </div>
        </div>
        <div className={css.aboutOwnerWrap}>
          <img src={teac} className={css.teacher} alt="Our teacher" />
          <h2 className={css.ownerDesc}>
            {" "}
            {t("description.part1.aboutPage.ownerTitle")}
          </h2>
          <p className={css.ownerName}>
            {" "}
            {t("description.part1.aboutPage.ownerDesc")}
          </p>
        </div>
      </section>
    </>
  );
}
