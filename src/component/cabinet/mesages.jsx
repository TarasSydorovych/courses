import { useEffect, useState } from "react";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import css from "./cabinet.module.css";
import pic from "../../img/adm.png";
const Mesages = ({ t, userWork }) => {
  const formatDate = (dateString) => {
    const messageDate = new Date(dateString);
    const currentDate = new Date();

    if (
      messageDate.getDate() === currentDate.getDate() &&
      messageDate.getMonth() === currentDate.getMonth() &&
      messageDate.getFullYear() === currentDate.getFullYear()
    ) {
      // Якщо повідомлення додане сьогодні, виводимо тільки час
      return messageDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else {
      // Якщо повідомлення додане не сьогодні, виводимо тільки число в форматі день місяць рік
      return messageDate.toLocaleDateString();
    }
  };
  return (
    <>
      {userWork && (
        <section className={css.workWrap}>
          <h1 className={css.h1YourWork}>
            {t("description.part1.cabinet.mesa")}
          </h1>
          <div className={css.allLesWrap}>
            {userWork.myMessage
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((el, index) => (
                <div key={index} className={css.mesWrap}>
                  <img src={pic} className={css.picAdm} alt="Admin" />
                  <div className={css.wrapMesAndN}>
                    <p className={css.pAdm}>
                      {t("description.part1.cabinet.adm")}
                    </p>
                    <p className={css.pAdmMes}>{el.message}</p>
                  </div>
                  <p className={css.date}>{formatDate(el.date)}</p>
                </div>
              ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Mesages;
