import css from "./footer.module.css";
import logoUkr from "../../../img/logoUkr.webp";
import { useTranslation, Trans } from "react-i18next";
import {
  AiOutlineInstagram,
  AiOutlineUser,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import logoEng from "../../../img/logoEn.webp";
export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className={css.footerAllWrap}>
      <div className={css.wrapFooterSmall}>
        <div className={css.wrapLogo}>
          {i18n.language === "ua" && (
            <img src={logoUkr} alt="ньютонові яблучка" className={css.logoSt} />
          )}
          {i18n.language === "en" && (
            <img src={logoEng} alt="ньютонові яблучка" className={css.logoSt} />
          )}
          <p className={css.number}>
            <a className={css.number}>+38(093)-999-22-33</a>
          </p>
        </div>
        <div className={css.wrapNavigation}>
          <div className={css.wrapSocialIcon}>
            <div className={css.social}>
              <AiOutlineInstagram className={css.aiOutlineInstagram} />
            </div>
            <div className={css.social}>
              <AiOutlineWhatsApp className={css.aiOutlineInstagram} />
            </div>
          </div>
          <nav className={css.footerNavWrap}>
            <ul className={css.footerUl}>
              <li className={css.footerLi}>
                <Link className={css.footerLi} to="/">
                  {t("description.part1.header.main")}
                </Link>
              </li>
              <li className={css.footerLi}>
                <Link className={css.footerLi} to="/">
                  {t("description.part1.header.about")}
                </Link>
              </li>
              <li className={css.footerLi}>
                <Link className={css.footerLi} to="/">
                  {t("description.part1.header.course")}
                </Link>
              </li>
              <li className={css.footerLi}>
                <Link className={css.footerLi} to="/">
                  {t("description.part1.header.vidguk")}
                </Link>
              </li>
              <li className={css.footerLi}>
                <Link className={css.footerLi} to="/">
                  {t("description.part1.header.cabinet")}
                </Link>
              </li>
              <li className={css.footerLi}>
                <Link className={css.footerLi} to="/">
                  {t("description.part1.header.contact")}
                </Link>
              </li>
            </ul>
          </nav>
          <div className={css.priv}>
            <Link className={css.privLink} to="/">
              {t("description.part1.header.newtom")} © 2023. Privacy Policy
            </Link>
            <a
              className={css.privLink}
              href="https://webui-studio.com/"
              target="_blanck"
            >
              {t("description.part1.header.webUI")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
