import css from "./header.module.css";
import logoUkr from "../../../img/logoUkr.webp";
import Navigate from "./navigate";
export default function HeaderBottom({ t }) {
  return (
    <section className={css.headerBottomWrap}>
      <img src={logoUkr} alt="ньютонові яблучка" className={css.logoSt} />
      <Navigate t={t} />
    </section>
  );
}
