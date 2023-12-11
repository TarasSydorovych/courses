import css from "./popUp.module.css";
import { useTranslation, Trans } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import newtonUkr from "../../img/logoUkr.webp";
import { useEffect, useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
  auth,
  db,
  googleAuthProvider,
  appleProvider,
  facebookProvider,
} from "../../function/firebase";
import {
  OAuthProvider,
  signInWithRedirect,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import PopUpEnter from "./popUpEnter";
export default function PopUpReg({ setPopUp, setEnter }) {
  const { t, i18n } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phonecheck, setPhonecheck] = useState(false);
  const [email, setEmail] = useState("");
  const [emailcheck, setEmailcheck] = useState(false);
  const [namecheck, setNamecheck] = useState(false);
  const openEnter = () => {
    setPopUp(false);
    setEnter(true);
  };
  const closePopUp = () => {
    setPopUp(false);
  };
  const [namecheckErr, setNamecheckErr] = useState(
    `${t("description.part1.form.warningSeconPhone")}`
  );
  const [emailcheckErr, setEmailcheckErr] = useState(
    "Поле електронної пошти не може бути порожнім"
  );
  const blurHandle = (e) => {
    switch (e.target.name) {
      case "user_name":
        setNamecheck(true);
        break;
      case "Phone":
        setPhonecheck(true);
        break;
    }
  };
  const isSubmitDisabled = phone.length < 6;
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailcheckErr("Ваш email не коректний");
    } else {
      setEmailcheckErr("");
    }
  };
  useEffect(() => {
    if (namecheckErr) {
    } else {
    }
  }, [namecheckErr, emailcheckErr]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNamecheckErr(`${t("description.part1.form.warningFirstName")}`);
      if (!e.target.value) {
        setNamecheckErr(`${t("description.part1.form.warningSecondName")}`);
      }
    } else {
      setNamecheckErr("");
    }
  };
  const namePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
  };
  const signUp = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, phone);

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName: name,
        email: res.user.email,
        photo: res.user.photoURL,
        category: "неоплачений",
        myCourse: [],
        mySubscriptions: [],
        myMessage: [],
        photos: [],
        diploms: [],
        signed: "false",
        discount: "0",
        kraftic: "0",
      });
      setPopUp(false);
    } catch (error) {
      alert("The user with this login is not registered", error);
    }
  };
  const singInWithGoogle = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleAuthProvider)
      .then(async (result) => {
        const userDocRef = doc(db, "users", result.user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          await setDoc(userDocRef, {
            uid: result.user.uid,
            displayName: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
            phone: result.user.phoneNumber,
            category: "неоплачений",
            myCourse: [],
            mySubscriptions: [],
            myMessage: [],
            signed: "false",
            discount: "0",
            kraftic: "0",
          });
        }
        setPopUp(false);
      })
      .catch((err) => {
        console.log("Error");
      });
  };

  return (
    <section className={css.popUpWrapAll}>
      <div className={css.formAllWrap}>
        <AiOutlineClose onClick={closePopUp} className={css.aiOutlineClose} />
        <img src={newtonUkr} className={css.logo} />
        <h1 className={css.regH1}>{t("description.part1.cabinet.regH")}</h1>
        <p className={css.regP}>
          {t("description.part1.cabinet.ifReg")}&nbsp;
          <span className={css.regPSpan} onClick={openEnter}>
            {t("description.part1.cabinet.vhid")}
          </span>
        </p>
        <div className={css.formWithInput}>
          {namecheck && namecheckErr && (
            <div style={{ color: "red" }}>{namecheckErr}</div>
          )}
          <input
            type="text"
            className={css.formicInputs}
            onChange={(e) => nameHandler(e)}
            onBlur={(e) => blurHandle(e)}
            name="user_name"
            id="text"
            required
            value={name}
            placeholder={t("description.part1.contact.name")}
          />
          {emailcheck && emailcheckErr && (
            <div style={{ color: "red" }}>{emailcheckErr}</div>
          )}
          <input
            type="text"
            className={css.formicInputs}
            name="user_email"
            value={email}
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandle(e)}
            placeholder="Email"
          />
          <input
            className={css.formicInputs}
            type="password"
            id="phone"
            name="Phone"
            value={phone}
            placeholder={t("description.part1.cabinet.pasww")}
            onChange={(e) => namePhone(e)}
            onBlur={(e) => blurHandle(e)}
          />
          <button onClick={singInWithGoogle} className={css.buttonFormicSend}>
            {t("description.part1.cabinet.regGoo")}
          </button>
          <button
            onClick={signUp}
            disabled={isSubmitDisabled}
            className={css.buttonFormicSend}
          >
            {t("description.part1.cabinet.regP")}
          </button>
        </div>
      </div>
    </section>
  );
}
