// import React, { useState } from "react";
// import withFirebaseCollection from "../../HOK/withFirebaseCollection";
// import css from "../cabiner.module.css";
// import { db } from "../../../function/firebase";
// import { doc, updateDoc } from "firebase/firestore";

// const Users = ({ data }) => {
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [editedUser, setEditedUser] = useState(null);

//   const updateUserDataInFirebase = async (uid, updatedUserData) => {
//     const userDocRef = doc(db, "users", uid);

//     try {
//       await updateDoc(userDocRef, updatedUserData);
//       console.log("User data updated successfully!");
//       window.location.reload();
//     } catch (error) {
//       console.error("Error updating user data:", error.message);
//     }
//   };

//   const handleUserClick = (user) => {
//     if (selectedUser === user) {
//       setSelectedUser(null);
//       setEditedUser(null);
//     } else {
//       setSelectedUser(user);
//       setEditedUser({ ...user });
//     }
//   };

//   const handleInputChange = (e, field) => {
//     setEditedUser({ ...editedUser, [field]: e.target.value });
//   };

//   const handleCourseChange = (e, index) => {
//     const updatedCourses = [...editedUser.myCourse];
//     updatedCourses[index] = e.target.value;
//     setEditedUser((prev) => ({ ...prev, myCourse: updatedCourses }));
//   };

//   const handleSaveClick = async () => {
//     if (selectedUser && editedUser) {
//       await updateUserDataInFirebase(selectedUser.uid, editedUser);
//       setSelectedUser(null);
//       setEditedUser(null);
//     }
//   };

//   return (
//     <div className={css.usersContainer}>
//       <h2>User List</h2>
//       <ul>
//         {data.map((user) => (
//           <React.Fragment key={user.uid}>
//             <li onClick={() => handleUserClick(user)}>
//               <strong>Name:</strong> {user.displayName}, <strong>Email:</strong>{" "}
//               {user.email}
//             </li>
//             {selectedUser === user && (
//               <div className={css.userDetails}>
//                 <h3>User Details</h3>
//                 <div className={css.infoWrapAdm}>
//                   <div className={css.infWr}>
//                     <p>
//                       <strong>Name:</strong>{" "}
//                       {editedUser ? (
//                         <input
//                           type="text"
//                           value={editedUser.displayName}
//                           onChange={(e) => handleInputChange(e, "displayName")}
//                         />
//                       ) : (
//                         selectedUser.displayName
//                       )}
//                     </p>
//                     <p>
//                       <strong>Email:</strong>{" "}
//                       {editedUser ? (
//                         <input
//                           type="text"
//                           value={editedUser.email}
//                           onChange={(e) => handleInputChange(e, "email")}
//                         />
//                       ) : (
//                         selectedUser.email
//                       )}
//                     </p>
//                     <p>
//                       <strong>Phone:</strong>{" "}
//                       {editedUser ? (
//                         <input
//                           type="text"
//                           value={editedUser.phone || ""}
//                           onChange={(e) => handleInputChange(e, "phone")}
//                         />
//                       ) : (
//                         selectedUser.phone
//                       )}
//                     </p>
//                     <p>
//                       <strong>Category:</strong>{" "}
//                       {editedUser ? (
//                         <input
//                           type="text"
//                           value={editedUser.category || ""}
//                           onChange={(e) => handleInputChange(e, "category")}
//                         />
//                       ) : (
//                         selectedUser.category
//                       )}
//                     </p>
//                     <p>
//                       <strong>Discount:</strong>{" "}
//                       {editedUser ? (
//                         <input
//                           type="text"
//                           value={editedUser.discount || ""}
//                           onChange={(e) => handleInputChange(e, "discount")}
//                         />
//                       ) : (
//                         selectedUser.discount
//                       )}
//                     </p>
//                     <p>
//                       <strong>Kraftic:</strong>{" "}
//                       {editedUser ? (
//                         <input
//                           type="text"
//                           value={editedUser.kraftic || ""}
//                           onChange={(e) => handleInputChange(e, "kraftic")}
//                         />
//                       ) : (
//                         selectedUser.kraftic
//                       )}
//                     </p>
//                     <p>
//                       <strong>My Courses:</strong>{" "}
//                       {editedUser
//                         ? editedUser.myCourse.map((course, index) => (
//                             <input
//                               key={index}
//                               type="text"
//                               value={course}
//                               onChange={(e) => handleCourseChange(e, index)}
//                             />
//                           ))
//                         : selectedUser.myCourse &&
//                           selectedUser.myCourse.map((el, index) => (
//                             <span key={index}>
//                               {el}
//                               {index !== selectedUser.myCourse.length - 1
//                                 ? ", "
//                                 : ""}
//                             </span>
//                           ))}
//                     </p>
//                     <p>
//                       <strong>My Messages:</strong>{" "}
//                       {editedUser ? (
//                         <input
//                           type="text"
//                           value={
//                             editedUser.myMessage
//                               ? editedUser.myMessage.join(", ")
//                               : ""
//                           }
//                           onChange={(e) => handleInputChange(e, "myMessage")}
//                         />
//                       ) : (
//                         selectedUser.myMessage &&
//                         selectedUser.myMessage.map((el, index) => (
//                           <span key={index}>
//                             {el}
//                             {index !== selectedUser.myMessage.length - 1
//                               ? ", "
//                               : ""}
//                           </span>
//                         ))
//                       )}
//                     </p>
//                     {editedUser && (
//                       <button onClick={handleSaveClick}>Save</button>
//                     )}
//                   </div>
//                   <div className={css.workWrap}></div>
//                 </div>
//               </div>
//             )}
//           </React.Fragment>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default withFirebaseCollection("users")(Users);
import React, { useState } from "react";
import withFirebaseCollection from "../../HOK/withFirebaseCollection";
import css from "../cabiner.module.css";
import { db } from "../../../function/firebase";
import { doc, updateDoc } from "firebase/firestore";

const Users = ({ data }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);

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
    <div className={css.usersContainer}>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <React.Fragment key={user.uid}>
            <li onClick={() => handleUserClick(user)}>
              <strong>Name:</strong> {user.displayName}, <strong>Email:</strong>{" "}
              {user.email}
            </li>
            {selectedUser === user && (
              <div className={css.userDetails}>
                <h3>User Details</h3>
                <div className={css.infoWrapAdm}>
                  <div className={css.infWr}>
                    <p>
                      <strong>Name:</strong>{" "}
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
                      <strong>Phone:</strong>{" "}
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
                      <strong>Category:</strong>{" "}
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
                      <strong>Discount:</strong>{" "}
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
                      <strong>Kraftic:</strong>{" "}
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
                      <strong>My Courses:</strong>{" "}
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
                      <button onClick={handleNewCourse}>Add Course</button>
                    </p>
                    <p>
                      <strong>My Messages:</strong>{" "}
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
                      <button onClick={handleNewMessage}>Add Message</button>
                    </p>
                    {editedUser && (
                      <button onClick={handleSaveClick}>Save</button>
                    )}
                  </div>
                  <div className={css.workWrap}>
                    <p className={css.pWorkP}>Роботи учня</p>
                    {selectedUser &&
                      selectedUser.photos &&
                      selectedUser.photos.length > 0 &&
                      selectedUser.photos.map((el, index) => {
                        return (
                          <div key={index} className={css.smallWorkWr}>
                            <p className={css.pWork}>{el.videoName}</p>
                            <img
                              className={css.pictureWork}
                              src={el.photoURL}
                              alt="work"
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
export default withFirebaseCollection("users")(Users);
