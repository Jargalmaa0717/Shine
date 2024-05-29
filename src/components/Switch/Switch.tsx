// Switch.tsx

import React, { useState } from "react";
import styles from "./Switch.module.css";

export interface SwitchProps {
  label: string;
  contrast: "light" | "dark";
  size?: "base" | "small";
  initialChecked?: boolean;
  initialError?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch = (props: SwitchProps) => {
  const {
    label,
    contrast,
    size = "base",
    initialChecked = false,
    initialError = false,
    onChange,
  } = props;
  const [checked, setChecked] = useState(initialChecked);
  const [error, setError] = useState(initialError);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div
      className={`${styles["switch-" + size]} ${styles["switch-" + contrast]}`}
    >
      <label
        className={`${styles.switch} ${styles["switch-" + contrast]} ${
          error ? styles.error : ""
        } ${styles["switch-" + size]}`}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className={styles.switchInput}
        />
        <span className={styles.label}>{label}</span>
      </label>
    </div>
  );
};

export default Switch;
