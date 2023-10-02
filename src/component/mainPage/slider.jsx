import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from "./main.module.css";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import slide from "../../img/slide12.webp";
export default function Slider() {
  return (
    <section className={css.sliderWrap}>
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
          <img src={slide} className={css.picInSlide} alt="ньтонові яблука" />
        </div>
      </Carousel>
    </section>
  );
}
