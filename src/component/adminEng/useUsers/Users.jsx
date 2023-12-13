import React, { useState } from "react";
import withFirebaseCollection from "../../HOK/withFirebaseCollection";
import css from "../cabiner.module.css";
import { db } from "../../../function/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { arrayUnion, arrayRemove } from "firebase/firestore";
import UserList from "./userList";
import CheckWork from "./checkWork";
const Users = ({ data }) => {
  const [useL, setUserL] = useState(false);
  const [chackWork, setCheckWork] = useState(false);
  const urerListOpen = () => {
    setUserL(!useL);
    setCheckWork(false);
  };
  const checkW = () => {
    setUserL(false);
    setCheckWork(!chackWork);
  };

  return (
    <div className={css.usersContainer}>
      <div className={css.wrapButton}>
        <button onClick={urerListOpen}>Список користувачів</button>
        <button onClick={checkW}>Перевірка робіт</button>
      </div>
      {useL && <UserList data={data} />}
      {chackWork && <CheckWork data={data} />}
    </div>
  );
};
export default withFirebaseCollection("users")(Users);
