// import css from "./product.module.css";
// import { useEffect, useRef, useState } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
// import { db, auth } from "../../function/firebase";
// import { updateDoc, arrayUnion, doc } from "firebase/firestore";
// import { AiFillCamera } from "react-icons/ai";

// import withFirebaseCollection from "../HOK/withFirebaseCollection";

// const Product = ({
//   setBigVideo,
//   isOpen,
//   onClose,
//   scrollHeight,
//   val,
//   t,
//   data,
//   autor,
//   selectedUser,
//   setProductKey,
// }) => {
//   const [commentar, setCommentar] = useState("");
//   const [nextLes, setNextLes] = useState("");
//   const [el, setEl] = useState(val);
//   const [videoData, setVideoData] = useState(val);

//   const nextLessons = () => {
//     setEl(nextLes);
//     setVideoData(nextLes);
//   };
//   const addCommentToVideo = async (id, commentar, userId) => {
//     try {
//       // Отримати посилання на документ відео за його `id`
//       const videoDocRef = doc(db, "video", id);

//       // Оновити поле 'comment' в документі, додавши новий коментар до масиву
//       await updateDoc(videoDocRef, {
//         comment: arrayUnion({ comentar: commentar, userId: userId }),
//       });

//       alert("Дякуємо за Ваш коментар невдовзі він зʼявиться на сайті");
//     } catch (error) {
//       console.error("Помилка додавання коментаря до відео:", error);
//     }
//   };
//   useEffect(() => {
//     if (data) {
//       const lesson = data.find((lesson) => {
//         const lessonCounter = parseInt(lesson.counter, 10);
//         const elCounter = parseInt(el.counter, 10);

//         return lessonCounter === elCounter + 1;
//       });

//       if (lesson) {
//         // Знайдено урок, де `counter` більший за `el.counter`
//         console.log("Вибраний урок", lesson);
//         setNextLes(lesson);
//       } else {
//         // Урок не знайдено
//         console.log("Урок не знайдено", el);
//         console.log("Урок не знайдено");
//       }
//     }
//   }, [data, el]);
//   useEffect(() => {}, [el]);
//   const contentStyle = { width: "1000px", borderRadius: "10px" };
//   function findUserByUid(userId, autor) {
//     return autor.find((user) => user.uid === userId);
//   }
//   return (
//     <Popup
//       open={isOpen}
//       onClose={onClose}
//       modal
//       nested
//       {...{
//         contentStyle,
//       }}
//     >
//       {(close) => (
//         <div className={css.modal}>
//           <button className={css.close} onClick={close}>
//             &times;
//           </button>

//           <video className={css.videoStyleMp} controls>
//             <source src={videoData.videoURL} type="video/mp4" />
//             Your browser does not support the video element.
//           </video>
//           <div className={css.videoTextWr}>
//             <div className={css.descWrFirst}>
//               <div className={css.firstP}>
//                 <h1 className={css.h1CourseName}>{el.courseName}</h1>
//                 <p className={css.pDesc}>{el.description}</p>
//               </div>
//               <div className={css.firstP}>
//                 <p className={css.pDesc}>
//                   {t("description.part1.courses.smalFotoDesc")}
//                 </p>
//                 <div className={css.uploadFoto}>
//                   <AiFillCamera className={css.aiFillCamera} />
//                 </div>
//               </div>
//             </div>
//             <div className={css.descWrFirst}>
//               <div className={css.firstP}>
//                 <h2 className={css.h1CourseName}>
//                   {t("description.part1.courses.whotNeed")}
//                 </h2>
//                 <div className={css.whotNeedWrTo}>
//                   {el.whotNeed.map((element, index) => {
//                     return (
//                       <div key={index} className={css.wNedFi}>
//                         {element}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//             <div className={css.descWrFirst}>
//               <div className={css.firstP}>
//                 <h1 className={css.h1CourseName}>
//                   {t("description.part1.courses.coment")}
//                 </h1>
//                 {el.comment.map((koment, index) => {
//                   if (koment !== "") {
//                     const user = findUserByUid(koment.userId, autor);
//                     if (user) {
//                       return (
//                         <div className={css.respWrap}>
//                           <img
//                             className={css.respAutorPic}
//                             src={user.photo}
//                             alt={user.displayName}
//                           />
//                           <p className={css.pDescWrP} key={index}>
//                             {koment.comentar}
//                           </p>
//                         </div>
//                       );
//                     }
//                   }
//                 })}

//                 <p className={css.addCom}>
//                   {t("description.part1.courses.addCom")}
//                 </p>
//                 <textarea
//                   value={commentar}
//                   onChange={(e) => setCommentar(e.target.value)}
//                   className={css.textAreaComment}
//                   placeholder={`${t("description.part1.courses.addCom")}`}
//                 ></textarea>
//                 <button
//                   onClick={() => addCommentToVideo(el.uid, commentar, "1")}
//                   className={css.buttonSend}
//                 >
//                   {t("description.part1.courses.send")}
//                 </button>
//               </div>
//               <div className={css.firstP}>
//                 <p className={css.h1CourseName}>
//                   {t("description.part1.courses.nextLes")}
//                 </p>
//                 {nextLes && (
//                   <p className={css.addComCour} onClick={nextLessons}>
//                     {nextLes.videoName}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </Popup>
//   );
// };
// export default withFirebaseCollection("video")(Product);

