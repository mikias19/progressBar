import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./circle.css";
const Circle = ({ isNavOpen, handleToggleNav }) => {
  const classLsut = isNavOpen ? "circle shownav" : "circle";
  return (
    <div className="circle-container">
      <div className={classLsut}>
        <button type="button" id="open " onClick={handleToggleNav}>
          <FaBars />
        </button>
        <button type="button" id="close" onClick={handleToggleNav}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Circle;
