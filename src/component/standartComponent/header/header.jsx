import css from "./header.module.css";
import HeaderBottom from "./headerBottom";
import HeaderTop from "./headerTop";
import { useTranslation, Trans } from "react-i18next";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../../../function/firebase";
export default function Header({ setActiveUser, activeUser }) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const email = authUser.email;
        setActiveUser(authUser);
      } else {
        // Користувач вийшов, робіть необхідні дії

        setActiveUser("");
      }
    });

    return () => unsubscribe();
  }, [auth]);
  return (
    <header className={css.headerFullWrap}>
      <HeaderTop t={t} activeUser={activeUser} />
      <HeaderBottom t={t} />
    </header>
  );
}
