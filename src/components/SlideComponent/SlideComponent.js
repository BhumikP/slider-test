import React, { useState } from "react";
import Slide from "../Slide/Slide";
import SlideControl from "../SlideControl/SlideControl";

function SlideComponent({ slideData = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (slideData.length <= 0) return <h1>No data available</h1>;

  return (
    <div>
      <SlideControl
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        endIndex={slideData.length - 1}
      />
      <Slide slide={slideData[currentIndex]} />
    </div>
  );
}

export default SlideComponent;
