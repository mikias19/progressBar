import React from "react";
import Content from "../../Widget/Content/content";
import Circle from "../../Widget/Circle/circle";
import NavBar from "../../Widget/NavBar/navBar";
import "./index.css";

const CircleContaoner = ({ isNavOpen, handleToggleNav }) => {
  const classsList = isNavOpen ? "container shownav" : "container";
  return (
    <div>
      <div className={classsList}>
        <Circle isNavOpen={isNavOpen} handleToggleNav={handleToggleNav} />
        <Content />
      </div>
      <NavBar isNavOpen={isNavOpen} />
    </div>
  );
};

export default CircleContaoner;
