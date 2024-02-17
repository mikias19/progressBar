import React from "react";
import styles from "./index.module.css";
const Panel = ({ image, title, isActive, onClick }) => {
  return (
    <div
      className={`${styles.panel} ${isActive ? styles.active : ""}`}
      style={{ backgroundImage: `url('${image}')` }}
      onClick={onClick}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default Panel;
