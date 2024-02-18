import React from "react";
import { FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";

import "./navBar.css";

const NavBar = ({ isNavOpen }) => {
  return (
    <nav className={isNavOpen && "Navshownav"}>
      <ul>
        <li>
          <i className="icon">
            <FaHome />
          </i>
          Home
        </li>
        <li>
          <i className="icon">
            <FaUserAlt />
          </i>
          About
        </li>
        <li>
          <i className="icon">
            <FaEnvelope />
          </i>
          Conatct
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
