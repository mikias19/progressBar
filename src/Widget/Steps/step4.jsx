import React from "react";
import styles from "./step4.module.css";
const Step4 = ({ formData }) => {
  return (
    <div className={styles.confirmation}>
      <h2>Confirmation</h2>
      <div className={styles.text}>
        <strong>First Name </strong>
        <p>{formData.firstName}</p>
      </div>
      <div className={styles.text}>
        <strong>Last Name </strong>
        <p>{formData.lastName}</p>
      </div>
      <div className={styles.text}>
        <strong>User Name </strong>
        <p>{formData.userName}</p>
      </div>
      <div className={styles.text}>
        <strong>password </strong>
        <p>{formData.password}</p>
      </div>
    </div>
  );
};

export default Step4;
