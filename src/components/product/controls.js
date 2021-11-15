import React from "react";
import '../../assets/css/styles.css'
import lArrow from "../../assets/images/Icon feather-arrow-left-circle.png"
import rArrow from "../../assets/images/Icon feather-arrow-right-circle.png";

export default function controls({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "ctrl-slide next" : "ctrl-slide prev"}
    >
      <img src={direction === "next" ? rArrow : lArrow} />
    </button>
  );
}