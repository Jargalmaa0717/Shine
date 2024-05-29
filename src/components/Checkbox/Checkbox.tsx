import React, { useState } from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps {
  label: string;
  contrast: "light" | "dark";
  initialChecked?: boolean;
  initialError?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const {
    label,
    contrast,
    initialChecked = false,
    initialError = false,
  } = props;
  const [checked, setChecked] = useState(initialChecked);
  const [error, setError] = useState(initialError);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);

    if (!newChecked) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <label
      className={`${styles["checkbox"]} ${styles["checkbox-" + contrast]} ${error ? styles.error : ""}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={styles.checkboxInput}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
