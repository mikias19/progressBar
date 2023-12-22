import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./circle.css";
const Circle = ({ isNavOpen, toogleNav }) => {
  const circlesClases = isNavOpen ? "circle show-nav" : "circle";
  return (
    <div className="circle-container">
      <div className={circlesClases}>
        <button onClick={toogleNav} id="close">
          <FaBars />
        </button>
        <button onClick={toogleNav} id="open">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Circle;
