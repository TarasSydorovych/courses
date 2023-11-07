import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from "./main.module.css";
import { HandySvg } from "handy-svg";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import slide from "../../img/slide12.webp";
import svgs from "../../img/Vector-2.webp";
export default function Slider({ t }) {
  return (
    <section className={css.sliderWrap}>
      <div className={css.wrapHTex}>
        <h1 className={css.wakeGen}>{t("description.part1.header.wakeH")}</h1>
        <p className={css.wakeP}>{t("description.part1.header.wakeDesc")}</p>
        <button className={css.buttonWake}>
          {t("description.part1.header.butWake")}
        </button>
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showArrows
        showThumbs={false}
        showStatus={false}
        prevArrow={<MdArrowLeft className={css.mdArrowLeft} />}
        nextArrow={<MdArrowRight className={css.mdArrowLeft} />}
      >
        <div className={css.wrapPic}>
          <img src={svgs} className={css.picInSlide} alt="ньтонові яблука" />
        </div>
      </Carousel>
    </section>
  );
}
