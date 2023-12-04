import css from "./product.module.css";
import { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { db, auth } from "../../function/firebase";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { AiFillCamera } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import sha1 from "sha1";
const Product = ({ isOpen, onClose, courseUid, price, t, curency }) => {
  const uid = uuidv4();
  const contentStyle = { width: "600px", borderRadius: "10px" };
  const payParam = () => {
    document.querySelector("form").submit();
  };
  const params = {
    order_id: `ID${uid}`,
    order_desc: courseUid,
    currency: curency,
    amount: `${price * 100}`,
    merchant_id: "1396424",
  };
  const getSignature = (merchant_id, password, params) => {
    const orderKey = Object.keys(params).sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    const signatureRow = orderKey.map((v) => params[v]).join("|");

    return sha1(`${password}|${signatureRow}`);
  };

  const merchant_id = "1396424";
  const password = "test";
  const signature = getSignature(merchant_id, password, params);

  return (
    <Popup
      open={isOpen}
      onClose={onClose}
      modal
      nested
      {...{
        contentStyle,
      }}
    >
      {(close) => (
        <div className={css.modal}>
          <button className={css.close} onClick={close}>
            &times;
          </button>
          <p className={css.forJoin}>{t("description.part1.modal.title")}</p>
          <form
            action="https://pay.fondy.eu/api/checkout/redirect/"
            method="POST"
          >
            <input type="hidden" name="merchant_id" value="1396424" />
            <input type="hidden" name="order_id" value={`ID${uid}`} />
            <input type="hidden" name="order_desc" value={`${courseUid}`} />
            <input type="hidden" name="currency" value={curency} />
            <input type="hidden" name="amount" value={`${price * 100}`} />
            <input type="hidden" name="signature" value={signature} />

            <button
              type="submit"
              className={css.orderConfirmation}
              onClick={payParam}
            >
              {t("description.part1.modal.button")}&nbsp;{price}{" "}
              {t("description.part1.modal.cur")}
            </button>
          </form>
          <div className={css.videoTextWr}></div>
        </div>
      )}
    </Popup>
  );
};

export default withFirebaseCollection("video")(Product);
