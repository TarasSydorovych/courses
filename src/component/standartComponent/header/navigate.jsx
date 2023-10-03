import { Link } from "react-router-dom";
import css from "./header.module.css";
export default function Navigate({ t }) {
  return (
    <nav className={css.navigateL}>
      <ul className={css.navigateUl}>
        <li className={css.navigateLi}>
          <Link className={css.navigateLiLink} to="/">
            {t("description.part1.header.main")}
          </Link>
        </li>
        <li className={css.navigateLiGre}>
          <Link className={css.navigateLiLink} to="/">
            {t("description.part1.header.about")}
          </Link>
        </li>
        <li className={css.navigateLiRed}>
          <Link className={css.navigateLiLink} to="/">
            {t("description.part1.header.course")}
          </Link>
        </li>
        <li className={css.navigateLi}>
          <Link className={css.navigateLiLink} to="/">
            {t("description.part1.header.vidguk")}
          </Link>
        </li>
        <li className={css.navigateLiGre}>
          <Link className={css.navigateLiLink} to="/cabinet">
            {t("description.part1.header.cabinet")}
          </Link>
        </li>
        <li className={css.navigateLiRed}>
          <Link className={css.navigateLiLink} to="/contact">
            {t("description.part1.header.contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
