import { useEffect, useState } from "react";
import css from "../cabiner.module.css";
import { Link } from "react-router-dom";

export default function CheckWork({
  data,
  handleWorkInputChange,
  handleWorkSaveClick,
  setSelectedUser,
  setEditedUser,
  selectedUser,
  editedUser,
}) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Фільтруємо та обробляємо дані, коли вони змінюються
    const filteredUsers = data.map((user) => {
      const filteredPhotos = (user.photos || []).filter(
        (photo) => photo.isCheked !== "on"
      );
      return { uid: user.uid, userName: user.displayName, filteredPhotos };
    });

    setFilteredData(filteredUsers);
  }, [data]);
  console.log(filteredData);
  return (
    <section className={css.wrapPromo}>
      <p className={css.workNeed}>Роботи які потребують перевірки</p>
      {filteredData &&
        filteredData.map((el) => {
          if (el.filteredPhotos.length > 0) {
            return (
              <div className={css.userBlock} key={el.uid}>
                <div className={css.blockUsInfo}>
                  <p className={css.workNeed}>Учень</p>
                  <p className={css.name}>{el.userName}</p>
                </div>
                <div className={css.wrapLes}>
                  {el.filteredPhotos.map((prod, index) => {
                    return (
                      <div key={index} className={css.smalLes}>
                        <div className={css.descForLWr}>
                          <p className={css.name}>Назва уроку:&nbsp; </p>
                          <a
                            target="_blanck"
                            href={`/video/${prod.videoId}`}
                            className={css.lesName}
                          >
                            {prod.videoName}
                          </a>
                        </div>
                        <p className={css.name}>Робота учня</p>
                        <img src={prod.photoURL} className={css.imageWork} />
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
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
    </section>
  );
}
