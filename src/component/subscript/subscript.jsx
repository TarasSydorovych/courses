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
import picO from "../../img/Group-178.webp";
import picT from "../../img/Group-169.webp";
import picTh from "../../img/Group-169-1.webp";
import picMol from "../../img/mol.png";
const Subscript = ({
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

  const contentStyle = { width: "auto", borderRadius: "10px" };

  const payParam = () => {
    document.querySelector("form").submit();
  };

  const params = {
    order_id: `ID${uid}`,
    order_desc: courseUid,
    currency: curency,
    amount: `${finalPrice * 100}`,
    merchant_id: "1396424",
  };

  const getSignature = (merchant_id, password, params, price) => {
    const paramsQ = {
      order_id: `ID${uid}`,
      order_desc: courseUid,
      currency: curency,
      amount: `${price * 100}`,
      merchant_id: "1396424",
    };
    const orderKey = Object.keys(paramsQ).sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    const signatureRow = orderKey.map((v) => paramsQ[v]).join("|");

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
        <>
          {data.length > 0 && (
            <div className={css.modal}>
              <button className={css.close} onClick={close}>
                &times;
              </button>
              <p className={css.byTheSub}>
                {" "}
                {t("description.part1.modal.courS")}
              </p>
              <p className={css.byTheSuDesc}>
                {t("description.part1.modal.courD")}
              </p>
              <div className={css.wrapPaymenTerm}>
                <div className={css.wrapPayment}>
                  <p className={css.minTarif}>
                    {t("description.part1.modal.tarifT")}
                  </p>
                  <p className={css.minTarifDesc}>
                    {t("description.part1.modal.nameOne")}
                  </p>
                  <p className={css.minTarifDescM}>
                    {t("description.part1.modal.tarifDesOne")}
                  </p>
                  <form
                    action="https://pay.fondy.eu/api/checkout/redirect/"
                    method="POST"
                  >
                    <input type="hidden" name="merchant_id" value="1396424" />
                    <input type="hidden" name="order_id" value={`ID${uid}`} />
                    <input
                      type="hidden"
                      name="order_desc"
                      value={`${courseUid}`}
                    />
                    <input type="hidden" name="currency" value={curency} />
                    <input
                      type="hidden"
                      name="amount"
                      value={`${data[0].month * 100}`}
                    />
                    <input
                      type="hidden"
                      name="signature"
                      value={getSignature(
                        merchant_id,
                        password,
                        params,
                        data[0].month
                      )}
                    />

                    <button
                      type="submit"
                      className={css.orderConfirmation}
                      onClick={payParam}
                    >
                      {t("description.part1.modal.button")}&nbsp;{data[0].month}{" "}
                      {t("description.part1.modal.cur")}
                    </button>
                  </form>
                  <img src={picMol} className={css.wrapPicFirst} alt="mol" />
                </div>
                <div className={css.wrapPayment}>
                  <p className={css.minTarif}>
                    {t("description.part1.modal.tarifT")}
                  </p>
                  <p className={css.minTarifDesc}>
                    {t("description.part1.modal.standart")}
                  </p>
                  <p className={css.minTarifDescM}>
                    {t("description.part1.modal.twoM")}
                  </p>
                  <form
                    action="https://pay.fondy.eu/api/checkout/redirect/"
                    method="POST"
                  >
                    <input type="hidden" name="merchant_id" value="1396424" />
                    <input type="hidden" name="order_id" value={`ID${uid}`} />
                    <input
                      type="hidden"
                      name="order_desc"
                      value={`${courseUid}`}
                    />
                    <input type="hidden" name="currency" value={curency} />
                    <input
                      type="hidden"
                      name="amount"
                      value={`${data[0].threM * 100}`}
                    />
                    <input
                      type="hidden"
                      name="signature"
                      value={getSignature(
                        merchant_id,
                        password,
                        params,
                        data[0].threM
                      )}
                    />

                    <button
                      type="submit"
                      className={css.orderConfirmation}
                      onClick={payParam}
                    >
                      {t("description.part1.modal.button")}&nbsp;{data[0].threM}{" "}
                      {t("description.part1.modal.cur")}
                    </button>
                  </form>
                  <img src={picMol} className={css.wrapPicFirst} alt="mol" />
                </div>
                <div className={css.wrapPayment}>
                  <p className={css.minTarif}>
                    {t("description.part1.modal.tarifT")}
                  </p>
                  <p className={css.minTarifDesc}>
                    {t("description.part1.modal.syp")}
                  </p>
                  <p className={css.minTarifDescM}>
                    {t("description.part1.modal.pivY")}
                  </p>
                  <form
                    action="https://pay.fondy.eu/api/checkout/redirect/"
                    method="POST"
                  >
                    <input type="hidden" name="merchant_id" value="1396424" />
                    <input type="hidden" name="order_id" value={`ID${uid}`} />
                    <input
                      type="hidden"
                      name="order_desc"
                      value={`${courseUid}`}
                    />
                    <input type="hidden" name="currency" value={curency} />
                    <input
                      type="hidden"
                      name="amount"
                      value={`${data[0].sixM * 100}`}
                    />
                    <input
                      type="hidden"
                      name="signature"
                      value={getSignature(
                        merchant_id,
                        password,
                        params,
                        data[0].sixM
                      )}
                    />

                    <button
                      type="submit"
                      className={css.orderConfirmation}
                      onClick={payParam}
                    >
                      {t("description.part1.modal.button")}&nbsp;{data[0].sixM}{" "}
                      {t("description.part1.modal.cur")}
                    </button>
                  </form>
                  <img src={picMol} className={css.wrapPicFirst} alt="mol" />
                </div>
                <div className={css.wrapPayment}>
                  <p className={css.minTarif}>
                    {t("description.part1.modal.tarifT")}
                  </p>
                  <p className={css.minTarifDesc}>
                    {t("description.part1.modal.maks")}
                  </p>
                  <p className={css.minTarifDescM}>
                    {t("description.part1.modal.year")}
                  </p>
                  <form
                    action="https://pay.fondy.eu/api/checkout/redirect/"
                    method="POST"
                  >
                    <input type="hidden" name="merchant_id" value="1396424" />
                    <input type="hidden" name="order_id" value={`ID${uid}`} />
                    <input
                      type="hidden"
                      name="order_desc"
                      value={`${courseUid}`}
                    />
                    <input type="hidden" name="currency" value={curency} />
                    <input
                      type="hidden"
                      name="amount"
                      value={`${data[0].year * 100}`}
                    />
                    <input
                      type="hidden"
                      name="signature"
                      value={getSignature(
                        merchant_id,
                        password,
                        params,
                        data[0].year
                      )}
                    />

                    <button
                      type="submit"
                      className={css.orderConfirmation}
                      onClick={payParam}
                    >
                      {t("description.part1.modal.button")}&nbsp;{data[0].year}{" "}
                      {t("description.part1.modal.cur")}
                    </button>
                  </form>
                  <img src={picMol} className={css.wrapPicFirst} alt="mol" />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Popup>
  );
};

export default withFirebaseCollection("tariff")(Subscript);
