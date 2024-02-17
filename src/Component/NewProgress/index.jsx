import React from "react";
import styles from "./index.module.css";
const ProgressIndicator = ({ currentStep, steps }) => {
  const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100 + "%";
  console.log(progressWidth);
  return (
    <div className={styles["progress-container"]}>
      <div className={styles.progress} style={{ width: progressWidth }}></div>
      {steps.map((step, index) => {
        return (
          <div
            key={index}
            className={`${styles.circle} ${
              index < currentStep ? styles.active : null
            }`}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressIndicator;
