import React from "react";
import styles from "./formfield.module.css";
const FormField = ({ label, id, type, name, required, value, onChange }) => {
  return (
    <div>
      <form className={styles.formField}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          required={required}
          type={type}
          name={name}
          id={id}
          className={styles.input}
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default FormField;
