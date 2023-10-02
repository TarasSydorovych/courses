import css from "./header.module.css";
import HeaderBottom from "./headerBottom";
import HeaderTop from "./headerTop";
import { useTranslation, Trans } from "react-i18next";
export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className={css.headerFullWrap}>
      <HeaderTop t={t} />
      <HeaderBottom t={t} />
    </header>
  );
}
