import React from "react";
import "./style.css";
function Slide({ slide }) {
  return (
    <div className="slide">
      <h1>{slide.title || ""}</h1>
      <img className="slide-img" src={slide.url} alt={slide.title} />
    </div>
  );
}

export default Slide;
