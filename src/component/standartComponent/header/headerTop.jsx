import css from "./header.module.css";
import {
  AiOutlineInstagram,
  AiOutlineUser,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import en from "../../../img/lanEng.jpg";
import ukr from "../../../img/lanUkr.jpg";
import { useState } from "react";
import logoUkr from "../../../img/logoUkr.webp";
import { useNavigate } from "react-router-dom";
import PopUpReg from "../../popUpReg/popUpReg";
import PopUpEnter from "../../popUpReg/popUpEnter";
export default function HeaderTop({ t, activeUser }) {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  const [enter, setEnter] = useState(false);

  const showReg = () => {
    if (activeUser) {
      navigate("/cabinet");
    } else {
      setPopUp(!popUp);
    }
  };
  return (
    <section className={css.headerTopWrap}>
      <div className={css.wrapSocial}>
        <AiOutlineInstagram className={css.iOutlineInstagram} />
        <AiOutlineWhatsApp className={css.whatApp} />
      </div>
      <img src={logoUkr} alt="ньютонові яблучка" className={css.logoSt} />

      <div className={css.wrapLogin}>
        <div className={css.wrapLog} onClick={showReg}>
          {!activeUser && (
            <p className={css.pLofg}> {t("description.part1.header.log")}</p>
          )}
          {activeUser && <p className={css.pLofg}>{activeUser.displayName}</p>}

          <AiOutlineUser className={css.iOutlineUser} />
        </div>
      </div>
      {popUp && <PopUpReg setPopUp={setPopUp} setEnter={setEnter} />}
      {enter && <PopUpEnter setPopUp={setPopUp} setEnter={setEnter} />}
    </section>
  );
}
