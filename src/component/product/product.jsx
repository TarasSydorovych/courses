import css from "./product.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { db, auth } from "../../function/firebase";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { AiFillCamera } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import sha1 from "sha1";
const Product = ({
  isOpen,
  onClose,
  courseUid,
  price,
  t,
  curency,
  data,
  userData,
}) => {
  const uid = uuidv4();
  const [promoCode, setPromoCode] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [promoApplied, setPromoApplied] = useState(false); // Додайте стан для відстеження застосованої промокоду
  const [krafticApplied, setKrafticApplied] = useState(false);
  const contentStyle = { width: "600px", borderRadius: "10px" };
  const handleApplyPromoCode = useCallback(async () => {
    if (!promoApplied && data && data.length > 0) {
      const promoData = data[0];
      if (promoData.uid === promoCode) {
        const discountPercentage = parseFloat(promoData.discount);
        const discountAmount = (finalPrice * discountPercentage) / 100;
        const newFinalPrice = finalPrice - discountAmount;

        setFinalPrice(newFinalPrice.toFixed(2));
        setPromoApplied(true);
      }
    }
  }, [data, promoCode, finalPrice, promoApplied]);

  const handleApplyKraf = useCallback(() => {
    if (!krafticApplied && userData && userData.kraftic !== "") {
      const krafticAmount = parseFloat(userData.kraftic);
      const newFinalPrice = finalPrice - krafticAmount;

      setFinalPrice(newFinalPrice.toFixed(2));
      setKrafticApplied(true);
    }
  }, [userData, finalPrice, krafticApplied]);
  const payParam = () => {
    document.querySelector("form").submit();
  };
  useEffect(() => {
    setFinalPrice(price);
  }, []);
  console.log(data);
  const params = {
    order_id: `ID${uid}`,
    order_desc: courseUid,
    currency: curency,
    amount: `${finalPrice * 100}`,
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
          {userData && userData.kraftic !== "" && (
            <div className={css.discountWrapOrder}>
              <p className={css.forJoinPromoBalance}>
                {t("description.part1.modal.kra")}&nbsp;{userData.kraftic}&nbsp;
                {t("description.part1.modal.kraAf")}
              </p>
              <div className={css.promoButton} onClick={handleApplyKraf}>
                {t("description.part1.modal.cnM")}
              </div>
            </div>
          )}
          <p className={css.forJoinPromo}>
            {t("description.part1.modal.promo")}
          </p>

          <div className={css.discountWrapOrder}>
            <input
              className={css.promoInput}
              type="text"
              placeholder="Промокод"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <div className={css.promoButton} onClick={handleApplyPromoCode}>
              {t("description.part1.modal.cn")}
            </div>
          </div>

          <form
            action="https://pay.fondy.eu/api/checkout/redirect/"
            method="POST"
          >
            <input type="hidden" name="merchant_id" value="1396424" />
            <input type="hidden" name="order_id" value={`ID${uid}`} />
            <input type="hidden" name="order_desc" value={`${courseUid}`} />
            <input type="hidden" name="currency" value={curency} />
            <input type="hidden" name="amount" value={`${finalPrice * 100}`} />
            <input type="hidden" name="signature" value={signature} />

            <button
              type="submit"
              className={css.orderConfirmation}
              onClick={payParam}
            >
              {t("description.part1.modal.button")}&nbsp;{finalPrice}{" "}
              {t("description.part1.modal.cur")}
            </button>
          </form>
          <div className={css.videoTextWr}></div>
        </div>
      )}
    </Popup>
  );
};

export default withFirebaseCollection("promo")(Product);
