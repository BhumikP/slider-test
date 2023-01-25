import React from "react";
import "./style.css";

function SlideControl({ currentIndex, setCurrentIndex, endIndex }) {
  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="slide-control">
      <button onClick={handleRestart} disabled={currentIndex === 0}>
        Restart
      </button>
      <button onClick={handlePrevious} disabled={currentIndex === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentIndex === endIndex}>
        Next
      </button>
    </div>
  );
}

export default SlideControl;
