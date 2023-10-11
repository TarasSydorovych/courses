import css from "./header.module.css";

import Navigate from "./navigate";
export default function HeaderBottom({ t }) {
  return (
    <section className={css.headerBottomWrap}>
      <Navigate t={t} />
    </section>
  );
}
