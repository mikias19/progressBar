import React from "react";
import { useState } from "react";
import FormField from "../FormField/FormField";
import styles from "./step2.module.css";
const Step2 = ({ formData, onInputChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePaswordTOggle = () => {
    setShowPassword((prevpassword) => !prevpassword);
  };
  return (
    <div>
      <h2>step 2:Accounts</h2>
      <FormField
        type="text"
        label="UserName"
        required
        id="username"
        name="userName"
        value={formData.userName}
        onChange={(e) => onInputChange("userName", e.target.value)}
      />
      <div className={styles.passwordField}>
        <label htmlFor="password" className={styles.labels}>
          Password
        </label>
        <div className={styles.rap}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={(e) => onInputChange("password", e.target.value)}
            className={styles.input}
          />
          <button
            type="button"
            onClick={handlePaswordTOggle}
            className={styles.eyeIcon}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
      </div>

      {/* <FormField
        type="password"
        label="Password"
        required
        id="password"
        name="password"
        value={formData.password}
        onChange={(e) => onInputChange("password", e.target.value)}
      /> */}
    </div>
  );
};

export default Step2;
