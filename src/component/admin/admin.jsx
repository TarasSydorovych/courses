import Header from "../standartComponent/header/header";
import Footer from "../standartComponent/footer/footer";
import css from "./cabiner.module.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../../function/firebase";
import UaVersion from "./uaVersion";
import EnVersion from "../adminEng/enVersion";
export default function Admin() {
  const navigate = useNavigate();
  const [adminIn, setAdminIn] = useState(false);
  const [addAuto, setAddAuto] = useState(false);
  const [ua, setUa] = useState(false);
  const [en, setEn] = useState(false);

  // const signInWithGoogle = async () => {
  // 	try {
  // 		// Починаємо процес входу через Google у спливаючому вікні
  // 		const result = await signInWithPopup(auth, googleAuthProvider);

  // 		// Отримуємо дані користувача з результату входу
  // 		const user = result.user;
  // 		const email = user.email; // Email користувача

  // 		if (email === 'rentautoukraine.com@gmail.com') {
  // 			setAdminIn(true);
  // 		} else {
  // 			navigate('/');
  // 		}
  // 	} catch (error) {
  // 		console.error('Помилка входу через Google:', error);
  // 	}
  // };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const email = authUser.email;
        if (email === "newtonapplescourse@gmail.com") {
          setAdminIn(true);
        } else {
          navigate("/");
        }
      } else {
        // Користувач вийшов, робіть необхідні дії
        setAdminIn(false);
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleAuthProvider)
      .then(async (result) => {
        const user = result.user;
        const email = user.email;
        if (email === "newtonapplescourse@gmail.com") {
          setAdminIn(true);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("Error");
      });
  };
  // const signOutUser = async () => {
  // 	try {
  // 		// Виконуємо вихід користувача
  // 		await signOut(auth);
  // 		window.location.reload();
  // 	} catch (error) {
  // 		console.error('Помилка виходу:', error);
  // 	}
  // };
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const changeUa = () => {
    setUa(!ua);
    setEn(false);
  };
  const changeEa = () => {
    setUa(false);
    setEn(!en);
  };

  return (
    <>
      <div className={css.wrapButtonIn}>
        <button className={css.buttonLog} onClick={signInWithGoogle}>
          Авторизуйтесь
        </button>
        {adminIn && (
          <button className={css.buttonLog} onClick={signOutUser}>
            Вийти
          </button>
        )}
      </div>
      {adminIn && (
        <div className={css.listCorrect}>
          <ul className={css.ulList}>
            <li className={css.liList} onClick={changeUa}>
              Українська версія
            </li>
            <li className={css.liList} onClick={changeEa}>
              Англійська версія
            </li>
          </ul>
        </div>
      )}

      <div className={css.wrapCha}></div>
      {ua && <UaVersion />}
      {en && <EnVersion />}
    </>
  );
}
