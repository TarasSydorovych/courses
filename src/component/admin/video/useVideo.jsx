import withFirebaseCollection from "../../HOK/withFirebaseCollection";
import css from "../cabiner.module.css";
import { useEffect, useState } from "react";
import { db } from "../../../function/firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const UseVideo = ({ data }) => {
  const [editFields, setEditFields] = useState({});
  const [editWhotNeedFields, setEditWhotNeedFields] = useState({});

  const handleEditFieldChange = (event, uid, fieldName) => {
    const { value } = event.target;
    setEditFields((prevEditFields) => ({
      ...prevEditFields,
      [uid]: {
        ...prevEditFields[uid],
        [fieldName]: value,
      },
    }));
  };

  const handleEditClick = (uid) => {
    setEditFields((prevEditFields) => ({
      ...prevEditFields,
      [uid]: { ...data.find((product) => product.uid === uid) },
    }));
  };

  const handleEditWhotNeedFieldChange = (event, uid, index) => {
    const { value } = event.target;
    setEditWhotNeedFields((prevEditWhotNeedFields) => ({
      ...prevEditWhotNeedFields,
      [uid]: {
        ...prevEditWhotNeedFields[uid],
        [index]: value,
      },
    }));
  };

  const handleUpgradeClick = async (uid) => {
    const updatedFields = editFields[uid];
    const updatedWhotNeedFields = editWhotNeedFields[uid] || {}; // Перевірте, чи існує об'єкт для зміни значень в масиві
    const originalWhotNeed = data.find(
      (product) => product.uid === uid
    ).whotNeed;

    // Створюємо копію оригінального масиву whotNeed, оскільки ми не хочемо змінювати оригінал
    const updatedWhotNeed = [...originalWhotNeed];

    // Оновлюємо відповідні значення в копії масиву whotNeed з updatedWhotNeedFields
    for (const index in updatedWhotNeedFields) {
      if (updatedWhotNeedFields.hasOwnProperty(index)) {
        updatedWhotNeed[index] = updatedWhotNeedFields[index];
      }
    }

    const updatedData = {
      ...updatedFields,
      whotNeed: updatedWhotNeed,
      updatedAt: serverTimestamp(),
    };

    try {
      await updateDoc(doc(collection(db, "video"), uid), updatedData);

      setEditFields((prevEditFields) => {
        delete prevEditFields[uid];
        return { ...prevEditFields };
      });

      setEditWhotNeedFields((prevEditWhotNeedFields) => {
        delete prevEditWhotNeedFields[uid];
        return { ...prevEditWhotNeedFields };
      });

      alert("Урок змінено");
      window.location.reload();
    } catch (error) {
      console.error("Помилка оновлення продукту:", error);
    }
  };

  return (
    <section className={css.useVideo}>
      <div className={css.tableStyle}>
        <h2>Список відео уроків</h2>
        <table className={css.trueTableSt}>
          <thead>
            <tr>
              <th>UID</th>
              <th>Назва відео</th>
              <th>Вікова група</th>
              <th>Під категорія</th>
              <th>Що потрібно для уроку</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.uid}>
                <td>{product.uid}</td>
                <td>
                  {editFields[product.uid] ? (
                    <input
                      type="text"
                      value={editFields[product.uid].videoName}
                      onChange={(e) =>
                        handleEditFieldChange(e, product.uid, "videoName")
                      }
                    />
                  ) : (
                    product.videoName
                  )}
                </td>
                <td>
                  {editFields[product.uid] ? (
                    <input
                      type="text"
                      value={editFields[product.uid].ageGroup}
                      onChange={(e) =>
                        handleEditFieldChange(e, product.uid, "ageGroup")
                      }
                    />
                  ) : (
                    product.ageGroup
                  )}
                </td>
                <td>
                  {editFields[product.uid] ? (
                    <input
                      type="text"
                      value={editFields[product.uid].pidCategoryName}
                      onChange={(e) =>
                        handleEditFieldChange(e, product.uid, "pidCategoryName")
                      }
                    />
                  ) : (
                    product.pidCategoryName
                  )}
                </td>
                <td>
                  {product.whotNeed.map((el, index) => {
                    if (editFields[product.uid]) {
                      // Відображаємо інпут для редагування
                      return (
                        <input
                          key={index}
                          type="text"
                          value={editWhotNeedFields[product.uid]?.[index] ?? el}
                          onChange={(e) =>
                            handleEditWhotNeedFieldChange(e, product.uid, index)
                          }
                        />
                      );
                    } else {
                      // Відображаємо текстове значення
                      return <p key={index}>{el}</p>;
                    }
                  })}
                </td>

                <td>
                  {editFields[product.uid] ? (
                    <button onClick={() => handleUpgradeClick(product.uid)}>
                      Зберегти
                    </button>
                  ) : (
                    <button onClick={() => handleEditClick(product.uid)}>
                      Редагувати
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default withFirebaseCollection("video")(UseVideo);