import css from "./product.module.css";
import { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { db, auth } from "../../function/firebase";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { AiFillCamera } from "react-icons/ai";
import withFirebaseCollection from "../HOK/withFirebaseCollection";

const Product = ({
  setBigVideo,
  isOpen,
  onClose,
  scrollHeight,
  val,
  t,
  data,
  autor,
  selectedUser,
  setProductKey,
}) => {
  const [commentar, setCommentar] = useState("");
  const [nextLes, setNextLes] = useState("");
  const [el, setEl] = useState(val);
  const [videoData, setVideoData] = useState(val);
  const [pageContent, setPageContent] = useState({
    courseName: val.courseName,
    description: val.description,
  });
  console.log("el before nextLessons:", el, nextLes);
  const nextLessons = () => {
    setEl(nextLes);
    setVideoData(nextLes);
  };
  console.log("el after nextLessons:", el, nextLes);

  const addCommentToVideo = async (id, commentar, userId) => {
    try {
      // Отримати посилання на документ відео за його `id`
      const videoDocRef = doc(db, "video", id);

      // Оновити поле 'comment' в документі, додавши новий коментар до масиву
      await updateDoc(videoDocRef, {
        comment: arrayUnion({ comentar: commentar, userId: userId }),
      });

      alert("Дякуємо за Ваш коментар невдовзі він зʼявиться на сайті");
    } catch (error) {
      console.error("Помилка додавання коментаря до відео:", error);
    }
  };

  useEffect(() => {
    if (data) {
      const lesson = data.find((lesson) => {
        const lessonCounter = parseInt(lesson.counter, 10);
        const elCounter = parseInt(el.counter, 10);

        return lessonCounter === elCounter + 1;
      });

      if (lesson) {
        // Знайдено урок, де `counter` більший за `el.counter`
        console.log("Вибраний урок", lesson);
        setNextLes(lesson);
      } else {
        // Урок не знайдено
        console.log("Урок не знайдено", el);
        console.log("Урок не знайдено");
      }
    }
  }, [data, el]);

  const contentStyle = { width: "1000px", borderRadius: "10px" };

  function findUserByUid(userId, autor) {
    return autor.find((user) => user.uid === userId);
  }

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

          {el && (
            <video className={css.videoStyleMp} controls key={el.uid}>
              <source src={videoData.videoURL} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          )}

          <div className={css.videoTextWr}>
            <div className={css.descWrFirst}>
              <div className={css.firstP}>
                <h1 className={css.h1CourseName}>{el.videoName}</h1>
                <p className={css.pDesc}>{el.description}</p>
              </div>
              <div className={css.firstP}>
                <p className={css.pDesc}>
                  {t("description.part1.courses.smalFotoDesc")}
                </p>
                <div className={css.uploadFoto}>
                  <AiFillCamera className={css.aiFillCamera} />
                </div>
              </div>
            </div>
            <div className={css.descWrFirst}>
              <div className={css.firstP}>
                <h2 className={css.h1CourseName}>
                  {t("description.part1.courses.whotNeed")}
                </h2>
                <div className={css.whotNeedWrTo}>
                  {el.whotNeed.map((element, index) => {
                    return (
                      <div key={index} className={css.wNedFi}>
                        {element}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={css.descWrFirst}>
              <div className={css.firstP}>
                <h1 className={css.h1CourseName}>
                  {t("description.part1.courses.coment")}
                </h1>
                {el.comment.map((koment, index) => {
                  if (koment !== "") {
                    const user = findUserByUid(koment.userId, autor);
                    if (user) {
                      return (
                        <div className={css.respWrap}>
                          <img
                            className={css.respAutorPic}
                            src={user.photo}
                            alt={user.displayName}
                          />
                          <p className={css.pDescWrP} key={index}>
                            {koment.comentar}
                          </p>
                        </div>
                      );
                    }
                  }
                })}

                <p className={css.addCom}>
                  {t("description.part1.courses.addCom")}
                </p>
                <textarea
                  value={commentar}
                  onChange={(e) => setCommentar(e.target.value)}
                  className={css.textAreaComment}
                  placeholder={`${t("description.part1.courses.addCom")}`}
                ></textarea>
                <button
                  onClick={() => addCommentToVideo(el.uid, commentar, "1")}
                  className={css.buttonSend}
                >
                  {t("description.part1.courses.send")}
                </button>
              </div>
              <div className={css.firstP}>
                <p className={css.h1CourseName}>
                  {t("description.part1.courses.nextLes")}
                </p>
                {nextLes && (
                  <p className={css.addComCour} onClick={nextLessons}>
                    {nextLes.videoName}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default withFirebaseCollection("video")(Product);
