import css from "./contact.module.css";
import { IoMdMail } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";

import { useTranslation } from "react-i18next";
import keyWord from "../../function/keyWord";
import { useState, useRef, useEffect } from "react";

import sendEmail from "../../function/sendMessage";
import Header from "../standartComponent/header/header";
export default function Contact({ setActiveUser, activeUser }) {
  const { t } = useTranslation();
  const form = useRef();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonecheck, setPhonecheck] = useState(false);
  const [namecheck, setNamecheck] = useState(false);
  const [clickCH, setClickCH] = useState(false);
  const [clickCHErr, setClickCHErr] = useState("Заповніть усі поля");
  const [emailcheck, setEmailcheck] = useState(false);
  const [phonecheckErr, setPhonecheckErr] = useState("Ваш телефон некоректний");
  const [namecheckErr, setNamecheckErr] = useState(
    `${t("description.part1.form.warningSeconPhone")}`
  );
  const [emailcheckErr, setEmailcheckErr] = useState(
    "Поле електронної пошти не може бути порожнім"
  );
  const [validFrom, setValidFrom] = useState(false);
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
    if (phonecheckErr || namecheckErr) {
      setValidFrom(false);

      setClickCHErr(`${t("description.part1.form.allInp")}`);
    } else {
      setValidFrom(true);
      setClickCHErr("");
    }
  }, [phonecheckErr, namecheckErr, emailcheckErr]);

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
    const num = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (
      !value ||
      (value && value.match(/\d/g) && value.match(/\d/g).length < 10)
    ) {
      setPhonecheckErr(`${t("description.part1.form.warningFirstPhone")}`);
    } else {
      setPhonecheckErr("");
    }
  };
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
  const isSubmitDisabled = phone.length < 10;
  return (
    <>
      <Header setActiveUser={setActiveUser} activeUser={activeUser} />
      <section className={css.contactWrap}>
        <div className={css.conWr}>
          <p className={css.firstPInBigAvo}>
            {t("description.part1.contact.titleFirst")}
          </p>
          <h2 className={css.bigAbH2}>
            {t("description.part1.contact.titleFirstBig")}
          </h2>
          <p className={css.pNearH}>
            {" "}
            {t("description.part1.contact.descFirst")}
          </p>
          <div className={css.wrapBlockMail}>
            <div className={css.emailBlock}>
              <IoMdMail className={css.ioMdMail} />
              <p className={css.mailB}>
                {t("description.part1.contact.blockEmailUsT")}
              </p>
              <p className={css.mailBDesc}>
                {t("description.part1.contact.blockEmailUsDesc")}
              </p>
              <a
                href="mailto:newtonapplescourse@gmail.com"
                className={css.mailHref}
              >
                newtonapplescourse@gmail.com
              </a>
            </div>
            <div className={css.phoneBlock}>
              <AiFillPhone className={css.ioMdMail} />
              <p className={css.mailB}>
                {t("description.part1.contact.blockPhoneUsT")}
              </p>
              <p className={css.mailBDesc}>
                {t("description.part1.contact.blockPhoneUsDesc")}
              </p>
              <a href="tel:+1234567890" className={css.mailHref}>
                +1 000 10 87 000;
              </a>
              <a href="tel:+1234567890" className={css.mailHref}>
                +1 000 10 87 000;
              </a>
            </div>
          </div>
        </div>
        <div className={css.conWr}>
          <p className={css.firstPInBigAvo}>
            {t("description.part1.contact.blockFormT")}
          </p>
          <h2 className={css.bigAbH2}>
            {t("description.part1.contact.bloclFOrmTB")}
          </h2>
          <p className={css.pNearH}>
            {" "}
            {t("description.part1.contact.blockFormDesc")}
          </p>
          <form
            type="submit"
            ref={form}
            onSubmit={(e) => {
              if (!validFrom) {
                e.preventDefault();
                setClickCH(true);
                setClickCHErr("Заповніть усі деталі");
              } else {
                setClickCHErr("");
                sendEmail(form, e);
                setName("");
                setPhone("");
                setEmail("");
              }
            }}
            className={css.formWrap}
          >
            <div className={css.firsAdmT}>
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
            </div>
            {phonecheck && phonecheckErr && (
              <div style={{ color: "red" }}>{phonecheckErr}</div>
            )}
            <input
              className={css.formicInputsSec}
              type="tel"
              id="phone"
              name="Phone"
              value={phone}
              placeholder={t("description.part1.contact.phone")}
              onChange={(e) => namePhone(e)}
              onBlur={(e) => blurHandle(e)}
            />
            <textarea
              className={css.formicArea}
              placeholder={t("description.part1.contact.mes")}
              name="message"
            />
            <button
              disabled={isSubmitDisabled}
              className={css.buttonFormicSend}
            >
              {t("description.part1.contact.buttonSend")}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
