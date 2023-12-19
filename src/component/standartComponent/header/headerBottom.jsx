import { useEffect, useState } from "react";
import css from "./header.module.css";

import Navigate from "./navigate";
export default function HeaderBottom({ t, activeUser, setPopUp, popUp }) {
  const [burgerTrue, setBurgerTrue] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1100) {
        setWindowDimensions(false);
      } else {
        setWindowDimensions(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const burgerMen = () => {
    setBurgerTrue(true);
  };
  const closeBurger = () => {
    setBurgerTrue(false);
  };

  return (
    <section className={css.headerBottomWrap}>
      <Navigate
        setPopUp={setPopUp}
        popUp={popUp}
        t={t}
        activeUser={activeUser}
      />
    </section>
  );
}
