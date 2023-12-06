import css from "../cabiner.module.css";
import { db } from "../../../function/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { arrayUnion, arrayRemove } from "firebase/firestore";
import React, { useState } from "react";
export default function UserList({ data }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const handleWorkSaveClick = async () => {
    if (selectedUser && editedUser) {
      await updateUserDataInFirebase(selectedUser.uid, editedUser);
      setSelectedUser(null);
      setEditedUser(null);
    }
  };
  const updateUserDataInFirebase = async (uid, updatedUserData) => {
    const userDocRef = doc(db, "users", uid);

    try {
      await updateDoc(userDocRef, updatedUserData);
      console.log("User data updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error updating user data:", error.message);
    }
  };

  const handleUserClick = (user) => {
    if (selectedUser === user) {
      setSelectedUser(null);
      setEditedUser(null);
    } else {
      setSelectedUser(user);
      setEditedUser({ ...user });
    }
  };

  const handleInputChange = (e, field) => {
    setEditedUser({ ...editedUser, [field]: e.target.value });
  };

  const handleCourseChange = (e, index) => {
    const updatedCourses = [...editedUser.myCourse];
    updatedCourses[index] = e.target.value;
    setEditedUser((prev) => ({ ...prev, myCourse: updatedCourses }));
  };

  const handleNewCourse = () => {
    setEditedUser((prev) => ({
      ...prev,
      myCourse: prev.myCourse ? [...prev.myCourse, ""] : [""],
    }));
  };

  const handleMessageChange = (e, index) => {
    const updatedMessages = [...editedUser.myMessage];
    updatedMessages[index] = e.target.value;
    setEditedUser((prev) => ({ ...prev, myMessage: updatedMessages }));
  };
  const handleWorkInputChange = (e, field, index) => {
    const updatedPhotos = [...editedUser.photos];
    updatedPhotos[index] = {
      ...updatedPhotos[index],
      [field]: e.target.value,
    };
    setEditedUser((prev) => ({ ...prev, photos: updatedPhotos }));
    console.log(updatedPhotos);
  };
  const handleNewMessage = () => {
    setEditedUser((prev) => ({
      ...prev,
      myMessage: prev.myMessage ? [...prev.myMessage, ""] : [""],
    }));
  };

  const handleSaveClick = async () => {
    if (selectedUser && editedUser) {
      await updateUserDataInFirebase(selectedUser.uid, editedUser);
      setSelectedUser(null);
      setEditedUser(null);
    }
  };
  return (
    <ul className={css.ulListUs}>
      {data.map((user) => (
        <React.Fragment key={user.uid}>
          <li className={css.userList} onClick={() => handleUserClick(user)}>
            <p className={css.wrP}>
              <strong>Імʼя:</strong> {user.displayName}
            </p>

            <p className={css.wrP}>
              <strong>Email:</strong> {user.email}
            </p>
          </li>
          {selectedUser === user && (
            <div className={css.userDetails}>
              <h3>Дані користувача</h3>
              <div className={css.infoWrapAdm}>
                <div className={css.infWr}>
                  <p>
                    <strong>Імʼя:</strong>{" "}
                    {editedUser ? (
                      <input
                        type="text"
                        value={editedUser.displayName}
                        onChange={(e) => handleInputChange(e, "displayName")}
                      />
                    ) : (
                      selectedUser.displayName
                    )}
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    {editedUser ? (
                      <input
                        type="text"
                        value={editedUser.email}
                        onChange={(e) => handleInputChange(e, "email")}
                      />
                    ) : (
                      selectedUser.email
                    )}
                  </p>
                  <p>
                    <strong>Телефон:</strong>{" "}
                    {editedUser ? (
                      <input
                        type="text"
                        value={editedUser.phone || ""}
                        onChange={(e) => handleInputChange(e, "phone")}
                      />
                    ) : (
                      selectedUser.phone
                    )}
                  </p>
                  <p>
                    <strong>Тарифний план:</strong>{" "}
                    {editedUser ? (
                      <input
                        type="text"
                        value={editedUser.category || ""}
                        onChange={(e) => handleInputChange(e, "category")}
                      />
                    ) : (
                      selectedUser.category
                    )}
                  </p>
                  <p>
                    <strong>Знижка:</strong>{" "}
                    {editedUser ? (
                      <input
                        type="text"
                        value={editedUser.discount || ""}
                        onChange={(e) => handleInputChange(e, "discount")}
                      />
                    ) : (
                      selectedUser.discount
                    )}
                  </p>
                  <p>
                    <strong>Бали:</strong>{" "}
                    {editedUser ? (
                      <input
                        type="text"
                        value={editedUser.kraftic || ""}
                        onChange={(e) => handleInputChange(e, "kraftic")}
                      />
                    ) : (
                      selectedUser.kraftic
                    )}
                  </p>
                  <p>
                    <strong>Курси користувача:</strong>{" "}
                    {editedUser &&
                      editedUser.myCourse &&
                      editedUser.myCourse.map((course, index) => (
                        <div key={index}>
                          <input
                            type="text"
                            value={course}
                            onChange={(e) => handleCourseChange(e, index)}
                          />
                        </div>
                      ))}
                    <button onClick={handleNewCourse}>Додати курс</button>
                  </p>
                  <p>
                    <strong>Повідомлення:</strong>{" "}
                    {editedUser &&
                      editedUser.myMessage &&
                      editedUser.myMessage.map((message, index) => (
                        <div key={index}>
                          <input
                            type="text"
                            value={message}
                            onChange={(e) => handleMessageChange(e, index)}
                          />
                        </div>
                      ))}
                    <button onClick={handleNewMessage}>
                      Додати повідомлення
                    </button>
                  </p>
                  {editedUser && (
                    <button onClick={handleSaveClick}>Зберегти</button>
                  )}
                </div>
                <div className={css.workWrap}>
                  <p className={css.pWorkP}>Роботи учня</p>
                  {selectedUser &&
                    selectedUser.photos &&
                    selectedUser.photos.length > 0 &&
                    selectedUser.photos.map((el, index) => (
                      <div key={index} className={css.smallWorkWr}>
                        <p className={css.pWork}>{el.videoName}</p>
                        <img
                          className={css.pictureWork}
                          src={el.photoURL}
                          alt="work"
                        />
                        <p className={css.comPd}>Комантар</p>
                        <textarea
                          value={editedUser?.photos?.[index]?.comment || ""}
                          className={css.areaComent}
                          onChange={(e) =>
                            handleWorkInputChange(e, "comment", index)
                          }
                        ></textarea>
                        <p className={css.comPd}>Оцінка</p>
                        <input
                          type="text"
                          value={editedUser?.photos?.[index]?.graduet || ""}
                          className={css.check}
                          onChange={(e) =>
                            handleWorkInputChange(e, "graduet", index)
                          }
                        />
                        <p className={css.comPd}>Перевірити</p>
                        <input
                          type="checkbox"
                          checked={
                            editedUser?.photos?.[index]?.isCheked || false
                          }
                          className={css.check}
                          onChange={(e) =>
                            handleWorkInputChange(e, "isCheked", index)
                          }
                        />
                        <p className={css.comPd}>Змінити дані</p>
                        <button
                          className={css.butChange}
                          onClick={() => handleWorkSaveClick()}
                        >
                          Змінити
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
