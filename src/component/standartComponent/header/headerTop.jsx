import css from "./header.module.css";
import {
  AiOutlineInstagram,
  AiOutlineUser,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { useLocation, useParams } from "react-router-dom";

import en from "../../../img/lanEng.jpg";
import ukr from "../../../img/lanUkr.jpg";
import { useEffect, useState } from "react";
import logoUkr from "../../../img/logoUkr.webp";
import logoEng from "../../../img/logoEn.webp";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import PopUpReg from "../../popUpReg/popUpReg";
import PopUpEnter from "../../popUpReg/popUpEnter";
import withFirebaseCollection from "../../HOK/withFirebaseCollection";

const HeaderTop = ({ activeUser, data, setPopUp, popUp }) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [refUse, setRefUse] = useState(null);
  const [referId, setReferId] = useState("");

  const { t, i18n } = useTranslation();
  const [enter, setEnter] = useState(false);
  const referralString = localStorage.getItem("referral");

  // Перетворити рядок JSON у об'єкт
  const referral = referralString ? JSON.parse(referralString) : null;
  const cahangeUkr = () => {
    i18n.changeLanguage("ua");
  };
  const cahangeEn = () => {
    i18n.changeLanguage("en");
  };
  const showReg = () => {
    if (activeUser) {
      navigate("/cabinet");
    } else {
      setPopUp(!popUp);
    }
  };
  useEffect(() => {
    if (location.pathname.startsWith("/referral/")) {
      // Перевірка, чи є значення "referral" вже в локальному сховищі
      const existingReferral = localStorage.getItem("referral");
      if (!existingReferral) {
        if (data.length > 0) {
          // Перевірка, чи params.id існує в масиві data
          const isPromoCodeValid = data.some((item) => item.uid === params.id);
          if (isPromoCodeValid) {
            setPopUp(true);
            localStorage.setItem(
              "referral",
              JSON.stringify({
                uid: params.id,
                isActive: false,
              })
            );
            setReferId(params.id);
            setRefUse(isPromoCodeValid);
            // Тут ви можете робити щось зі значенням "referral"
          } else {
            alert(`${t("description.part1.header.prom")}`);
          }
        }
      } else {
        console.log(
          "Referral already exists in localStorage:",
          existingReferral
        );
      }
    } else {
      console.log("Not a referral path");
    }
  }, [data]);
  return (
    <section className={css.headerTopWrap}>
      <div className={css.wrapSocial}>
        <AiOutlineInstagram className={css.iOutlineInstagram} />
        <AiOutlineWhatsApp className={css.whatApp} />
      </div>
      {i18n.language === "ua" && (
        <img src={logoUkr} alt="ньютонові яблучка" className={css.logoSt} />
      )}
      {i18n.language === "en" && (
        <img src={logoEng} alt="ньютонові яблучка" className={css.logoSt} />
      )}

      <div className={css.wrapLogin}>
        <div className={css.wrapLanguage}>
          <p className={css.theLanguage} onClick={cahangeUkr}>
            UA
          </p>
          <p className={css.theLanguage} onClick={cahangeEn}>
            EN
          </p>
        </div>
        <div className={css.wrapLog} onClick={showReg}>
          {!activeUser && (
            <p className={css.pLofg}> {t("description.part1.header.log")}</p>
          )}
          {activeUser && <p className={css.pLofg}>{activeUser.displayName}</p>}

          <AiOutlineUser className={css.iOutlineUser} />
        </div>
      </div>
      {popUp && (
        <PopUpReg
          refUse={refUse}
          referId={referId}
          setPopUp={setPopUp}
          setEnter={setEnter}
          data={data}
        />
      )}
      {enter && <PopUpEnter setPopUp={setPopUp} setEnter={setEnter} />}
    </section>
  );
};
export default withFirebaseCollection("users")(HeaderTop);
