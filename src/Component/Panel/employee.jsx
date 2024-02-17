import React, { useState } from "react";
import styles from "./employeeCard.module.css";
const EmployeeCard = ({ name, position, imageUrl, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToogleExpande = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={`${styles.card} ${isExpanded ? styles.expanded : ""}`}
      onClick={handleToogleExpande}
    >
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`Profile of ${name}`} />
      </div>

      <div className={styles.detailsContainer}>
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
      {isExpanded && <div className={styles.expandedDetails}>{details} </div>}
    </div>
  );
};

export default EmployeeCard;
