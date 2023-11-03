import { useEffect, useState } from "react";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import css from "./theCourse.module.css";
import Video from "./video";
const VideoWrap = ({ data, selectedCourse, setHowMush, scrollHeight, t }) => {
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    // Фільтруйте дані про відео, коли selectedCourse змінюється
    const filtered = data.filter(
      (video) => video.courseName === selectedCourse.courseName
    );
    setHowMush(filtered.length);
    setFilteredVideos(filtered);
  }, [data, selectedCourse]);
  return (
    <section className={css.videoWrapAll}>
      <div className={css.videoWrapCat}>
        {filteredVideos.length > 0 && (
          <>
            {filteredVideos.map((el, index) => {
              return (
                <Video t={t} el={el} key={index} scrollHeight={scrollHeight} />
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};
export default withFirebaseCollection("video")(VideoWrap);
