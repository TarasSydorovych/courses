import { Link } from "react-router-dom";
import css from "./header.module.css";
export default function Navigate({ t }) {
  return (
    <nav className={css.navigateL}>
      <ul className={css.navigateUl}>
        <Link className={css.navigateLiLink} to="/">
          <li className={css.navigateLifirst}>
            {t("description.part1.header.main")}
          </li>
        </Link>
        <Link className={css.navigateLiLink} to="/about">
          <li className={css.navigateLisecond}>
            {t("description.part1.header.about")}
          </li>
        </Link>
        <Link className={css.navigateLiLink} to="/course">
          <li className={css.navigateLithre}>
            {t("description.part1.header.course")}
          </li>
        </Link>

        <Link className={css.navigateLiLink} to="/">
          <li className={css.navigateLifour}>
            {t("description.part1.header.vidguk")}
          </li>
        </Link>

        <Link className={css.navigateLiLink} to="/cabinet">
          <li className={css.navigateLifive}>
            {t("description.part1.header.cabinet")}
          </li>
        </Link>
        <Link className={css.navigateLiLink} to="/contact">
          <li className={css.navigateLisix}>
            {t("description.part1.header.contact")}
          </li>
        </Link>
      </ul>
    </nav>
  );
}
