import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [currentActive, setCurrentActive] = useState(1);

  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    const progress = document.getElementById("progress");
    const actives = document.querySelectorAll(".circle.active");

    const progressBarWidth =
      ((actives.length - 1) / (circles.length - 1)) * 100;
    progress.style.width = `${progressBarWidth}%`;
  }, [currentActive]);

  const handleNext = () => {
    const newValue = Math.min(currentActive + 1, 4); // Assuming 4 circles
    setCurrentActive(newValue);
  };

  const handlePrev = () => {
    const newValue = Math.max(currentActive - 1, 1);
    setCurrentActive(newValue);
  };

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        <div className={`circle ${currentActive >= 1 ? "active" : ""}`}>1</div>
        <div className={`circle ${currentActive >= 2 ? "active" : ""}`}>2</div>
        <div className={`circle ${currentActive >= 3 ? "active" : ""}`}>3</div>
        <div className={`circle ${currentActive >= 4 ? "active" : ""}`}>4</div>
      </div>
      <button
        className="btn"
        id="prev"
        onClick={handlePrev}
        disabled={currentActive === 1}
      >
        Prev
      </button>
      <button
        className="btn"
        id="next"
        onClick={handleNext}
        disabled={currentActive === 4}
      >
        Next
      </button>
    </div>
  );
};

export default ProgressBar;
