import css from "./product.module.css";
import { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const Product = ({ isOpen, onClose, scrollHeight, el }) => {
  return (
    <Popup open={isOpen} onClose={onClose} modal nested>
      {(close) => (
        <div className={css.modal}>
          <button className={css.close} onClick={close}>
            &times;
          </button>

          <video className={css.videoStyleMp} controls>
            <source src={el.videoURL} type="video/mp4" />
            Your browser does not support the video element.
          </video>
          <div className={css.one}></div>
          <div className={css.two}></div>
          <div className={css.thr}></div>
          <div className={css.four}></div>
        </div>
      )}
    </Popup>
  );
};
export default Product;
