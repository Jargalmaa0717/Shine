import React, { useState } from "react";
import styles from "./Radio.module.css";

export interface RadioProps {
  label: string;
  contrast: "light" | "dark";
  initialChecked?: boolean;
  initialError?: boolean;
}

const Radio = (props: RadioProps) => {
  const {
    label,
    contrast,
    initialChecked = false,
    initialError = false,
  } = props;
  const [checked, setChecked] = useState(initialChecked);
  const [error, setError] = useState(initialError);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label
      className={`${styles.radio} ${styles["radio-" + contrast]} ${
        error ? styles.error : ""
      }`}
    >
      <input
        type="radio"
        checked={checked}
        onChange={handleChange}
        className={styles.radioInput}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Radio;
