import css from "./blogPage.module.css";
export default function TwoBlock({ curProd, paragraphs }) {
  return (
    <section className={css.twoBlockWrap}>
      <div className={css.twoBWrapText}>
        <h2 className={css.twoH2}>{curProd.title}</h2>
        <p className={css.twoP}>{paragraphs}</p>
      </div>
      <img
        src={curProd.fotoUrl}
        className={css.picInD}
        alt={`${curProd.title}`}
      />
    </section>
  );
}
